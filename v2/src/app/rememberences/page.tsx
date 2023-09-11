import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const entries = [
	{ uri: '/rememberences/david_jackson', text: 'David Jackson' },
];

const Rememberences = () => 
<>
	<Header section="rememberences" />
		{entries.map(MakeSimpleURI)}
	<Footer />
</>

export default Rememberences;
