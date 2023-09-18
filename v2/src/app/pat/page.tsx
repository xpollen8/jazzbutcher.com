import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import LetterHeader from '@/components/LetterHeader';

const sections = [
	{ uri: '/gallery', text: "Photo Gallery" },
	{ uri: '/project', text: "Other Projects", aux: "During the JBC years" },
	{ uri: '/facebook', text: "Facebook Activity", aux: "(IDEA: the best of posts from Facebook)" },
	{ uri: '/fishy_mansions', text: "Fishy Mansions", aux: "2020-2021 livestreams" },
	{ uri: '/prejbc', text: "Before 'The Jazz Butcher'" },
	{ uri: '/interviews', text: "Interviews" },
	{ uri: '/writings', text: "The Butcher Writes", aux: "reviews, comments" },
	{ uri: '/memoriam', text: "In Memoriam" },
	{ uri: '/notebooks', text: "Excerpts from Pat's notebooks" },
];

const Pat = () => 
<>
	<Header section="pat" />
		<LetterHeader title="Main Sections" />
		{sections.map(MakeSimpleURI)}
	<Footer />
</>

export default Pat;
