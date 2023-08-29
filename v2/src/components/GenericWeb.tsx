import { dateDiff, parseDate, parseDomain, linkInternal, linkExternal } from '@/lib/macros';

const	genericWeb = ({ x, g, u, t, s, d }: {
	x?: string
	g?: string
	u?: string
	t?: string
	s?: string
	d?: string
}) => (
	(x || g || u || parseDate(d)) && <div className={s}>
		{(t) && <><b>{t}</b>:{' '}</>}
		{(x) && <>x</>}
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
		{(parseDate(d)) && <>{' '}{dateDiff(d)}</>}
	</div>
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

export const Contribution = ({ titles }: {
	titles?: string
}) => (titles) && genericWeb({ g: titles, t: "Contribution", s: "credit" })
