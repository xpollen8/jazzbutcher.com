import Image from 'next/image';
import MyLink from '@/components/MyLink';
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

export const GlassBook = () => (
<div style={{ display: 'flex' }}>
	<div className="bandcamp-merch-embed" style={{border: "1px solid #ddd", padding: "20px", maxWidth: "50%", fontFamily: "Arial, sansSerif", background: "#fff" }}>
		<div className="merch-image" style={{ textAlign: "center", marginBottom: "15px" }}>
			<MyLink href="https://skill.bandcamp.com/merch/pre-order-a-fish-of-a-different-feather-the-jazz-butcher-and-the-glass-records-era-1981-89-by-david-e-barker-signed-copy" target="_blank">
				<Image width={500} height={100} src="https://f4.bcbits.com/img/0048225441_36.jpg" alt="Pre-order A Fish of a Different Feather - Signed Copy" style={{maxWidth: "100%", height: "auto" }} />
			</MyLink>
		</div>
		<div className="merch-details">
			<h3 style={{margin: "0 0 5px 0", fontSize: "16px", lineHeight: "1.3" }}>
				<MyLink href="https://skill.bandcamp.com/merch/pre-order-a-fish-of-a-different-feather-the-jazz-butcher-and-the-glass-records-era-1981-89-by-david-e-barker-signed-copy" target="_blank" style={{textDecoration: "none", color: "#333" }}>
					Pre-order A Fish of a Different Feather: "The JAZZ BUTCHER and the Glass Records Era 1981-89 by David E Barker, signed copy
				</MyLink>
			</h3>
			<p style={{margin: "5px 0", color: "#666", fontSize: "14px" }}>from <MyLink href="https://skill.bandcamp.com/" target="_blank" style={{color: "#0687f5", textDecoration: "none" }}>Skill</MyLink></p>
			<p style={{margin: "5px 0", fontWeight: "bold", color: "#333", fontSize: "14px" }}>Book/Magazine</p>
			<p style={{margin: "5px 0", color: "#666", fontSize: "13px", lineHeight: "1.4" }}>350-page A5 book, printed on heavyweight stock and signed by the author. Print-to-order Bandcamp limited edition.</p>
			<p style={{margin: "5px 0", color: "#666", fontSize: "13px", fontStyle: "italic" }}>Shipping out on or around January 29, 2027</p>
			<p style={{margin: "5px 0", fontWeight: "bold", color: "#333", fontSize: "16px" }}>£14.99 GBP</p>
			<MyLink href="https://skill.bandcamp.com/merch/pre-order-a-fish-of-a-different-feather-the-jazz-butcher-and-the-glass-records-era-1981-89-by-david-e-barker-signed-copy" target="_blank" style={{display: "inlineBlock", background: "#0687f5", color: "#fff", padding: "5px 20px", textDecoration: "none", borderRadius: "4px", fontSize: "14px", marginTop: "5px" }}>View on Bandcamp</MyLink>
		</div>
	</div>

	<div className="bandcamp-merch-embed" style={{ border: "1px solid #ddd", padding: "20px", maxWidth: "50%", fontFamily: "Arial, sans-serif", background: "#fff"}}>
		<div className="merch-image" style={{ textAlign: "center", marginBottom: "15px" }}>
			<MyLink href="https://skill.bandcamp.com/merch/pre-order-a-fish-of-a-different-feather-the-jazz-butcher-and-the-glass-records-era-1981-89-by-david-e-barker-limited-signed-boxed-edition-with-bedroom-bonanza-demos-cassette" target="_blank">
				<Image width={500} height={100} src="https://f4.bcbits.com/img/0048225270_36.jpg" alt="Pre-order A Fish of a Different Feather" style={{ maxWidth: "100%", height: "auto" }} />
			</MyLink>
		</div>
		<div className="merch-details">
			<h3 style={{ margin: "0 0 5px 0", fontSize: "16px", lineHeight: "1.3" }}>
				<MyLink href="https://skill.bandcamp.com/merch/pre-order-a-fish-of-a-different-feather-the-jazz-butcher-and-the-glass-records-era-1981-89-by-david-e-barker-limited-signed-boxed-edition-with-bedroom-bonanza-demos-cassette" target="_blank" style={{ textDecoration: "none", color: "#333" }}>
					Pre-order A Fish of a Different Feather: The JAZZ BUTCHER and the Glass Records Era 1981-89 by David E Barker. Limited signed boxed edition with Bedroom Bonanza demos cassette
				</MyLink>
			</h3>
			<p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>from <MyLink href="https://skill.bandcamp.com/" target="_blank" style={{color: "#0687f5", textDecoration: "none" }}>Skill</MyLink></p>
			<p style={{margin: "5px 0", fontWeight: "bold", color: "#333", fontSize: "14px" }}>Book/Magazine</p>
			<p style={{margin: "5px 0", fontWeight: "bold", color: "#333", fontSize: "16px" }}>£23.99 GBP</p>
			<MyLink href="https://skill.bandcamp.com/merch/pre-order-a-fish-of-a-different-feather-the-jazz-butcher-and-the-glass-records-era-1981-89-by-david-e-barker-limited-signed-boxed-edition-with-bedroom-bonanza-demos-cassette" target="_blank" style={{display: "inlineBlock", background: "#0687f5", color: "#fff", padding: "5px 20px", textDecoration: "none", borderRadius: "4px", fontSize: "14px", marginTop: "5px" }}>View on Bandcamp</MyLink>
		</div>
	</div>

</div>
)

const Merch = (): React.ReactNode =>
	<div className="flex flex-col min-[1000px]:flex-row gap-1">
		<div className="w-full min-[1000px]:w-[60%]">
			<GlassBook />
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
