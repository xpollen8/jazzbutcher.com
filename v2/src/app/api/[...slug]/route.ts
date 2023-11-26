import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import apiData from './apiData';
 
export async function GET(request: NextRequest) {
	const [ j1, j2, route = '', ...rest ] = request.nextUrl.pathname.split('/');
	const suffix = request.nextUrl.searchParams.get('suffix') ?? '';
	const args = rest?.join('/') + suffix;
	return NextResponse.json(await apiData(route, args));
}

export async function POST(request: NextRequest) {
	const [ j1, j2, route = '', ...rest ] = request.nextUrl.pathname.split('/');
	const args = rest?.join('/');
	const formData = await new Response(request?.body).text()
	return NextResponse.json(await apiData(route, args, JSON.parse(formData)));
}
