import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageStrip from '@/components/ImageStrip';
import EmbedMedia from '@/components/EmbedMedia';
import Tag from '@/components/Tag';
import { Attribution, Source, Credit } from '@/components/GenericWeb';
import usePressArticle from '@/lib/usePressArticle';
import { parseDomain, parseCaptionsSourcesEtc, dateDiff, dateDisplay, ts2URI } from '@/lib/utils';
import { AutoLinkPlayer, expand } from '@/lib/defines';

const PressItem = ({ item }: { item: any }) => {
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
					{(article?.source) && <span className="m-1"><b>Source:</b> <Link href={article.source}>{parseDomain(article.source)}</Link></span>}
				</div>
				{types.map((t: string) => (<>
						{(t === 'kit') && <b style={{ margin: '3px' }}>Press Kit/Biography</b>}
						{(t === 'clipping') && <b style={{ margin: '3px' }}>Press Clipping </b>}
						{(t === 'pat') && <b style={{ margin: '3px' }}>The Butcher Writes </b> }
						{(t === 'interview') && (<>
							<b style={{ margin: '3px' }}>Interview w/Conspirator</b>
							{(article?.person) && <>: {article.person.split(';').map(expand)}</>}
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
				{(!!parseInt(article?.dtadded, 10)) && <><b style={{ margin: '3px' }}>Item added:</b> {dateDiff(article.dtadded, '')}</>}
				{(article?.todo) && <b style={{ background: 'red', padding: '5px', marginBottom: '5px', margin: '3px', color: 'white' }}>ATTENTTION NEEDED: {article.todo} </b>}
			</div>
			<p />
		</>)
	}

	const ArticleTitle = ({ article }: any) => {
		return (<center>
			{(article?.title || article?.headline || article?.subhead || article?.summary) && (<>
				{(article?.title) && <><b style={{ fontSize: '1.5em' }}>{article.title}</b><br /></>}
				{(article?.headline) && <><b style={{ fontSize: '1.3em' }}>{article.headline}</b><br /></>}
				{(article?.subhead) && <><b style={{ fontSize: '1.1em' }}>{article.subhead}</b><br /></>}
				{(article?.summary) && <><blockquote style={{ fontSize: '.95em' }} dangerouslySetInnerHTML={{ __html: article.summary }} /><br /></>}
				<p />
				<hr />
				<p />
			</>)}
		</center>)
	}
	const ArticleThumbAndImages = ({ article }: any) => {
		if (article?.thumb || article?.images) {
			return <ImageStrip
				className="drop-shadow-md imageStrip clear_float text-center w-60"
				images={parseCaptionsSourcesEtc(`${article?.thumb}$$${article?.images}`, true)}
			/>
		}
	}
	const ArticleAudio = ({ article }: any) => {
		if (article?.audio) {
			const audio = parseCaptionsSourcesEtc(article?.audio);
			if (audio?.length) {
				return (<>
					{audio?.map(([ file, caption ]: any, key: number) => {
						const [ title, ordinal, version ] = caption?.split('::') || [];
						return <EmbedMedia key={key} data={{ mediaurl: file, title, ordinal, comment: version, author: article?.publication, datetime: article?.dtpublished, autolink: true }} />
					}
					)}
					<p />
				</>)
			}
		}
	}
	const ArticleMedia = ({ article }: any) => {
		if (article?.media) {
			const media = parseCaptionsSourcesEtc(article?.media);
			if (media?.length) {
				return (<>
					<b >Download:</b>{' '}
					{media?.filter(([ file, caption ]: any) => file)?.map(([ file, caption ]: any, key: number) => (<>
						<Link key={key} href={`https://v1.jazzbutcher.com${file}`} className="border">{caption || file}</Link>
					</>)
					)}
					<p />
				</>)
			}
		}
	}
	const ArticleAnnotation = ({ article }: any) => {
		if (article?.annotation) {
			const says = parseCaptionsSourcesEtc(article?.annotation);
			return (says?.length) && (<>
					{says.map(([ body, credit, crediturl, creditdate ]: any, key: number) => <><Tag>{(credit) ? `${credit} Says..` : 'Comments'}</Tag><div className="annotation">{body}</div><Attribution g={credit} u={crediturl} d={creditdate} /></> )}
					<p />
				</>)
			}
	}
	return (item) && <>
		<ArticleInfoBox article={item} />
		<div style={{ margin: '5px' }}>
			<ArticleTitle article={item} />
			<ArticleThumbAndImages article={item} />
			<ArticleMedia article={item} />
			<div dangerouslySetInnerHTML={{ __html: item?.body }} />
			<ArticleAnnotation article={item} />
			<ArticleAudio article={item} />
		</div>
	</>
}

export default PressItem;
