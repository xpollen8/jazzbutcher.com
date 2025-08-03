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
import { startSeconds } from '@/lib/utils';
import GigPlayer, { GigPlayerHeader, GigPlayerFooter } from '@/components/GigPlayer';

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
	/*
	<p />
	‘These songs belong together so it made sense to revisit the other two and do a physical release,’ Max says. ‘It’s great to be working with Dave again. Augustus will probably be devastated but to be honest I’m not sure he still has mental capacity, if you know what I mean. He’s 111 years old for fuck’s sake.’
	<p />
	Cover art by multi-award-winning cartoonist and old friend Dave Coverly
	<p />
	Includes digital pre-order of All Shall Be Well. You get 1 track now (streaming via the free Bandcamp app and also available as a high-quality download in MP3, FLAC and more), plus the complete album the moment it’s released.
	*/
};

const HomeBooks = () =>
<>
	<BookSikkorski />
	<BookMiraclesAndWonders />
</>

const HomeReleases = () =>
<>
		<MakeAlbumBlurb {...relatedReleases} key={1} />
		<ReleaseBlurb lookup='highest' key={2} />
		<ReleaseBlurb lookup='fire_cholmondley' key={3} />
		<ReleaseBlurb lookup='fire_violent' key={4} />
		<ReleaseBlurb lookup='fire_wasted' key={5} />
		<ReleaseBlurb lookup='adventurers' key={6} />
</>

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
	<main>
		<div className="flex flex-col min-[1000px]:flex-row gap-1">
			<div className="w-full min-[1000px]:w-1/2">
				<div className="border p-3 bg-slate-100 drop-shadow-sm mb-1">
					<Link href="/memoriam">
						<Memorial home={true} />
					</Link>
				</div>
				<MostRecentNews />
				<RecentUpdates />
					<OnThisDay />
			</div>
			<div className="w-full min-[1000px]:w-1/2">
				<Tag>Recent Releases</Tag>
				<HomeReleases />
				<div className="max-w-lg">
					<Tag style={{ marginBottom: '10px' }}>Jazz Butcher Books</Tag>
					<HomeBooks />
				</div>
			</div>
		</div>
	</main>
</>

export default Home;
