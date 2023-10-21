import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import PhotoSet from '@/components/PhotoSet';

const peterson1 = [
	{ src: '/assets/projects/SonicTonix/SonicTonix_IMG_0175.jpg', alt: 'live1', credit: 'Mr Warphole' },
	{ src: '/assets/projects/SonicTonix/SonicTonix_IMG_0176.jpg', alt: 'live2', credit: 'Mr Warphole' },
	{ src: '/assets/projects/SonicTonix/SonicTonix_IMG_0177.jpg', alt: 'live3', credit: 'Mr Warphole' },
	{ src: '/assets/projects/SonicTonix/SonicTonix_IMG_0178.jpg', alt: 'live4', credit: 'Mr Warphole' },
];

const sonic_single = [
	{ src: '/assets/projects/SonicTonix/SonicTonix_A.jpg', alt: "A" },
	{ src: '/assets/projects/SonicTonix/SonicTonix_B.jpg', alt: "B" },
	{ src: '/assets/projects/SonicTonix/sonic_tonix.jpg', alt: "cover" },
	{ src: '/assets/projects/SonicTonix/sonic_tonix_back.jpg', alt: "back" },
];

const tonix_single = [
	{ src: '/assets/projects/TheTonix/TheTonix_front.jpg', alt: "sleeve front" },
	{ src: '/assets/projects/TheTonix/TheTonix_back.jpg', alt: "sleeve back" },
	{ src: '/assets/projects/TheTonix/TheTonix_vinyl.jpg', alt: "vinyl" },
	{ src: '/assets/projects/TheTonix/tonix_A.jpg', alt: "single A" },
	{ src: '/assets/projects/TheTonix/tonix_B.jpg', alt: "single B" },
];

const kirman_tonix = [
	{ src: '/assets/projects/TheTonix/TheTonix_TonyKirman_Pat.jpg', alt: "Pat", credit: 'Tony Kirman', credit_date: '1980' },
];

const barker_tonix = [
	{ src: '/assets/projects/TheTonix/7+Tonix+1+(1).jpg', alt: "live 1" },
	{ src: '/assets/projects/TheTonix/7+Tonix+1+(2).jpg', alt: "live 2" },
	{ src: '/assets/projects/TheTonix/7+Tonix+1+(3).jpg', alt: "live 3" },
	{ src: '/assets/projects/TheTonix/7+Tonix+1+(4).jpg', alt: "live 4" },
	{ src: '/assets/projects/TheTonix/7+Tonix+1+(5).jpg', alt: "live 5" },
	{ src: '/assets/projects/TheTonix/7+Tonix+1+(6).jpg', alt: "live 6" },
];

const glass_comp = [
	{ src: '/assets/projects/TheTonix/tonix_wonder_world_of_glass.jpg', alt: "wonderful world of glass" },
];

const TheTonix = () => 
<>
	<div className="gig_thetonix" />

	<PhotoSet
		title="Kirman photoset"
		photos={kirman_tonix}
		credit="Owen Jones"
		credit_date="2021-12-11"
		description="Pat singing with The Tonix - Caribbean Club, Oxford, 1980. Photo by Tony Kirman (that unpleasant looking stain is on my print of the photo, not on Pat's jacket..)"
	/>

	<PhotoSet
		title="Dave E. Barker photoset"
		photos={barker_tonix}
	/>

	<PhotoSet
		title="The 'Tonix' Single"
		photos={tonix_single}
		credit_url="https://www.discogs.com/release/2270038-The-Tonix-Strangers"
		description=<>
			Pat Fish -Vocals<br />
			John Silver - Bass<br />
			Dave Goldie - Guitar<br />
			Pete Millson - Guitar<br />
			Owen Jones - Drums<br />
			<br />	Label:	109 Product – STEG 002
			<br />	Format:	
			<br />	Vinyl, 7
			<br />	Country:	UK
			<br />	Released:	1981
			<br />	Genre:	Rock
			<br />	Style:	New Wave
			<br />	A		Strangers
			<br />	B		Talk To Me
			<br />	Recorded At – Foel Studio
			<br />	Phonographic Copyright ℗ – Cherry Red Music Ltd.
			<br />	Pressed By – SNA
			<br />	Cover [Design] – Crispin Plaskitt
			<br />	Guitar, Backing Vocals – Max Eider
			<br />	Lacquer Cut By – Porky (5)
			<br />	Lead Vocals, Saxophone – Pat Fish
			<br />	Producer – Dave Anderson (3)
			<br />	Written-By, Recorded By, Producer – The Tonix
			<br />	Matrix / Runout (Side A runout etched): STEG 002 A1 SNA A PORKY PRIME CUT.
			<br />	Matrix / Runout (Side B runout etched): STEG 002 B1 SNA WELSHPOOL ... WOW HELLO K.B.
			<br />
			<EmbedMedia data={{ mediaurl: "/assets/projects/TheTonix/TheTonix_Strangers.mp3", title: "Strangers", comment: "A side" }} />
			<EmbedMedia data={{ mediaurl: "/assets/projects/TheTonix/TheTonix_TalkToMe.mp3", title: "Talk To Me", comment: "B side" }} />
			</>
		/>

	<PhotoSet
		title="Tonix on 'Wonderful World of Glass' compilation"
		photos={glass_comp}
		description=<>
			<EmbedMedia data={{ mediaurl: "/assets/projects/TheTonix/TheTonix_SexJunk.mp3", title: "Sex Junk" }} />
		</>
	/>
</>

const	SonicTonix = () =>
<>
	<div className="gig_sonictonix" />
	<PhotoSet
		title="Sonic Tonix at the Oranges & Lemons in St Clements, Oxford"
		credit="Tom Peterson"
		credit_date="2023-09-04"
		photos={peterson1}
		description="More grainy images from the distant past courtesy of my carpet-trousered friend Mr Warphole. This time the Sonic Tonix at the Oranges & Lemons in St Clements, Oxford, plus some unusual dancing and a musical trio under plastic. Oh, and a contemporaneous photographical artwork from the man himself." />

	<PhotoSet
		title="The 'Sonic Tonix' Single"
		photos={sonic_single}
		credit_url="https://www.discogs.com/release/2078217-Sonic-Tonix-Dont-Go-Away-Telepathy"
		description=<code>
		Label: Industrial Accident – SGS-114
		Format:
		Vinyl, 7, Single, Test Pressing
		Country: UK
		Released: 1980
		Genre: Rock
		Style: Power Pop, New Wave
		A Dont Go Away
		Vocals – John Silver (4)
		B Telepathy
		Vocals – Dave Goldie
		Bass, Vocals – John Silver (4)
		Drums, Vocals – Owen Jones
		Guitar, Vocals – Dave Goldie, Simon Mawby
		Photography By – Crispin Plaskitt
		Producer – Fish*, Tonix*
		Recorded at DUFFYS.
		This was an Oxford-based outfit (ft. former members of INSTITUTION) whos sole release comes with rubber-stamped white labels (500 copies made). Members resurfaced in THE JAZZ BUTCHER and THE WOODENTOPS."
		<EmbedMedia data={{ mediaurl: "/assets/projects/SonicTonix/SonicTonix_DontGoAway.mp3", title: "Don't Go Away", comment: "A side" }} />
		<EmbedMedia data={{ mediaurl: "/assets/projects/SonicTonix/SonicTonix_Telepathy.mp3", title: "Telepathy", comment: "B side" }} />
		</code>
	/>
</>

const Tonix = () => 
<>
	<Header section="sonic_tonix" />
	<main>
		<SonicTonix />
		<TheTonix />
		</main>
	<Footer />
</>

export default Tonix;
