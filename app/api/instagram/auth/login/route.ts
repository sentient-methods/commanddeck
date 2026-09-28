import { NextResponse } from 'next/server';
import { getAuthorizationUrl } from '@/lib/instagram/client';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const authUrl = getAuthorizationUrl();
    return NextResponse.redirect(authUrl);
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to initiate Instagram OAuth flow', message: err.message },
      { status: 500 }
    );
  }
}
