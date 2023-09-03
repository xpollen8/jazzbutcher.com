import { releaseByLookup } from '@/lib/macros';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { ReleaseType } from '@/components/Release';

const ReleaseBlurb = async ({ lookup }: { lookup: string }) => {
	const release: ReleaseType = await releaseByLookup(lookup);
	return <div><MakeAlbumBlurb {...release} /></div>
}

export default ReleaseBlurb;
