import LinkAudio from '@/components/LinkAudio';
import EmbedVideo from '@/components/EmbedVideo';
import { autoLink } from '@/lib/macros';
import { Credit } from '@/components/GenericWeb';

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

const EmbedMedia = ({ data = {}, children } : any) => {
	const { datetime, type, setnum, ordinal, song, author, comment, performers, mediaurl, mediacredit, mediacrediturl } = data;
	return (<>
		{(() => {
			if (mediaurl) {
				if (mediaurl?.includes('.mp3')) {
					return (<blockquote className="listenItem">
						<span className="listenItemOrdinal">{ordinal}.</span>
							<LinkAudio title={song} mp3={mediaurl} author={author} comment={comment} />
							{(mediacredit) && <Credit g={mediacredit} u={mediacrediturl} />}
						</blockquote>)
				} else {
					return (<>
						{(ordinal) && <span className="listenItemOrdinal">{ordinal}.</span>}
						{autoLink(song)}
						{(author) && <span className="smalltext">({author})</span>}
						{(comment) && <span className="smalltext"> ({comment}) </span>}
						<div className="listenItem">
							<EmbedVideo data={data} />
							{(mediacredit) && <Credit g={mediacredit} u={mediacrediturl} />}
						</div>
					</>);
				}
			} else {
				return (<div>
					<span className="listenItemOrdinal">{ordinal}.</span>
					{autoLink(song)}
					{(author) && <span className="smalltext"> ({author}) </span>}
					{(comment) && <span className="smalltext"> ({comment}) </span>}
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
