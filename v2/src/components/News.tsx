import moment from 'moment';
import Link from 'next/link';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import Tag from '@/components/Tag';
import EmbedMedia from '@/components/EmbedMedia';
import { dateDiff } from '@/lib/utils';
import { Credit } from '@/components/GenericWeb';

import jsonNewsItems from '@/../public/data/news.json';

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
		subject: "jazzbutcher.com V2 launched",
		body: <>For its first 10,588 days, jazzbutcher.com was delivered by David Whittemore&apos;s &quot;HTDB&quot; toy language.
		<p />While effective in serving you the wholesome Jazz Butcher information you&apos;ve come to love, HTDB had a few flaws: 1) Only Whittemore knew how to use it, 2) It was difficult to manage data in a structured manner. 3) There are easier to use ways to generate web content.
		<p />In the interest of future-proofing jazzbutcher.com, in 2023, Whittemore spent 6 months porting the HTDB content into structured data,
		using the React framework.  In the process, much new content was added, and navigation was made more concise.
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

recentNews.forEach((r: any) => jsonNewsItems?.results.push(r));

const newsItems: NewsItemType[] = jsonNewsItems?.results?.filter((n: NewsItemType) => n.dt && n.dt.length)?.map((n: NewsItemType) => {
		const dt = n.dt.includes('-') ? moment(n.dt, 'YYYY-MM-DD HH:mm:SS').valueOf() : parseInt(n.dt, 10) * 1000;
		return { ...n, dt: moment(dt).format('YYYY-MM-DD HH:mm:SS') }
// @ts-ignore
}).sort((a: NewsItemType, b: NewsItemType) => moment(b.dt) - moment(a.dt));

const displayNewsItem = (n: NewsItemType) => {
	const body = (typeof n.body === 'object') ? n.body : <div dangerouslySetInnerHTML={{ __html: n.body || '' }} />
	return <MakeSimpleURI uri={n?.link} text={n.subject || ''} aux={dateDiff(n.dt)} className="listItem">
		{body}
		{(n?.credit) && <Credit g={n.credit} />}
	</MakeSimpleURI>
}

export const MostRecentNews = () => displayNewsItem(recentNews[0] as NewsItemType);

const News = () => {
let year: number;
return <>
	{newsItems?.map((n: NewsItemType, key: number) => {
		const yr = parseInt(n.dt, 10);
		let banner;
		if (yr !== year) {
			year = yr;
			banner = <Tag>{year}</Tag>;
		}

		return <div key={key}>
			{banner}
			{displayNewsItem(n)}
		</div>
	})}
</>
}

export default News;
