"use client"

import { Suspense } from 'react';

import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import useRelease from '@/lib/useRelease';

const ReleaseBlurb = ({ lookup, key }: { lookup: string, key: number }) => {
	const { data, isLoading, error } = useRelease(lookup);

	return (
		<Suspense fallback=<>Loading...</> >
		{(!isLoading && data) && <div key={key}><MakeAlbumBlurb {...data} /></div>}
		</Suspense>
	)
}

export default ReleaseBlurb;
