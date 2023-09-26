import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import SectionOptions from '@/components/SectionOptions';

const writings = [
	{ uri: '/writings/albums', text: "Pat Reviews His Albums" },
	{ uri: '/writings/gigs', text: "Pat Reviews His Gigs" },
	{ uri: "/press/20020709_starindia.html", text: "The Star Of India - Pat reviews his favorite Restaurant", aux: "(2002-07)", children: "Northampton's Star of India restaurant is dearly loved by the artist" },
	{	uri: '/press/20040512_wilson_about.html', text: "Wilson Explainer", aux: '(2002)', children: "I started the Wilson project fondly imagining that it would be a solo thing." },
];

const Writings = () => 
<>
	<Header section='writings' />
	<main>
		<LetterHeader title="Pat had a few things to say" />
		<SectionOptions section='writings' />
		<hr />
		{writings.map(MakeSimpleURI)}
	</main>
	<Footer />
</>

export default Writings;
