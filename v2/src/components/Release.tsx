import { releaseByLookup } from '../lib/macros';
import MakeAlbumBlurb from './MakeAlbumBlurb';

const Release = async ({ lookup }: { lookup: string }) => <MakeAlbumBlurb {...(await releaseByLookup(lookup))} />

export default Release;
