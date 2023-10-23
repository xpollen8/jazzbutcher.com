import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import PhotoSet from '@/components/PhotoSet';
import Tag from '@/components/Tag';

const pix = [
	{ src: "/assets/projects/TheDronesClub/drones_club_cd.jpg", alt: "cd cover" },
	{ src: "/assets/projects/TheDronesClub/drones-july2021-b.jpg", alt: "the drones" },
	{ src: "/assets/projects/TheDronesClub/cropped-cropped-site-image-bw.jpg", alt: "more drones" },
	{ src: "/assets/projects/TheDronesClub/drones-live-2.jpg", alt: "live" },
];

const DronesPomfret = () => <>
	<div className="listItem">
		<h1 className="text-2xl">The Pomfret Arms</h1>
		<hr />
		In 2019 we played a great gig at the Pomfret Arms in Northampton.
		<p />
		<div className="flex flex-wrap justify-center gap-5">
		<EmbedMedia data={{ mediaurl: "https://youtube.com/embed/kvZmLYRYP5I" }} >
			<b>The Market Square</b>
			<p />
			Live at the Pomfret Arms, Northampton, 2nd November 2018
		</EmbedMedia>
		<p />
		<EmbedMedia data={{ mediaurl: "https://youtube.com/embed/eoBlIPyV7gU" }} >
			<b>The Great Bear</b>
			<p />
			Live at the Pomfret Arms, Northampton, 2nd November 2018
		</EmbedMedia>
		</div>
	</div>
</>

const DronesRecordings = () => <>
	<div className="listItem">
		<h1 className="text-2xl">Early Recordings</h1>
		<hr />
		In April 2018 the band went into Stalkers Studio and Northampton to record three songs, Gernika, The Bear and the first recording from the band to feature dulcimer, Bayati Blues. A cover version of a song by TootArd from the occupied Golan Heights
		<p />
		We hope you like them.
		<p />
		<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheDronesClub/gernika.mp3", title: "Gernika" }} />
		<p />
		<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheDronesClub/the-bear.mp3", title: "The Bear" }} />
		<p />
		<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheDronesClub/bayati-blues.mp3", title: "Bayati Blues" }} />
		<p />
		Unfortunately our first album La Belle and the Bear is now Sold Out. Thanks to everyone that bought one.
	</div>
</>

const DronesHome = () => <>
	<div className="listItem text-center">
		<h1 className="text-2xl">The Drones Club</h1>
		Ancestral and improvised music played to a backing of eastern and dub rhythms.
		<p />
		<hr />
		<p />
		<b>The Drones Club</b> started in 2014 in a medieval pub in Northampton.
		<p />
		What started as a few sessions to see if we could find some musical themes to work on has become a collection of ancestral and improvised music played to a backing of eastern and dub rhythms. Then we added some funk guitar.
		<p />
		From Northampton.
		<p />
		We are The Drones Club.
		<p />
		Ian Clabburn – Bagpipes and Dulcimer.
		<p />
		Steve Gordon – Guitar.
		<p />
		Pat Fish – Bass.
		<p />
		Russell Cooper – Drums.
	</div>
</>

const DronesAbout = () => <>
	<div className="listItem">
		<h1 className="text-2xl">About The Drones Club</h1>
		<hr />
		<p />
		At the beginning of 2014 Russ Cooper and Pat Fish were in a Northampton pub where they have a weekly Folk Night downstairs. A man appeared up the stairs lugging a large black flight case. They got talking and after a while they asked the obvious question, “What’s in the box?”
		<p />
		(Pandora moment coming)
		<p />
		He opened it and it was full of bagpipes from all over the world. They had a couple of beers and Ian said he was looking to work with musicians outside of the groups he usually played with. Bringing different influences in and expanding what people normally thought of as bagpipe music.
		<p />
		A month or so later Ian and Russ got together and started trying to work out where the common ground was, finding the roots that they shared and building on them.
		<p />
		Pat joining on bass resulted in what’s been described as a Medieval Drum and Bass sound combined with Hendrix style Bagpipes.
		<p />
		The first release from the band was the six song album La Belle and The Bear in 2017. After that there a few months playing small festivals and venues.
		<p />
		A band’s never really a band until it gets to hear what it sounds like. Having managed to meld the three existing styles it was decided to add a fourth so guitarist Steve was asked if he’d like to play with the band one night. The impact was immediate, allowing Ian the space to put down the pipes for some songs and bring in the dulcimer.
		<p />
		The Drones Club plays music where the drums and bass lines lay down a steady beat while the bagpipes, dulcimer and guitars provide a melody that is both hypnotic and a little bit scary. It’s Folk Music from Northampton.
	</div>
</>

const DronesGigs = () => <>
	<div className="listItem">
		<h1 className="text-2xl">Drones Gigs</h1>
		<hr />
		<p />
		2021
		<p />
		August
		<p />
		Sat 28th August 8pm – The Kaya Festival, Overstone, Northampton.
		<p />
		Sun 15th August 5pm – The Black Prince, Northampton.
		<p />
		2020
		<p />
		February
		<p />
		Fri 22nd February 8pm – The Garibaldi Hotel, Bailiff St, Northampton NN1 3DX
		<p />
		2019
		<p />
		November
		<p />
		Fri 22nd November 8pm – The Garibaldi Hotel, Bailiff St, Northampton NN1 3DX
		<p />
		August
		<p />
		Mon 26th August 7pm – Kaya – Festival of World Music & Arts, The Racecourse. Northampton.
		<p />
		3rd August – AudioStage Festival, Northampton.
		<p />
		June
		<p />
		21st June – The Pomfret Arms, (Solstice Party). 10 Cotton End, NN4 8BS Northampton.
		<p />
		7th June – The Labour Club, Northampton supporting Dirty Sound Magnet.
		<p />
		January
		<p />
		19th Jan – The Pomfret Arms, 10 Cotton End, NN4 8BS Northampton. (again – they like us there)
		<p />
		2018
		<p />
		November
		<p />
		2nd Nov – The Pomfret Arms, 10 Cotton End, NN4 8BS Northampton.
		<p />
		August
		<p />
		19th Aug – Umbrella Fair Tea on the Lawn, Racecourse Pavilion, Northampton
		<p />
		May
		<p />
		25th May – The Labour Club, Northampton.
	</div>
</>

const DronesBBC = () => <>
	<div className="listItem">
		<h1 className="text-2xl">BBC</h1>
		<hr />
		Way back in 2015 we did a short interview with Lal Muttock at the BBC.
		<p />
		<EmbedMedia data={{ mediaurl: "https://soundcloud.com/the-drones/drones-at-the-bbc-interview-only", }}>
			The Drones in conversation with Lal Muttock BBC Northampton Introduces..
			Saturday 28th Feb 2015
		</EmbedMedia>
	</div>
</>

const DronesMusic = () => <>
	<AudioStage />
	<DronesPomfret />
	<DronesRecordings />
	<DronesBBC />
</>

const DronesPipes = () => <>
	<div className="listItem">
		<h1 className="text-2xl">THE PIPES</h1>
		<hr />
		<Image className="float-right" src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheDronesClub/cropped-img_02851.jpg" width={512} height={512} alt="pipes" />
		Ian mainly plays three types of Bagpipes. The Southern English Border Pipes, Traditional Gascon Boha Pipes and the Electric Pipes.
		<p />
		Border pipes were never standardised and consequently while Southern English Border Pipes look like their northern cousins, they are much influenced by, and closer in sound to, the French Musette à Béchonnet and the Grande Cornemuse du Centre. Probably the biggest difference from a lot of pipes you’re used to hearing is that the these pipes have a set of bellows to supply air to the bag rather than having to be blown by the player.
		<p />
		A modern development, in other words, English Border Pipes tend to be in G, low D or low C, can be mouth or bellows blown, have up to four drones carried on the shoulder or across the chest, use half-closed fingering, and are nearly chromatic over a one and a half octave range. Various makers now produce variants of the same instrument (sometimes under different names).
		<p />
		Repertoire overlaps with its northern cousin but the instrument’s versatility allows English, French, Breton, Early Music and even Eastern European tunes to be played. That this is a new instrument means that in the absence of a tradition players tend to develop a unique and identifiable style.
		<p />
		The Traditional Boha comes from the South West of France. They’re different from other pipes in having no separate drone, but a drone and chanter bored into a single piece of wood.
		<p />
		The Electric Pipes? Well you’ll just have to come see The Drones Club to see how that works.
		<p />
		For more information about Bagpipes check out The Bagpipe Society
	</div>
</>

const AudioStage = () => <>
	<div className="listItem">
		<h1 className="text-2xl">AudioStage</h1>
		<hr />
		The guys at AudioStage music production and promotion have been doing some great work with all kinds of artist over the last couple of years. We were really pleased to be asked to play for one of their now legendary sessions. We recorded 3 of our tunes with them.
		<p />
	<div className="flex flex-wrap justify-center gap-5">
		<div className="w-80">
			<EmbedMedia data={{ mediaurl: "https://www.youtube.com/embed/4_vkMvY_36I" }} >
				<b>Orientale</b>
					<br />
					Aug 19, 2019
					<br/>
					Here they are and what a wonder indeed! The terrific, tempestuous and tumultuous, ‘The Drones Club’!
					<p />
					They join us with a wonderment of brilliantly played traditional folk instruments bagpipes aerated and drums thrashed into brilliance with accompanying modern day guitar and bass, skilfully wielded by experts in their craft. This is truly something not to be missed!
			</EmbedMedia>
		</div>
		<div className="w-80">
			<EmbedMedia data={{ mediaurl: "https://www.youtube.com/embed/K3eukGQjM1g" }} >
				<b>Donkey</b>
				<br />
					Aug 23, 2019
					<br/>
					The Drones Club are back again for their second track of the series, Donkey. As usual from these lot it features more driving rhythms and wailing precision from all instruments, check it out here first!
			</EmbedMedia>
		</div>
		<div className="w-80">
			<EmbedMedia data={{ mediaurl: "https://www.youtube.com/embed/n7RepN5U170" }} >
				<b>The Great Bear</b>
				<br />
					Aug 28, 2019
					<br />
					Here it is, their 3rd and final track of the series and we certainly left you with a corker! The Great Bear is here with a slower tempo, pounding rhythms, you can close your eyes and be transport away to the world of The Great Bear.
			</EmbedMedia>
		</div>
		</div>
	</div>
</>

const DronesClub = () => 
<>
	<Header project="drones" section="drones_club" />
	<main>
		<Tag> The Drones Club (2014-2021) </Tag>
		<PhotoSet photos={pix} />
		<Tag>Content below is from https://thedronesclubnn1.wordpress.com/</Tag>
		<DronesHome />
		<p />
		<DronesAbout />
		<p />
		<DronesMusic />
		<p />
		<DronesPipes />
		<p />
		<DronesGigs />
	</main>
<Footer />
</>
export default DronesClub;
