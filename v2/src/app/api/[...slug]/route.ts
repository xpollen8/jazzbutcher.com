import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import apiData from '@/lib/apiData';
 
export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
	const [ j1, j2, route, ...rest ] = request.nextUrl.pathname.split('/');
	const args = rest?.join('/');
	return NextResponse.json(await apiData(route, args));
}
