import Link from 'next/link';
import Header from '@/components/Header';
import ReleaseBlurb from '@/components/ReleaseBlurb';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import OnThisDay from '@/components/OnThisDay';
import RecentUpdates from '@/components/RecentUpdates';
import Memorial from '@/components/Memorial';
import { BookSikkorski, BookMiraclesAndWonders } from '@/components/Books';
import { MostRecentNews } from '@/components/News';
import Tag from '@/components/Tag';
import Contributors from '@/components/Contributors';

const relatedReleases = {
	title: 'All Shall Be Well',
	buy: 'https://glassmodern.bandcamp.com/album/all-shall-be-well',
	media: 'CD',
	country: 'UK',
	label: 'glass_modern',
	thumb: '/images/releases/20240202_MaxEider_AllShallBeWell',
	blurb: `
	Tundraducks Records supremo Augustus Pokerback has shocked the music world by announcing that Max Eider’s new EP will be released on Glass Modern. ‘I’ve stitched Barker up like a kipper,’ Pokerback commented. ‘I can’t believe I’m rid of that idiot at last.’
	<p />
	In addition to the new title track, ‘All Shall Be Well’, the CD/DL features remixed/remastered versions of Eider’s last two digital single releases, ‘Go Gentle’ and ‘The Meek’, the latter including new vocal tracks by long-time collaborator and singer supreme June Miles-Kingston.
	`
};

const HomeBooks = () =>
<>
	<BookSikkorski />
	<BookMiraclesAndWonders />
</>

const HomeReleases = () =>
<>
		{['highest', 'fire_cholmondley', 'fire_violent', 'fire_wasted', 'adventurers'].map(ReleaseBlurb)}
		<MakeAlbumBlurb {...relatedReleases} key={66} />
</>

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
	<main>
		<div className="flex flex-col min-[1000px]:flex-row gap-1">
			<div className="w-full min-[1000px]:w-[60%]">
				<div className="border p-3 bg-slate-100">
						<Memorial home={true} />
				</div>
				<OnThisDay />
				<MostRecentNews />
				<RecentUpdates />
				<Contributors />
				<Tag style={{ marginBottom: '10px' }}>Jazz Butcher Books</Tag>
				<HomeBooks />
			</div>
			<div className="w-full min-[1000px]:w-[40%]">
				<Tag>Recent Releases</Tag>
				<HomeReleases />
			</div>
		</div>
	</main>
</>

export default Home;
