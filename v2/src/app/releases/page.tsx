"use client";

import { Suspense } from 'react';

import moment from 'moment';
import useReleases from '@/lib/useReleases';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { ReleaseType } from '@/components/Release';
import { parseYear } from '@/lib/macros';
import Tag from '@/components/Tag';

const Releases = () => {
	const { data, isLoading, error } = useReleases();
	const releases = data?.albums;
	return <Suspense fallback=<>Loading...</> >
		<Header section="releases" />
		{(!isLoading && releases) && (<>
			{(() => {
				let year = 999;
				return releases?.sort((a: ReleaseType, b: ReleaseType) => moment.utc(b.dtreleased).diff(moment.utc(a.dtreleased)))
					.map((item: any, key: number) => {
						const yr = parseYear(item.dtreleased);
						let tag = <></>;
						if (yr !== year) {
							tag = <Tag>{yr}</Tag>
							year = yr;
						}
						return <>{tag}{MakeAlbumBlurb(item, key)}</>;
					});
			})()}
		</>)}
		<Footer />
	</Suspense>
}

export default Releases;
