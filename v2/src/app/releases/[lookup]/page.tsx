"use client"

import { Suspense } from 'react';

import Release from '@/components/Release';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useRelease from '@/lib/useRelease';

const Page = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = useRelease(params?.lookup);
	const release = data && data?.results[0];
	return (<Suspense fallback=<>Loading...</> >
		{(!isLoading && release) && (<>
			<Header project={release?.project} section="releases" title={release?.title} />
			<main>
				<Release release={release} />
			</main>
			<Footer />
		</>)}
	</Suspense>
	)
}

export default Page;
