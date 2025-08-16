"use client"

import Link from 'next/link';
import useContributors from '@/lib/useContributors';
import { type HashedType, pluralize, dateAgo, ts2URI } from '@/lib/utils';
import Loading from '@/components/Loading';

const ShowContributors = ({ contributors, total, recent }: any) => {
	return <details>
		<summary className="tagClickable">{pluralize(total, 'contribution', 'Community image')} {dateAgo(recent)}</summary>
		{Object.keys(contributors)?.map((p: any, key: number) => {
			const contributions = contributors[p];
			if (contributions?.length < 1) return;
			const uniques = contributions.reduce((acc: any, a: any) => {
				const key = JSON.stringify(a);
				return { ...acc, [key]: (acc[key] || 0) + 1};
			}, {});
			return <div key={key} className="clickListItem">
				<details>
				<summary className="tagClickable">{pluralize(contributions.length, 'contribution', p)}</summary>
				{Object.keys(uniques)?.map((x: any, key: number) => {
					const count = uniques[x];
					const { type, datetime, added } = JSON.parse(x);
					return <div key={key}  className="clickListItem">
						<Link href={`/gigs/${ts2URI(datetime)}`}>{datetime}</Link> {pluralize(count, type)} {dateAgo(added)}
					</div>}
				)}
			</details>
			</div>
		})}
	</details>
}

const Contributors = () => {
	const { data, isLoading, error} = useContributors({
		gigmedia: { value: 12, units: 'months' },
	});
	if (!data) return;
	const { gigmedia } = data || {};
	const contributors: HashedType = {};
	const total = gigmedia?.results?.length;
	const recent = gigmedia?.results[0]?.credit_date;
	gigmedia?.results?.forEach((r: any) => {
		const type = r?.type;
		const person = r?.credit;
		const datetime = r?.datetime;
		const added = r?.credit_date;
		if (!contributors[person]) { contributors[person] = []; }
		contributors[person].push({
			type,
			added,
			datetime
		});
	});
	return <Loading isLoading={isLoading} >
		<ShowContributors contributors={contributors} total={total} recent={recent} />
	</Loading>
}

export default Contributors;
