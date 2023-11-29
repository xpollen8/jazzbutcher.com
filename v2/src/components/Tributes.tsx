import MakeSimpleURI from '@/components/MakeSimpleURI';
import EmbedMedia from '@/components/EmbedMedia';
import Tag from '@/components/Tag';

const texts = [
	{ uri: '/eulogy', text: 'Alan Moore',
		aux: 'Eulogy' },
	{
		uri: '/press/20211029_press_nnjournal',
		text: 'Rachel McGrath',
		aux: '[NN Journal]: An obituary',
	},
	{
		uri: '/press/20211007_press_louderthanwar',
		text: 'Alex Maiolo',
		aux: '[Louder Than War]: An appreciation',
	},
	{	uri: '/press/20211127_press_tribute',
		text: 'simonovitch',
		aux: '[Whisperin and Hollerin]: A Celebration Of Pat Fish',
	},
	{ uri: '/press/20211012_press_northantstelegraph_davidjackson.html', text: 'David Jackson',
		aux: '[Northants Telegraph]: It was an honour and privilege..' },
	{ uri: '/press/20221005_ink19_jazz_butcher_society.html', text: 'Julius C. Lacking',
		aux: '[Ink 19]: Remembering Pat Fish' },
	{ uri: '/press/20211007_press_illlive.html', text: 'Deborah Wassertzug',
		aux: "[I'll Live]: Making Me Understand",
		},
];

const music = [
	{ text: 'Rolo McGinty',
		aux: 'Another World',
		children: <><EmbedMedia data={{
			mediaurl: "https://api.soundcloud.com/tracks/1168933774",
			mediacredit: "woodentopian",
			mediacrediturl: "https://soundcloud.com/woodentopian"
		}} /></>
	},
	{ text: 'David J',
		aux: 'Quell Tristesse',
		children: <EmbedMedia data={{ mediaurl: "https://youtube.com/embed/u68NS-_qOOE" }} >
		David J&apos;s tribute to Pat Fish.
		7&quot;+CDR released Jan 6, 2023
		Video by Barry Hale
		</EmbedMedia>
	},
	{ text: 'Peter Astor',
		aux: 'Fine & Dandy',
		children: <EmbedMedia data={{ mediaurl: "https://youtube.com/embed/ipbl27KS68M" }} >
		It’s always difficult to hear about an old companions passing; we shared
		a history together, sometimes close, many times not. But the loss ended up
		bigger than I’d imagined. There was a tribute show and without consciously
		intending to, a song came, as is often the way, stuff coming up from inside. 
		<p />
		I thought of him looking down on us from his version of heaven, and typically, telling us that all was well. 
		<p />
		Go well on the endless sea, my friend
		</EmbedMedia>
	},
	{ text: 'Knight Berman',
		aux: 'Au Revoir et Merci, Monsieur Fish',
		children: <EmbedMedia data={{ mediaurl: "https://youtube.com/embed/gUm7UTBDyYo" }} >
		Gratitude and love to Pat Fish (The Jazz Butcher), 1957-2021 RIP. Sketch by KC c1991, song by The Marble Tea. Special thanks to all the Conspirators for knowing how it feels.
		</EmbedMedia>
		},
	{ text: 'Stereo Embers The Podcast',
		aux: 'Pat Fish (The Jazz Butcher)',
		children: <EmbedMedia data={{
			mediaurl: "https://soundcloud.com/alexgreenonline/stereo-embers-the-podcast-pat-fish-the-jazz-butcher",
			mediacredit: "Alex Green",
			mediacrediturl: "https://soundcloud.com/alexgreenonline",
			mediacreditdate: "2021-10-07"
			}} >
			An interview and obit, combined. &quot;He loved his cat, he loved to read, he loved to drink, he loved to smoke and he loved to play music. Recorded in 2013 as the Jazz Butcher’s The Last Of The Gentleman Adventurers album hit shelves, this interview finds Fish in fine form, talking about the new record, Roddy Frame, The Blue Nile, his long-standing relationship with Eider and why it’s so hard to age in rock and roll…&quot;
			</EmbedMedia>
		},
];

export const TributeText = () => <div className="border"><Tag>Tributes In Words</Tag> <p /> {texts.map(MakeSimpleURI)}<p /></div>
export const TributeAudio = ()  => <div className="border"><Tag>Tributes In Audio</Tag> <p /> {music.map(MakeSimpleURI)}</div>

const Tributes = () => <>
	<TributeText />
	<p />
	<TributeAudio />
</>;

export default Tributes;
