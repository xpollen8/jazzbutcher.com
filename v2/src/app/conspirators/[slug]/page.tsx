"use client"

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { expand } from '@/lib/defines';

//import useConspirator from '@/lib/useConspirator';

const Conspirator = ({ params }: { params?: any }) => {
	/*
	const { data, isLoading, error } = useConspirator(params?.slug);

	const conspirator = data?.results[0];

	const tabs = [
			{ label: 'Lyrics', lookup: (song: any) => { return song?.lyrics }, func: Lyrics },
			{ label: 'Found On', lookup: (song: any) => (song?.found_on), func: (song: any, key: number) => FoundOn(song, key, releases) },
			{ label: 'Pat Says', lookup: (song: any) => (song?.pat_says), func: PatSays },
			{ label: 'Others Say', lookup: (song: any) => (song?.others_say), func: OthersSay },
			{ label: 'Tablature', lookup: (song: any) => (song?.tablature), func: Tablature },
			{ label: 'Live Stats', lookup: (song: any) => ({}), func: LiveStats },
			{ label: 'Media', lookup: (song: any) => (song?.media), func: Media },
	];
	*/

	/*
	return (<><Suspense fallback=<>Loading...</> >
		{(!isLoading && !isX) && (() => {
			return (<>
				<Header section="conspirator" title={conspirator?.name} />
				<Tag>{song?.title}</Tag>
				{tabs.filter(t => t.lookup(song))?.map((t: any, key: number) => t?.func(song, key))}
			</>)
		})()}
		<Footer />
	</Suspense></>)
	*/
	return <>
				<Header section="conspirators" title={expand(params?.slug)} />
		Work in progress
		<Footer />
		</>;
}

export default Conspirator;
