import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import releasesStatic from '@/../public/data/releases.json';

const ReleaseBlurb = (lookup: string, key: number) => <MakeAlbumBlurb key={key} {...releasesStatic?.results?.find((f: any) => f.lookup === lookup) || {}} />

export default ReleaseBlurb;
