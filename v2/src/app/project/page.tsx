import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const projects = [
	{ uri: '/project/black_eg', text: 'The Black Eg' },
	{ uri: '/project/drones_club', text: 'Drones Club' },
	{ uri: '/project/sumosonic', text: 'Sumosonic' },
	{ uri: '/project/wilson', text: 'Wilson' },
];

const Project = () => 
<>
	<Header section="project" />
		{projects.map(MakeSimpleURI)}
	<Footer />
</>

export default Project;
