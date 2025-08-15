import Link from 'next/link';
import LinkAudio from '@/components/LinkAudio';
import EmbedVideo from '@/components/EmbedVideo';
import { imageBase, autoLink, ts2URI } from '@/lib/utils';
import { expand } from '@/lib/defines';
import { Attribution } from '@/components/GenericWeb';

const Performers = ({ datetime }: { datetime: string }) => {
	return (<>
	</>);
/*
#live	if ((sql(pe:select * from performance where datetime='{datetime}' and category='event' and type='{type}' and setnum='{setnum}' and ordinal='{ordinal}')) && (getnum(pe->numResults) > 0))
			<span className="smalltext">
#live		while (pei = pe[*]->performer)
				- {parse(para=pe[{pei}]->performer)}
#live			if (defined(pe[{pei}]->instruments))
					: {pe[{pei}]->instruments}
#live			elseif (getnum(pe->numResults) = 1)
					Solo
#live			endif
#live		endwhile
			</span>
#live	endif
*/
}
/*

#define	linkPDF(title, pdf)
##live	if (sql(insert IGNORE into media set type="pdf", name="{title}", href="{pdf}", author="{author}"))
##live	endif
	<a href="{pdf}">{makePDFIcon(title={literalizeCommas({title})})}</a> <i>{title}</i>

#define	linkSQL(type, name, href)
##live	if (sql(insert IGNORE into links set type="{type}", name="{name}", href="{href}"))
##live	endif

#define	linkSong(title, href, audio, mp3, author, pdf)
##live	if (sql(insert IGNORE into song set name="{literalizeQuotes({literalizeCommas({title})})}", href="{href}", audio="{audio}", mp3="{mp3}", author="{author}"))
##live	endif
	<span className='song'>
#live	if ((defined(mp3)) && (defined(href)))
		<i><a href="{href}">{title}</a></i>
#live	else if ((defined(mp3)) && (defined(title)))
		<i><a href="{href}">{title}</a></i>
#live	else if ((defined(href)) && (defined(title)))
	<i><a href="{href}">{title}</a></i>
#live	else
	<i>{title}</i>
#live	endif
#live	if (defined(author))
	<span className="song_author">({author})</span>
#live	endif
	</span>

#define	linkSingle(title, href)
#{linkSQL(single, {title}, {href})}
#live	if (defined(href))
	<span className="release_title"><b><a href="{href}">{title}</a></b></span>
#live	else
	<b>{title}</b>
#live	endif

#define	linkAlbum(title, href)
#{linkSQL(album, {title}, {href})}
#live	if (defined(href))
	<span className="release_title"><b><a href="{href}">{title}</a></b></span>
#live	else
	<span className="release_title"><b>{title}</b></span>
#live	endif

#define	linkPerson(href, name, lookup=no)
#{linkSQL(person, {name}, {href})}
	<span className="person">
#live	if (getval(lookup) = yes)
	{name}
#live	else
	<a href="{href}">{name}</a>
#live	endif
	</span><!-- person -->

#define	linkGoogleSearch(query, text)
#	<a href="{jbc_search}?f=performer&q={encode({query})}">{ternary((defined(text)), {text}, {query})}</a>
	<a href="https://www.google.com/search?q=%22{encode({query})}%22" target="new">{ternary((defined(text)), {text}, {query})}</a>

#define	linkSearch(query, text, act=no)
#live	if (getval(act) = yes)
	<a href="{jbc_search}?f=alsowith&q={encode({query})}">{ternary((defined(text)), {text}, {query})}</a>
#live	else
	<a href="{jbc_search}?f=performer&q={encode({query})}">{ternary((defined(text)), {text}, {query})}</a>
#live	endif
#	<a href="https://www.google.com/search?q=%22{encode({query})}%22" target="new">{ternary((defined(text)), {text}, {query})}</a>
*/

const	EmbedVimeo = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => <>TODO</> // TODO
const	EmbedArchiveOrg = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => <>TODO</> // TODO
const	EmbedYoutube = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => <>TODO</> // TODO
const	EmbedAWSS3 = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => <>TODO</> // TODO
const	EmbedJBC = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => <>TODO</> // TODO
const	EmbedBandcamp = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => <>TODO</> // TODO

const	EmbedMixCloud = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => {
	const { mediaurl } = data;
	const [ channel, item ] = mediaurl?.replace('https://www.mixcloud.com/', '')?.split('/');

	return <> 
		<iframe
			width="100%"
			height="60"
			src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2F${channel}%2F${item}%2F`}
			frameBorder="no"
		></iframe>
		{children}
	</>
}

const	EmbedKCRW = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => {
	const { mediaurl } = data;
	return <iframe
			width="100%"
		src={mediaurl}
	/>
}

const	EmbedPodomatic = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => {
	const { mediaurl } = data;
	return <><iframe
			width="100%" height={203} frameBorder="no" marginHeight={0} marginWidth={0} scrolling='no' allowFullScreen
		src={mediaurl} />
		{children}
	</>
}

const	EmbedSoundCloud = ({ data = {}, children }: { data: any, children?: React.ReactNode }) => {
	const { mediaurl } = data;
	const useURL = mediaurl?.replace('https:', 'https%3A');
	return <> 
		<iframe
			width="100%"
			height="300"
			scrolling="no"
			frameBorder="no"
			allow="autoplay"
			src={`https://w.soundcloud.com/player/?url=${useURL}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
		</iframe>
		{children}
	</>
}

const EmbedMedia = ({ data = {}, className, children, disableVideo=false } : { data: any, className?: string, children?: React.ReactNode, disableVideo?: boolean }) => {
	const { version, lookup, autolink=false, parent, datetime, venue, city, type, setnum, ordinal, title, song, artist, author, comment, performers, mediaurl, mediacredit, mediacrediturl, mediacreditdate, collection, added } = data;

	// const mediaDomain = parseDomain(mediaurl);
	// const creditDomain = parseDomain(mediacrediturl);
	const useMediaurl = mediaurl && imageBase(mediaurl);
	const useTitle = (song || title)?.replace('NULL','');
	const useArtist = artist?.replace('NULL','');
	const useAuthor = author?.replace('NULL','');

	const expandAll = (s: string) => s?.split(' ')?.map((r: string, key: number) => {
		if (r?.match(/\${/)) {
			return <span key={key}>{expand(r.replace('${','').replace('}',''))}</span>;
		} else {
			return r;
		}
	});

	const main = () => {
		if (useMediaurl && !disableVideo) {
			if (useMediaurl?.includes('mixcloud.com')) {
				return <>
					<EmbedMixCloud data={data}>
						{children}
					</EmbedMixCloud>
				</>
			} else if (useMediaurl?.includes('bandcamp.com')) {
				return <>
					<EmbedBandcamp data={data}>
						{children}
					</EmbedBandcamp>
				</>
			} else if (useMediaurl?.includes('kcrw.com')) {
				return <>
					<EmbedKCRW data={data}>
						{children}
					</EmbedKCRW>
				</>
			} else if (useMediaurl?.includes('podomatic.com')) {
				return <>
					<EmbedPodomatic data={data}>
						{children}
					</EmbedPodomatic>
				</>
			} else if (useMediaurl?.includes('soundcloud.com')) {
				return <>
					<EmbedSoundCloud data={data}>
						{children}
					</EmbedSoundCloud>
				</>
			} else if (useMediaurl?.includes('.mp3') || useMediaurl?.includes('google')) {
				return (<>
					<LinkAudio version={version} lookup={lookup} parent={parent} title={useTitle} venue={venue} city={city} datetime={datetime} mp3={useMediaurl} artist={useArtist} author={useAuthor} comment={comment} ordinal={ordinal} setnum={setnum} collection={collection} />
					{(mediacredit) && <><br/><Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate || added} /></>}
					{collection}
					{children}
				</>)
			} else {
				return (<div className="listItem">
					{(ordinal) && <span className="listenItemOrdinal">{ordinal}.</span>}

					{!!(city?.length && venue?.length && datetime?.length && !datetime.match(/0000-00-00 00:00:00/)) && <>
						{(parent) && <Link href={parent}><b>{datetime?.substring(0, 10)}</b></Link>}
						{!(parent) && <Link href={`/gigs/${ts2URI(datetime)}`}><b>{datetime?.substring(0, 10)}</b></Link>}
						{(city && venue) && <>{' '}{city}{', '}{venue}<br /></>}
					</>}
					{(useArtist) && <b>{useArtist}{ }</b>} {autoLink(useTitle, autolink)}
					{(useAuthor) && <span className="smalltext">{' '}({useAuthor})</span>}
					{/*(comment) && <span className="smalltext">{' '} ({comment}) </span>*/}
					<EmbedVideo className={className} data={data} />
					{children}
					{(mediacredit) && <><Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate || added} /></>}
				</div>);
			}
		} else {
			return (<div className="listItem">
				{(ordinal) && <span className="listenItemOrdinal">{ordinal}.</span>}
				{(useArtist) && <b>{useArtist}{ }</b>} {autoLink(useTitle, autolink)}
				{(useAuthor) && <span className="smalltext"> ({expandAll(useAuthor)}) </span>}
				{(comment) && <span className="smalltext"> ({expandAll(comment)}) </span>}
				{/*(mediacredit) && <><br/><Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate || added} /></>*/}
			</div>);
		}
	}
	return (<>
		{main()}
		{(performers) && <div className="smalltext"> {expandAll(performers)} </div>}
		<Performers datetime={datetime} />
	</>);
}

export default EmbedMedia;
