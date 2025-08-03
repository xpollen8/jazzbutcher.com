"use client"

import { Suspense } from 'react';
import Tag from '@/components/Tag';
import { GigSearchResults } from '@/components/GigSearch';
import useOnThisDay from '@/lib/useOnThisDay';

const OnThisDay = () => {
	const { data, isLoading, error} = useOnThisDay();
	const gigs = data?.results;
	if (!gigs?.length) return;
	return (<Suspense fallback={<>Loading...</>}>
		<Tag>On This Day in JBC History</Tag>
		<GigSearchResults results={data} />
	</Suspense>)
}

export default OnThisDay;
