import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const projects = [
	{ uri: '/prejbc/first_gig', text: "Pat's first gig", aux: "allegedly" },
	{ uri: '/prejbc/institution', text: 'The Institution',
		children: <>
		Credited on the single:
		<p />
		Bass – Rolo<br />
		Drums – Rob Wilford<br />
		Guitar – Max Eider<br />
		Vocals, Saxophone – Pat Fish<br />
		<hr />
		Before the single:
		<p />
		Synthesizers - Johnathan Stephenson<br />
		Drums- John Duvall<br />
		</>},
	{ uri: '/prejbc/nightshift', text: 'Nightshift' },
	{ uri: '/prejbc/sonic_tonix', text: 'Sonic Tonix' },
	{ uri: '/prejbc/the_tonix', text: 'The Tonix' },
	{ text: 'Wow Federation', aux: 'w/Max',
		children: <>
		Max played guitar with Pat Fish in college in bands such as The Institution, Wow Federation and The Tonix.
		<p />
		Source: https://music.metason.net/artistinfo?name=Max%20Eider
		</>
		},
];

const PreJBC = () => 
<>
	<Header section="prejbc" />
		{projects.map(MakeSimpleURI)}
	<Footer />
</>

export default PreJBC;
