"use client"

import { Suspense } from 'react';
import { BannerGigs } from '@/components/GigSearch';
import { GigSearchResults } from '@/components/GigSearch';
import useGigs from '@/lib/useGigs';

const GigYear = ({ args }: any) => {
	const { year, type, query } = args;

	const { data, isLoading, error } = useGigs({ year, type, query });

	return (<>
		{(data?.error) && <h1 style={{ color: 'red' }}>{data?.error}</h1>}
		<Suspense fallback={<>Loading...</>}>
			<GigSearchResults results={data} banner={() => BannerGigs(data, year) } />
		</Suspense>
	</>)
}

export default GigYear;
