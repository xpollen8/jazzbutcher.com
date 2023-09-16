import { dateDiff, parseDate, parseDomain, linkInternal, linkExternal } from '@/lib/macros';
import * as defines from '@/lib/defines';

const	genericWeb = ({ x, g, u, t, s, d }: {
	x?: string
	g?: string
	u?: string
	t?: string
	s?: string
	d?: string
}) => (
	(x || g || u || parseDate(d)) && <span className={s}>
		{(t) && <><b>{t}</b>:{' '}</>}
		{(x) && <>{x}</>}
		{(() => {
			if (g?.startsWith('http')) {
				if (u) {
					return linkExternal(u, g)
				} else {
					return linkExternal(g, parseDomain(g))
				}
			} else {
				if (u) {
					if (u.startsWith('http')) {
						return linkExternal(u, g)
					} else {
						return linkInternal(u, g)
					}
				} else {
					return g?.replace('</p>', '').replace('<p>', '<br/><br/>');
				}
			}
		})()}
		{(parseDate(d)) && dateDiff(d)}
	</span>
)

export const Source = ({ g, u, d }: {
	g?: string
	u?: string
	d?: string
}) =>	genericWeb({ g, u, t: "Source", s: "source", d });

export const Bootleg = ({ g, u, d }: {
	g?: string
	u?: string
	d?: string
}) =>	genericWeb({ g, u, t: "Bootlegger", s: "source", d });

export const Soundman = ({ g, u, d }: {
	g?: string
	u?: string
	d?: string
}) =>	genericWeb({ g, u, t: "Soundman", s: "source", d });

export const Reviewer = ({ g, u, x }: {
	g?: string
	u?: string
	x?: string
}) =>	genericWeb({ g, u, t: "Reviewer", s: "reviewer", x });

export const Caption = ({ g, u, d }: {
	g?: string
	u?: string
	d?: string
}) =>	genericWeb({ g, u, s: "caption", d });

export const ArtistWeb = ({ g, u }: {
	g?: string
	u?: string
}) =>	genericWeb({ g, u, t: "Artist Website", s: "artist_website" });

export const Credit = ({ g, u, d }: {
	g?: string
	u?: string
	d?: string
}) => genericWeb({ g, u, t: "Credit", s: "credit", d })

// no title
export const Attribution = ({ x, g, u, d }: {
	x?: string
	g?: string
	u?: string
	d?: string
}) => genericWeb({ x, g, u, s: "credit", d })

export const Contribution = ({ titles }: {
	titles?: string
}) => {
	if (!titles) return;
	let tunes = [ titles ];
	if (titles.includes('[')) {
		tunes = titles.replace('[', '').replace(']', '').trim().split(',');
	} 
	return tunes.map((t: string, key: number) => {
		const title = t.trim();
		// @ts-ignore
		const value = defines[title];
		return <div key={key}>{genericWeb({ x: value, t: "Contribution", s: "credit" })}</div>;
	});
}

export const removeHTML = (str?: string) => {
	const deParagraphed = str
		?.replace(/<BR>/ig, '<br/>') // <BR> => <br/>
		?.replace(/<p>/ig, '<br/>') // <p> => <br/>
		?.replace(/<p([^>]+)>/ig, '<br/>')  // <p.....> => <br/>
		?.replace(/<\/p>/ig, '<br/>') // </p> => <br/>
		?.trim();
	// need to leave <br/ tags intact
	const unlinked = deParagraphed
		?.replace(/(<(?!br\/)([^>]+)>)/ig, '')?.trim()
		//?.replace(/(<([^>]+)>)/ig, '')?.trim()
	return unlinked;
}

export const ParsedCaption = (props: { credit?: string, url?: string, credit_url?: string, credit_date?: string, caption?: string | React.ReactNode, image_caption?: string | React.ReactNode }) => {
	return (<>
		{(props?.caption || props?.image_caption) && <>{props?.caption} {props?.image_caption}</>}
		<br />
		<Credit g={removeHTML(props?.credit)} u={props?.credit_url} d={props?.credit_date} />
	</>)
}

export const RenderHTML = ({ body }: { body?: string}) => body && <div dangerouslySetInnerHTML={{ __html: body }} />
