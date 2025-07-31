"use client";

import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FMAIndex = ({ items }: any) => {
	return [
		{ title: "Cassettes", obj: items?.['Cassettes'] },
		{ title: "Multitrack Cassettes", obj: items?.['Multi Cassettes'] },
		{ title: "CDs", obj: items?.['CDs'] },
		{ title: "DATs", obj: items?.['DATs'] },
		{ title: "Videos", obj: items?.['Videos'] },
	].map(({ title, obj}: any, key: number) => {
		return <div key={key} className="listItem">
			<LetterHeader title={title} />
			<br />
			{obj?.map((c: any) => {
				return { uri: `/fma/${c.ID}`, text: c.ID, aux: <>{c?.['Artist']?.length ? c?.['Artist'] : c?.['Type']} <span>{c?.['Date']}</span></>, children: c?.['Item Name'] }
			}).map(MakeSimpleURI)}
		</div>
	});
}

const FishyMansionsArchives = ({ params }: { params?: any }) => {
	const { data, isLoading } = useFishyMansionsArchives();

	return (<>
		{(data?.error) && <h1>{data?.error}</h1>}
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && (<>
					<Header section="FMA" />
					<LetterHeader title="Fishy Mansions Archives" aux=<> As part of the JBC Documentary, we are striving to digitize all cassettes, CDs demo and live recordings from Pat Fish&apos;s estate. Here is an initial summary of the items being considered.
					</> />
					<main>
						<FMAIndex items={data?.results[0]} />
					</main>
				<Footer />
			</>)}
		</Suspense>
	</>)
}

export default FishyMansionsArchives;
