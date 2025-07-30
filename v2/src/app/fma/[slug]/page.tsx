"use client";

import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';
import LetterHeader from '@/components/LetterHeader';

const FishyMansionsArchivesItem = ({ item, slug }: any) => {
	if (!item) return;

	return [
		{ title: "Cassettes", item: item['Cassettes'] },
		{ title: "Multitrack Cassettes", item: item['Multi Cassettes'] },
		{ title: "CDs", item: item['CDs'] },
		{ title: "DATs", item: item['DATs'] },
		{ title: "Videos", item: item['Videos'] },
	].map(({ title, item }: any) => {
		if (!item) return;
		const obj = item?.find((f: any) => f?.ID == slug);
		if (!obj) return;
		return <>
			<LetterHeader title={title} />
			<ul>
				{Object.keys(obj)?.map((k, i): any => {
					return <li key={i}>
					<b>{k}</b> <i>{obj[k]}</i>
					</li>
				})}
			</ul>
		</>;
	});
}

const FishyMansionsArchives = ({ params }: { params?: any }) => {
	const { data, isLoading } = useFishyMansionsArchives();

	const item = data?.results[0];

	return (<>
		{(data?.error) && <h1>{data?.error}</h1>}
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && (<>
					<Header section="FMA" />
					<main>
						<FishyMansionsArchivesItem item={item} slug={params?.slug} />
					</main>
				<Footer />
			</>)}
		</Suspense>
	</>)
}

export default FishyMansionsArchives;
