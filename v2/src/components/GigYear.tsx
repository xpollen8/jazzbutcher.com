"use client"

import Loading from '@/components/Loading';
import { BannerGigs } from '@/components/GigSearch';
import { GigSearchResults } from '@/components/GigSearch';
import useGigs from '@/lib/useGigs';

const GigYear = ({ args }: any) => {
	const { year, type, query } = args;

	const { data, isLoading, error } = useGigs({ year, type, query });

	return (<>
		{(data?.error) && <h1 style={{ color: 'red' }}>{data?.error}</h1>}
		{(isLoading) ? <Loading /> :
			<GigSearchResults results={data} banner={() => BannerGigs(data, year) } />
		}
	</>)
}

export default GigYear;
