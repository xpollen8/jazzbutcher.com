"use client"

import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GigSearchDialog, GigSearchResults, BannerGigs } from '@/components/GigSearch';
import ResultNavigator from '@/components/ResultNavigator';
import { PrevArrow, NextArrow } from '@/components/Arrows';
import GigProfile from '@/components/GigProfile';
import GigYear from '@/components/GigYear';

const Gigs = () => {
	const params = useParams();
	const pyear = params.year as string;

	const year: number = parseInt(pyear, 10);
	const searchParams = useSearchParams();
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	const queryString = searchParams.toString();
	// new style: /gigs/1999-09-23 12:00:00
	if (pyear?.length > 4) return GigProfile({ params: { datetime: params.year } });

	const ExtraNav = ({ year }: { year: number }) => {
		const prevGig = (year > 1982) && <Link href={`/gigs/${year - 1}`}><PrevArrow className="arrows" /></Link>;
		const nextGig = (year < 2023) && <Link href={`/gigs/${year + 1}`}><NextArrow className="arrows" /></Link>;
		return <> {prevGig} year {nextGig} </>
	}

	return (<>
		<Header section='gigs' title={year} extraNav=<ExtraNav year={year} /> >
			<ResultNavigator searchParams={queryString} uriPrefix='/gigs' />
		</Header>
		<GigSearchDialog />
		<GigYear args={{ year, type, query }} />
		<Footer />
	</>)
}

export default Gigs;
