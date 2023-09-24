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
	parent?: string | string[]
	summary?: string
	inParentDirectory?: boolean
	hide?: boolean
}

export const sections : { [key: string]: BreadCrumb } = {
	jbc: { href: '/', title: 'The Jazz Butcher' },

	pat: { parent: 'jbc', title: 'Pat' },
	media: { parent: 'jbc', title: 'Media' },

	releases: { parent: 'jbc', title: 'Releases', summary: 'The records' },
	release_reviews: { parent: 'releases', title: 'Album Reviews', inParentDirectory: true },

	lyrics: { parent: 'jbc', title: 'Lyrics', summary: 'The Words' },
	gigs: { parent: 'jbc', title: 'Gigs', summary: 'Live performance archives' },
	gig_reviews: { parent: 'gigs', title: 'Published Reviews', inParentDirectory: true },
	self_reviews: { parent: 'gigs', title: "Pat's Reviews", inParentDirectory: true },
	fan_reviews: { parent: 'gigs', title: 'Fan Reviews', inParentDirectory: true },
	posters: { parent: 'gigs', title: 'Posters', summary: 'Gig Ephemera', inParentDirectory: true },
	live_shots: { parent: 'gigs', title: 'Concert Shots', inParentDirectory: true },

	conspirators: { parent: 'jbc', title: 'Conspirators', summary: 'The army of musicians' },
	fiascos: { parent: 'writings', title: 'The Fiascos', summary: 'Top 10 JBC Fiascos' },
	prejbc: { parent: 'pat', title: 'Pre-JBC', summary: 'Before there was The JBC' },
	etc: { parent: 'jbc', title: 'Etc', summary: 'Ancient website content', rootHideChildren: true },
	help: { parent: 'jbc', title: 'Get Involved!', summary: "Let's do this, together" },

	fanclub: { parent: 'writings', title: 'Fan Club', summary: "Early Fan Club issues" },

	audio: { parent: 'media', title: 'Audio' },
	official: { parent: 'audio', title: 'Released tracks', summary: "Official recordings", inParentDirectory: true },
	live: { parent: 'audio', title: 'Recorded performances', summary: "Non-official recordings", inParentDirectory: true },
	audio_interviews: { parent: 'audio', title: 'Recorded Interviews', summary: "Radio and online interviews", inParentDirectory: true },

	video: { parent: 'media', title: 'Video' },

	press: { parent: 'media', title: 'Press', summary: "Press Articles" },
	print_interviews: { parent: 'press', title: 'Printed Interviews', inParentDirectory: true },
	gig_reviews: { parent: 'press', title: 'Gig Reviews', inParentDirectory: true },
	puff_pieces: { parent: 'press', title: 'Puff Pieces', inParentDirectory: true },
	announcements: { parent: 'press', title: 'Announcements', inParentDirectory: true },

	news: { parent: 'media', title: 'News', summary: "Website announcements" },

	//interviews: { parent: 'pat', title: "Interviews", summary: "Interviews captured over the years" },

	project: { parent: 'pat', title: 'Side Projects', summary: "He was a busy butcher" },
	black_eg: { parent: 'project', title: 'The Black Eg', inParentDirectory: true },
	eg_press: { parent: 'black_eg', title: 'Press Articles', inParentDirectory: true },
	eg_releases: { parent: 'black_eg', title: 'Releases', inParentDirectory: true },
	wilson: { parent: 'project', title: 'Wilson', inParentDirectory: true },
	wilson_press: { parent: 'wilson', title: 'Press Articles', inParentDirectory: true },
	wilson_releases: { parent: 'wilson', title: 'Releases', inParentDirectory: true },
	sumosonic: { parent: 'project', title: 'Sumosonic', inParentDirectory: true },
	sumosonic_press: { parent: 'sumosonic', title: 'Press Articles', inParentDirectory: true },
	sumosonic_releases: { parent: 'sumosonic', title: 'Releases', inParentDirectory: true },
	vaguely_familiar: { parent: 'project', title: 'Vaguely Familiar', summary: '1991', inParentDirectory: true },
	cambodia: { parent: 'project', title: 'Cambodia', summary: '1991', inParentDirectory: true },
	the_undertakers: { parent: 'project', title: 'The Undertakers', summary: '1995', inParentDirectory: true },
	stranger_tractors: { parent: 'project', title: 'Stranger Tractors', summary: '1995', inParentDirectory: true },
	alan_moore: { parent: 'project', title: 'Alan Moore', summary: '2011 - Trampling Tokyo', inParentDirectory: true },
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
	tributes: { parent: 'memoriam', title: 'Tributes', summary: "Rememberences and tributes" },
	eulogy: { parent: 'memoriam', title: 'Alan Moore Eulogy', summary: "Said better than most" },
	homage: { parent: 'memoriam', title: 'Musical Tributes', summary: "Songs in praise of The Butcher" },

	letters: { parent: 'writings', title: 'Letters From Pat', summary: "1990-1994" },
	tomhall: { parent: 'writings', title: 'Tom Hall Memorial', summary: "2003" },

	mailinglist: { parent: 'etc', title: 'Mailing List' },
	tribute: { parent: 'etc', title: 'Fan Tribute Project' },
	abcs_of_drugs: { parent: 'etc', title: "Eider's ABC's of Drugs" },
	mad: { parent: 'etc', title: 'How MAD Are You?' },
	links: { parent: 'etc', title: "Pat's Recommended Links" },
	trivia: { parent: 'etc', title: 'Trivia' },
	auction: { parent: 'etc', title: '1997 Website Auction' },

	nightshift: { parent: 'prejbc', title: 'Nightshift', inParentDirectory: true },
	the_institution: { parent: 'prejbc', title: 'The Institution', inParentDirectory: true },
	sonic_tonix: { parent: 'prejbc', title: 'Sonic Tonix', summary: "AKA 'The Tonix'", inParentDirectory: true },
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
		let parent;
		if (obj?.parent) {
			if (typeof obj.parent === 'string') {
				parent = recurseNavObjects({ name: obj.parent });
			} else {
				parent = obj.parent.map((name: string) => recurseNavObjects({ name }));
			}
		}
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

const Section = (props: { section?: string, title?: any, children?: React.ReactNode }): React.ReactNode  => {
	const { section, title, children } = props;

	if (!section) return;
	const nav = makeBreadcrumb(section, title) ?? [];
	const makeMenuOptions = (section: string, depth: number) => {
		if (depth < 2) {
			return Object.keys(sections)
				.filter((href: string) => {
					const parent = sections[href]?.parent;
					return !(sections[parent]?.rootHideChildren && depth === 1) && (parent === section && !sections[href]?.hide)
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
			<Section {...props}>
				{props?.extraNav}
			</Section>
			{props?.children}
		</nav>
		{(props?.project) && <div className={`gig_${props.project}`} ></div>}
	</>)
}

export default Header;
