"use client"

import Link from 'next/link';
import { Suspense } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import usePresses from '@/lib/usePresses';

const sections = [
	{ uri: '/press/interviews', text: 'Published Interviews' },
	{ uri: '/press/reviews/gig', text: 'Published Gig Reviews' },
	{ uri: '/press/albums', text: 'Published Album Reviews' },
	{ uri: '/press/obits', text: 'Published Rememberences' },
	{ uri: '/press/promos', text: 'JBC Promotional Material and Bios' },
	{ uri: '/press/reviews/fan', text: "'I Was There' Gig Reviews" },
	{ uri: '/writings/albums', text: "Pat Reviews His Albums" },
	{ uri: '/writings/gigs', text: "Pat Reviews His Gigs" },
	{ uri: '/writings', text: "Pat Reviews Other Things" },
	{ uri: '/press/audio', text: 'Audio Interviews', aux: "radio and online" },
	{ uri: '/press/black_eg', text: 'Press for Black Eg' },
	{ uri: '/press/wilson', text: 'Press for Wilson' },
	{ uri: '/press/sumosonic', text: 'Press for Sumosonic' },
];

const Press = () => {
	const { data, isLoading, error } = usePresses();
	const presses = data?.results?.sort((a: any, b: any) => {
		//console.log("COMP", (new Date(a.dtpublished)).getTime(), b.dtpublished);
		return (new Date(a.dtpublished).getTime()) - (new Date(b.dtpublished).getTime());
	});
	return (<>
		<Header section="press" />
			{sections.map(MakeSimpleURI)}
			<Suspense fallback=<>Loading...</> >
				{(!isLoading) && (<>
					{presses.map((p: any, key: number) => {
						return (<div key={key}>
							<Link href={p.url}>{p.dtpublished}: {p.type}: {p.publication}: {p.title}: {p.headline}</Link>
						</div>)
					})}
				</>)}
			</Suspense>
		<Footer />
	</>)
}

export default Press;
