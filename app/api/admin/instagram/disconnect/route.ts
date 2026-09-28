import { NextRequest, NextResponse } from 'next/server';
import { clearInstagramTokens, saveInstagramState } from '@/lib/instagram/storage';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const adminSecret = process.env.ADMIN_SECRET_KEY;
  const authHeader = req.headers.get('authorization');
  const headerKey = req.headers.get('x-admin-key');
  const queryKey = req.nextUrl.searchParams.get('key');

  const providedKey = authHeader?.replace('Bearer ', '') || headerKey || queryKey;

  if (adminSecret && providedKey !== adminSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    clearInstagramTokens();
    saveInstagramState({
      status: 'DISCONNECTED',
      last_error: null,
      token_expires_at: null,
      token_days_remaining: null,
      is_seeded_data: true,
    });

    return NextResponse.json({ success: true, message: 'Instagram connection removed' });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to disconnect' },
      { status: 500 }
    );
  }
}
