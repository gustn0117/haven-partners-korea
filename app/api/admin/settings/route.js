import { NextResponse } from 'next/server';
import { getSettings, updateSettings } from '@/lib/db';

const PASSWORD = '1234';

function checkAuth(request) {
  const pw = request.headers.get('x-admin-password');
  if (pw !== PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

export async function GET() {
  return NextResponse.json(getSettings());
}

export async function PUT(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const body = await request.json();
  updateSettings(body);
  return NextResponse.json({ ok: true });
}
