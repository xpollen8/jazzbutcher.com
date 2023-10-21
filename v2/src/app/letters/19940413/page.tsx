import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ParsedCaption } from '@/components/GenericWeb';
import { FIDDLER, nick, curt, pat, dooj } from '@/lib/defines';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const topics = [
	{ uri: "/letters/94Apr13/intro.html", text: "Introduction" },
	{ uri: "/letters/94Apr13/tour.html", text: "The Spring 94 European Tour" },
	{ uri: "/letters/94Apr13/garage.html", text: "The 10Mar94 Garage gig, London" },
	{ uri: "/letters/94Apr13/fiddler.html", text: `The 8Apr94 ${FIDDLER} gig, London` },
	{ uri: "/letters/94Apr13/gigs.html", text: "JBC Dates You Have Missed" },
	{ uri: "/letters/94Apr13/news.html", text: "Other News" },
];

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='13Apr94' />
		<main>
			<div className="flex flex-wrap justify-around">
				<div className="min-w-[50%]">
					{topics.map(MakeSimpleURI)}
				</div>
				<div className="m-1">
					<center>
					<Link href="https://v1.jazzbutcher.com/images/paris.jpg">
						<Image width={400} height={400} src="https://v1.jazzbutcher.com/images/paris.jpg" alt="paris group"/>
					</Link>
					<ParsedCaption
						image_caption=<>{nick}, {curt}, {pat}, {dooj} (Paris)</>
						credit_date="1994-02-17"
						credit="Lucien Borderline"
					/>
					<p />
					<Image width={353} height={105} alt="[signature]" src="https://v1.jazzbutcher.com/images/19940413/94Apr13_sig.gif" />
				</center>
			</div>
			</div>
		</main>
		<Footer />
	</>)
}

export default Letter;
