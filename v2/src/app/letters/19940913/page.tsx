import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='13Sep94' />
		<div className="letter">
			<center>
				<Link href="/letters/94Sep13/intro.html"> Introduction</Link>
				<br /><Link href="/letters/94Sep13/gigs.html"> Recent Gig Reviews</Link>
				<br /><Link href="/letters/94Sep13/lynch.html"> David Lynch -v- JBC</Link>
				<br /><Link href="/letters/94Sep13/albums.html"> Re-Issues</Link>
				<br /><Link href="/letters/94Sep13/harlan.html"> Harlan</Link>
				<br /><Link href="/letters/94Sep13/lorre.html"> Peter Lorre</Link>
				<br /><Link href="/letters/94Sep13/politics.html"> Politics</Link>
				<br /><Link href="/letters/94Sep13/sis.html"> Sister Death</Link>
				<br /><Link href="/letters/94Sep13/misc.html"> Odds-n-Ends</Link>
				<br /><Link href="/letters/94Sep13/news.html"> News</Link>
				<br /><Link href="/letters/94Sep13/next.html"> Up-coming gigs</Link>
				<p /><Image width={176} height={176} alt="[signature]" src="https://jazzbutcher.com/images/19940913/94Sep13_sig.gif" />
			</center>
		</div>
		<Footer />
	</>)
}

export default Letter;
