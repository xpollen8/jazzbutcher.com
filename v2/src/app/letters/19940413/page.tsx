import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ParsedCaption } from '@/components/GenericWeb';
import { FIDDLER, nick, curt, pat, dooj } from '@/lib/defines';

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='13Apr94' />
			<div className="letter">
				<center>
				<Link href="https://jazzbutcher.com/images/paris.jpg">
					<Image width={400} height={400} src="https://jazzbutcher.com/images/paris.jpg" alt="paris group"/>
				</Link>
				<ParsedCaption
					image_caption=<>{nick}, {curt}, {pat}, {dooj} (Paris)</>
					credit_date="1994-02-17"
					credit="Lucien Borderline"
				/>
				<p />
					<Link href="/letters/94Apr13/intro.html"> Introduction</Link>
					<p /><Link href="/letters/94Apr13/tour.html"> The Spring 94 European Tour</Link>
					<p /><Link href="/letters/94Apr13/garage.html"> The 10Mar94 Garage gig, London</Link>
					<p /><Link href="/letters/94Apr13/fiddler.html"> The 8Apr94 {FIDDLER} gig, London</Link>
					<p /><Link href="/letters/94Apr13/gigs.html"> JBC Dates You Have Missed</Link>
					<p /><Link href="/letters/94Apr13/news.html"> Other News</Link>
					<p /><Image width={353} height={105} alt="[signature]" src="https://jazzbutcher.com/images/19940413/94Apr13_sig.gif" />
				</center>
		</div>
		<Footer />
	</>)
}

export default Letter;
