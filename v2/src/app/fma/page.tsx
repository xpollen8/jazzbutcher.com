"use client";

import Link from 'next/link';
import { Suspense } from 'react';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';
import { ts2URI } from '@/lib/utils';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const maybeLink = (obj: any) => {
	if (obj?.['Type'] === 'Live' && obj?.['Date']?.length === 10) {
		return <Link href={`/gigs/${ts2URI(obj?.['Date'])}`}>{obj?.['Date']}</Link>;
	} else {
		return obj?.['Date'];
	}
}

const FMAIndex = ({ items }: any) => {
	return [
		{ title: "Cassettes", obj: items?.['Cassettes'] },
		{ title: "Multitrack Cassettes", obj: items?.['Multi Cassettes'] },
		{ title: "CDs", obj: items?.['CDs'] },
		{ title: "DATs", obj: items?.['DATs'] },
		{ title: "Videos", obj: items?.['Videos'] },
	].map(({ title, obj}: any, key: number) => {
		return <div key={key} className="listItem">
			<details>
			<summary className="tagClickable"> {title} </summary>
			<br />
			{obj?.map((c: any) => {
				return { uri: `/fma/${c.ID}`, text: c.ID, aux: <>{c?.['Artist']?.length ? c?.['Artist'] : c?.['Type']} {maybeLink(c)}</>, children: c?.['Item Name'] }
			}).map(MakeSimpleURI)}
			</details>
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
