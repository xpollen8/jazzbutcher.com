import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';
import {
} from '@/lib/defines';

const Letter = () =>  {
	const title = <><Link href='/letters/19940913'>13Sep94</Link> | Upcoming Gigs</>
	return ( <>
		<Header section='letters' title={title} />
		<div className="etx">
		  <LetterHeader title="Upcoming Gigs" />
			<MakeSimpleURI uri="/gigs/1994/Oct7.html" text="7 Oct 94" aux="The Boat Race, Cambridge, England" />
			<MakeSimpleURI uri="/gigs/1994/Oct12.html" text="12 Oct 94" aux="Slurp's Wino Bar, Northampton, England" />
			<MakeSimpleURI uri="/gigs/1994/Dec21.html" text="21 Dec 94" aux="Slurp's Wino Bar, Northampton, England" />
		</div>
		<Footer />
	</>)
}

export default Letter;
