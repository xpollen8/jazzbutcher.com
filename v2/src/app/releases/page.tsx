import moment from 'moment';
import apiData from '@/lib/apiData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { ReleaseType } from '@/components/Release';
import { parseYear } from '@/lib/macros';
import Tag from '@/components/Tag';

const Releases = async () => {
	const releases = await apiData('releases');
	return <>
		<Header section="releases" />
		{(() => {
			let year = 999;
			return releases?.albums?
				.sort((a: ReleaseType, b: ReleaseType) => moment.utc(b.year).diff(moment.utc(a.year)))
				.map((item: any, key: number) => {
					const yr = parseYear(item.year);
					let tag = <></>;
					if (yr !== year) {
						tag = <Tag>{yr}</Tag>
						year = yr;
					}
					return <>{tag}{MakeAlbumBlurb(item, key)}</>;
				});
		})()}
		<Footer />
	</>
}

export default Releases;
