import { NextResponse } from 'next/server';
import apiData from '@/lib/apiData'

const GET = async () => NextResponse.json(await apiData('gigs'));

export { GET };
