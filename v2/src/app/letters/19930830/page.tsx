import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FIDDLER } from '@/lib/defines';

const Letter = () => 
<>
	<Header section='letters' title='30Aug93'/>
	<div className="letter">
	<center>
		<Link href="/letters/93Aug30/intro.html"> Introduction</Link>
		<br/>
		<Link href="/letters/93Aug30/albums.html"> The Albums</Link>
		<br/>
		<Link href="/letters/93Aug30/band.html"> Where Is Butcher Band?</Link>
		<br/>
		<Link href="/letters/93Aug30/fiddler.html"> {FIDDLER} gig, London</Link>
		<br/>
		<Link href="/letters/93Aug30/love.html"> Waiting For The Love Bus</Link>
		<br/>
		<Link href="/letters/93Aug30/messages.html"> Individual Messages</Link>
		<br/>
		<Link href="/letters/93Aug30/tour.html"> 1993 European Tour Report</Link>
	<br/>
	<Image width={243} height={111} alt="[signature]" src="https://jazzbutcher.com/images/19930830/93Aug30_sig.gif" />
	</center>
	</div>
	<Footer />
</>

export default Letter;
