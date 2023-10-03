"use client"

import { useSearchParams } from 'next/navigation'
import { pat, max, owen, eg, at } from '@/lib/defines';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchDialog from '@/components/SearchDialog';
import SearchResults from '@/components/SearchResults';
import useGigs from '@/lib/useGigs';
import { bannerGigs } from '@/lib/macros';

const Gigs = () => {
	const searchParams = useSearchParams();
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	const { data, isLoading, error } = useGigs({ type, query });

	return (<>
		<Header section='gigs' />
		<SearchDialog />
		{(data?.error) && <h1 style={{ color: 'red' }}>{data.error}</h1>}
		{(isLoading) ?
			<>Loading..</>
			: <SearchResults results={data} banner={() => bannerGigs(data) }/>
		}
		<Footer />
	</>)
}

export default Gigs;
