import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AU, FIDDLER, } from '@/lib/defines';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const tapes = [
	{ uri: "/gigs/1993/Mar11.html", text: `Szene Wien, Vienna, ${AU} - March 1993` },
	{ uri: "/gigs/1992/Jun5.html", text: "Roxy Theatre, Hollywood, California - June 1992" },
	{ uri: "/gigs/1992/Jun13.html", text: "Liberty Lunch, Austin, Texas - June 1992" },
	{ uri: "/gigs/1993/May15.html", text: `${FIDDLER} Acoustic Room, London - May 1993` },
	{ uri: "/gigs/1992/Jun26.html", text: "Black Eg, Chicago Radio Session - June 1992" },
	{ uri: "/gigs/1992/Jun3.html", text: "Sweetwater Saloon, Los Osos, California - June 1992" },
];

const Letter = () =>  {
	const title = <><Link href='/letters/19930830'>30Aug93</Link> | Introduction</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="etc">
			<blockquote className="annotation">
				I have <Link href="/letters/19940624/all_the_gigs.html">
				tapes of all manner of JBC live</Link>, tapes and recordings
				of radio sessions, all line-ups, all periods, all qualities
				of sound and performance.  I&apos;ll glady trade what you want,
				but I ONLY WANT the following recordings:
			</blockquote>
			<div className="flex flex-wrap justify-around border pt-5">
				<div className="min-w-[50%]">
					{tapes.map(MakeSimpleURI)}
					<p />
					If you can help, let me know what you want.
					<p />
				</div>
				<div className="m-1">
					<Link href="https://jazzbutcher.com/images/advert.gif">
						<Image src="https://jazzbutcher.com/images/advert.gif" width={400} height={400} alt="[advert]" />
					</Link>
				</div>
			</div>
		</div>
		<Footer />
	</>)
}

export default Letter;
