"use client"

import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import useRelease from '@/lib/useRelease';
import Loading from '@/components/Loading';

const ReleaseBlurb = ({ lookup, key }: { lookup: string, key: number }) => {
	const { data, isLoading, error } = useRelease(lookup);
	const release = data?.results[0] || {};

	return <Loading isLoading={isLoading} silent={true} >
		<div key={key}><MakeAlbumBlurb {...release} /></div>
	</Loading>
}

export default ReleaseBlurb;
