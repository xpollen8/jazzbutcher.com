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

const Concert = () =>
	<div className="listItem">
	<b>A new thing!</b> <span className="smalltext">2025-05-03</span>
	<p/>
	For the longest time, I've wanted to be able to listen to JBC shows in a playlist
	format rather than in a big blind MP3.  There was no pre-built thing that would
	suit the needs of JBC com, so we rolled our own. <span className="smalltext">(If you're a CSS wiz who can improve this, hit me up)</span>
	<p />
	Eventually all live gigs (and there are LOTS of 'em!) will be presented in
	this gigplayer.
	<p />
	To get us started, please enjoy this wonderful 2005 Hamburg show.
	-David
	<GigPlayer
		src="https://s3.amazonaws.com/assets.jazzbutcher.com/audio/gigs/20051027/20051027_MastersOfBudvar_JazzButcher_Hamburg.mp3"
		tracks={[
			{ title: `Introduction`, start: startSeconds(0) },
			{ title: `Partytime`, start: startSeconds('1:16'), comment: `Pat + Max` },
			{ title: `It Has To Be You`, author: `Max Eider`, start: startSeconds('6:25')  },
			{ title: `La Mer`, start: startSeconds('11:50') },
			{ title: `Who Loves You Now?`, start: startSeconds('15:38') },
			{ title: `Whaddya`, start: startSeconds('20:04'), version: `backing track` },
			{ title: `Southern Mark Smith`, start: startSeconds('24:48') },
			{ title: `Girls Who Keep Goldfish`, start: startSeconds('31:18'), version: `drum machine` },
			{ title: `Shame About You`, start: startSeconds('35:00'), version: `backing track` },
			{ title: `My Desert`, start: startSeconds('39:23') },
			{ title: `Caroline Wheeler's Birthday Present`, start: startSeconds('43:00'), version: `spooky synth intro` },
			{ title: `Bigfoot Motel`, start: startSeconds('48:27') },
			{ title: `Zombie Love`, start: startSeconds('52:53') },
			//encore 1
			{ title: `I Wish I Could Sprechen Sie Deutsch`, start: startSeconds('1:00:27') },
			{ title: `Soul Happy Hour`, start: startSeconds('1:00:56') },
			{ title: `Take The Skinheads Bowling`, author: `Camper Van Beethoven`, start: startSeconds('1:03:35') },
			{ title: `Sweet Jane`, author: `Lou Reed`, start: startSeconds('1:09:50'), annotation: [
				{ start: startSeconds('1:12:10'), comment: `"March of the wooden soldiers" is a reference to the 1990 KCRW performance when Pat and Gerald Langley covered this song`, link: `/gigs/1990/Nov22` } 
			]},
		]}
		header=<GigPlayerHeader
			artist="Full band set"
			venue='KIR'
			city='Hamburg'
			country='Germany'
			datetime='2005-10-27'
		/>
		footer=<GigPlayerFooter
			comment="Masters of Budvar present The Jazz Butcher Conspiracy Soul Revue featuring Pat Fish , Max Eider & Owen Jones plus Curtis E. Johnson and Joe Woolley"
			credit='Owen Jones;;'
		/>
		/>
	</div>

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
	<main>
		<div className="flex flex-wrap justify-center gap-1">
			<div className="grow max-w-lg">
				<Concert />
				<div className="border p-3 bg-slate-100 drop-shadow-sm mb-3">
					<Link href="/memoriam">
						<Memorial home={true} />
					</Link>
				</div>
				<MostRecentNews />
				<RecentUpdates />
					<OnThisDay />
			</div>
			<div className="max-w-lg grow">
				<Tag style={{ marginBottom: '10px' }}>Recent Releases</Tag>
				<HomeReleases />
				<div className="max-w-lg grow">
					<Tag style={{ marginBottom: '10px' }}>Jazz Butcher Books</Tag>
					<HomeBooks />
				</div>
			</div>
		</div>
	</main>
</>

export default Home;
