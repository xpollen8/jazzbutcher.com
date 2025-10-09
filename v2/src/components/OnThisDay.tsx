"use client"

import Tag from '@/components/Tag';
import { GigSearchResults } from '@/components/GigSearch';
import useOnThisDay from '@/lib/useOnThisDay';
import Loading from '@/components/Loading';

const OnThisDay = () => {
	const { data, isLoading, error} = useOnThisDay();

	return <Loading isLoading={isLoading} >
		<GigSearchResults results={data} banner={() => <Tag>On This Day in JBC History</Tag>} />
		{(!data?.numResults) && <div className="listItem">No Gigs on this date! This is a JBC Holiday!</div>}
	</Loading>
}

export default OnThisDay;
