import { NextResponse } from 'next/server';
import { getInstagramPosts, getInstagramState } from '@/lib/instagram/storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = getInstagramPosts();
    const state = getInstagramState();

    return NextResponse.json(
      {
        posts,
        state: {
          status: state.status,
          last_successful_sync_timestamp: state.last_successful_sync_timestamp,
          posts_count: posts.length,
          account_username: state.account_username || '@commanddeck',
          is_seeded_data: state.is_seeded_data ?? true,
        },
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to retrieve Instagram gallery', details: err.message },
      { status: 500 }
    );
  }
}
