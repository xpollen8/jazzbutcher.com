import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import {
	AU, AX, CAN, CA, CHI, ES, FR, HAM, ITALIA, LA, LO, NYC, PAR, PO, UK, curt, dj, dooj, felix, green, jules, kizzy, larry, lix, max, nick, owen, pat, paul, pete, richard,
} from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '6Jun94;;/letters/19940624', 'Top 20 Gigs' ] } />
	<div className="etc">
		<LetterHeader title="PAT'S THE TOP TWENTY"
			subhead=<>for any reason
			<p />
			(<i>Up-to-date gig listings are <Link href="/gigs">here</Link></i>)</>
		/>
		<Link href="/gigs/1993/Mar11.html">1993-Mar-11</Link>	Szene Wien, Vienna, {AU}
			<blockquote>{pat}, {dooj}, {nick}, {lix}</blockquote>
		<Link href="/gigs/1986/Jul3.html">1986-Jul-3</Link>	Festival, Naples, {ITALIA}
			<blockquote>{pat}, {max}, {owen}, {felix}</blockquote>
		<Link href="/gigs/1993/Oct28.html">1993-Oct-28</Link>	The Forum, {LO}
			<blockquote>{pat}, {paul}, {green}</blockquote>
		<Link href="/gigs/1992/Jun5.html">1992-Jun-5</Link>	Roxy Theatre, {LA}
			<blockquote>{pat}, {dooj}, {pete}, {nick}</blockquote>
		<Link href="/gigs/1988/Aug7.html">1988-Aug-7</Link>	Town & Country Club, {LO}
			<blockquote>{pat}, {kizzy}, {larry}, {paul}, {green}</blockquote>
		<Link href="/gigs/1985/Aug17.html">1985-Aug-17</Link>	Jubek Festival, {HAM}
			<blockquote>{pat}, {max}, {owen}, {felix}</blockquote>
		<Link href="/gigs/1992/May15.html">1992-May-15</Link>	{AX}, {CHI}
			<blockquote>{pat}, {dooj}, {pete}, {nick}</blockquote>
		<Link href="/gigs/1991/Jun11.html">1991-Jun-11</Link>	The Borderline, {LO}
			<blockquote>{pat}, {green}, {pete}</blockquote>
		<Link href="/gigs/1986/Jul17.html">1986-Jul-17</Link>	The Cat Club, {NYC}
			<blockquote>{pat}, {max}, {owen}, {felix}</blockquote>
		<Link href="/gigs/1984/Jun11.html">1984-Jun-11</Link>	Dingwall&apos;s, {LO}
			<blockquote>{pat}, {max}, {dj}, {owen}</blockquote>
		<Link href="/gigs/1984/Dec9.html">1984-Dec-9</Link>	{PO}{HAM}
			<blockquote>{pat}, {max}, {dj}, {owen}</blockquote>
		<Link href="/gigs/1990/Aug21.html">1990-Aug-21</Link>	The Borderline, {LO}
			<blockquote>{pat}, {larry}, {paul}, {richard}, {green}</blockquote>
		<Link href="/gigs/1994/Feb17.html">1994-Feb-17</Link>	Arapaho, {PAR}
			<blockquote>{pat}, {dooj}, {nick}, {curt}</blockquote>
		<Link href="/gigs/1985/Dec17.html">1985-Dec-17</Link>	Salle De La Cite, Rennes, {FR}
			<blockquote>{pat}, {max}, {owen}, {felix}</blockquote>
		<Link href="/gigs/1985/Jun27.html">1985-Jun-27</Link>	University Of Warwick, Coventry, {UK}
			<blockquote>{pat}, {max}, {owen}, {felix}</blockquote>
		<Link href="/gigs/1989/Nov28.html">1989-Nov-28</Link>	Commodore Ballroom, Vancouver, {CAN}
			<blockquote>{pat}, {larry}, {paul}, {richard}</blockquote>
		<Link href="/gigs/1990/Jun16.html">1990-Jun-16</Link>	Tonfestival, Kuchl
			<blockquote>{pat}, {larry}, {paul}, {richard}, {green}</blockquote>
		<Link href="/gigs/1990/Nov25.html">1990-Nov-25</Link>	Slim&apos;s, San Fransisco, {CA}
			<blockquote>{pat}, {larry}, {paul}, {jules}, {green}</blockquote>
		<Link href="/gigs/1988/Apr13.html">1988-Apr-13</Link>	Garage, Valencia, {ES}
			<blockquote>{pat}, {kizzy}, {larry}, {paul}, {green}</blockquote>
		<Link href="/gigs/1988/Jul1.html">1988-Jul-1</Link>	The Coach House, San Juan Capistrano, {CA}
			<blockquote>{pat}, {kizzy}, {larry}, {paul}</blockquote>
	</div>
	<Footer />
</>

export default Letter;
