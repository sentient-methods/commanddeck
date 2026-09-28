import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForToken } from '@/lib/instagram/client';
import { saveInstagramTokens, saveInstagramState } from '@/lib/instagram/storage';
import { runInstagramSync } from '@/lib/instagram/sync';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  const errorDescription = url.searchParams.get('error_description');

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3008';

  if (error || !code) {
    const errorMsg = errorDescription || error || 'Authorization was cancelled or failed';
    saveInstagramState({
      status: 'ERROR',
      last_error: `OAuth Callback Error: ${errorMsg}`,
    });
    return NextResponse.redirect(`${siteUrl}/admin/instagram?error=${encodeURIComponent(errorMsg)}`);
  }

  try {
    // Exchange code for short-lived then 60-day long-lived token
    const tokenData = await exchangeCodeForToken(code);
    saveInstagramTokens(tokenData);

    const daysRemaining = Math.max(0, Math.floor((tokenData.expires_at - Date.now()) / (1000 * 60 * 60 * 24)));
    saveInstagramState({
      status: 'CONNECTED',
      last_error: null,
      token_expires_at: new Date(tokenData.expires_at).toISOString(),
      token_days_remaining: daysRemaining,
      is_seeded_data: false,
    });

    // Run first synchronization immediately
    await runInstagramSync();

    return NextResponse.redirect(`${siteUrl}/admin/instagram?status=connected`);
  } catch (err: any) {
    console.error('OAuth callback failure:', err);
    saveInstagramState({
      status: 'ERROR',
      last_error: err.message || 'Token exchange failed',
    });
    return NextResponse.redirect(
      `${siteUrl}/admin/instagram?error=${encodeURIComponent(err.message || 'Token exchange failed')}`
    );
  }
}
