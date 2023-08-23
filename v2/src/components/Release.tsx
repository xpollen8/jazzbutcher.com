import { releaseByLookup } from '@/lib/macros';
import MakeAlbumBlurb from './MakeAlbumBlurb';

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

const Release = async ({ lookup }: { lookup: string }, key: number) => <div key={key}><MakeAlbumBlurb {...(await releaseByLookup(lookup))} /></div>

export default Release;
