import moment from 'moment';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import { dateDiff } from '@/lib/utils';

import newsItems from '@/../public/data/news.json';

type NewsItemType = {
	subject: string
	body: string
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
];

recentNews.forEach((r: NewsItemType) => newsItems.results.push(r));
newsItems.results = newsItems.results.filter((n: NewsItemType) => n.dt.length).map((n: NewsItemType) => {
		const dt = n.dt.includes('-') ? moment(n.dt, 'YYYY-MM-DD').valueOf() : parseInt(n.dt, 10) * 1000;
		return { ...n, dt: moment(dt).format('YYYY-MM-DD') }
}).sort((a: NewsItemType, b: NewsItemType) => moment(b.dt) - moment(a.dt));

const News = () => {
return <>
	{newsItems?.results.map((n: NewsItemType, key: number) => {
		return <div key={key}>
			<MakeSimpleURI uri={n?.link} text={n.subject} aux={dateDiff(n.dt)}>
				<div dangerouslySetInnerHTML={{ __html: n.body }} />
			</MakeSimpleURI>
		</div>
	})}
</>
}

export default News;
