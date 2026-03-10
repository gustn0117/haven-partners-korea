import { NextResponse } from 'next/server';
import { getWorks, addWork, updateWork, deleteWork } from '@/lib/db';

const PASSWORD = '1234';

function checkAuth(request) {
  const pw = request.headers.get('x-admin-password');
  if (pw !== PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}

export async function GET() {
  return NextResponse.json(getWorks());
}

export async function POST(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const body = await request.json();
  const item = addWork(body);
  return NextResponse.json(item);
}

export async function PUT(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const { id, ...rest } = await request.json();
  const item = updateWork(id, rest);
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

export async function DELETE(request) {
  const authErr = checkAuth(request);
  if (authErr) return authErr;

  const { id } = await request.json();
  deleteWork(id);
  return NextResponse.json({ ok: true });
}
