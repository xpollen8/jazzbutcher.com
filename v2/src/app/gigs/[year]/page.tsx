"use client"

import { useParams, useSearchParams } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchDialog from '@/components/SearchDialog';
import SearchResults from '@/components/SearchResults';
import ResultNavigator from '@/components/ResultNavigator';
import { bannerGigs } from '@/lib/macros';
import useGigs from '@/components/useGigs';

const Gigs = () => {
	const params = useParams();
	const year = params.year as string;
	const iyear: number = parseInt(year, 10);
	const searchParams = useSearchParams();
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	const queryString = searchParams.toString();
	console.log("CALLING", { year, type, query });
	const { data, isLoading, error } = useGigs({ year, type, query });

	const prevYear = (iyear > 1982) ? { datetime: `${iyear - 1}-00-00` } : undefined;
	const nextYear = (iyear < 2023) ? { datetime: `${iyear + 1}-00-00` } : undefined;
	const extraNav = <ResultNavigator searchParams={queryString} uriPrefix='/gigs' navPrev={prevYear} navNext={nextYear} />;

	return (<>
		<Header section='gigs' title={year} extraNav={extraNav} />
		<SearchDialog />
		{(data?.error) && <h1 style={{ color: 'red' }}>{data?.error}</h1>}
		{(isLoading) ?
			<>Loading..</>
			:
			<>
			<SearchResults results={data} banner={() => bannerGigs(data, iyear) } />
			</>
		}
		<Footer />
	</>)
}

export default Gigs;
