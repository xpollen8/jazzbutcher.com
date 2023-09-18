import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import apiData from './apiData';
 
export async function GET(request: NextRequest) {
	//console.log("API", request.url);
  const { pathname } = new URL(request.url);
	const [ j1, j2, route, ...rest ] = request.nextUrl.pathname.split('/');
	const args = rest?.join('/');
	//console.log("CALLING", { route, args });
	return NextResponse.json(await apiData(route, args));
}
