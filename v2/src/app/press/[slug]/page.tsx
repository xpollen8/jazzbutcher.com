"use client";

import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PressItem from '@/components/PressItem';
import usePressArticle from '@/lib/usePressArticle';

const PressArticle = ({ params }: { params?: any }) => {
	const { data, isLoading } = usePressArticle(params?.slug);

	const article = data?.results[0];
	const subTitle = article?.publication || (article?.type?.includes('pat') && 'The Butcher Writes') || article?.title;
	const title = (subTitle) ? `${subTitle} - ` : '';

	if (!isLoading && !article) return notFound();

	return (<>
		{(data?.error) && <h1>{data?.error}</h1>}
		<Suspense fallback=<>Loading...</> >
			{(!isLoading) && (<>
					<Header section="press"
						title={title && `${title} ${article?.dtpublished?.substr(0, 10).replace(/-00/g, '')}`} />
					<main>
						<PressItem item={article} />
					</main>
				<Footer />
			</>)}
		</Suspense>
	</>)
}

export default PressArticle;
