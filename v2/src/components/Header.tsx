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
}

const sections : { [key: string]: BreadCrumb } = {
	jbc: { href: '/', title: 'The Jazz Butcher' },

	pat: { parent: 'jbc', title: 'Pat', summary: 'The Butcher' },
	releases: { parent: 'jbc', title: 'Releases', summary: 'Recorded output' },
	gigs: { parent: 'jbc', title: 'Gigs', summary: 'The exhaustive live performance archives' },
	conspirators: { parent: 'jbc', title: 'Conspirators', summary: 'The army of JBC musicians' },
	lyrics: { parent: 'jbc', title: 'Lyrics', summary: 'The Words' },
	writings: { parent: 'pat', title: 'The Butcher Writes', summary: 'The man has opinions on things' },
	fiascos: { parent: 'writings', title: 'The Fiascos', summary: 'Top 10 JBC Fiascos' },
	prejbc: { parent: 'pat', title: 'Pre-JBC', summary: 'Before there was The JBC' },
	etc: { parent: 'jbc', title: 'Etc', summary: 'Ancient website content' },
	help: { parent: 'jbc', title: 'Get Involved!', summary: "Let's do this, together" },

	media: { parent: 'jbc', title: 'Media', summary: "Listen! Watch! Read!" },
	fanclub: { parent: 'jbc', title: 'Fan Club', summary: "Early Fan Club issues" },
	audio: { parent: 'media', title: 'Audio', summary: "Bootlegs and the like" },
	audio_interviews: { parent: [ 'audio', 'pat' ], title: 'Recorded Interviews', summary: "Radio and online interviews" },
	audio_bootlegs: { parent: 'audio', title: 'Recorded performances', summary: "Non-official audio recordings" },
	homage: { parent: 'audio', title: 'Musical Tributes', summary: "Songs in praise of The Butcher" },
	video: { parent: 'media', title: 'Video', summary: "Official and bootleg live videos" },
	press: { parent: 'media', title: 'Press', summary: "In print (and online)" },
	print_interviews: { parent: [ 'press', 'pat' ], title: 'Printed Interviews', summary: "Mags, newsprint, and online" },
	posters: { parent: 'media', title: 'Posters', summary: 'Gig Ephemera' },
	news: { parent: 'media', title: 'News', summary: "Website updates and announcements" },

	interviews: { parent: 'pat', title: "Interviews", summary: "Interviews captured over the years" },

	project: { parent: 'pat', title: 'Side Projects', summary: "Pat was a busy butcher" },
	gallery: { parent: 'pat', title: 'Gallery', summary: "Photography from all eras"  },
	fishy_mansions: { parent: 'pat', title: 'Fishy Mansions', summary: "Final years' live performances from his home" },
	notebooks: { parent: 'pat', title: 'Notebooks', summary: "Throughout his life, Pat kept journals in which he documented his gigs, tours, general observations, drew sketches, and jotted down lyrics. They are utterly fascinating.  In 2012, Pat auctioned off many of his older notebooks to raise funds for Last of the Gentlemen Adventurers" },

	memoriam: { parent: 'pat', title: 'In Memoriam', summary: "Too soon" },
	tributes: { parent: 'memoriam', title: 'Tributes', summary: "Rememberences and tributes" },
	eulogy: { parent: 'memoriam', title: 'Alan Moore Eulogy', summary: "Said better than most" },

	letters: { parent: 'writings', title: 'Letters From Pat' },

	mailinglist: { parent: 'etc', title: 'Mailing List' },
	tribute: { parent: 'etc', title: 'Fan Tribute Project' },
	abcs_of_drugs: { parent: 'etc', title: "Eider's ABC's of Drugs" },
	mad: { parent: 'etc', title: 'How MAD Are You?' },
	links: { parent: 'etc', title: "Pat's Recommended Links" },
	trivia: { parent: 'etc', title: 'Trivia' },
	tomhall: { parent: 'etc', title: 'Tom Hall Meorial' },

	nightshift: { parent: 'prejbc', title: 'Nightshift' },
	institution: { parent: 'prejbc', title: 'Institution' },
	sonictonix: { parent: 'prejbc', title: 'Sonic Tonix' },
	thetonix: { parent: 'prejbc', title: 'The Tonix' },

	cambodia: { parent: 'projects', title: 'Cambodia' },
	mrblagdon: { parent: 'projects', title: 'Mr. Blagdon' },
	vaguelyfamiliar: { parent: 'projects', title: 'The Vaguely Familiar' },
	eg: { parent: 'projects', title: 'The Black Eg' },
	sumosonic: { parent: 'projects', title: 'Sumosonic' },
	wilson: { parent: 'projects', title: 'Wilson' },
	dronesclub: { parent: 'projects', title: 'The Drones Club' },

	admin: { parent: 'jbc', title: "Website Management" },
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
			if (href) {
			/* WIP
				const menu = <>
				<ul className="dropdown-menu">
					<li className="dropdown-item">
						<Link className="menu-link dropdown-link" href="/"> howdy </Link>
						<Link className="menu-link dropdown-link" href="/"> noy </Link>
						<Link className="menu-link dropdown-link" href="/"> boyo </Link>
					</li>
				</ul>
				</>;
				return <li className="menu-item dropdown" key={key0+key}><Link className="menu-link" href={href}>{text}</Link>{menu}</li>;
			*/
				return <li key={key0+key}><Link  href={href}>{text}</Link></li>;
			}
			return <li key={key0+key}><span aria-current="page">{text}</span></li>;
		});
	}
	return <li key={key0}><span aria-current="page">{title}</span></li>;
}

const Section = (props: { section?: string, title?: any, children?: React.ReactNode }): React.ReactNode  => {
	const { section, title, children } = props;

	if (!section) return;
	const nav = makeBreadcrumb(section, title) ?? [];
	return (<div aria-label="Breadcrumb" className="breadcrumb w-full">
		<div className="flex">
			<div className="w-full">
				<ul>
					{nav.map((obj: any, key: number) => {
						const children = Object.keys(sections).filter((h: string) => {
							return sections[h]?.parent?.includes(section?.toLowerCase());
						}).map((h: string) => ({ link: h, ...sections[h] }));
						if (obj?.href) return <li key={key}><Link href={obj.href}>{obj.title}</Link></li>
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
