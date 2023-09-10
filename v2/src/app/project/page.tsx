import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const projects = [
	{ uri: '/projects/black_eg', text: 'The Black Eg' },
	{ uri: '/projects/drones_club', text: 'Drones Club' },
	{ uri: '/projects/sumosonic', text: 'Sumosonic' },
	{ uri: '/projects/wilson', text: 'Wilson' },
];

const Missing = () => 
<>
	<Header section="project" />
		{projects.map(MakeSimpleURI)}
	<Footer />
</>

export default Missing;
