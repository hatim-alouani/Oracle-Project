import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params;
    const pathString = path.join('/');
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    const url = `${BACKEND_URL}/api/${pathString}${queryString ? `?${queryString}` : ''}`;
    
    console.log(`[API Proxy GET] ${url}`);
    
    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error('[API Proxy GET Error]:', error.message);
    return NextResponse.json({ error: 'API request failed', details: error.message }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params;
    const pathString = path.join('/');
    const url = `${BACKEND_URL}/api/${pathString}`;
    
    console.log(`[API Proxy POST] ${url}`);

    let body: string | undefined;
    try {
      const json = await request.json();
      body = JSON.stringify(json);
    } catch {
      // No body sent (e.g. anomaly detection)
    }
    
    const res = await fetch(url, {
      method: 'POST',
      ...(body
        ? { headers: { 'Content-Type': 'application/json' }, body }
        : {}),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error('[API Proxy POST Error]:', error.message);
    return NextResponse.json({ error: 'API request failed', details: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params;
    const pathString = path.join('/');
    const url = `${BACKEND_URL}/api/${pathString}`;
    
    console.log(`[API Proxy PUT] ${url}`);

    let body: string | undefined;
    try {
      const json = await request.json();
      body = JSON.stringify(json);
    } catch {
      // No body sent (e.g. resolve/dismiss actions)
    }
    
    const res = await fetch(url, {
      method: 'PUT',
      ...(body
        ? { headers: { 'Content-Type': 'application/json' }, body }
        : {}),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error('[API Proxy PUT Error]:', error.message);
    return NextResponse.json({ error: 'API request failed', details: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params;
    const pathString = path.join('/');
    const url = `${BACKEND_URL}/api/${pathString}`;
    
    console.log(`[API Proxy DELETE] ${url}`);

    let body: string | undefined;
    try {
      const json = await request.json();
      body = JSON.stringify(json);
    } catch {
      // No body sent
    }
    
    const res = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      ...(body ? { body } : {}),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error('[API Proxy DELETE Error]:', error.message);
    return NextResponse.json({ error: 'API request failed', details: error.message }, { status: 500 });
  }
}
