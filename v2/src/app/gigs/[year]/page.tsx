"use client"

import React, { Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchDialog from '@/components/SearchDialog';
import SearchResults from '@/components/SearchResults';
import ResultNavigator from '@/components/ResultNavigator';
import { bannerGigs } from '@/lib/macros';
import useGigs from '@/lib/useGigs';
import { PrevArrow, NextArrow } from '@/components/Arrows';

const Gigs = () => {
	const params = useParams();
	const year = params.year as string;
	const iyear: number = parseInt(year, 10);
	const searchParams = useSearchParams();
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	const queryString = searchParams.toString();
	const { data, isLoading, error } = useGigs({ year, type, query });

	const ExtraNav = ({ year }: { year: number }) => {
		const prevGig = (year > 1982) && <Link href={`/gigs/${year - 1}`}><PrevArrow className="arrows" style={{ marginLeft: '10px' }} /></Link>;
		const nextGig = (year < 2023) && <Link href={`/gigs/${year + 1}`}><NextArrow className="arrows" style={{ marginRight: '30px' }} /></Link>;
		return <> {prevGig} year {nextGig} </>
	}

	return (<>
		<Header section='gigs' title={year} extraNav=<ExtraNav year={iyear} /> >
			<ResultNavigator searchParams={queryString} uriPrefix='/gigs' />
		</Header>
		<SearchDialog />
		{(data?.error) && <h1 style={{ color: 'red' }}>{data?.error}</h1>}
		<Suspense fallback={<>Loading...</>}>
			<SearchResults results={data} banner={() => bannerGigs(data, iyear) } />
		</Suspense>
		<Footer />
	</>)
}

export default Gigs;
