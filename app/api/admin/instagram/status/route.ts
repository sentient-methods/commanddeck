import { NextRequest, NextResponse } from 'next/server';
import { getInstagramState, getInstagramTokens, getInstagramPosts } from '@/lib/instagram/storage';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const adminSecret = process.env.ADMIN_SECRET_KEY;
  const authHeader = req.headers.get('authorization');
  const headerKey = req.headers.get('x-admin-key');
  const queryKey = req.nextUrl.searchParams.get('key');

  const providedKey = authHeader?.replace('Bearer ', '') || headerKey || queryKey;

  if (adminSecret && providedKey !== adminSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const state = getInstagramState();
  const tokens = getInstagramTokens();
  const posts = getInstagramPosts();

  const isConfigured = Boolean(
    process.env.INSTAGRAM_CLIENT_ID &&
    process.env.INSTAGRAM_CLIENT_SECRET &&
    process.env.INSTAGRAM_REDIRECT_URI
  );

  return NextResponse.json({
    state,
    is_configured: isConfigured,
    client_id_configured: Boolean(process.env.INSTAGRAM_CLIENT_ID),
    redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
    has_token: Boolean(tokens?.access_token),
    token_masked: tokens?.access_token ? `${tokens.access_token.slice(0, 8)}...${tokens.access_token.slice(-4)}` : null,
    posts_count: posts.length,
    timestamp: new Date().toISOString(),
  });
}
