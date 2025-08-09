"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';
import LetterHeader from '@/components/LetterHeader';
import Loading from '@/components/Loading';

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
					<b>{k}</b> <i>{obj[k]}</i>
					</li>
				})}
			</ul>
		</div>;
	});
}

const FishyMansionsArchives = ({ params }: { params?: any }) => {
	const { data, isLoading } = useFishyMansionsArchives();

	return <>
		<Header section="FMA" />
		<Loading isLoading={isLoading} >
			<main>
				<FishyMansionsArchivesItem item={data?.results[0]} slug={params?.slug} />
			</main>
		</Loading>
		<Footer />
	</>
}

export default FishyMansionsArchives;
