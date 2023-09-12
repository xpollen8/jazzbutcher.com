import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const sections = [
	{ uri: '/first_gig', text: "Pat's first gig - 1974" },
	{ uri: '/project', text: "Side projects during JBC years" },
	{ uri: '/fishy_masions', text: "The 2020-2021 Fishy Mansions livestreams" },
	{ uri: '/letters', text: '"Letters From Pat" - 1990-1994' },
	{ uri: '/notebooks', text: "Excerpts from Pat's notebooks" },
	{ uri: '/memoriam', text: "In Memoriam" },
];

const Pat = () => 
<>
	<Header section="pat" />
		{sections.map(MakeSimpleURI)}
	<Footer />
</>

export default Pat;
