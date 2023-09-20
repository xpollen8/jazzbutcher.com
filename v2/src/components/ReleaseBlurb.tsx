"use client"

import { Suspense } from 'react';

import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import useRelease from '@/lib/useRelease';

const ReleaseBlurb = ({ lookup, key }: { lookup: string, key: number }) => {
	const { data, isLoading, error } = useRelease(lookup);
	const release = data?.results[0];

	return (
		<Suspense fallback=<>Loading...</> >
		{(!isLoading && release) && <div key={key}><MakeAlbumBlurb {...release} /></div>}
		</Suspense>
	)
}

export default ReleaseBlurb;
