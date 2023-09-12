import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const entries = [
	{ uri: '/tributes/david_jackson', text: 'David Jackson' },
	{ uri: '/tributes/rolo_mcginty', text: 'Rolo McGinty', aux: 'Another World' },
	{ uri: '/tributes/peter_astor', text: 'Peter Astor', aux: 'Fine & Dandy' },
];

const Rememberences = () => 
<>
	<Header section="memoriam" title="Tributes" />
		{entries.map(MakeSimpleURI)}
	<Footer />
</>

export default Rememberences;
