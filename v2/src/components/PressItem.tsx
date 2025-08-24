import Link from 'next/link';
import Image from 'next/image';

import ImageStrip from '@/components/ImageStrip';
import EmbedMedia from '@/components/EmbedMedia';
import Tag from '@/components/Tag';
import { Attribution, Source, Credit } from '@/components/GenericWeb';
import { parseDomain, parseCaptionsSourcesEtc, dateDiff, dateDisplay, ts2URI } from '@/lib/utils';
import { AutoLinkPlayer, expand } from '@/lib/defines';

const PressItem = ({ item }: { item: any }) => {
	const ArticleInfoBox = ({ article }: any) => {
		const types = article?.type?.split(',');	// pat,gig,wilson (etc);
		const projects = ['wilson','sumo','eg'];
		const project = (projects.filter((pro: string) => types?.includes(pro)) || [])[0] || '';
		const doItem = (label: string, value?: string | React.ReactNode) => {
			return <span className="break-keep outline outline-1 outline-cyan-500"> <b>{label}</b> {value} </span>
		}
		return (<>
			<div className={`gig_${project}`} />
			<div className="listItem" style={{ border: '1px solid', background: '#eeffee' }}>
				<div className="flex flex-wrap gap-3">
					{(article?.publication) && doItem('Publication', <Attribution g={article?.publication} u={`/contributions/${article?.publication}` || article?.crediturl} />)}
					{(article?.location) && doItem('Location', article.location)}
					{(article?.dtpublished) && doItem('Published', dateDisplay(article.dtpublished, ''))}
					{(article?.credit) && doItem('Author', <Attribution g={article?.credit} u={`/contributions/${article?.credit}` || article?.crediturl} />)}
					{(article?.source) && doItem('Source', <Link href={article.source}>{parseDomain(article.source)}</Link>)}
					{types.map((t: string, key: number) => (<div key={key}>
							{(t === 'kit') && doItem('Category', 'Press Kit/Biography')}
							{(t === 'clipping') && doItem('Category', 'Press Clipping')}
							{(t === 'pat') && doItem('Category', 'The Butcher Writes')}
							{(t === 'interview') && doItem('Interview w/Conspirator', article.person.split(';').map(expand))}
							{((t === 'gig' || t === 'preshow') && article.dtgig) && doItem('The associated Gig', <Link href={ts2URI(article.dtgig)}>{article.dtgig.substr(0, 10)}</Link>)}
							{(t === 'album' && article?.album) && doItem('Album Review', expand(article.album))}
					</div>))}
					{(!!parseInt(article?.dtadded, 10)) && doItem('Item added', dateDiff(article.dtadded, ''))}
					{(article?.todo) && doItem('ATTENTION NEEDED', article.todo)}
				</div>
			</div>
		</>)
	}

	const ArticleTitle = ({ article }: any) => {
		return (<center className="listItem">
			{(article?.publication || article?.title || article?.headline || article?.subhead || article?.summary) && (<>
				{(article?.publication) && <><b style={{ fontSize: '1.5em' }}>{article.publication}</b><br /></>}
				{(article?.title) && <><span style={{ fontSize: '1.5em' }}>{article.title}</span><br /></>}
				{(article?.headline) && <><span style={{ fontSize: '1.3em' }}>{article.headline}</span><br /></>}
				{(article?.subhead) && <><span style={{ fontSize: '1.1em' }}>{article.subhead}</span><br /></>}
				{(article?.summary) && <><blockquote style={{ fontSize: '.95em' }} dangerouslySetInnerHTML={{ __html: article.summary }} /></>}
			</>)}
		</center>)
	}
	const ArticleThumbAndImages = ({ article }: any) => {
		// SLEEVE ASSUME IMAGE NAME IS SAME AS ALBUM LOOKUP
		const sleeve = (article?.album) ? `/images/releases/${article.album}` : '';
		if (sleeve || article?.thumb || article?.images) {
			return <ImageStrip
				images={parseCaptionsSourcesEtc(`${sleeve || ''}$$${article?.thumb || ''}$$${article?.images || ''}`, true)}
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
					{says.map(([ body, credit, crediturl, creditdate ]: any, key: number) => <><Tag>{(credit) ? `${credit} Says..` : 'Comments'}</Tag><div className="listItem annotation">{body}</div><Attribution g={credit} u={crediturl} d={creditdate} /></> )}
					<p />
				</>)
			}
	}
	const substitutions = (a: string) => a?.replace(/f=act/g, 'f=alsowith');
	return (item) && <>
		<ArticleThumbAndImages article={item} />
		<ArticleInfoBox article={item} />
		<ArticleTitle article={item} />
		<ArticleMedia article={item} />
		<ArticleAudio article={item} />
		{(!!item?.body?.length) && (() => {
			const says = parseCaptionsSourcesEtc(item?.body) || [];
			return (says?.length) && (<>
					{says.map(([ body, credit, crediturl, creditdate ]: any, key: number) => <>{(credit) && <Tag>{credit} Says..</Tag>}<blockquote className="listItem" dangerouslySetInnerHTML={{ __html: substitutions(body) }} /><Attribution g={credit} u={crediturl} d={creditdate} /></> )}
					<p />
				</>)
		})()}
		<ArticleAnnotation article={item} />
	</>
}

export default PressItem;
