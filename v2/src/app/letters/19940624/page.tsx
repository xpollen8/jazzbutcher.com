import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='6Jun94' />
		<div className="letter">
			<center>
				<br /><a href="/letters/19940624/intro.html"> Introduction</a>
				<br /><a href="/letters/19940624/all_the_gigs.html"> All the gigs, ever</a> (circa)
				<br /><a href="/letters/19940624/top_20.html"> Top 20 Gigs</a> (circa)
				<p /><Image width={270} height={122} alt="[signature]" src="https://jazzbutcher.com/images/19940624/94Jun24_sig.gif" />
			</center>
		</div>
		<Footer />
	</>)
}

export default Letter;
