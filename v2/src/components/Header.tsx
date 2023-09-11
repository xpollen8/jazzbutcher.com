import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next'
import { parseYear, ts2URI } from '@/lib/macros';
 
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
	conspirators: { parent: 'jbc', title: 'Conspirators', summary: 'The arrmy of JBC musicians' },
	lyrics: { parent: 'jbc', title: 'Lyrics', summary: 'The Words' },
	fiascos: { parent: 'jbc', title: 'The Fiascos', summary: 'Tales of disastrous outings' },
	prejbc: { parent: 'jbc', title: 'Pre-JBC', summary: 'Before there was The JBC' },
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
	rememberences: { parent: 'pat', title: 'Rememberences', summary: "Rememberences and tributes" },
	notebooks: { parent: 'pat', title: 'Notebooks', summary: "Throughout his life, Pat kept journals in which he documented his gigs, tours, general observations, drew sketches, and jotted down lyrics. They are utterly fascinating.  In 2012, Pat auctioned off many of his older notebooks to raise funds for Last of the Gentlemen Adventurers" },
	memoriam: { parent: 'pat', title: 'In Memoriam', summary: "Too soon" },
	eulogy: { parent: 'memoriam', title: 'Alan Moore Eulogy', summary: "Said better than most" },

	letters: { parent: 'pat', title: 'Letters From Pat' },
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
			const [ text, href ] = t.split(';;');
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
	return (<nav aria-label="Breadcrumb" className="breadcrumb">
		<ul>
		{nav.map((obj: any, key: number) => {
			const children = Object.keys(sections).filter((h: string) => {
				return sections[h]?.parent?.includes(section?.toLowerCase());
			}).map((h: string) => ({ link: h, ...sections[h] }));
			if (obj?.href) return <li key={key}><Link href={obj.href}>{obj.title}</Link></li>
			return parseTitle(obj.title, key);
		})}
		</ul>
		{children}
	</nav>)
}

type GigResults = {
  [key: string]: any;
	datetime?: string;
}

type Props_MakeHeader = {
	project?: string
	section?: string
	title?: any
	passthru?: string	// unused - just overload title
	navType?: 'Gig' | 'Year'
	extraNav?: React.ReactNode
	children?: React.ReactNode
}

/*
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

const Nav = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
      <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Pat{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Overview{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/primitives/docs/guides/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/primitives/docs/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/radix-ui"
          >
					Explore{' '}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
*/

/*
TODO - convert from |section|title| to |section{}|array[{}]
where {
	text,
	options: [{}]
}
 */
const MakeHeader = (props: Props_MakeHeader): React.ReactNode  =>
<>
	<div className="homeContainer">
		<div className="homeHeader">
			{/*<Nav />*/}
			<Section {...props} />
			{props?.extraNav}
		</div>
		{props?.children}
	</div>
	{(props?.project) && <div className={`gig_${props.project}`} ></div>}
</>

export default MakeHeader;
