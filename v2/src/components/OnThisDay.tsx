"use client"

import { Suspense } from 'react';
import Link from 'next/link';
import Tag from '@/components/Tag';
import { GigSearchResults } from '@/components/GigSearch';
import useOnThisDay from '@/lib/useOnThisDay';
import { ts2URI } from '@/lib/utils';

const OnThisDay = () => {
	const { data, isLoading, error} = useOnThisDay();
	const gigs = data?.results;
	if (!gigs?.length) return;
	return (<Suspense fallback={<>Loading...</>}>
		<Tag>On This Day in JBC History</Tag>
		{gigs.map((g: any, key: number) => {
			return <div key={key} className="listItem">
				<Link href={ts2URI(g.datetime)}><b>{g.venue}</b> {g.city}, {g.country}</Link>
			</div>
		})}
	</Suspense>)
}

export default OnThisDay;
