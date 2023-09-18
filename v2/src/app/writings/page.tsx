import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const writings = [
	{ uri: "/press/20020709_starindia.html", text: "The Star Of India - Pat reviews his favorite Restaurant", aux: "2002-07" },
	{ uri: "/fiascos", text: "Top 10 JBC Fiascos", aux: "2020-09" },
	{ uri: '/letters', text: "Letters From Pat'", aux: "1990-1994" },
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
