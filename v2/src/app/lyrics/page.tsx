"use client"

import Link from 'next/link';

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import useLyrics from '@/lib/useLyrics';

const Lyrics = () => {
	const { data, isLoading, error } = useLyrics();

	const lyrics = data?.results;
	let chr: string;
	return (<>
		<Header section='lyrics' />
		<Suspense fallback=<>Fallback...</> >
		{(!isLoading) && (<>
			{lyrics.map((lyric: any, key: number) => {
				let banner;
				if (lyric?.title?.substr(0, 1) !== chr) {
					chr = lyric?.title?.substr(0, 1);
					banner = <Tag>{chr}</Tag>;
				}
				return (<div key={key}>
					{banner}
					<Link className="ml-10" href={`/lyrics/${lyric?.href}`}>{lyric?.title}</Link> <span className="smalltext">{lyric?.tablature ? '(Tablature)' : ''} {lyric?.annotated ? '(Annotated)' : ''} {lyric?.is_instrumental ? '(Instrumental)' : ''}</span>
				</div>)
			})}
		</>)}
		<Footer />
	</Suspense>
	</>);
}

export default Lyrics;
