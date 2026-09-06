import MyLink from '@/components/MyLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '6Jun94;;/letters/19940624', 'Top 20 Gigs' ] } />
	<main>
		<LetterHeader title="PAT'S THE TOP TWENTY"
			subhead=<>for any reason
			<p />
			(<i>Up-to-date gig listings are <MyLink href="/gigs">here</MyLink></i>)</>
		/>
		<MyLink href="/gigs/1993/Mar11.html">1993-Mar-11</MyLink>	Szene Wien, Vienna, Austria
			<blockquote>{expand('pat')}, {expand('dooj')}, {expand('nick')}, {expand('lix')}</blockquote>
		<MyLink href="/gigs/1986/Jul3.html">1986-Jul-3</MyLink>	Festival, Naples, Italy
			<blockquote>{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}</blockquote>
		<MyLink href="/gigs/1993/Oct28.html">1993-Oct-28</MyLink>	The Forum, London, England
			<blockquote>{expand('pat')}, {expand('paul')}, {expand('green')}</blockquote>
		<MyLink href="/gigs/1992/Jun5.html">1992-Jun-5</MyLink>	Roxy Theatre, Los Angeles, California
			<blockquote>{expand('pat')}, {expand('dooj')}, {expand('pete')}, {expand('nick')}</blockquote>
		<MyLink href="/gigs/1988/Aug7.html">1988-Aug-7</MyLink>	Town & Country Club, London, England
			<blockquote>{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}</blockquote>
		<MyLink href="/gigs/1985/Aug17.html">1985-Aug-17</MyLink>	Jubek Festival, Hamburg, Germany
			<blockquote>{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}</blockquote>
		<MyLink href="/gigs/1992/May15.html">1992-May-15</MyLink>	Lounge Axe, Chicago, Illinois
			<blockquote>{expand('pat')}, {expand('dooj')}, {expand('pete')}, {expand('nick')}</blockquote>
		<MyLink href="/gigs/1991/Jun11.html">1991-Jun-11</MyLink>	The Borderline, London, England
			<blockquote>{expand('pat')}, {expand('green')}, {expand('pete')}</blockquote>
		<MyLink href="/gigs/1986/Jul17.html">1986-Jul-17</MyLink>	The Cat Club, New York City, New York
			<blockquote>{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}</blockquote>
		<MyLink href="/gigs/1984/Jun11.html">1984-Jun-11</MyLink>	Dingwall&apos;s, London, England
			<blockquote>{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}</blockquote>
		<MyLink href="/gigs/1984/Dec9.html">1984-Dec-9</MyLink>	Onkle Pos, Hamburg, Germany
			<blockquote>{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}</blockquote>
		<MyLink href="/gigs/1990/Aug21.html">1990-Aug-21</MyLink>	The Borderline, London, England
			<blockquote>{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}</blockquote>
		<MyLink href="/gigs/1994/Feb17.html">1994-Feb-17</MyLink>	Arapaho, Paris, France
			<blockquote>{expand('pat')}, {expand('dooj')}, {expand('nick')}, {expand('curt')}</blockquote>
		<MyLink href="/gigs/1985/Dec17.html">1985-Dec-17</MyLink>	Salle De La Cite, Rennes, France
			<blockquote>{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}</blockquote>
		<MyLink href="/gigs/1985/Jun27.html">1985-Jun-27</MyLink>	University Of Warwick, Coventry, England
			<blockquote>{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}</blockquote>
		<MyLink href="/gigs/1989/Nov28.html">1989-Nov-28</MyLink>	Commodore Ballroom, Vancouver, Canada
			<blockquote>{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}</blockquote>
		<MyLink href="/gigs/1990/Jun16.html">1990-Jun-16</MyLink>	Tonfestival, Kuchl
			<blockquote>{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}</blockquote>
		<MyLink href="/gigs/1990/Nov25.html">1990-Nov-25</MyLink>	Slim&apos;s, San Fransisco, California
			<blockquote>{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}</blockquote>
		<MyLink href="/gigs/1988/Apr13.html">1988-Apr-13</MyLink>	Garage, Valencia, Spain
			<blockquote>{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}</blockquote>
		<MyLink href="/gigs/1988/Jul1.html">1988-Jul-1</MyLink>	The Coach House, San Juan Capistrano, California
			<blockquote>{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}</blockquote>
	</main>
	<Footer />
</>

export default Letter;
