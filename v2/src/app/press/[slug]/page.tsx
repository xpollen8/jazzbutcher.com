"use client";

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PressItem from '@/components/PressItem';
import usePressArticle from '@/lib/usePressArticle';
import Loading from '@/components/Loading';

const PressArticle = ({ params }: { params?: any }) => {
	const Params: any = use(params);
	const { data, isLoading } = usePressArticle(Params?.slug);

	const article = data?.results[0];
	const subTitle = article?.publication || (article?.type?.includes('pat') && 'The Butcher Writes') || article?.title;
	const title = (subTitle) ? `${subTitle} - ` : '';

	if (!isLoading && !article) return notFound();

	return <Loading isLoading={isLoading} >
		<Header section="press"
			title={title && `${title} ${article?.dtpublished?.substring(0, 10).replace(/-00/g, '')}`} />
		<main>
			<PressItem item={article} />
		</main>
		<Footer />
	</Loading>
}

export default PressArticle;
