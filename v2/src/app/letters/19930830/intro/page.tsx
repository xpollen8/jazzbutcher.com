import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Nobr } from '@/lib/macros';
import { AU, FIDDLER, } from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19930830'>30Aug93</Link> | Introduction</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
			<Link href="https://jazzbutcher.com/images/advert.gif">
				<Image src="https://jazzbutcher.com/images/advert.gif" width={250} height={250} alt="[advert]"
					style={{ float: "right", margin: "5px" }} />
			</Link>
			<p>
				I have <Link href="/letters/19940624/all_the_gigs.html">
				tapes of all manner of JBC live</Link>, tapes and recordings
				of radio sessions, all line-ups, all periods, all qualities
				of sound and performance.  I&apos;ll glady trade what you want,
				but I ONLY WANT the following recordings:
			</p>
			<Nobr>
			<ul>
				<li><Link href="/gigs/1993/Mar11.html"><b>Szene Wien</b>, Vienna, {AU} - March 1993</Link></li>
				<li><Link href="/gigs/1992/Jun5.html"><b>Roxy Theatre</b>, Hollywood, California - June 1992</Link></li>
				<li><Link href="/gigs/1992/Jun13.html"><b>Liberty Lunch</b>, Austin, Texas - June 1992</Link></li>
				<li><Link href="/gigs/1993/May15.html">{FIDDLER} Acoustic Room, London - May 1993</Link></li>
				<li><Link href="/gigs/1992/Jun26.html"><b>Black Eg, Chicago Radio Session</b> - June 1992</Link></li>
				<li><Link href="/gigs/1992/Jun3.html"><b>Sweetwater Saloon</b>, Los Osos, California - June 1992</Link></li>
			</ul>
			</Nobr>
			<p>
				If you can help, let me know what you want.
			</p>
			<div className="clear-both" />
		</div>
		<Footer />
	</>)
}

export default Letter;
