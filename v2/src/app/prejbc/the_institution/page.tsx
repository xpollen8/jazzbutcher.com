import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import Tag from '@/components/Tag';
import PhotoSet from '@/components/PhotoSet';

const images_PhilipSnow1 = [
		{ src: "/assets/projects/TheInstitution/6+Sheldonian+1.jpg", alt: "Live Sheldonian #1" },
		{ src: "/assets/projects/TheInstitution/6+Sheldonian+2.jpg", alt: "Live Sheldonian #2" },
		{ src: "/assets/projects/TheInstitution/6+Sheldonian+3.jpg", alt: "Live Sheldonian #3" },
		{ src: "/assets/projects/TheInstitution/6+Sheldonian+4.jpg", alt: "Live Sheldonian #4" },
		{ src: "/assets/projects/TheInstitution/Institution_Shirt_1.jpg", alt: "shirt 1" },
		{ src: "/assets/projects/TheInstitution/Institution_Shirt_2.jpg", alt: "shirt 2" },
		{ src: "/assets/projects/TheInstitution/Institution_Shirt_3.jpg", alt: "shirt 3" },
];

const images_PhilipSnow2 = [
	{ src: "/assets/projects/TheInstitution/SB2 2.jpg", alt: "inst 5" },
	{ src: "/assets/projects/TheInstitution/SB2 29b.jpg", alt: "inst 6" },
	{ src: "/assets/projects/TheInstitution/SB2 30a.jpg", alt: "inst 7" },
];

const images_rolo = [
		{ src: "/images/20220517/20220517_fb_rolo_institution1.jpg", alt: "Rolo FB comments #1" },
		{ src: "/images/20220517/20220517_fb_rolo_institution2.jpg", alt: "Rolo FB comments #2" },
		{ src: "/images/20220517/20220517_fb_rolo_institution3.jpg", alt: "Rolo FB comments #3" },
		{ src: "/images/20220517/20220517_fb_rolo_institution4.jpg", alt: "Rolo FB comments #4" },
		{ src: "/images/20220517/20220517_fb_rolo_institution5.jpg", alt: "Rolo FB comments #5" },
		{ src: "/images/20220517/20220517_fb_rolo_institution6.jpg", alt: "Rolo FB comments #6" },
];

const images_vinyl = [
	{ src: "/assets/projects/TheInstitution/TheInstitution_signed.jpg", alt: "front" },
	{ src: "/assets/projects/TheInstitution/TheInstitution_vinyl.jpg", alt: "back" },
];

const unknown_demo_tracks = [
	{ mediaurl: "/assets/projects/TheInstitution/Institution_JonathanStephenson_Vampire.mp3", title: "Vampire", comment: "Unknown provenance" },
	{ mediaurl: "/assets/projects/TheInstitution/Institution_Unknown_InnocentsAndEnglishmen.mp3", title: "Innocents And Englishman", comment: "Unknown provenance" },
];

const stephenson_demo_tracks = [
	{ mediaurl: "/assets/projects/TheInstitution/Institution_JonathanStephenson_InnocentsAndEnglishmen.mp3", title: "Innocents And Englishman", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-11-04", children: "Probably our masterpiece!  Words of course, Patrick, sax Patrick, and I think the music was a joint effort." },

	{ mediaurl: "/assets/projects/TheInstitution/Institution_JonathanStephenson_JaneAndJon.mp3", title: "Jane And Jon", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14", comment: "different version from single", children: "About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall. This track by Pete." },

	{ mediaurl: "/assets/projects/TheInstitution/Institution_JonathanStephenson_JeremyAiroplane.mp3", title: "Jeremy Airoplane", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14", children: "About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall. This track by Rolo." },

	{ mediaurl: "/assets/projects/TheInstitution/Institution_JonathanStephenson_LoveAndARecordContract.mp3", title: "Love And A Record Contract", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14", children: "About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall.  This track by Rolo" },

	{ mediaurl: "/assets/projects/TheInstitution/Institution_JonathanStephenson_Stephanie.mp3", title: "Stephanie", mediacredit: "Jonathan Stephenson", mediacrediturl: "https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw", mediacreditdate: "2021-10-14", comment: "different version from single", children: "About 1978. About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall.   This track:  Pat" },
];

const single = [
	{ mediaurl: "/assets/projects/TheInstitution/Institution_JaneAndJon.mp3", title: "Jane And Jon", comment: "A side" },
	{ mediaurl: "/assets/projects/TheInstitution/Institution_Stephanie.mp3", title: "Stephanie", comment: "B side" },
]

const Institution = () => 
<>
	<Header section="the_institution" />
	<div className="gig_institution" />
	<main>
		<PhotoSet photos={images_rolo} title='Rolo McGinty conversations from Facebook (2022-05-17)' />
		<PhotoSet photos={images_PhilipSnow1} title='Images from Philip Snow - Set #1' />
		<PhotoSet photos={images_PhilipSnow2} title='Images from Philip Snow - Set #2' />
		<PhotoSet photos={images_vinyl} title="The 'Jane and Jon'/'Stephanie' single" />
		<blockquote className="listItem">
			<blockquote>
			{single.map((data: any, key: number) => <EmbedMedia key={key} data={data} > <blockquote>{data?.children}</blockquote> </EmbedMedia>)}
			</blockquote>
			<code>
			<br />	https://www.discogs.com/release/5338218-The-Institution-Jane-And-Jon
			<br />	7er:
			<br />	Label:	Industrial Accident – SGS-112
			<br />	Format:	
			<br />	Vinyl, 7, 45 RPM, White Label
			<br />	Country:	UK
			<br />	Released:	1979-12
			<br />	Genre:	Rock, Reggae
			<br />	Style:	Post-Punk, Dub
			<p />	
			<br />	Credits
			<br />	Bass – Rolo (3)
			<br />	Drums – Rob Wilford
			<br />	Guitar – Max Eider
			<br />	Vocals, Saxophone – Pat Fish
			<p />	
			<br />	Issued on a hand-stamped white label in a plain white sleeve.
			<p />	
			<br />	Other original members included Johnathan Stephenson on Synthesizers and John Duvall on Drums.
			<br />	Both left before the record was cut.
			</code>
		</blockquote>

		<Tag>Demo Tracks</Tag>
		<blockquote className="listItem">
			<blockquote>
				{unknown_demo_tracks.map((data: any, key: number) => <EmbedMedia key={key} data={data} > <blockquote>{data?.children}</blockquote> </EmbedMedia>)}
				<hr />
				{stephenson_demo_tracks.map((data: any, key: number) => <EmbedMedia key={key} data={data} > <blockquote>{data?.children}</blockquote> </EmbedMedia>)}
			</blockquote>
		</blockquote>
	</main>
	<Footer />
</>

export default Institution;
