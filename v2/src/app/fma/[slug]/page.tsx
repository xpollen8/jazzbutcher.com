"use client";

import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';
import LetterHeader from '@/components/LetterHeader';

const ShowFMA = ({ title, item }: any) => {
	if (!item) return;
	return <>
		<LetterHeader title={title} />
		<ul>
			{Object.keys(item)?.map((k, i): any => {
				return <li key={i}>
				<b>{k}</b> <i>{item[k]}</i>
				</li>
			})}
		</ul>
	</>;
}

const FishyMansionsArchivesItem = (item: any) => {
	return [
		{ title: "Cassettes", item: item?.cassette },
		{ title: "Multitrack Cassettes", item: item?.multi },
		{ title: "CDs", item: item?.cd },
		{ title: "DATs", item: item?.dat },
		{ title: "Videos", item: item?.video },
	].map(ShowFMA);
}

const FishyMansionsArchives = ({ params }: { params?: any }) => {
	const { data, isLoading } = useFishyMansionsArchives(params?.slug);

	const item = data?.results[0];

	if (!isLoading && !item) return notFound();

	return (<>
		{(data?.error) && <h1>{data?.error}</h1>}
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && (<>
					<Header section="FMA" />
					<main>
						<FishyMansionsArchivesItem {...item} />
					</main>
				<Footer />
			</>)}
		</Suspense>
	</>)
}

export default FishyMansionsArchives;
