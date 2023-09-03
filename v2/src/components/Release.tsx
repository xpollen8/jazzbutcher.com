"use client"

import MakeAlbumBlurb from './MakeAlbumBlurb';
import useRelease from '@/components/useRelease';

export type ReleaseType =  {
	type?: string
	href?: string
	title?: string
	thumb?: string
	blurb?: string
	year?: string
	buy?: string
	project?: string
	lookup?: string
	label?: string
	catalog?: string
	media?: string
	country?: string
	credit_g?: string
	credit_u?: string
	credit_d?: string
	contribution?: string
}

export type ReleaseTypeWithChildren = ReleaseType & { children?: string | React.ReactElement }

const Release = ({ release }: { release: ReleaseTypeWithChildren }, key: number) => {
	const lookup = release?.lookup ?? '';
	const { data, isLoading, error } = useRelease(lookup);
	const songs = data?.results;
	if (isLoading) return <></>;
	return (<>
		<div key={key}><MakeAlbumBlurb {...release} /></div>
		<blockquote>
			{songs?.map((song: any, key: number) => <div key={key}>{song.title}</div>)}
		</blockquote>
	</>)
}

export default Release;
