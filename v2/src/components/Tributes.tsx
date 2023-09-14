import MakeSimpleURI from '@/components/MakeSimpleURI';
import EmbedMedia from '@/components/EmbedMedia';

const texts = [
	{ uri: '/eulogy', text: 'Alan Moore',
		aux: 'Eulogy' },
	{ uri: '/press/20211012_press_northantstelegraph_davidjackson.html', text: 'David Jackson',
		aux: 'Northants Telegraph' },
	{ uri: '/press/20221005_ink19_jazz_butcher_society.html', text: 'Julius C. Lacking',
		aux: 'ink19.com' },
	{ uri: '/press/20220405_press_monolithcocktail.html', text: 'Matteo Maioli',
		aux: 'Monolith Cocktail' },
	{ uri: '/press/20211007_press_illlive.html', text: 'Deborah Wassertzug',
		aux: "I'll Live",
		children: <blockquote className="text-xs">A heartfelt posting with screenshots of a couple of Pat&apos;s Facebook interactions</blockquote>
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
		children: <EmbedMedia data={{ mediaurl: "https://youtube.com/embed/u68NS-_qOOE" }} />
	},
	{ text: 'Peter Astor',
		aux: 'Fine & Dandy',
		children: <EmbedMedia data={{ mediaurl: "https://youtube.com/embed/ipbl27KS68M" }} />
	},
	{ text: 'Knight Berman',
		aux: 'Au Revoir et Merci, Monsieur Fish',
		children: <EmbedMedia data={{ mediaurl: "https://youtube.com/embed/gUm7UTBDyYo" }} />
		},
];

const Tributes = () => <>
	<p className="text-center text-xl">Tributes In Words</p>
	{texts.map(MakeSimpleURI)}
	<hr />
	<p className="text-center text-xl">Tributes In Music</p>
	{music.map(MakeSimpleURI)}
</>;

export default Tributes;
