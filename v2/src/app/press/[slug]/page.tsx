"use client";

import { Suspense } from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PressItem from '@/components/PressItem';
import usePressArticle from '@/lib/usePressArticle';

const PressArticle = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = usePressArticle(params?.slug);

	const article = data?.results[0];
	const subTitle = article?.publication || (article?.type?.includes('pat') && 'The Butcher Writes') || article?.title;
	const title = (subTitle) ? `${subTitle} - ` : '';

	return (<>
		<Suspense fallback=<>Loading...</> >
			{(!isLoading && article) && (<>
					<Header section="press" title={`${title} ${article.dtpublished.substr(0, 10).replace(/-00/g, '-01')}`} />
					<main>
						<PressItem item={article} />
					</main>
				<Footer />
			</>)}
		</Suspense>
	</>)
}

export default PressArticle;
