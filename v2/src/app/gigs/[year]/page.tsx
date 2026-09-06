"use client"

import { useParams, useSearchParams } from 'next/navigation';
import MyLink from '@/components/MyLink';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GigSearchDialog } from '@/components/GigSearch';
import { PrevArrow, NextArrow } from '@/components/Arrows';
import { GigProfile, GigProfileExact } from '@/components/GigProfile';
import GigYear from '@/components/GigYear';

const Gigs = () => {
	const params = useParams();
	const pyear = params.year as string;

	const year: number = parseInt(pyear, 10);
	const searchParams = useSearchParams();
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	// new style: /gigs/1999-09-23 12:00:00
	if (pyear?.length > 4) return GigProfileExact({ datetime: params.year });

	const ExtraNav = ({ year }: { year: number }) => {
		const prevGig = (year > 1982) && <MyLink href={`/gigs/${year - 1}`}><PrevArrow className="arrows" /></MyLink>;
		const nextGig = (year < 2023) && <MyLink href={`/gigs/${year + 1}`}><NextArrow className="arrows" /></MyLink>;
		return <> {prevGig} year {nextGig} </>
	}

	return <>
		<Header section='gigs' title={year} extraNav=<ExtraNav year={year} /> />
		<GigSearchDialog />
		<GigYear args={{ year, type, query }} />
		<Footer />
	</>
}

export default Gigs;
