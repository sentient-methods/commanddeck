export type InstagramMediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';

export interface InstagramMediaChild {
  id: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  thumbnail_url?: string;
  local_media_url?: string;
}

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: InstagramMediaType;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string; // ISO 8601 string
  children?: InstagramMediaChild[];
  // Cached local asset references for resilience against Meta CDN expiration
  local_media_url?: string;
  local_thumbnail_url?: string;
  like_count?: number;
}

export interface InstagramSyncState {
  status: 'CONNECTED' | 'EXPIRING_SOON' | 'EXPIRED' | 'DISCONNECTED' | 'ERROR';
  last_sync_timestamp: string | null;
  last_successful_sync_timestamp: string | null;
  last_error: string | null;
  posts_count: number;
  account_username?: string;
  token_expires_at: string | null;
  token_days_remaining: number | null;
  is_seeded_data?: boolean;
}

export interface InstagramTokenData {
  access_token: string;
  token_type: string;
  expires_in: number; // seconds
  expires_at: number; // unix timestamp in ms
  account_id?: string;
  username?: string;
}

export interface InstagramSyncResult {
  success: boolean;
  posts_synced: number;
  error?: string;
  token_refreshed?: boolean;
  timestamp: string;
}
