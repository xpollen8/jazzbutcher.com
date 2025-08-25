import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import Tag from '@/components/Tag';
import EmbedMedia from '@/components/EmbedMedia';
import { pluralize, dateDiff, dateAgo } from '@/lib/utils';
import { Credit } from '@/components/GenericWeb';

import newsItemsV1 from '@/../public/data/newsV1.json';

type NewsItemType = {
	subject?: string
	body?: string | React.ReactNode
	dt: string
	link?: string
	category?: string
	credit?: string
};

const recentNews = [
	{
		subject: `Website/search improvement`,
		dt: '2025-08-25',
		category: 'maintenance',
		credit: 'David Whittemore',
		body: <>
			Want to know who played when? Want to see what your favorite Conspirator looks like?
			I finally updated the <Link href={`/conspirators`}><b>Conspirators</b></Link> section.
			<p />
			Now, I need to tag more photos so that they get picked up and displayed.
			<p />
		</>
	},
	{
		subject: `Website/search improvement`,
		dt: '2025-08-15',
		category: 'maintenance',
		credit: 'David Whittemore',
		body: <>
			Fans of the JBC have provided many images/ticket/posters/etc over the years.
			We acknowledge their efforts in the <Link href={`/help`}><b>Community contributions</b></Link> section.
			<p />
			Lotta backend data changes - most data now comes
			from static JSON instead of live database calls.  This will make it easier
			for future generations to get their hands on the data behind this website.
			<p />
		</>
	},
	{
		subject: `Website/search improvement`,
		dt: '2025-08-05',
		category: 'maintenance',
		credit: 'David Whittemore',
		body: <>
			The V2 &quot;card&quot; <b><Link href="/gigs">gig search result</Link></b> look
			has been reverted to the V1 &quot;row&quot; style.
			<p />
			New search result feature: band names shown in the &quot;shared the bill with&quot; are now click-to-search.
			<p />
		</>
	},
	{
		subject: `Website/search improvement`,
		dt: '2025-08-01',
		category: 'maintenance',
		credit: 'David Whittemore',
		body: <>
			Fixed the display of things like &Uuml; in city and venue names, and added the ability to search
			gigs when items contain &quot;special characters&quot;.
			<p />
			Also added is the ability to search gigs by &quot;State&quot;.
			<p />
			There is a new section for the <b><Link href="/fma">Fishy Mansions Archives</Link></b> items
			which are being digitized as part of the Documentary efforts.
			<p />
			Check out the <b>Recent gig images</b> section below for gig page updates!
			<p />
		</>
	},
	{
		subject: `1992 US Tour full shows, others`,
		dt: '2025-07-20',
		category: 'media',
		credit: 'David Whittemore',
		body: <>
			<b>Full show performances from David Whittemore&apos;s DAT masters of 1992 US Tour</b>
			(the tapes NOT lost in the <Link href="/western_dat">Western Family Fiasco</Link>):
			<p /><Link href="/gigs/1992/Apr24">1992-04-24: Athens, Georgia</Link>
			<br /><Link href="/gigs/1992/Apr26_2000">1992-04-26: Chapel Hill, North Carolina</Link>
			<br /><Link href="/gigs/1992/Apr28">1992-04-28: Baltimore, Maryland</Link>
			<br /><Link href="/gigs/1992/May1">1992-05-01: Washington DC</Link>
			<br /><Link href="/gigs/1992/May3">1992-05-03: Providence, Rhode Island</Link>
			<br /><Link href="/gigs/1992/May5">1992-05-05: Boston, Massachusetts</Link>
			<br /><Link href="/gigs/1992/May6_2000">1992-05-06: Montreal</Link>
			<br /><Link href="/gigs/1992/May8">1992-05-08: Waterloo</Link>
			<br /><Link href="/gigs/1992/May9">1992-05-09: Toronto</Link>
			<br /><Link href="/gigs/1992/May16_2000">1992-05-16: Chicago</Link>
			<br /><Link href="/gigs/1992/May16_1200">1992-05-16: Tower Records, Chicago</Link>
			<br /><Link href="/gigs/1992/Jun5">1992-06-05: Los Angeles</Link>
			<p />
			<b>Some other lovely older shows</b>:
			<p /><Link href="/gigs/1989/Dec10">1989-12-10: San Juan Capistrano</Link>
			<br /><Link href="/gigs/1991/Jun18">1991-06-18: London</Link>
			<br /><Link href="/gigs/1998/May1">1998-05-01: Atlanta</Link>
			<p />
		</>
	},
	{
		subject: "1995-12-21 - 'Last Gig Ever'",
		dt: '2025-05-01',
		body: <EmbedMedia data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/audio/gigs/19951221/19951221_JazzButcher_London_TheGarage.mp3' }} />,
		link: '/gigs/1995/Dec21',
		category: 'media',
	},
	{
		subject: "Jazz Butcher gig pix",
		link: '/gigs/1989/Sep21',
		body: `Updated photoset from Duchess Of York - Leeds, England`,
		dt: '2025-04-29',
		category: 'media',
		credit: 'Andrew Brooksbank'
	},
	{
		subject: "Wilson gig pix",
		link: '/gigs/2001/Apr14_2130',
		body: `7 lovely action shots from The Packhorse - Leeds England`,
		dt: '2025-04-28',
		category: 'media',
		credit: 'Andrew Brooksbank'
	},
	{
		subject: "Tribute song, grave marker pic added",
		link: '/memoriam',
		body: <EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/video/Liam_Dullaghan-Light_On_Shakespeare_Road.mp4" }} />,
		dt: '2025-04-22',
		category: 'media',
		credit: 'onetoysarah'
	},
	{
		subject: "1987-01-15 - Distressed Gentlefolk review",
		link: '/press/19870115_press_varsity_distressed.html',
		body: `<i>The Varsity Press</i> University of Toronto, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19860807_press_varsity_nonsense.html",
		subject: "1986-08-07 - Bloody Nonsense review",
		body: `<i>The Varsity Press</i> University of Toronto, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19900125_press_varsity_planet.html",
		subject: "1990-01-25 - Big Planet Scarey Planet review",
		body: `<i>The Varsity Press</i> University of Toronto, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19901211_press_varsity_cult.html",
		subject: "1990-12-11 - Cult of the Basement review",
		body: `<i>The Varsity Press</i> University of Toronto, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19861003_press_queensjournal_nonsense.html",
		subject: "1986-10-03 - Bloody Nonsense review",
		body: `<i>The Queen's Journal</i> Queen's University, Ontario, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19861128_press_queensjournal_distressed.html",
		subject: "1986-11-28 - Distressed Gentlefolk review",
		body: `<i>The Queen's Journal</i> Queen's University, Ontario, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19890310_press_queensjournal_spooky.html",
		subject: "1989-03-10 - Spooky EP review",
		body: `<i>The Queen's Journal</i> Queen's University, Ontario, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19891117_press_queensjournal_planet.html",
		subject: "1989-11-17 - Big Planet Scarey Planet review",
		body: `<i>The Queen's Journal</i> Queen's University, Ontario, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		link: "/press/19901130_press_queensjournal_cult.html",
		subject: "1990-11-30 - Cult of the Basement review",
		body: `<i>The Queen's Journal</i> Queen's University, Ontario, Canada`,
		dt: '2024-11-14',
		category: 'media',
	},
	{
		body: `<i>The Catalyst</i> Colorado College, USA`,
		link: "/press/19860919_press_catalyst_nonsense.html",
		subject: "1986-09-19 - Bloody Nonsense review",
		dt: '2024-11-14',
		category: 'media',
	},
	{
		body: `<i>The Massachusetts Daily Collegian</i> Amherst, Massachusetts, USA`,
		link: "/press/19880404_press_collegian_fishco.html",
		subject: "1988-04-04 - Fishcotheque review",
		dt: '2024-11-14',
		category: 'media',
	},
	{
		body: `<i>The Charlatan</i> Carleton University, Ottawa, Ontario, Canada`,
		link: "/press/19880526_press_charlatan.html",
		subject: "1988-05-26 - Interview",
		dt: '2024-11-14',
		category: 'media',
	},
	{
		body: `<i>The Martlet</i> Victoria, Canada`,
		link: "/press/19891207_press_martlet.html",
		subject: "1989-12-07 - Interview",
		dt: '2024-11-14',
		category: 'media',
	},
	{
		body: `<i>l'Unità</i> Italy`,
		link: "/press/20130113_press_unita.html",
		subject: "2013-01-13 - funding for Last of the Gentleman Adventurers",
		dt: '2024-11-14',
		category: 'media',
	},
	{
		subject: "video: 2024-05-04 - David J. performing Quelle Tristesse",
		dt: '2024-11-04',
		body: <EmbedMedia data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/video/20240504_DavidJ_Quell_AnnePace.mp4', mediacredit: 'Ann Pace', datetime: '2024-05-04', mediacreditdate: '2024-05-04' }} />,
		category: 'media',
		credit: 'Ann Pace',
	},
	{
		subject: "video: 1986-08-22 - Hard, French TV",
		dt: '2024-01-25',
		body: <EmbedMedia data={{ mediaurl: 'https://youtube.com/embed/3DeTg80CMj8', mediacredit: 'Jeremy braGxon fait le tri dans ses archives vidéo' }} />,
		category: 'media',
	},
	{
		subject: "video: 1993-03-04 - Valenza Po, Italy",
		dt: '2023-12-26',
		body: <EmbedMedia data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/video/gigs/19930304/19930304_JazzButcher_ValenzaPo_IT_CircoloPalomar.mp4', mediacredit: 'Giorgio Zito' }} />,
		link: '/gigs/1993/Mar4',
		category: 'media',
		credit: 'Giorgio Zito',
	},
	{
		subject: "interview: 1992-06-23 - WXPN, Philadelphia",
		dt: '2023-12-25',
		body: <EmbedMedia data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/audio/interviews/19920623_JazzButcher_WXPN_Interview.mp3' }} />,
		link: '/press/19920623_interview_WXPN',
		category: 'media',
	},
	{
		subject: "audio: Someone To Share My Life With",
		dt: '2023-12-25',
		body: <EmbedMedia data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/audio/gigs/20181108/20181108_PatFish_TVP_SomeoneToShareToShareMyLifeWith.mp3', author: 'Television Personalities' }} />,
		link: '/gigs/2018/Nov8_1930',
		category: 'media',
	},
	{
		subject: "audio: Doktor Anthrax",
		dt: '2023-12-25',
		body: <EmbedMedia data={{ mediaurl: 'https://v1.jazzbutcher.com/audio/tunes/JazzButcher_DoktorAnthrax.mp3' }} />,
		link: '/lyrics/doktor_anthrax',
		category: 'media',
	},
	{
		subject: "artwork: Trampling Tokyo lyrics",
		dt: '2023-12-25',
		body: <Link href="/releases/collaboration_trampling_tokyo"><Image src="https://v1.jazzbutcher.com/images/trampling_tokyo_negative_burn_lyrics3_250.jpg" width="250" height="250" alt="poster" /></Link>,
		link: '/releases/collaboration_trampling_tokyo',
		category: 'media',
	},
	{
		subject: "artwork: Cult of the Basement in-studio poster",
		dt: '2023-12-24',
		body: <><Link href="https://v1.jazzbutcher.com/images/releases/cult_studio_poster.jpg"><Image src="https://v1.jazzbutcher.com/images/releases/cult_studio_poster_250.jpg" width="250" height="250" alt="poster" /></Link>
		The original map of the &quot;Cult Of The Basement&quot; album, drawn up by the Conspiracy in the studio, January 1990.
		</>,
		link: '/releases/cult',
		category: 'media',
	},
	{
		subject: "lyrics: Doktor Anthrax",
		dt: '2023-12-24',
		link: '/lyrics/doktor_anthrax',
		category: 'media',
	},
	{
		subject: "setlist: 2020-09-27",
		body: <Link href="/gigs/2020/Sep27_2200"><Image src="https://v1.jazzbutcher.com/images/20200927/20200927_setlist_250.jpg" width="250" height="250" alt="setlist" /></Link>,
		dt: '2023-12-24',
		link: '/gigs/2020/Sep27_2200',
		category: 'media',
	},
	{
		subject: "gig poster: 1993-12-23",
		body: <Link href="/gigs/1993/Dec23"><Image src="https://v1.jazzbutcher.com/images/19931223/19931223_poster_250.jpg" width="250" height="250" alt="poster" /></Link>,
		dt: '2023-12-23',
		link: '/gigs/1993/Dec23',
		category: 'media',
	},
	{
		subject: "jazzbutcher.com V2 launched",
		body: <>For its first 10,588 days, jazzbutcher.com was delivered by David Whittemore&apos;s &quot;HTDB&quot; toy language.
		<p />While effective in serving you the wholesome Jazz Butcher information you&apos;ve come to love, HTDB had a few flaws: 1) Only Whittemore knew how to use it, 2) It was difficult to manage data in a structured manner. 3) There are easier to use ways to generate web content.
		<p />In 2023, 6 months were spent porting the HTDB site into React and api-driven structured data.
		In the process, much new content was added, and everything was generally cleaned-up.
		<p />A couple sections (the old mailing list, the &quot;conspirators&quot;) still need porting, but we wanted to deploy prior to what would have been Pat&apos;s 66th birthday.
		<p />
		The old/V1 site is now at <Link href="https://v1.jazzbutcher.com">v1.jazzbutcher.com</Link>
		<p />
		<hr />
		<p />
		As a special treat, Philip Snow has <Link href='/audio/miracles_interviews'>graciously shared</Link> a few of his audio interviews with Pat
		which served as source material for their book Miracles and Wonders.
		<p />
		Here is 3 hour(!) final interview (#16), which covers &apos;Highest in the Land&apos;
		<EmbedMedia data={{ mediaurl: 'https://s3.amazonaws.com/assets.jazzbutcher.com/audio/interviews/PhilipSnow_PatFish/Pat+16+Highest.mp3' }} />
		</>,
		dt: '2023-12-19',
		category: 'announcement',
	},
	{
		subject: "David Whittemore Scans of Website Auction Letter: 1997-08",
		body: `600 DPI scan of Pat's letter to David Whittemore for the 1997 website virtual lawn sale`,
		dt: '2023-11-09',
		link: '/auction',
		category: 'media',
	},
	{
		subject: "David Whittemore Scans of Pat Letter: 1994-04-13",
		body: `600 DPI scan of Pat's letter to David Whittemore, penned 1994-03-28, received 1994-04-13`,
		dt: '2023-11-06 12:05:00',
		link: '/letters/19940413',
		category: 'media',
	},
	{
		subject: "Jazz Butcher com V2 is under development!",
		body: `Work is underway to modernize the underpinnings of the almost-30-year-old JBC website.<p />Many new features are being incorporated and massive backlogs of press items and project data is being processed`,
		dt: '2023-07-15',
	},
	{
		subject: "Scans: Sumosonic Promo Cassettes",
		body: `Here are scans of the Sumosonic Cassettes I got from Pat back in the 90's. The "This Is Sumo" Demo is almost Identical artwork to the Sumo Demos on jazzbutcher.com except slightly altered artwork but with the same track listing. The other two Sumo cassettes were promo advances to the single "Come, Friendly Spaceman" and the album "This Is Sumo"`,
		link: '/projects/sumosonic',
		dt: '2023-11-06 19:05:00',
		credit: 'James Duval'
	},
	{
		subject: "The Beautiful Snow White Hair story/Im Korb images",
		body: `Exerpted from Philip Snow's Pat Fish Interview Tape #16 - the "Beautiful Snow White Hair" story and it's creation in deepest Alabama, and associated "kitten playing card"`,
		link: '/lyrics/snowy',
		dt: '2023-11-18 12:00:00',
		credit: 'Philip Snow'
	},
	{
		subject: "Majorca gig images from Pat Fish Archives",
		body: `Added a couple images from Philip Snow's scans of Pat Fish's archives`,
		link: '/gigs/1996/Aug20',
		dt: '2023-11-18 15:23:00',
		credit: 'Philip Snow'
	},
	{
		subject: "Photo: Rich Hall Comedy Central",
		body: `Added a photo previous sent to Pat Fish by David Whittemore`,
		link: '/gigs/1990/Nov12_1200',
		dt: '2023-11-18 15:40:00',
		credit: 'Philip Snow'
	},
];

export const newsItems: NewsItemType[] = [...recentNews, ...newsItemsV1?.results]?.filter((n: NewsItemType) => n.dt && n.dt.length)?.map((n: NewsItemType) => {
		const dt = n.dt.includes('-') ? moment(n.dt, 'YYYY-MM-DD HH:mm:SS').valueOf() : parseInt(n.dt, 10) * 1000;
		return { ...n, dt: moment(dt).format('YYYY-MM-DD HH:mm:SS') }
// @ts-ignore
}).sort((a: NewsItemType, b: NewsItemType) => moment(b.dt) - moment(a.dt));

const displayNewsItem = (n: NewsItemType, key: number) => {
	const body = (typeof n.body === 'object') ? n.body : <div dangerouslySetInnerHTML={{ __html: n?.body || '' }} />
	return <MakeSimpleURI uri={n?.link} text={n.subject || ''} aux={dateDiff(n.dt, '')} className="listItem" key={key}>
		{body}
		{(n?.credit) && <Credit g={n.credit} />}
	</MakeSimpleURI>
}

export const MostRecentNews = () => <>
	<details>
	<summary className="tagClickable"> {pluralize(newsItems?.length, 'website change', 'Most recent')} {dateAgo(newsItems[0]?.dt)}</summary>
		{displayNewsItem(newsItems[0] as NewsItemType, 0)}
		<News />
	</details>
</>

const News = () => {
	const years: Record<string, NewsItemType[]> = {};
	newsItems?.forEach((item: NewsItemType) => {
		const year = item?.dt?.substr(0, 4);
		if (!years[year]) {
			years[year] = [];
		}
		years[year]?.push(item);
	});
	return <>
		<details>
			<summary className="tagClickable">{pluralize(newsItems?.length, 'changelog', 'Full')} {dateAgo(newsItems[0]?.dt)}</summary>
			{Object.keys(years)?.sort((a: string, b: string) => parseInt(b) - parseInt(a))?.map((year: string, key: number) => {
				const dat = years[year];
				return <details key={key} className="clickListItem">
						<summary className="tagClickable">{year} <span className="smalltext">({dat?.length} items)</span></summary>
							{dat?.map(displayNewsItem)}
					</details>
			})}
		</details>
	</>
}

export default News;
