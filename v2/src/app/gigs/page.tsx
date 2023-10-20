"use client"

import { useSearchParams } from 'next/navigation'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionOptions from '@/components/SectionOptions';
import { GigSearchDialog, GigSearchResults, BannerGigs } from '@/components/GigSearch';
import useGigs from '@/lib/useGigs';

const Gigs = () => {
	const searchParams = useSearchParams();
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	const { data, isLoading, error } = useGigs({ type, query });

	return (<>
		<Header section='gigs' />
		<GigSearchDialog />
		{(data?.error) && <h1 style={{ color: 'red' }}>{data.error}</h1>}
		<SectionOptions section="gigs" />
		{(isLoading) ?
			<>Loading..</>
			: <GigSearchResults results={data} banner={() => BannerGigs(data) }/>
		}
		<Footer />
	</>)
}

export default Gigs;
