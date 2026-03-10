import { NextResponse } from 'next/server';
import { getServiceClient } from '@/lib/supabase';

const PASSWORD = '1234';

function checkAuth(request) {
  const pw = request.headers.get('x-admin-password');
  if (pw !== PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const supabase = getServiceClient();
  const { data, error } = await supabase.from('settings').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const settings = {};
  data.forEach((row) => { settings[row.key] = row.value; });
  return NextResponse.json(settings);
}

export async function PUT(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const body = await request.json();
  const supabase = getServiceClient();

  const updates = Object.entries(body).map(([key, value]) =>
    supabase.from('settings').upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: 'key' })
  );

  await Promise.all(updates);
  return NextResponse.json({ ok: true });
}
