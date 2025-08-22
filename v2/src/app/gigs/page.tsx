"use client"

import { useSearchParams } from 'next/navigation'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import SectionOptions from '@/components/SectionOptions';
import { GigSearchDialog, GigSearchResults, BannerGigs } from '@/components/GigSearch';
import Loading from '@/components/Loading';
import useGigs from '@/lib/useGigs';

const Gigs = () => {
	const searchParams = useSearchParams();
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	const { data, isLoading, error } = useGigs({ type, query });

	return (<>
		<Header section='gigs' />
		<GigSearchDialog />
		{(error) && <Tag style={{ color: 'red' }}>{error}</Tag>}
		<SectionOptions section="gigs" />
		<Loading isLoading={isLoading} >
			<GigSearchResults results={data} banner={() => BannerGigs(data) }/>
		</Loading>
		<Footer />
	</>)
}

export default Gigs;
