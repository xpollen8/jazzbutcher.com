import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';
import SectionOptions from '@/components/SectionOptions';
import Contributions from '@/components/Contributions';

const sections = [
	{ uri: '/facebook', text: "Facebook Activity", aux: "(IDEA: the best of posts from Facebook)" },
];

const Pat = () => 
<>
	<Header section="pat" />
		<main>
			<LetterHeader title="Main Sections" />
			<SectionOptions section='pat' />
			<hr />
			{sections.map(MakeSimpleURI)}
			<Contributions  options={{
				all: true,
				filter: { field: 'credit', value: 'Pat Fish' },
			}} />
		</main>
	<Footer />
</>

export default Pat;
