import MakeSimpleURI from '@/components/MakeSimpleURI';

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
	{ uri: '/tributes/rolo_mcginty', text: 'Rolo McGinty',
		aux: 'Another World',
		children: <blockquote className="text-xs">https://soundcloud.com/woodentopian/another-world</blockquote>
		},
	{ uri: '/tributes/davidj', text: 'David J',
		aux: 'Quell Tristesse' },
	{ uri: '/tributes/peter_astor', text: 'Peter Astor',
		aux: 'Fine & Dandy' },
	{ uri: '/press/knight_berman', text: 'Knight Berman',
		aux: 'Au Revoir et Merci, Monsieur Fish',
		children: <blockquote className="text-xs">https://www.youtube.com/embed/gUm7UTBDyYo</blockquote>
		},
];

const Tributes = () => <>
	<p className="text-center text-2xl">Tributes</p>
	<hr />
	<p className="text-center text-xl">In Words</p>
	{texts.map(MakeSimpleURI)}
	<hr />
	<p className="text-center text-xl">In Music</p>
	{music.map(MakeSimpleURI)}
</>;

export default Tributes;
