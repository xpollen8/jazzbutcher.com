import { dateDiff, parseDate, parseDomain, linkInternal, linkExternal } from '@/lib/utils';
import * as defines from '@/lib/defines';
import { expandAll } from '@/lib/defines';

const	genericWeb = ({ x, g, u, t, s, d, p }: {
	x?: string
	g?: string
	u?: string
	t?: string
	p?: string	// "publication"
	s?: string
	d?: string
}) => {
	const cleanG = removeHTML(g);
	//const cleanG = g?.replace('</p>', '').replace('<p>', '<br/><br/>');
	//const cleanGX = <span dangerouslySetInnerHTML={{ __html: cleanG || '' }} />
	const pattern = new RegExp(/(FMA[A-Z0-9]*)/);
	const FMAraw = cleanG?.match(pattern);
	return (
		(x || g || u || parseDate(d)) && <span className={s}>
			{(t) && <><b>{t}</b>:{' '}</>}
			{(x) && <>{x}</>}
			{(() => {
				if (g?.trim().startsWith('http')) {
					if (u) {
						return linkExternal(u, g)
					} else {
						return linkExternal(g, parseDomain(g))
					}
				} else {
					if (u && !FMAraw) {
						if (cleanG?.length) return linkInternal(u, cleanG);
						return linkExternal(u, parseDomain(u))
					} else {
						// auto-link Fishy Mansions Archives
						if (FMAraw) return linkInternal(`/fma/${FMAraw[0]}`, g);
						// only auto link to there's a chance it was a dated gig* thing
						if (d && cleanG) return linkInternal(`/contributions/${cleanG}`, cleanG);
						return cleanG;
					}
				}
			})()}
			{(p) && <>{' - '}({p})</>}
			{(parseDate(d)) && dateDiff(d, ' ')}
		</span>
	)
}

export const Source = ({ g, u, p, d }: {
	g?: string
	u?: string
	d?: string
	p?: string
}) =>	genericWeb({ g, u, t: "Source", s: "source", d, p });

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
}) => genericWeb({ g, u, t: (g) ? "Credit" : "Added", s: "credit", d })

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
	if (typeof str !== 'string') return str;
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

export const ParsedCaption = (props: { credit?: string, url?: string, credit_url?: string, credit_date?: string, caption?: any, image_caption?: any }) => {
	const needBR = ((props?.caption || props?.image_caption) && ((props?.credit) || (props?.credit_url) || (props?.credit_date)));
	const useCredit = removeHTML(props?.credit);
	const useCaption = removeHTML(props?.caption || props?.image_caption);
	const useURL = (useCredit) ? `/contributions/${useCredit}` : props?.credit_url;
	return (<>
		{expandAll(useCaption)}
		{(needBR) && <br />}
		<Credit g={useCredit} u={useURL} d={props?.credit_date} />
	</>)
}

export const RenderHTML = ({ body, className, children }: { body?: string, className?: string, children?: React.ReactNode }) => body && <div className={className}><div dangerouslySetInnerHTML={{ __html: body }} />{children}</div>


export const summaryBodySearch = (body: string, name: string, window: number = 100) => {
	if (!body) return '';
	const useBody = removeHTML(body)?.replace(/<br\/>/g, '') || '';
	const first = useBody.toLowerCase().indexOf(name.toLowerCase());
	const begin = (first > window) ? first - window : first;
	return `...` + useBody.substr(begin, window * 2) + `...`;
}
