"use client"

import React, { Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GigSearchDialog, GigSearchResults, BannerGigs } from '@/components/GigSearch';
import ResultNavigator from '@/components/ResultNavigator';
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
		<GigSearchDialog />
		{(data?.error) && <h1 style={{ color: 'red' }}>{data?.error}</h1>}
		<Suspense fallback={<>Loading...</>}>
			<GigSearchResults results={data} banner={() => BannerGigs(data, iyear) } />
		</Suspense>
		<Footer />
	</>)
}

export default Gigs;
