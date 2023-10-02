//"use server"

import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next'

import { parseCaptionSourceEtc } from '@/lib/macros';
import { useSearchParams } from 'next/navigation';
import PageComments from '@/components/PageComments';
 
type Props = {
  params: {
		section: string
	}
}
 
export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const section = params.section
 
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: `Jazz Butcher - ${section}`,
  }
}

type BreadCrumb = {
	title: string | string[]
	href?: string
	parent?: string
	summary?: string
	inParentDirectory?: boolean
	rootHideChildren?: boolean
	body?: string
	hide?: boolean
}

const sections : { [key: string]: BreadCrumb } = {
	jbc: { href: '/', title: 'The Jazz Butcher' },

	pat: { parent: 'jbc', title: 'Pat' },
	media: { parent: 'jbc', title: 'Media' },

	releases: { parent: 'jbc', title: 'Releases', summary: 'The records' },
	album_reviews: { parent: 'press', title: 'Album Reviews', inParentDirectory: true },

	lyrics: { parent: 'jbc', title: 'Lyrics', summary: 'The Words' },
	gigs: { parent: 'jbc', title: 'Gigs', summary: 'Live performance archives' },
	self_reviews: { parent: 'gigs', title: "Pat's Reviews", inParentDirectory: true },
	fan_reviews: { parent: 'gigs', title: 'Fan Reviews', inParentDirectory: true },
	posters: { parent: 'gigs', title: 'Posters', summary: 'Gig Ephemera', inParentDirectory: true },
	live_shots: { parent: 'gigs', title: 'Concert Shots', inParentDirectory: true },

	conspirators: { parent: 'jbc', title: 'Conspirators', summary: 'The army of musicians' },
	fiascos: { parent: 'writings', title: 'Top 10 JBC Fiascos', summary: '2020' },
	prejbc: { parent: 'pat', title: 'Pre-JBC', summary: 'Before there was The JBC' },
	etc: { parent: 'jbc', title: 'Etc', summary: 'Ancient website content', rootHideChildren: true },
	help: { parent: 'jbc', title: 'Get Involved!', summary: "Let's do this, together" },

	fanclub: { parent: 'writings', title: 'Fan Club', summary: "Early Fan Club issues" },
	pat_album_reviews: { parent: 'writings', title: "Pat's albums reviews", summary: "Album opinions" },
	pat_gig_reviews: { parent: 'writings', title: "Pat's gig reviews", summary: "Tour write-ups" },

	audio: { parent: 'media', title: 'Audio' },
	official: { parent: 'audio', title: 'Released tracks', summary: "Official recordings", inParentDirectory: true },
	live: { parent: 'audio', title: 'Live Recordings', summary: "Non-official recordings", inParentDirectory: true },
	interviews: { parent: 'audio', title: 'Recorded Interviews', summary: "Radio, etc", inParentDirectory: true },
	demos: { parent: 'audio', title: 'Demo Recordings', inParentDirectory: true },
	elsewhere: { parent: 'audio', title: 'Audio Elsewhere', summary: "Podcasts, etc", inParentDirectory: true },

	video: { parent: 'media', title: 'Video' },

	press: { parent: 'media', title: 'Press', summary: "Published Articles" },
	printed_interviews: { parent: 'press', title: 'Interviews', inParentDirectory: true },
	gig_reviews: { parent: 'press', title: 'Gig Reviews', inParentDirectory: true },
	retrospectives: { parent: 'press', title: 'Retrospectives', inParentDirectory: true },
	profiles: { parent: 'press', title: 'Profile Pieces', inParentDirectory: true },
	preshow: { parent: 'press', title: 'Pre-show Press', inParentDirectory: true },
	bios: { parent: 'press', title: 'Band Bios', inParentDirectory: true },

	news: { parent: 'media', title: 'News', summary: "Website announcements" },

	//interviews: { parent: 'pat', title: "Interviews", summary: "Interviews captured over the years" },

	project: { parent: 'pat', title: 'Side Projects', summary: "He was a busy butcher" },
	vaguely_familiar: { parent: 'project', title: 'Vaguely Familiar', summary: '1991', inParentDirectory: true },
	cambodia: { parent: 'project', title: 'Cambodia', summary: '1991', inParentDirectory: true },
	black_eg: { parent: 'project', title: 'The Black Eg', summary: "1991-1994, 1999", inParentDirectory: true },
	the_undertakers: { parent: 'project', title: 'The Undertakers', summary: '1995', inParentDirectory: true },
	stranger_tractors: { parent: 'project', title: 'Stranger Tractors', summary: '1995', inParentDirectory: true, body: "Curtis E. Johnson, Pat Fish (Mr. Nasty)" },
	'releases/va_canyoutalktothedude_2': { parent: 'project', title: "Four One & Only's", summary: '1996 - U.F.O. Man', inParentDirectory: false, },
	sumosonic: { parent: 'project', title: 'Sumosonic', summary: "1996-1998", inParentDirectory: true },
	wilson: { parent: 'project', title: 'Wilson', summary: "2001-2005, 2012", inParentDirectory: true },
	'releases/trampling_tokyo': { parent: 'project', title: 'Alan Moore', summary: '2011 - Trampling Tokyo', inParentDirectory: false },
	drones_club: { parent: 'project', title: 'Drones Club', summary: '2014-2021', inParentDirectory: true },
	prime_evils: { parent: 'project', title: 'Prime Evils', inParentDirectory: true },
	masters_of_budvar: { parent: 'project', title: 'The Masters of Budvar', inParentDirectory: true },
	bookstore: { parent: 'project', title: "Pat's Bookstore", inParentDirectory: true },

	/*
	mrblagdon: { parent: 'projects', title: 'Mr. Blagdon', inParentDirectory: true },
	*/

	gallery: { parent: 'media', title: 'Gallery', summary: "Photography from all eras"  },
	fishy_mansions: { parent: 'pat', title: 'Fishy Mansions', summary: "COVID-era livestreams" },
	notebooks: { parent: 'writings', title: 'Notebooks', summary: "Excerpts from his journals" },

	writings: { parent: 'pat', title: 'The Butcher Writes', summary: 'Online, offline' },
	memoriam: { parent: 'pat', title: 'In Memoriam' },
	eulogy: { parent: 'memoriam', title: 'Alan Moore Eulogy', summary: "Said better than most" },
	homage: { parent: 'memoriam', title: 'Musical Tributes', summary: "Songs in praise of The Butcher" },

	letters: { parent: 'writings', title: 'Letters From Pat', summary: "1990-1994", body: "Just prior to gaining Internet access for himself, Pat would update the website's maintainer the old-fashioned way: through type-written correspondence.  Includes then-current news and answers to fan questions in 9 lengthy letters." },
	tomhall: { parent: 'writings', title: 'Tom Hall Memorial', summary: "2003", body: "The passing of Northampton-based folk music legend Tom Hall prompted Pat to pen a memorial."},

	mailinglist: { parent: 'etc', title: 'Mailing List', summary: '1989-2003', body: "The genesis of this Jazz Butcher website was the mailing list that David Whittemore maintained. During the 15 years it was active, several hundred technically-inclined JBC fans kept in touch and posted thousands of email messages." },
	auction: { parent: 'etc', title: 'Website Auction', summary: '1997', body: "The Butcher had some memorabilia sitting around his home which he was sick of tripping over. So, we decided to have an auction." },
	abcs_of_drugs: { parent: 'etc', title: "Eider's ABC's of Drugs", summary: '1998', body: "Max Eider, as a writer for Channel 4, produced a series on mind-altering drugs, which - due to its absolute brilliance - was mirrored here before it left the Channel 4 website." },
	mad: { parent: 'etc', title: 'How MAD Are You?', summary: '1998', body: "Pat was in posession of a ridiculous photo of a fan doing a ridiculous thing - while wearing a JBC t-shirt. He mused that others in compomising attair might compete to be top loon, if the call were put out on the JBC mailing list. So that's what happened." },
	tribute: { parent: 'etc', title: 'Fan Tribute Project', summary: '2000', inParentDirectory: false,  body: "Some brainiac on the old JBC mailing list decided that it would be fun to have the many JBC musician fans take a whack at doing a cover tune tribute album. The outcome is surprisingly not as cringe-worthy as it could have been." },
	trivia: { parent: 'etc', title: 'Trivia', summary: '2002', body: "A multiple-choice JBC trivial test. Take the challenge: is Emil still pig?" },
	links: { parent: 'etc', title: "Pat's Recommended Links", summary: '2003', body: "Net-side bands and whatnot that Pat wanted to highlight." },
	western_dat: { parent: 'etc', title: 'The Western Family DAT', summary: '2005', body: "Western Family , the 1992 live album released on Creation Records, is not the record it could have been.."},

	first_gig: { parent: 'prejbc', title: "Pat's first gig", summary: "1974", inParentDirectory: true, body: "Pat Fish, Chris Zero, Rolo, others" },
	nightshift: { parent: 'prejbc', title: 'Nightshift', summary: "1976-1978", inParentDirectory: true, body: "Pat Fish, John Silver, Colin Henney, Paul Quarry, Chris Clark, Ros Caston, Jon Stephenson" },
	the_institution: { parent: 'prejbc', title: 'The Institution', summary: "1978-1980", inParentDirectory: true, body: "Rolo, Rob Wilford, Max Eider, Pat Fish, Johnathan Stephenson, John Duval" },
	sonic_tonix: { parent: 'prejbc', title: 'Sonic Tonix', summary: "1980-1981 (AKA 'The Tonix')", inParentDirectory: true, body: "John Silver, Dave Goldie, Simon Mawby, Owen Jones, Pat Fish, Pete Millson" },
	wow_federation: { parent: 'prejbc', title: 'Wow Federation', summary: "1981", inParentDirectory: true, body: "Millree Hughes, Brian Warner, Ian Warner, Nick Horton, Andy Love, James Rogers, Carl Fysh, Vicky Richardson, Boz Warnock, Andy Sizer, Liza Widdowson, Deborah Keeping, Paul Conneally, Pat Fish, Max Eider, Will Buchanan, Mark Sinker (https://rateyourmusic.com/artist/wow-federation)" },
	jazz_insects: { parent: 'prejbc', title: 'Jazz Insects', summary: "1982", inParentDirectory: true, body: "Matt Black, Mark Sinker, Max Eider, Pat Fish" },
	//the_tonix: { parent: 'prejbc', title: 'The Tonix', inParentDirectory: true },

	admin: { parent: 'jbc', title: "Website Management", hide: false },
}

const makeBreadcrumb = (name: string, aux?: any) => {
	if (!name) return;
	const recurseNavObjects = ({ name, aux, root=false }: { name?: string, aux?: any, root?: boolean | undefined }): any => {
		const lowerName = name?.toLowerCase();
		if (!lowerName) return;
		const obj = sections[lowerName];
		if (!obj) return;
		const parent = obj.parent && recurseNavObjects({ name: obj.parent });
		let href = obj?.href || `/${lowerName}`;
		if (root) {
			if (aux) {
				return { parent: { ...obj, href, parent }, title: aux, leaf: true };
			} else {
				return { ...obj, parent, leaf: true };
			}
		}
		return { ...obj, parent, name, href }
	}
	const obj = recurseNavObjects({ name, aux, root: true });
	const nav: any = [];
	const obj2Array = (ob: any) => {
		if (ob?.parent) obj2Array(ob.parent);
		nav.push({ href: ob?.href, title: ob?.title });
	}
	obj2Array(obj);
	return nav;
}

const parseTitle = (title: string | string[], key0: number) => {
	if (typeof title === 'string') return <li key={key0}><span aria-current="page">{title}</span></li>;
	if (title?.constructor === Array && title[0]?.constructor === String) {
		return title?.map((t: string, key: number) => {
			const [ text, href ] = parseCaptionSourceEtc(t) || [];
			if (href) return <li key={key0+key}><Link href={href}>{text}</Link></li>;
			return <li key={key0+key}><span aria-current="page">{text}</span></li>;
		});
	}
	return <li key={key0}><span aria-current="page">{title}</span></li>;
}

export const sectionOptions = (match: string) => {
	const options = Object.keys(sections).map((section: string) => {
		const this_section = sections[section];
		const parent_section = this_section?.parent && sections[this_section?.parent];
		return {
			uri: (parent_section && this_section?.inParentDirectory) ? `/${this_section?.parent}/${section}` : `/${section}`,
			...sections[section] }
		})
		?.filter((section: any) => section?.parent && (section?.parent === match))
		.map((section: any) => {
		return {
			uri: section.uri,
			text: section.title,
			aux: section?.summary,
			children: section?.body,
		}
	});
	return options || [];
}

const NavSections = (props: { section?: string, title?: any, children?: React.ReactNode }): React.ReactNode  => {
	const { section, title, children } = props;

	if (!section) return;
	const nav = makeBreadcrumb(section, title) ?? [];
	const makeMenuOptions = (section: string, depth: number) => {
		if (depth < 2) {
			return Object.keys(sections)
				.filter((href: string) => {
					const parent = sections[href]?.parent;
					return parent && !(sections[parent]?.rootHideChildren && depth === 1) && (parent === section && !sections[href]?.hide)
				})
				?.map((href: string, key: number) => {
					const { title, parent, summary, inParentDirectory }: BreadCrumb = sections[href];
					const useHref = (inParentDirectory) ? `${parent}/${href}` : href;
					return (
						<div key={key} className={`navItem ${(depth === 0) ? 'outer' : ''}`}>
							<Link style={{ width: '100%' }} href={`/${useHref}`}>{title}</Link>
							{(summary) && <div style={{ display: 'inline' }} className="date">{' - '}{summary}</div>}
							{makeMenuOptions(href, depth + 1)}
						</div>
					)
				});
		} else {
			return [];
		}
	}

	return (<div aria-label="Breadcrumb" className="breadcrumb w-full">
		<div className="flex">
			<div className="w-full">
				<ul>
					{nav.map((obj: any, key: number) => {
						if (obj?.href) {
							const mainOptions = makeMenuOptions((obj?.href === '/') ? 'jbc' : obj?.href.substr(1), 0);
							return (
								<li key={key} className="navTop">
									<Link id="summary" href={obj.href}>{obj.title}</Link>
									{!!(mainOptions?.length) && <div className="navOverlay" id="detail"> {mainOptions} </div>}
								</li>
							)
						}
						return parseTitle(obj.title, key);
					})}
					{children}
				</ul>
			</div>
			<div>
				<PageComments />
			</div>
		</div>
	</div>)
}

type GigResults = {
  [key: string]: any;
	datetime?: string;
}

type Props_Header = {
	project?: string
	pathname?: string
	section?: string
	title?: any
	passthru?: string	// unused - just overload title
	navType?: 'Gig' | 'Year'
	extraNav?: React.ReactNode
	children?: React.ReactNode
}

/*
TODO - convert from |section|title| to |section{}|array[{}]
where {
	text,
	options: [{}]
}
 */
const Header = (props: Props_Header): React.ReactNode  => {
	//console.log("PATH", props);
	/* needs work - only works at very top level
	const searchParams = useSearchParams();
	const section = searchParams.get('section')
	console.log("searchParams", searchParams, section, props);
	if (section) {
		props.section = section;
	}
	*/
	return (<>
		<nav>
			<NavSections {...props} > {props?.extraNav} </NavSections>
			{props?.children}
		</nav>
		{(props?.project) && <div className={`gig_${props.project}`} ></div>}
	</>)
}

export default Header;
