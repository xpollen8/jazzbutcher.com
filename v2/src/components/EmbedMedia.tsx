import LinkAudio from '@/components/LinkAudio';
import EmbedVideo from '@/components/EmbedVideo';
import { parseDomain, autoLink } from '@/lib/macros';
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
	<a href="{jbc_search}?f=act&q={encode({query})}">{ternary((defined(text)), {text}, {query})}</a>
#live	else
	<a href="{jbc_search}?f=performer&q={encode({query})}">{ternary((defined(text)), {text}, {query})}</a>
#live	endif
#	<a href="https://www.google.com/search?q=%22{encode({query})}%22" target="new">{ternary((defined(text)), {text}, {query})}</a>
*/

const	EmbedVimeo = ({ data }: any) => { } // TODO
const	EmbedArchiveOrg = ({ data }: any) => { } // TODO
const	EmbedMixCloud = ({ data }: any) => { } // TODO
const	EmbedYoutube = ({ data }: any) => { } // TODO
const	EmbedAWSS3 = ({ data }: any) => { } // TODO
const	EmbedJBC = ({ data }: any) => { } // TODO

const	EmbedSoundCloud = ({ data }: any) => {
	const { mediaurl } = data;
	const useURL = mediaurl?.replace('https:', 'https%3A');
	return <iframe
			width="100%"
			height="300"
			scrolling="no"
			frameBorder="no"
			allow="autoplay"
			src={`https://w.soundcloud.com/player/?url=${useURL}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
		</iframe>
}

const EmbedMedia = ({ data = {}, children, disableVideo=false } : any) => {
	const { autolink=true, parent, datetime, venue, city, type, setnum, ordinal, title, song, artist, author, comment, performers, mediaurl, mediacredit, mediacrediturl, mediacreditdate } = data;
	// const mediaDomain = parseDomain(mediaurl);
	// const creditDomain = parseDomain(mediacrediturl);
	const useMediaurl = (mediaurl && mediaurl.startsWith('/')) ? `https://jazzbutcher.com${mediaurl}` : mediaurl;
	return (<>
		{(() => {
			if (useMediaurl && !disableVideo) {
				if (useMediaurl?.includes('soundcloud.com')) {
					return <EmbedSoundCloud data={data} />
				} else if (useMediaurl?.includes('.mp3')) {
					return (<blockquote className="listenItem">
						{(ordinal) && <span className="listenItemOrdinal">{ordinal}.</span>}
						<LinkAudio parent={parent} autolink={autolink} title={song || title} venue={venue} city={city} datetime={datetime} mp3={useMediaurl} artist={artist} author={author} comment={comment} />
						{(mediacredit) && <><br/><Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate} /></>}
					</blockquote>)
				} else {
					return (<>
						{(ordinal) && <span className="listenItemOrdinal">{ordinal}.</span>}
						{(artist) && <b>{artist}{ }</b>} {autoLink(song || title, autolink)}
						{(author) && <span className="smalltext">({author})</span>}
						{(comment) && <span className="smalltext"> ({comment}) </span>}
						<div className="listenItem">
							<EmbedVideo data={data} />
							{(mediacredit) && <><br/><Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate} /></>}
						</div>
					</>);
				}
			} else {
				return (<div>
					{(ordinal) && <span className="listenItemOrdinal">{ordinal}.</span>}
					{(artist) && <b>{artist}{ }</b>} {autoLink(song || title, autolink)}
					{(author) && <span className="smalltext"> ({author}) </span>}
					{(comment) && <span className="smalltext"> ({comment}) </span>}
					{/*(mediacredit) && <><br/><Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate} /></>*/}
				</div>);
			}
		})()}
		{(() => {
			return (<>
				{(performers) && <div className="smalltext"> {performers} </div>}
				<Performers datetime={datetime} />
			</>);
		})()}
		{children}
	</>)
}

export default EmbedMedia;
