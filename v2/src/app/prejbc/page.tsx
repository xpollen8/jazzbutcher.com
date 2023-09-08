import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const projects = [
	{ uri: '/prejbc/institution', text: 'The Institution' },
	{ uri: '/prejbc/nightshift', text: 'Nightshift' },
	{ uri: '/prejbc/sonc_tonix', text: 'Sonic Tonix' },
	{ uri: '/prejbc/the_tonix', text: 'The Tonix' },
];

const Missing = () => 
<>
	<Header section="prejbc" />
		{projects.map(MakeSimpleURI)}
	<Footer />
</>

export default Missing;
