import NotebookHero from '@/components/NotebookHero';
import EmbedMedia from '@/components/EmbedMedia';
import Header from '@/components/Header';
import ReleaseBlurb from '@/components/ReleaseBlurb';
import MakeAlbumBlurb from '@/components/MakeAlbumBlurb';
import { BookSikkorski, BookMiraclesAndWonders, BookEbooks } from '@/components/Books';
import Tag from '@/components/Tag';
import PhotoSet from '@/components/PhotoSet';
import { CommentBubble } from '@/components/PageComments';

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
	<BookEbooks />
	<BookSikkorski />
	<BookMiraclesAndWonders />
</>

const HomeReleases = () =>
<>
		{['highest', 'fire_cholmondley', 'fire_violent', 'fire_wasted', 'adventurers'].map(ReleaseBlurb)}
		<Tag>
		Max Eider release
		</Tag>
		<MakeAlbumBlurb {...relatedReleases} key={66} />
</>

const SimonTaylor = () => {
	const images = [
		{ src: '/images/merch/taylor/taylor1.jpg', alt: 'Simon Taylor painting' },
		{ src: '/images/merch/taylor/taylor2.jpg', alt: 'Simon Taylor postcard set' },
		{ src: '/images/merch/taylor/taylor3.jpg', alt: 'Simon Taylor print' },
	];
	return <PhotoSet title="Simon Taylor art" photos={images}>
	<p />
	Simon Taylor, member of the JBQ and trumpet player on the last album has painted a
	series featuring Pat and Raoul. I’ve [Philip Snow] just bought the one pictured on my mantle piece.
	<p />
	We’re offering A4 prints at £10 each, or postcard sets (likely for £10 the set).
	Some original canvasses are for sale too and Simon is also willing to take commissions.
	A typical 50x40cm canvas will cost about £250. All these prices plus
	postage to wherever you are in the world.
	<p />
	If you’re interested, please FB message Philip Snow, or click the <CommentBubble className="commentBubbleSimple" /> and leave a message.
	Tell me what you want and we’ll try to accommodate.
	All profits go to the artist.
	❄️”
	<p />
	<div className="date">2025-10-08</div>
	</PhotoSet>
}

const Merch = (): React.ReactNode =>
	<div className="flex flex-col min-[1000px]:flex-row gap-1">
		<div className="w-full min-[1000px]:w-[60%]">
			<SimonTaylor />
			<Tag>Jazz Butcher books</Tag>
			<HomeBooks />
		</div>
		<div className="w-full min-[1000px]:w-[40%]">
			<Tag>Jazz Butcher releases</Tag>
			<HomeReleases />
		</div>
	</div>

export default Merch;
