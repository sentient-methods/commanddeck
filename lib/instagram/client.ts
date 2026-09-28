import { InstagramPost, InstagramTokenData } from './types';

const META_OAUTH_URL = 'https://api.instagram.com/oauth/authorize';
const META_TOKEN_URL = 'https://api.instagram.com/oauth/access_token';
const META_GRAPH_URL = 'https://graph.instagram.com';
const GRAPH_VERSION = 'v21.0';

export function getAuthorizationUrl(): string {
  const clientId = process.env.INSTAGRAM_CLIENT_ID;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    throw new Error('INSTAGRAM_CLIENT_ID and INSTAGRAM_REDIRECT_URI must be configured');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'instagram_business_basic',
    response_type: 'code',
  });

  return `${META_OAUTH_URL}?${params.toString()}`;
}

export async function exchangeCodeForToken(code: string): Promise<InstagramTokenData> {
  const clientId = process.env.INSTAGRAM_CLIENT_ID;
  const clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('Meta Instagram API credentials missing in environment');
  }

  // Step 1: Exchange auth code for short-lived token (1 hour)
  const formData = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
    code,
  });

  const shortLivedRes = await fetch(META_TOKEN_URL, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (!shortLivedRes.ok) {
    const errorData = await shortLivedRes.json().catch(() => ({}));
    throw new Error(
      `Failed to exchange authorization code: ${errorData.error_message || errorData.error?.message || shortLivedRes.statusText}`
    );
  }

  const shortLivedData = await shortLivedRes.json();
  const shortToken = shortLivedData.access_token;
  const userId = shortLivedData.user_id;

  // Step 2: Exchange short-lived token for 60-day Long-Lived Token
  const longLivedUrl = `${META_GRAPH_URL}/access_token?grant_type=ig_exchange_token&client_secret=${encodeURIComponent(
    clientSecret
  )}&access_token=${encodeURIComponent(shortToken)}`;

  const longLivedRes = await fetch(longLivedUrl, { method: 'GET' });

  if (!longLivedRes.ok) {
    const errorData = await longLivedRes.json().catch(() => ({}));
    throw new Error(
      `Failed to obtain 60-day token: ${errorData.error?.message || longLivedRes.statusText}`
    );
  }

  const longLivedData = await longLivedRes.json();
  const expiresIn = longLivedData.expires_in || 5184000; // default 60 days in seconds
  const expiresAt = Date.now() + expiresIn * 1000;

  return {
    access_token: longLivedData.access_token,
    token_type: longLivedData.token_type || 'bearer',
    expires_in: expiresIn,
    expires_at: expiresAt,
    account_id: userId,
  };
}

export async function refreshLongLivedToken(currentToken: string): Promise<InstagramTokenData> {
  const refreshUrl = `${META_GRAPH_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(
    currentToken
  )}`;

  const res = await fetch(refreshUrl, { method: 'GET' });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      `Failed to refresh Instagram access token: ${errorData.error?.message || res.statusText}`
    );
  }

  const data = await res.json();
  const expiresIn = data.expires_in || 5184000;
  const expiresAt = Date.now() + expiresIn * 1000;

  return {
    access_token: data.access_token,
    token_type: data.token_type || 'bearer',
    expires_in: expiresIn,
    expires_at: expiresAt,
  };
}

export async function fetchAccountMedia(accessToken: string, limit = 12): Promise<InstagramPost[]> {
  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'thumbnail_url',
    'permalink',
    'timestamp',
    'children{id,media_type,media_url,thumbnail_url}',
  ].join(',');

  const mediaUrl = `${META_GRAPH_URL}/${GRAPH_VERSION}/me/media?fields=${fields}&limit=${limit}&access_token=${encodeURIComponent(
    accessToken
  )}`;

  let retries = 2;
  let delayMs = 1000;

  while (retries >= 0) {
    try {
      const res = await fetch(mediaUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const message = errorData.error?.message || res.statusText;

        // Check for token revocation or authorization failure
        if (res.status === 400 || res.status === 401 || errorData.error?.code === 190) {
          throw new Error(`Instagram token expired or unauthorized: ${message}`);
        }

        // Rate limit reached (OAuthException code 4 or 17)
        if (errorData.error?.code === 4 || errorData.error?.code === 17) {
          throw new Error(`Instagram rate limit encountered: ${message}`);
        }

        if (retries === 0) {
          throw new Error(`Instagram media fetch failed (${res.status}): ${message}`);
        }
      } else {
        const data = await res.json();
        const rawPosts = data.data || [];

        return rawPosts.map((item: any) => {
          const children = item.children?.data?.map((child: any) => ({
            id: child.id,
            media_type: child.media_type,
            media_url: child.media_url,
            thumbnail_url: child.thumbnail_url,
          }));

          return {
            id: item.id,
            caption: item.caption,
            media_type: item.media_type,
            media_url: item.media_url,
            thumbnail_url: item.thumbnail_url,
            permalink: item.permalink,
            timestamp: item.timestamp,
            children: children && children.length > 0 ? children : undefined,
          } as InstagramPost;
        });
      }
    } catch (err: any) {
      if (retries === 0 || err.message?.includes('expired or unauthorized')) {
        throw err;
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      delayMs *= 2;
      retries--;
    }
  }

  return [];
}
