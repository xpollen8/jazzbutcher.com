"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';
import LetterHeader from '@/components/LetterHeader';
import Loading from '@/components/Loading';

const showThing = (thing?: any) => {
	if (typeof thing === 'string' && thing?.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/)) {
		return <Link href={`/gigs/${thing}`}>{thing}</Link>
	} else if (typeof thing === 'string' && thing?.includes('.jpg')) {
		return thing.split(',').map((t: string, key: number) => {
			const image = `/images/FM/${t}`;
			return <Link key={key} href={image}><Image src={image} alt="pic" width={250} height={250} /></Link>
		});
	} else {
		return <i>{thing}</i>
	}
}

const FishyMansionsArchivesItem = ({ item, slug }: any) => {
	if (!item) return;

	return [
		{ title: "Cassettes", item: item['Cassettes'] },
		{ title: "Multitrack Cassettes", item: item['Multi Cassettes'] },
		{ title: "CDs", item: item['CDs'] },
		{ title: "DATs", item: item['DATs'] },
		{ title: "Videos", item: item['Videos'] },
	].map(({ title, item }: any, key: number) => {
		const obj = item?.find((f: any) => f?.ID == slug);
		if (!obj) return;
		return <div key={key}>
			<LetterHeader title={title} />
			<ul className="listItem">
				{Object.keys(obj)?.map((k, i): any => {
					return <li key={i}>
					<b>{k}</b> {showThing(obj[k])}
					</li>
				})}
			</ul>
		</div>;
	});
}

const FishyMansionsArchives = ({ params }: { params?: any }) => {
	const { data, isLoading } = useFishyMansionsArchives();

	return <>
		<Header section="FMA" title={params?.slug} />
		<Loading isLoading={isLoading} >
			<main>
				<FishyMansionsArchivesItem item={data?.results[0]} slug={params?.slug} />
			</main>
		</Loading>
		<Footer />
	</>
}

export default FishyMansionsArchives;
