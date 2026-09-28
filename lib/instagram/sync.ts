import fs from 'fs';
import path from 'path';
import {
  getInstagramTokens,
  saveInstagramTokens,
  getInstagramPosts,
  saveInstagramPosts,
  getInstagramState,
  saveInstagramState,
  SEED_POSTS,
} from './storage';
import { refreshLongLivedToken, fetchAccountMedia } from './client';
import { InstagramPost, InstagramSyncResult } from './types';

const CACHE_DIR = path.join(process.cwd(), 'public', 'cache', 'instagram');

function ensureCacheDir(): void {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

// Download remote media asset to local cache for 100% resilience against Meta CDN expiry
async function cacheMediaAsset(url: string, filename: string): Promise<string | undefined> {
  ensureCacheDir();
  const filePath = path.join(CACHE_DIR, filename);
  const publicPath = `/cache/instagram/${filename}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return undefined;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, buffer);
    return publicPath;
  } catch (err) {
    console.warn(`Failed to cache Instagram media ${filename}:`, err);
    return undefined;
  }
}

export async function runInstagramSync(): Promise<InstagramSyncResult> {
  const timestamp = new Date().toISOString();
  const tokens = getInstagramTokens();

  if (!tokens || !tokens.access_token) {
    const currentState = getInstagramState();
    // In unconfigured staging mode, use seed posts
    saveInstagramState({
      status: 'DISCONNECTED',
      last_sync_timestamp: timestamp,
      last_error: 'No Instagram access token configured. Using verified archive seed posts.',
      posts_count: getInstagramPosts().length,
      is_seeded_data: true,
    });

    return {
      success: true,
      posts_synced: getInstagramPosts().length,
      timestamp,
      error: 'Running in seed archive mode (No access token configured)',
    };
  }

  try {
    let currentToken = tokens.access_token;
    let tokenRefreshed = false;

    // Check if token expires within 15 days (15 * 86400 * 1000 ms)
    const msRemaining = tokens.expires_at - Date.now();
    const daysRemaining = Math.max(0, Math.floor(msRemaining / (1000 * 60 * 60 * 24)));

    if (daysRemaining <= 15 && daysRemaining > 0) {
      try {
        const refreshed = await refreshLongLivedToken(currentToken);
        saveInstagramTokens({
          ...tokens,
          access_token: refreshed.access_token,
          expires_in: refreshed.expires_in,
          expires_at: refreshed.expires_at,
        });
        currentToken = refreshed.access_token;
        tokenRefreshed = true;
      } catch (refreshErr: any) {
        console.warn('Token auto-refresh warning:', refreshErr.message);
      }
    }

    // Fetch latest 12 posts from Meta
    const remotePosts = await fetchAccountMedia(currentToken, 12);

    if (remotePosts && remotePosts.length > 0) {
      // Process media caching in parallel
      const enrichedPosts: InstagramPost[] = await Promise.all(
        remotePosts.map(async (post) => {
          let localMediaUrl: string | undefined;
          let localThumbnailUrl: string | undefined;

          // Cache main media
          if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
            const ext = post.media_url.includes('.webp') ? 'webp' : 'jpg';
            localMediaUrl = await cacheMediaAsset(post.media_url, `${post.id}.${ext}`);
          } else if (post.media_type === 'VIDEO') {
            if (post.thumbnail_url) {
              localThumbnailUrl = await cacheMediaAsset(post.thumbnail_url, `${post.id}_thumb.jpg`);
            }
          }

          // Cache carousel children
          let enrichedChildren = post.children;
          if (post.children && post.children.length > 0) {
            enrichedChildren = await Promise.all(
              post.children.map(async (child) => {
                const childExt = child.media_url.includes('.webp') ? 'webp' : 'jpg';
                const localChildUrl = await cacheMediaAsset(child.media_url, `${child.id}.${childExt}`);
                return {
                  ...child,
                  local_media_url: localChildUrl,
                };
              })
            );
          }

          return {
            ...post,
            local_media_url: localMediaUrl || post.media_url,
            local_thumbnail_url: localThumbnailUrl || post.thumbnail_url,
            children: enrichedChildren,
          };
        })
      );

      // Save to persistent posts storage
      saveInstagramPosts(enrichedPosts);

      const updatedRemaining = Math.max(0, Math.floor((tokens.expires_at - Date.now()) / (1000 * 60 * 60 * 24)));
      saveInstagramState({
        status: updatedRemaining <= 5 ? 'EXPIRING_SOON' : 'CONNECTED',
        last_sync_timestamp: timestamp,
        last_successful_sync_timestamp: timestamp,
        last_error: null,
        posts_count: enrichedPosts.length,
        token_expires_at: new Date(tokens.expires_at).toISOString(),
        token_days_remaining: updatedRemaining,
        is_seeded_data: false,
      });

      return {
        success: true,
        posts_synced: enrichedPosts.length,
        token_refreshed: tokenRefreshed,
        timestamp,
      };
    } else {
      // Empty response from API; preserve existing cache
      saveInstagramState({
        last_sync_timestamp: timestamp,
        last_error: 'Received empty posts array from Instagram. Preserved cached gallery.',
      });

      return {
        success: true,
        posts_synced: getInstagramPosts().length,
        timestamp,
      };
    }
  } catch (err: any) {
    const isAuthError = err.message?.includes('expired or unauthorized');
    saveInstagramState({
      status: isAuthError ? 'EXPIRED' : 'ERROR',
      last_sync_timestamp: timestamp,
      last_error: err.message || 'Unknown sync error',
    });

    return {
      success: false,
      posts_synced: getInstagramPosts().length,
      error: err.message,
      timestamp,
    };
  }
}
