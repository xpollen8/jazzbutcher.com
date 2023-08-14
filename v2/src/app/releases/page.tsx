import moment from 'moment';
import { releaseByLookup } from '../../lib/macros';
import apiData from '../../lib/apiData';
import Header from '../../components/Header';
import MakeAlbumBlurb from '../../components/MakeAlbumBlurb';
import { ReleaseType } from '../../components/Release';

const Releases = async () => {
	const releases = await apiData('releases');
	return <>
		<Header section="albums" />
		{releases?.albums?.sort((a: ReleaseType, b: ReleaseType) => moment(b.year).diff(moment(a.year))).map(MakeAlbumBlurb)}
	</>
}

export default Releases;
