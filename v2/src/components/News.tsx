import moment from 'moment';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import Tag from '@/components/Tag';
import { dateDiff } from '@/lib/utils';

import newsItems from '@/../public/data/news.json';

type NewsItemType = {
	subject?: string
	body?: string
	dt: string
	link?: string
	category?: string
};

const recentNews = [
	{
		subject: "Scans of Pat Letter: 1994-04-13",
		body: `600 DPI scan of Pat's letter to David Whittemore, penned 1994-03-28, received 1994-04-13`,
		dt: '2023-11-06',
		link: '/letters/19940413',
		category: 'media',
	},
	{
		subject: "Jazz Butcher com V2",
		body: `Work is underway to modernize the underpinnings of the almost-30-year-old JBC website.<p />Many new features are being incorporated and massive backlogs of press items and project data is being processed`,
		dt: '2023-07-15',
	},
];

// get rid of bad data
newsItems.results = newsItems.results.filter((n: any) => n.dt && n.dt.length);
// add new data
recentNews.forEach((r: any) => newsItems.results.push(r));
// get dates in correct format
// and sort by date descending
newsItems.results = newsItems.results.map((n: any) => {
		const dt = n.dt.includes('-') ? moment(n.dt, 'YYYY-MM-DD').valueOf() : parseInt(n.dt, 10) * 1000;
		return { ...n, dt: moment(dt).format('YYYY-MM-DD') }
// @ts-ignore
}).sort((a: NewsItemType, b: NewsItemType) => moment(b.dt) - moment(a.dt));

const News = () => {
let year: number;
return <>
	{newsItems?.results.map((n: NewsItemType, key: number) => {
		const yr = parseInt(n.dt, 10);
		let banner;
		if (yr !== year) {
			year = yr;
			banner = <Tag>{year}</Tag>;
		}
		return <div key={key}>
			{banner}
			<MakeSimpleURI uri={n?.link} text={n.subject || ''} aux={dateDiff(n.dt)}>
				<div dangerouslySetInnerHTML={{ __html: n.body || '' }} />
			</MakeSimpleURI>
		</div>
	})}
</>
}

export default News;
