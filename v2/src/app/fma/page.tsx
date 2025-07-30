"use client";

import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FMAIndex = (data: any) => {
	return [
		{ title: "Cassettes", obj: data.cassettes },
		{ title: "Multitrack Cassettes", obj: data.multis },
		{ title: "CDs", obj: data.cds },
		{ title: "DATs", obj: data.dats },
		{ title: "Videos", obj: data.videos },
	].map(({ title, obj}: any, key: number) => {
		return <div key={key}>
			<LetterHeader title={title} />
			{obj.map((c: any) => {
				return { uri: `/fma/${c.ID}`, text: c.ID, aux: <>{c?.['Artist']?.length ? c?.['Artist'] : c?.['Type']} <span>{c?.['Date']}</span></>, children: c?.['Item Name'] }
			}).map(MakeSimpleURI)}
		</div>
	});
}

const FishyMansionsArchives = ({ params }: { params?: any }) => {
	const { data, isLoading } = useFishyMansionsArchives(null);

	return (<>
		{(data?.error) && <h1>{data?.error}</h1>}
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && (<>
					<Header section="FMA" />
					<LetterHeader title="Fishy Mansions Archives" aux=<> As part of the JBC Documentary, we are striving to digitize all cassettes, CDs demo and live recordings from Pat Fish&apos;s estate. Here is an initial summary of the items being considered.
					</> />
					<main>
						<FMAIndex {...data?.results[0]} />
					</main>
				<Footer />
			</>)}
		</Suspense>
	</>)
}

export default FishyMansionsArchives;
