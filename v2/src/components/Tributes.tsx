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
	{ uri: '/tributes/rolo_mcginty', text: 'Rolo McGinty',
		aux: 'Another World',
		children: <><iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1168933774&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100' }}><a href="https://soundcloud.com/woodentopian" title="woodentopian" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>woodentopian</a> · <a href="https://soundcloud.com/woodentopian/another-world" title="Another World" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Another World</a></div></>
		},
	{ uri: '/tributes/davidj', text: 'David J',
		aux: 'Quell Tristesse',
		children: <EmbedMedia data={{ title: "Quell Tristesse", mediaurl: "https://youtube.com/embed/u68NS-_qOOE" }} />
	},
	{ uri: '/tributes/peter_astor', text: 'Peter Astor',
		aux: 'Fine & Dandy',
		children: <EmbedMedia data={{ title: "Fine and Dandy", mediaurl: "https://youtube.com/embed/ipbl27KS68M" }} />
	},
	{ uri: '/press/knight_berman', text: 'Knight Berman',
		aux: 'Au Revoir et Merci, Monsieur Fish',
		children: <EmbedMedia data={{ title: "Au Revoir et Merci, Monsieur Fish", mediaurl: "https://youtube.com/embed/gUm7UTBDyYo" }} />
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
