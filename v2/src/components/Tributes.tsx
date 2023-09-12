import MakeSimpleURI from '@/components/MakeSimpleURI';

const entries = [
	{ uri: '/eulogy', text: 'Alan Moore', aux: 'Eulogy' },
	{ uri: '/tributes/rolo_mcginty', text: 'Rolo McGinty', aux: 'Another World' },
	{ uri: '/tributes/peter_astor', text: 'Peter Astor', aux: 'Fine & Dandy' },
	{ uri: '/press/20211012_press_northantstelegraph_davidjackson.html', text: 'David Jackson', aux: 'Northants Telegraph' },
	{ uri: '/press/20221005_ink19_jazz_butcher_society.html', text: 'Julius C. Lacking', aux: 'ink19.com' },
	{ uri: '/press/20220405_press_monolithcocktail.html', text: 'Matteo Maioli', aux: 'Monolith Cocktail' },
];

const Tributes = () => <>{entries.map(MakeSimpleURI)}</>;

export default Tributes;
