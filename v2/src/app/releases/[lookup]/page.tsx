"use client"

import { notFound } from 'next/navigation';
import Release from '@/components/Release';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import useRelease from '@/lib/useRelease';
import Loading from '@/components/Loading';

const Page = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = useRelease(params?.lookup);
	const release = data?.results[0];

	if (!isLoading && !release) return notFound();
	return <>
		<Header project={release?.project} section="releases" title={release?.title} />
		<Loading isLoading={isLoading} >
			<main>
				<Release release={release} />
			</main>
			<Footer />
		</Loading>
	</>
}

export default Page;
