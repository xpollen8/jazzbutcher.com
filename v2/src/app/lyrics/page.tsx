"use client"

import Link from 'next/link';

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useLyrics from '@/lib/useLyrics';

const Lyrics = () => {
	const { data, isLoading, error } = useLyrics();

	const lyrics = data?.results;
	return (<>
		<Header section='lyrics' />
		<Suspense fallback=<>Fallback...</> >
		{(!isLoading) && (<>
			{lyrics.map((lyric: any, key: number) => {
				return (<div key={key}>
					Title: <Link href={`/lyrics/${lyric?.href}`}>{lyric?.title}</Link>
				</div>)
			})}
		</>)}
		<Footer />
	</Suspense>
	</>);
}

export default Lyrics;
