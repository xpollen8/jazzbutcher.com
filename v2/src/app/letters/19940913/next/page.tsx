import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
} from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19940913'>13Sep94</Link> | Upcoming Gigs</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="letter">
		  <b>Upcoming Gigs</b> 
			<br /><Link href="/gigs/1994/Oct7.html"><b>7 Oct 94</b></Link> - The Boat Race, Cambridge, England
			<br /><Link href="/gigs/1994/Oct12.html"><b>12 Oct 94</b></Link> - Slurp&apos;s Wino Bar, Northampton, England
			<br /><Link href="/gigs/1994/Dec21.html"><b>21 Dec 94</b></Link> - Slurp&apos;s Wino Bar, Northampton, England
		</div>
		<Footer />
	</>)
}

export default Letter;
