"use client";

import { Suspense } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { Source, Credit } from '@/components/GenericWeb';
import usePressArticle from '@/lib/usePressArticle';
import { dateDiff, dateDisplay, ts2URI } from '@/lib/macros';
import { AutoLinkPlayer, expand } from '@/lib/defines';

const PressArticle = ({ params }: { params?: any }) => {
	const { data, isLoading, error } = usePressArticle(params?.slug);

	const article = data?.results[0];

	const ArticleInfoBox = ({ article }: any) => {
		const types = article?.type?.split(',');	// pat,gig,wilson (etc);
		const projects = ['wilson','sumo','eg'];
		const project = (projects.filter((pro: string) => types?.includes(pro)) || [])[0] || '';
		return (<>
			<div className={`gig_${project}`} />
			<div className="listItem" style={{ border: '1px solid', background: '#eeffee' }}>
				<div style={{ margin: '3px', marginBottom: '10px' }}>
					{(article?.publication) && <><b>Published:</b> {article.publication}</>}
					{(article?.location) && <>({article.location})</>} {dateDisplay(article.dtpublished, '')}
					{(article?.credit) && <Credit g={article?.credit} u={article?.crediturl} />}
				</div>
				{types.map((t: string) => (<>
						{(t === 'kit') && <b style={{ margin: '3px' }}>Press Kit/Biography</b>}
						{(t === 'clipping') && <b style={{ margin: '3px' }}>Press Clipping </b>}
						{(t === 'pat') && <b style={{ margin: '3px' }}>The Butcher Writes </b> }
						{(t === 'interview') && (<>
							<b style={{ margin: '3px' }}>Interview w/Conspirator</b>
							{(article?.person) && <>: {expand(article.person)}</>}
						</>)}
						{(t === 'gig' && article.dtgig) && (<>
							<b style={{ margin: '3px' }}>The associated Gig:</b>
								<Link href={`/gigs/${ts2URI(article.dtgig)}`}>
									{article.dtgig.substr(0, 10)}
								</Link>
						</>)}
						{(t === 'album' && article?.album) && (<>
							<b style={{ margin: '3px' }}>Album Review:</b> {expand(article?.album)}
						</>)}
				</>))}
				{(!!parseInt(article?.dtadded, 10)) && <><b style={{ margin: '3px' }}>Item added:</b> {dateDiff(article.dtadded)}</>}
				{(article?.todo) && <b style={{ background: 'red', padding: '5px', marginBottom: '5px', margin: '3px', color: 'white' }}>ATTENTTION NEEDED: {article.todo} </b>}
			</div>
			<p />
		</>)
	}

	const ArticleTitle = ({ article }: any) => {
		return (<center>
			{(article?.title || article?.headline || article?.subhead || article?.summary) && (<>
				{(article?.title) && <><b style={{ fontSize: '2em' }}>{article.title}</b><br /></>}
				{(article?.headline) && <><b style={{ fontSize: '1.5em' }}>{article.headline}</b><br /></>}
				{(article?.subhead) && <><b style={{ fontSize: '1.25em' }}>{article.subhead}</b><br /></>}
				{(article?.summary) && <><b style={{ fontSize: '.95em' }}>{article.summary}</b><br /></>}
				<p />
				<hr />
				<p />
			</>)}
		</center>)
	}
	const parseThumbAndImages = (str?: string) => {
		if (!str) return;
		const chunks = str.split('$$');
		const images = chunks?.filter((ch: any) => ch.length)?.map((ch: any) => {
			const [ image, source, sourceurl, sourcedate, caption ] = ch.split(';;');
			return { image, source, sourceurl, sourcedate, caption };
		});
		return images;
	}
	const ArticleThumbAndImages = ({ article }: any) => {
		if (article?.thumb || article?.images) {
			const images = parseThumbAndImages(`${article?.thumb}$$${article?.images}`);
			if (images?.length) {
				return (<div style={{ width: '250px', float: 'right', margin: '20px', border: '1px solid #666', background: 'white', padding: '5px', paddingBottom: '0px' }}>
					{images?.map(({ image, source, sourceurl, sourcedate, caption }: any, key: number) =>
						<Link key={key} href={`https://jazzbutcher.com${image}.jpg`}>
							<div className="m-2" style={{ maxWidth: '250px' }}>
								<Image
									alt={caption || 'album image'}
									width={250} height={250}
									src={`https://jazzbutcher.com${image}_250.jpg`}
								/>
								{(caption) && <><i>{caption}</i><br/></>}
								{(source) && <Source g={source} u={sourceurl} d={sourcedate} />}
							</div>
						</Link>
					)}
				</div>)
			}
		}
		const images = parseThumbAndImages(`${article?.thumb}\$\$${article?.images}`);
	}
	const parseMedia = (str?: string) => {
		if (!str) return;
		const chunks = str.split('$$');
		const media = chunks?.filter((ch: any) => ch.length)?.map((ch: any) => {
			const [ file, caption ] = ch.split(';;');
			return { file, caption };
		});
		return media;
	}
	const ArticleMedia = ({ article }: any) => {
		if (article?.media) {
			const media = parseMedia(article?.media);
			if (media?.length) {
				return (<>
					<b >Download:</b>{' '}
					{media?.filter((props: any) => props?.file)?.map(({ file, caption }: any, key: number) => (<>
						<Link key={key} href={`https://jazzbutcher.com${file}`} className="border">{caption}</Link>
					</>)
					)}
					<p />
				</>)
			}
		}
	}

	return (<>
		<Suspense fallback=<>Loading...</> >
			{(!isLoading && article) && (<>
				<Header section="press" title=<>{article?.publication} - {article.dtpublished.substr(0, 10).replace(/-00/g, '-01')}</> />
					<ArticleInfoBox article={article} />
					<div style={{ margin: '5px' }}>
						<ArticleTitle article={article} />
						<ArticleMedia article={article} />
						<ArticleThumbAndImages article={article} />
						<div dangerouslySetInnerHTML={{ __html: article?.body }} />
					</div>
				<Footer />
			</>)}
		</Suspense>
	</>)
}

export default PressArticle;
