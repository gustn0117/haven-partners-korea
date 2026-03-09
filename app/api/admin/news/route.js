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
  const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const body = await request.json();
  const supabase = getServiceClient();
  const { data, error } = await supabase.from('news').insert(body).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const body = await request.json();
  const { id, ...rest } = body;
  const supabase = getServiceClient();
  const { data, error } = await supabase.from('news').update(rest).eq('id', id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const { id } = await request.json();
  const supabase = getServiceClient();
  const { error } = await supabase.from('news').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
