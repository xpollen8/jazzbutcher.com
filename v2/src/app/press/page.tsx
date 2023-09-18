"use client"

import Link from 'next/link';
import { Suspense } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import usePresses from '@/lib/usePresses';

const sections = [
	{ uri: '/press/interviews', text: 'Published Interviews' },
	{ uri: '/press/promos', text: 'Promotional Material' },
	{ uri: '/press/albums', text: 'Album Reviews' },
	{ uri: '/press/albums/pat', text: "Pat's Album Reviews" },
	{ uri: '/press/reviews/gig', text: 'Published Gig Reviews' },
	{ uri: '/press/reviews/fan', text: 'Fan Gig Reviews' },
	{ uri: '/press/reviews/self', text: "Pat's Gig Reviews" },
	{ uri: '/press/reviews/pat', text: "Pat Reviews Other Things" },
	{ uri: '/press/obits', text: 'Rememberences' },
	{ uri: '/press/audio', text: 'Audio Interviews' },
	{ uri: '/press/black_eg', text: 'Black Eg' },
	{ uri: '/press/wilson', text: 'Wilson' },
	{ uri: '/press/sumosonic', text: 'Sumosonic' },
];

const Press = () => {
	const { data, isLoading, error } = usePresses();
	const presses = data?.results;
	return (<>
		<Header section="press" />
			{sections.map(MakeSimpleURI)}
			<Suspense fallback=<>Loading...</> >
				{(!isLoading) && (<>
					{presses.map((p: any, key: number) => {
						return (<div key={key}>
							<Link href={p.url}>{p.type} {p.publication} {p.title} {p.headline}</Link>
						</div>)
					})}
				</>)}
			</Suspense>
		<Footer />
	</>)
}

export default Press;
