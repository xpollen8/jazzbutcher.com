import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const writings = [
	{ uri: "/fiascos", text: "Top 10 JBC Fiascos", aux: "(2020-09)" },
	{ uri: '/writings/albums', text: "Pat Reviews His Albums" },
	{ uri: '/writings/gigs', text: "Pat Reviews His Gigs" },
	{ uri: "/press/20020709_starindia.html", text: "The Star Of India - Pat reviews his favorite Restaurant", aux: "(2002-07)" },
	{	uri: '/press/20040512_wilson_about.html', text: "Wilson Explainer", aux: '(2002)' },
	{ uri: '/letters', text: "Letters From Pat", aux: "(1990-1994)" },
	{ uri: '/fanclub', text: "Early Fan Club issues" },
	{ uri: '/tomhall', text: "Pat's tribute to musician Tom Hall", aux: "(2003)" },
];

const Writings = () => 
<>
	<Header section='writings' />
	<div className="etc">
		<LetterHeader title="Pat had a few things to say" />
		{writings.map(MakeSimpleURI)}
	</div>
	<Footer />
</>

export default Writings;
