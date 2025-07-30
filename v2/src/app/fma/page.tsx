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
	const cassettes = data.cassettes.map((c: any) => { return { uri: `/fma/${c.ID}`, text: c.ID, aux: c?.['Item Name'] } });
	const cds = data.cds.map((c: any) => { return { uri: `/fma/${c.ID}`, text: c.ID, aux: c?.['Item Name'] } });
	const multis = data.multis.map((c: any) => { return { uri: `/fma/${c.ID}`, text: c.ID, aux: c?.['Item Name'] } });
	const dats = data.dats.map((c: any) => { return { uri: `/fma/${c.ID}`, text: c.ID, aux: c?.['Item Name'] } });
	const videos = data.videos.map((c: any) => { return { uri: `/fma/${c.ID}`, text: c.ID, aux: c?.['Item Name'] } });
	return <>
		{!!cassettes?.length && <>
			<LetterHeader title="Cassettes" />
			{cassettes?.map(MakeSimpleURI)}
		</>}
		{!!multis?.length && <>
			<LetterHeader title="Multitrack Cassettes" />
			{multis?.map(MakeSimpleURI)}
		</>}
		{!!cds?.length && <>
			<LetterHeader title="CDs" />
			{cds?.map(MakeSimpleURI)}
		</>}
		{!!dats?.length && <>
			<LetterHeader title="DATs" />
			{dats?.map(MakeSimpleURI)}
		</>}
		{!!videos?.length && <>
			<LetterHeader title="Videos" />
			{videos?.map(MakeSimpleURI)}
		</>}
	</>
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
