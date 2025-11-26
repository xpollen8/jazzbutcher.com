"use client";

import Link from 'next/link';
import Image from 'next/image';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import useFishyMansionsArchives from '@/lib/useFishyMansionsArchives';
import { ts2URI } from '@/lib/utils';
import Loading from '@/components/Loading';
import Contributions from '@/components/Contributions';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const maybeLink = (obj: any) => {
	if (obj?.['Type']?.includes('Live') && obj?.['Date']?.length === 10 && parseInt(obj?.['Date']?.substring(0, 4)) >= 1981) {
		return <Link href={ts2URI(obj?.['Date'])}>{obj?.['Date']}</Link>;
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
		return <div key={key}>
			<details>
			<summary className="tagClickable"> {title} </summary>
			<br />
			{obj?.map((c: any) => {
				return { uri: `/fma/${c.ID}`, text: c.ID, aux: <>{c?.['Artist']?.length ? c?.['Artist'] : c?.['Type']} {maybeLink(c)}</>, children: c?.['Name'] }
			}).map(MakeSimpleURI)}
			</details>
		</div>
	});
}

const FishyMansionsArchives = ({ params }: { params?: any }) => {
	const { data, isLoading } = useFishyMansionsArchives();

	return <Loading isLoading={isLoading} >
		<Header section="FMA" />
		<main>
			<LetterHeader title="Fishy Mansions Archives" aux=<>
				As part of the <Link href="https://www.gofundme.com/f/help-james-and-tom-preserve-jazz-butchers-legacy">JBC Documentary</Link>, we are striving to digitize all cassettes, CDs demo and live recordings from Pat Fish&apos;s estate. Here is an initial summary of the items being considered.
				<Image className="w-full"  width={250} height={250} src={`https://v1.jazzbutcher.com/static/20241022_FMA1.jpg`} alt="fish mansion archive CDs" />
				</>
			/>
			<FMAIndex items={data?.results[0]} />
			<Contributions label={`Processed Item`} options={{
				all: true,
				filter: { field: 'credit', value: 'FMA', exact: false },
			}} />
		</main>
		<Footer />
	</Loading>
}

export default FishyMansionsArchives;
