import moment from 'moment';
import { releaseByLookup } from '@/lib/macros';
import apiData from '@/lib/apiData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { ReleaseType } from '@/components/Release';

const Releases = async () => {
	const releases = await apiData('releases');
	return <>
		<Header section="releases" />
		{releases?.albums?.sort((a: ReleaseType, b: ReleaseType) => moment(b.year).diff(moment(a.year))).map(MakeAlbumBlurb)}
		<Footer />
	</>
}

export default Releases;
