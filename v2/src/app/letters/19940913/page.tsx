import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const topics = [
	{ uri: "/letters/94Sep13/intro.html", text: "Introduction" },
	{ uri: "/letters/94Sep13/gigs.html", text: "Recent Gig Reviews" },
	{ uri: "/letters/94Sep13/lynch.html", text: "David Lynch -v- JBC" },
	{ uri: "/letters/94Sep13/albums.html", text: "Re-Issues" },
	{ uri: "/letters/94Sep13/harlan.html", text: "Harlan" },
	{ uri: "/letters/94Sep13/lorre.html", text: "Peter Lorre" },
	{ uri: "/letters/94Sep13/politics.html", text: "Politics" },
	{ uri: "/letters/94Sep13/sis.html", text: "Sister Death" },
	{ uri: "/letters/94Sep13/misc.html", text: "Odds-n-Ends" },
	{ uri: "/letters/94Sep13/news.html", text: "News" },
	{ uri: "/letters/94Sep13/next.html", text: "Up-coming gigs" },
];

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='13Sep94' />
		<main>
			<div className="flex flex-wrap justify-around">
				<div className="min-w-[50%]">
					{topics.map(MakeSimpleURI)}
				</div>
				<div className="m-1">
					<Image width={176} height={176} alt="[signature]" src="https://v1.jazzbutcher.com/images/19940913/94Sep13_sig.gif" />
				</div>
			</div>
		</main>
		<Footer />
	</>)
}

export default Letter;
