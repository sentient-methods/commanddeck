import { NextRequest, NextResponse } from 'next/server';
import { runInstagramSync } from '@/lib/instagram/sync';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const adminSecret = process.env.ADMIN_SECRET_KEY;
  const authHeader = req.headers.get('authorization');
  const headerKey = req.headers.get('x-admin-key');
  const url = new URL(req.url);
  const queryKey = url.searchParams.get('key');

  const providedKey = authHeader?.replace('Bearer ', '') || headerKey || queryKey;

  // Protect endpoint if ADMIN_SECRET_KEY is configured
  if (adminSecret && providedKey !== adminSecret) {
    return NextResponse.json({ error: 'Unauthorized: Invalid administrative key' }, { status: 401 });
  }

  try {
    const result = await runInstagramSync();
    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || 'Synchronization failed' },
      { status: 500 }
    );
  }
}
