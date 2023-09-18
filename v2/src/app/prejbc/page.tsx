import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const projects = [
	{ uri: '/prejbc/first_gig', text: "Pat's first gig", aux: "allegedly" },
	{ uri: '/prejbc/institution', text: 'The Institution' },
	{ uri: '/prejbc/nightshift', text: 'Nightshift' },
	{ uri: '/prejbc/sonic_tonix', text: 'Sonic Tonix' },
	{ uri: '/prejbc/the_tonix', text: 'The Tonix' },
];

const PreJBC = () => 
<>
	<Header section="prejbc" />
		{projects.map(MakeSimpleURI)}
	<Footer />
</>

export default PreJBC;
