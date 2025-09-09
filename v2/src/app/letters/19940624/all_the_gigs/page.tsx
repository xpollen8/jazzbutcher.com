import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import { expand, } from '@/lib/defines';

const Letter = () =>
<>
	<Header section='letters' title={ [ '6Jun94;;/letters/19940624', 'All The Gigs' ] } />
	<main>
		<LetterHeader title="THE JAZZ BUTCHER CONSPIRACY THE WHOLE STORY"
			subhead=<><i>Up-to-date information is available <Link href="/gigs"> in greatly expanded database format</Link></i></> />
		The first JBC dates are shrouded in confusion.
		{expand('max')}, {expand('pat')} and Louis played three very small shows under
		the umbrella of &quot;Cabaret Cent-Neuf&quot; during November and
		December 1981.
		<p />
		These shows, which were almost entirely acoustic also
		featured the shadowy figure of The Antichrist, who performed
		as Ramon Destine (with {expand('max')}
		on guitar; it was Ramon who first uttered the words &quot;Take
		it, Max... &quot;), the Rockin&apos; Belgians and Terence Walpole,
		a deranged poet later to find recording fame with {expand('eg')}.
		The shows were at Merton College Oxford; Chez Louis,
		Wimbledon (!) ; and Drayton Court flats New Year&apos;s Eve
		party in Chelsea.
		<p />
		The first show to be advertised as &quot;The Jazz Butcher&quot;
		was at Merton College, Oxford on 20th February 1982.
		The band lined up as: {expand('pat')}: guitar and voice, The Antichrist:
		guitar and voice, {expand('at')}: organ and voice, Chris &quot;Snogger&quot;
		Rudd (later of the Lost T-Shirts Of Atlantis) on bass,
		and {expand('owen')} on drums.
		<p />
		It was perceived as a one-off laugh, not unlike something that
		happened last Wednesday in a ditch in central London.
		<p />
		Pat then went away to the country and started writing
		some tunes.  The Glass deal was offered, and eventually
		a new romantic band called Where&apos;s Lisse?, who lived
		in Pat&apos;s area and who were also on Glass, suggested a
		&quot;gig&quot; together.  This is where it really starts ...
		<p />
		<hr />
		<p />
		<Link href="/gigs/1982/Feb20.html">1982-Feb-20</Link>	Merton College, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, Ramon Destine, {expand('at')}, Chris Rudd, {expand('owen')}
			</p>
		<Link href="/gigs/1982/Jun.html">1982-Jun</Link>	Private Party, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Louis
			</p>
		<Link href="/gigs/1982/Jun12.html">1982-Jun-12</Link>	Black Lion, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Louis
			</p>
		<Link href="/gigs/1982/Jul4.html">1982-Jul-4</Link>	The Nag&apos;s Head, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Louis
			</p>
		<Link href="/gigs/1982/Aug1.html">1982-Aug-1</Link>	Private Party, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}
			</p>
		<Link href="/gigs/1982/Aug17.html">1982-Aug-17</Link>	Cobbler&apos;s Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('at')}
			</p>
		<Link href="/gigs/1982/Nov1.html">1982-Nov-1</Link>	Hammersmith Palais, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('at')}, Louis, {expand('rolo')}
			</p>
		<Link href="/gigs/1982/Dec17.html">1982-Dec-17</Link>	The Other Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Louis
			</p>
		<Link href="/gigs/1982/Dec18.html">1982-Dec-18</Link>	Black Lion, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Louis, {expand('at')}, Brando, Sturgess
			</p>
		<Link href="/gigs/1983/Jan.html">1983-Jan</Link>	The Tunnel Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, {expand('rolo')}
			</p>
		<Link href="/gigs/1983/Feb17.html">1983-Feb-17</Link>	Flipper&apos;s Party, Shutlanger, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis
			</p>
		<Link href="/gigs/1983/Mar10.html">1983-Mar-10</Link>	The Culture Bunker, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}
			</p>
		<Link href="/gigs/1983/Mar19.html">1983-Mar-19</Link>	Black Lion, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}
			</p>
		<Link href="/gigs/1983/Apr19.html">1983-Apr-19</Link>	Old White Horse, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}
			</p>
		<Link href="/gigs/1983/May7.html">1983-May-7</Link>	Chez Louis, Wimbledon, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}
			</p>
		<Link href="/gigs/1983/May17.html">1983-May-17</Link>	The Clarendon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}
			</p>
		<Link href="/gigs/1983/May18.html">1983-May-18</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}, Hookham
			</p>
		<Link href="/gigs/1983/Jun4.html">1983-Jun-4</Link>	Black Lion, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}, Hookham
			</p>
		<Link href="/gigs/1983/Jun25.html">1983-Jun-25</Link>	Merton College, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, Louis, {expand('max')}, {expand('rolo')}, Hookham
			</p>
		<Link href="/gigs/1983/Jul25.html">1983-Jul-25</Link>	The Adlib Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, {expand('rolo')}, {expand('hask')}
			</p>
		<Link href="/gigs/1983/Aug21.html">1983-Aug-21</Link>	Caernarvon Castle, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, {expand('rolo')}, {expand('max')}
			</p>
		<Link href="/gigs/1983/Sep24.html">1983-Sep-24</Link>	Derngate Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('at')}, {expand('rolo')}, {expand('max')}
			</p>
		<Link href="/gigs/1983/Sep25.html">1983-Sep-25</Link>	Abington Park, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('rolo')}
			</p>
		<Link href="/gigs/1983/Oct20.html">1983-Oct-20</Link>	The Venue, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Mick Packwood
			</p>
		<Link href="/gigs/1983/Oct1.html">1983-Oct-1</Link>	Cobbler&apos;s Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1983/Oct22.html">1983-Oct-22</Link>	Merton College, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1983/Nov18.html">1983-Nov-18</Link>	Fulham Greyhound, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1983/Nov23.html">1983-Nov-23</Link>	The Embassy Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1983/Nov24.html">1983-Nov-24</Link>	Kingston Polytechnic, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1983/Nov25.html">1983-Nov-25</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Musgrove
			</p>
		<Link href="/gigs/1983/Dec2.html">1983-Dec-2</Link>	Merton College, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Musgrove
			</p>
		<Link href="/gigs/1984/Jan8.html">1984-Jan-8</Link>	Derngate Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')},Ady Tilley,Tim
			</p>
		<Link href="/gigs/1984/Jan27.html">1984-Jan-27</Link>	City Polytechnic, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, Ramon Destine
			</p>
		<Link href="/gigs/1984/Feb3.html">1984-Feb-3</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, Louis
			</p>
		<Link href="/gigs/1984/Feb27.html">1984-Feb-27</Link>	Chez Nonne, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1984/Mar3.html">1984-Mar-3</Link>	Town Hall, Towcester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, Musgrove
			</p>
		<Link href="/gigs/1984/Mar10.html">1984-Mar-10</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, Musgrove
			</p>
		<Link href="/gigs/1984/Mar15.html">1984-Mar-15</Link>	Warwick University, Coventry, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, Musgrove
			</p>
		<Link href="/gigs/1984/Mar31.html">1984-Mar-31</Link>	The Fridge, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, Musgrove
			</p>
		<Link href="/gigs/1984/Apr21.html">1984-Apr-21</Link>	The Living Room, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Apr24.html">1984-Apr-24</Link>	Verdley House, Sussex, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1984/Apr29.html">1984-Apr-29</Link>	The Pindar Of Wakefield, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/May6.html">1984-May-6</Link>	The Fridge, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/May12.html">1984-May-12</Link>	Black Lion, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo and {expand('dj')} solo
			</p>
		<Link href="/gigs/1984/May22.html">1984-May-22</Link>	The Moving Sidewalk, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1984/May25.html">1984-May-25</Link>	Moles, Bath, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/May26.html">1984-May-26</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Jun2.html">1984-Jun-2</Link>	Lings Theatre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Jun11.html">1984-Jun-11</Link>	Dingwall&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Jun27.html">1984-Jun-27</Link>	University, Loughborough, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Jun29.html">1984-Jun-29</Link>	St Alban&apos;s Street Gallery, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1984/Jun29_2000.html">1984-Jun-29</Link>	The Captain&apos;s Cabin, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1984/Jul14.html">1984-Jul-14</Link>	The Living Room, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Aug4.html">1984-Aug-4</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Sep1.html">1984-Sep-1</Link>	Arts Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Oct29.html">1984-Oct-29</Link>	Essex University, Colchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Nov9.html">1984-Nov-9</Link>	King&apos;s College, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Nov16.html">1984-Nov-16</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Nov17.html">1984-Nov-17</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Nov29.html">1984-Nov-29</Link>	Dingwall&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Dec1.html">1984-Dec-1</Link>	Black Lion, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Dec7.html">1984-Dec-7</Link>	Melkweg, Amsterdam, Holland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Dec8.html">1984-Dec-8</Link>	, Onkle Pos, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Dec9.html">1984-Dec-9</Link>	, Onkle Pos, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Dec10.html">1984-Dec-10</Link>	Cookie&apos;s, Frankfurt, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Dec22.html">1984-Dec-22</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1984/Dec30.html">1984-Dec-30</Link>	I.C.A., London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1985/Jan5.html">1985-Jan-5</Link>	The Leadmill, Sheffield, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1985/Jan6.html">1985-Jan-6</Link>	Arts Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1985/Jan17.html">1985-Jan-17</Link>	Ziggy&apos;s, Plymouth, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1985/Jan30.html">1985-Jan-30</Link>	University, London, England (U.L.U.)
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1985/Jan31.html">1985-Jan-31</Link>	Richmond Club, Brighton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1985/Feb1.html">1985-Feb-1</Link>	University, Reading, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1985/Feb2.html">1985-Feb-2</Link>	Lanchester Polytechnic, Coventry, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('dj')}, {expand('owen')}
			</p>
		<Link href="/gigs/1985/Feb8.html">1985-Feb-8</Link>	North East Polytechnic, London, England	
			<p />
		<Link href="/gigs/1985/Feb24.html">1985-Feb-24</Link>	Derngate Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar1.html">1985-Mar-1</Link>	The Thekla, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar7.html">1985-Mar-7</Link>	Hammersmith Town Hall, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar9.html">1985-Mar-9</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar14.html">1985-Mar-14</Link>	Kingston Polytechnic, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar16.html">1985-Mar-16</Link>	Essex University, Colchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar22.html">1985-Mar-22</Link>	Rockmagasinet, Orebro, Sweden
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar23.html">1985-Mar-23</Link>	Restaurant Oskar, Sundsvall
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar24.html">1985-Mar-24</Link>	Kolingsborg, Stockholm, Sweden
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar26.html">1985-Mar-26</Link>	Hulen, Bergen, Norway
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar27.html">1985-Mar-27</Link>	Renegat, Oslo, Norway
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Mar31.html">1985-Mar-31</Link>	Rote Fabrik, Zurich, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr2.html">1985-Apr-2</Link>	Tenax, Florence, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr2_2000.html">1985-Apr-2</Link>	Salt Peanuts, Florence, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr3.html">1985-Apr-3</Link>	Muchmore, Rome, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr4.html">1985-Apr-4</Link>	Small, Cento
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr5.html">1985-Apr-5</Link>	Vidia, Cesena
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr6.html">1985-Apr-6</Link>	Spielboden, Dornbir, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr7.html">1985-Apr-7</Link>	Scala, Dornbirn, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr9.html">1985-Apr-9</Link>	Arena, Vienna, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr10.html">1985-Apr-10</Link>	Posthof, Linz, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr11.html">1985-Apr-11</Link>	Manege, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr12.html">1985-Apr-12</Link>	Zabo Linde, N&uuml;remberg , Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr13.html">1985-Apr-13</Link>	Odeon, Munster, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr14.html">1985-Apr-14</Link>	Luxor, Cologne, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr15.html">1985-Apr-15</Link>	P.C.69, Bielefeld, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr17.html">1985-Apr-17</Link>	Markthalle, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr19.html">1985-Apr-19</Link>	Metropol, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr23.html">1985-Apr-23</Link>	, Onkle Pos, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Apr25.html">1985-Apr-25</Link>	Melkweg, Amsterdam, Holland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/May3.html">1985-May-3</Link>	Stafford College, England, Stafford, UK
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/May11.html">1985-May-11</Link>	The Leadmill, Sheffield, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/May23.html">1985-May-23</Link>	Ziggy&apos;s, Plymouth, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/May24.html">1985-May-24</Link>	The Thekla, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/May25.html">1985-May-25</Link>	Clarendon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/May28.html">1985-May-28</Link>	Escape Club, Brighton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jun8.html">1985-Jun-8</Link>	Black Lion, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jun17.html">1985-Jun-17</Link>	, Mean Fiddler, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jun22.html">1985-Jun-22</Link>	Foro Tevere, Rome, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jun27.html">1985-Jun-27</Link>	University Of Warwick, Coventry, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jun28.html">1985-Jun-28</Link>	Tom Allen Centre, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jun28_2000.html">1985-Jun-28</Link>	Bedford College, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jun29.html">1985-Jun-29</Link>	Clarendon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jul5.html">1985-Jul-5</Link>	666, Barcelona, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jul6.html">1985-Jul-6</Link>	Chocolatte, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jul7.html">1985-Jul-7</Link>	Chocolatte, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jul20.html">1985-Jul-20</Link>	Clarendon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jul27.html">1985-Jul-27</Link>	Jackson&apos;s Lane Centre, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Jul29.html">1985-Jul-29</Link>	Grunt-Grunt A-Go Go, Norwich, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Aug16.html">1985-Aug-16</Link>	, Onkle Pos, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Aug17.html">1985-Aug-17</Link>	Jubek Festival, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Aug18.html">1985-Aug-18</Link>	Shauburg, Bremen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Aug23.html">1985-Aug-23</Link>	Zeche, Bochum, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Aug25.html">1985-Aug-25</Link>	Ice Stadium, Groningen
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Aug25_2000.html">1985-Aug-25</Link>	Festival, Hougewoud
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Sep5.html">1985-Sep-5</Link>	Staple (party), Kent, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}
			</p>
		<Link href="/gigs/1985/Sep7.html">1985-Sep-7</Link>	Festival, Trochtelfingen
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Sep15.html">1985-Sep-15</Link>	Greek Theatre, Syracuse
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Sep19.html">1985-Sep-19</Link>	Underground, Croydon
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Sep20.html">1985-Sep-20</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Sep27.html">1985-Sep-27</Link>	Paradise, Reading, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct12.html">1985-Oct-12</Link>	Tom Allen Centre, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct14.html">1985-Oct-14</Link>	Electric Ballroom, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct17.html">1985-Oct-17</Link>	Hatfield Polytechnic, Herts, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct18.html">1985-Oct-18</Link>	Brunel University, Uxbridge, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct21.html">1985-Oct-21</Link>	Gatehouse Theatre, Stafford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct24.html">1985-Oct-24</Link>	Polytechnic, Manchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct26.html">1985-Oct-26</Link>	Imperial College, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct26_2000.html">1985-Oct-26</Link>	I.C.A., London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Oct29.html">1985-Oct-29</Link>	Hammersmith Palais, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov1.html">1985-Nov-1</Link>	University, Leicester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov6.html">1985-Nov-6</Link>	Luxor, Cologne, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov7.html">1985-Nov-7</Link>	Odeon, Munster, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov8.html">1985-Nov-8</Link>	, Onkle Pos, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov9.html">1985-Nov-9</Link>	, Onkle Pos, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov11.html">1985-Nov-11</Link>	Alabamahalle, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov13.html">1985-Nov-13</Link>	Pavilion, Hanover, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov14.html">1985-Nov-14</Link>	Loft, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov15.html">1985-Nov-15</Link>	Zeche, Bochum, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov16.html">1985-Nov-16</Link>	Batschkapp, Frankfurt, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov17.html">1985-Nov-17</Link>	Triebehaus, Kassel, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov18.html">1985-Nov-18</Link>	Rohre, Stuttgart, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov19.html">1985-Nov-19</Link>	Manege, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov20.html">1985-Nov-20</Link>	Manege, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov22.html">1985-Nov-22</Link>	Spielboden, Dornbirn, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov23.html">1985-Nov-23</Link>	Berufschule, Vienna, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov28.html">1985-Nov-28</Link>	La Dolce Vita, Lausanne
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov29.html">1985-Nov-29</Link>	Domino, Schaffhausen
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Nov30.html">1985-Nov-30</Link>	Totentanz, Basel
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec1.html">1985-Dec-1</Link>	Crasch, Freiburg
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec2.html">1985-Dec-2</Link>	Metropol, Aachen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec4.html">1985-Dec-4</Link>	, Onkle Pos, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec5.html">1985-Dec-5</Link>	Subway, Osnabruck
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec7.html">1985-Dec-7</Link>	Zabo Linde, N&uuml;remberg , Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec10.html">1985-Dec-10</Link>	Diamond Dogs, Naples, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec11.html">1985-Dec-11</Link>	Blackout, Rome, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec12.html">1985-Dec-12</Link>	Mascotte, Modena, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec13.html">1985-Dec-13</Link>	Viridis, Milan, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec14.html">1985-Dec-14</Link>	Alice Club, Arezzo
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec15.html">1985-Dec-15</Link>	Vidia, Cesena
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec17.html">1985-Dec-17</Link>	Salle De La Cite, Rennes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1985/Dec21.html">1985-Dec-21</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jan11.html">1986-Jan-11</Link>	International, Manchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jan17.html">1986-Jan-17</Link>	Brunel University, Uxbridge, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Feb1.html">1986-Feb-1</Link>	The Thekla, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Feb14.html">1986-Feb-14</Link>	The Tube, Newcastle-Upon-Tyne, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Feb25.html">1986-Feb-25</Link>	University, Caen, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Feb26.html">1986-Feb-26</Link>	University, Brest, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Feb27.html">1986-Feb-27</Link>	Salon, Nantes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Feb28.html">1986-Feb-28</Link>	Cave Des Vignerons, Bordeaux, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar2.html">1986-Mar-2</Link>	Ubu, Rennes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar3.html">1986-Mar-3</Link>	Opera Night, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar4.html">1986-Mar-4</Link>	University, Besancon, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar5.html">1986-Mar-5</Link>	Bandit, Strasbourg, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar7.html">1986-Mar-7</Link>	Goldsmith&apos;s College, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar8.html">1986-Mar-8</Link>	Division One, Wendover, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar13.html">1986-Mar-13</Link>	The Cricketer&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar21.html">1986-Mar-21</Link>	University, London, England (U.L.U.)
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar27.html">1986-Mar-27</Link>	Reverberation Club, Rugby, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Mar29.html">1986-Mar-29</Link>	Internaticnal, Manchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Apr4.html">1986-Apr-4</Link>	Clarendon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Apr10.html">1986-Apr-10</Link>	Tropic Club, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Apr25.html">1986-Apr-25</Link>	Bravatta, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Apr26.html">1986-Apr-26</Link>	Spit, Alicante, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Apr27.html">1986-Apr-27</Link>	Bravatta, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Apr30.html">1986-Apr-30</Link>	Town & Country Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/May3.html">1986-May-3</Link>	Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/May17.html">1986-May-17</Link>	Canon&apos;s Hill Park, Birmingham, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/May22.html">1986-May-22</Link>	St Catherine&apos;s College, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/May23.html">1986-May-23</Link>	The Cricketer&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/May31.html">1986-May-31</Link>	Division One, Wendover, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jun2.html">1986-Jun-2</Link>	University Of Surrey, Guildford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jun14.html">1986-Jun-14</Link>	Palais Des Arts, Vannes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jun15.html">1986-Jun-15</Link>	Coatelan, Morlaix, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jun19.html">1986-Jun-19</Link>	Festival, Glastonbury, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul3.html">1986-Jul-3</Link>	Festival, Naples, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul16.html">1986-Jul-16</Link>	Maxwell&apos;s, Hoboken, New Jersey, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul17.html">1986-Jul-17</Link>	The Cat Club, New York City, New York, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul18.html">1986-Jul-18</Link>	930 Club, Washington D.C., USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul19.html">1986-Jul-19</Link>	Pearl Street Lounge, Northampton, Massachusetts, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul21.html">1986-Jul-21</Link>	Jonathan Swift&apos;s, Boston, Massachusetts, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul22.html">1986-Jul-22</Link>	Biznis Bar, Montreal, Quebec, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul23.html">1986-Jul-23</Link>	Zinc, Ottawa, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul24.html">1986-Jul-24</Link>	R.P.M., Toronto, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul25.html">1986-Jul-25</Link>	The Loft, Guelph, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul26.html">1986-Jul-26</Link>	Subway, Windsor, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul28.html">1986-Jul-28</Link>	The Blind Pig, Ann Arbor, Michigan, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul29.html">1986-Jul-29</Link>	Phantasy, Cleveland, OHIO, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Jul31.html">1986-Jul-31</Link>	, Cabaret Metro, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug1.html">1986-Aug-1</Link>	O&apos;Kay&apos;S Corral, Madison, Wisconsin, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug2.html">1986-Aug-2</Link>	Underground, Milwaukee, Wisconsin, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug3.html">1986-Aug-3</Link>	First Avenue, Minneapolis, Minnesota, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug5.html">1986-Aug-5</Link>	Wellington&apos;s, Winnipeg, Manitoba, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug7.html">1986-Aug-7</Link>	University, Calgary, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug9.html">1986-Aug-9</Link>	Town Pump, Vancouver, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug10.html">1986-Aug-10</Link>	Cafe Central, Seattle, Washington, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug12.html">1986-Aug-12</Link>	Berkley Square, Berkley, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug13.html">1986-Aug-13</Link>	Oasis, San Fransisco, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug14.html">1986-Aug-14</Link>	Roxy Theatre, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug15.html">1986-Aug-15</Link>	Texas Records, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Aug15_2000.html">1986-Aug-15</Link>	Cooney&apos;s Garden Party, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('felix')}
			</p>
		<Link href="/gigs/1986/Sep5.html">1986-Sep-5</Link>	Roadmender Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}
			</p>
		<Link href="/gigs/1986/Oct4.html">1986-Oct-4</Link>	Essex University, Colchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct13.html">1986-Oct-13</Link>	Academy, Portsmouth, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct15.html">1986-Oct-15</Link>	Lanchester Polytechnic, Coventry, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct16.html">1986-Oct-16</Link>	Sugarhouse, Lancaster, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct17.html">1986-Oct-17</Link>	University, London, England (U.L.U.)
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct18.html">1986-Oct-18</Link>	University, Liverpool, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct22.html">1986-Oct-22</Link>	University Of Surrey, Guildford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct23.html">1986-Oct-23</Link>	Kingston Polytechnic, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct24.html">1986-Oct-24</Link>	Tom Allen Centre, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct29.html">1986-Oct-29</Link>	Warehouse, Leeds, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct30.html">1986-Oct-30</Link>	Clarendon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Oct31.html">1986-Oct-31</Link>	University, Reading, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov6.html">1986-Nov-6</Link>	Ballhaus Tiergarten, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov13.html">1986-Nov-13</Link>	Hunky Dory, Detmold, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov14.html">1986-Nov-14</Link>	Markthalle, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov15.html">1986-Nov-15</Link>	Schlachthof, Bremen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov17.html">1986-Nov-17</Link>	Subway, Osnabruck
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov18.html">1986-Nov-18</Link>	Fabrik, Coesfeld
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov19.html">1986-Nov-19</Link>	Luxor, Cologne, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov20.html">1986-Nov-20</Link>	Manege, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov21.html">1986-Nov-21</Link>	Manege, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov22.html">1986-Nov-22</Link>	Zabo Linde, N&uuml;remberg , Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov25.html">1986-Nov-25</Link>	Rohre, Stuttgart, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov27.html">1986-Nov-27</Link>	Club 33, Zurich, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov28.html">1986-Nov-28</Link>	Domino, Schaffhausen
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Nov29.html">1986-Nov-29</Link>	Nightmeer, Bern, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec2.html">1986-Dec-2</Link>	Szene Wien, Vienna, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec4.html">1986-Dec-4</Link>	Corallo, Scandiano
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec5.html">1986-Dec-5</Link>	Vidia, Cesena
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec6.html">1986-Dec-6</Link>	Riot Club, Naples, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec7.html">1986-Dec-7</Link>	Empire, Catania, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec9.html">1986-Dec-9</Link>	Camelot, Bari, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec11.html">1986-Dec-11</Link>	Zentrum Zoc, Tubingen
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec12.html">1986-Dec-12</Link>	Live Station, Dortmund, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec17.html">1986-Dec-17</Link>	Astoria, Madrid, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec18.html">1986-Dec-18</Link>	Garage, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec19.html">1986-Dec-19</Link>	Zeleste, Barcelona, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1986/Dec20.html">1986-Dec-20</Link>	En Bruto, Zaragoza, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('owen')}, {expand('green')}, Lohan
			</p>
		<Link href="/gigs/1987/Jan21.html">1987-Jan-21</Link>	Hulen, Bergen, Norway
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Jan22.html">1987-Jan-22</Link>	Sardines, Oslo, Norway
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Jan26.html">1987-Jan-26</Link>	Logo, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Jan27.html">1987-Jan-27</Link>	OkeyDokey, Neuss
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Jan31.html">1987-Jan-31</Link>	La Dolce Vita, Lausanne
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb2.html">1987-Feb-2</Link>	Bandit, Strasbourg, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb3.html">1987-Feb-3</Link>	Caveau Des Dominicains, Nancy, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb4.html">1987-Feb-4</Link>	Forum, Tours, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb5.html">1987-Feb-5</Link>	Babylone, Bordeaux, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb6.html">1987-Feb-6</Link>	Le Pied, Toulouse, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb7.html">1987-Feb-7</Link>	Confort Moderne, Poitiers, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb8.html">1987-Feb-8</Link>	Julien, Marseille, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb10.html">1987-Feb-10</Link>	Rex Club, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb11.html">1987-Feb-11</Link>	Coatelan, Morlaix, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb12.html">1987-Feb-12</Link>	Salle De La Cite, Rennes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Feb13.html">1987-Feb-13</Link>	Bop Pub, Evreux, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Mar7.html">1987-Mar-7</Link>	The Old 5 Bells, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Mar20.html">1987-Mar-20</Link>	Black Horse, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Mar28.html">1987-Mar-28</Link>	Division One, Wendover, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Apr14.html">1987-Apr-14</Link>	Arts Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Apr15.html">1987-Apr-15</Link>	The Irish Squat, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Apr16.html">1987-Apr-16</Link>	Tropic Club, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/May21.html">1987-May-21</Link>	Astoria, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1987/May27.html">1987-May-27</Link>	The Wheatsheaf, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1987/May29.html">1987-May-29</Link>	Town & Country Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1987/Jul28.html">1987-Jul-28</Link>	Kite Farm, Kent, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('erol')}, Blair MacDonald
			</p>
		<Link href="/gigs/1987/Aug2.html">1987-Aug-2</Link>	Festival Veni Vidi Vici, Frejus
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('erol')}, Blair MacDonald
			</p>
		<Link href="/gigs/1987/Aug21.html">1987-Aug-21</Link>	Black Horse, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('erol')}, Blair MacDonald
			</p>
		<Link href="/gigs/1987/Sep18.html">1987-Sep-18</Link>	The Groovy Fishtank, Sheffield, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} (with a cold)
			</p>
		<Link href="/gigs/1987/Oct20.html">1987-Oct-20</Link>	Goldsmith&apos;s College, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')},Buj
			</p>
		<Link href="/gigs/1987/Dec8.html">1987-Dec-8</Link>	Arts Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1987/Dec19.html">1987-Dec-19</Link>	The Falcon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Jan11.html">1988-Jan-11</Link>	Dingwall&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Jan30.html">1988-Jan-30</Link>	Clarendon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Feb12.html">1988-Feb-12</Link>	Polytechnic, Plymouth, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Feb13.html">1988-Feb-13</Link>	Brunel University, Uxbridge, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Feb18.html">1988-Feb-18</Link>	West Indian Club, Southampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb19.html">1988-Feb-19</Link>	University Of Kent, Canterbury, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb22.html">1988-Feb-22</Link>	Escape Club, Brighton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb23.html">1988-Feb-23</Link>	Portlands, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb24.html">1988-Feb-24</Link>	Adelphi, Hull, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb25.html">1988-Feb-25</Link>	Sugarhouse, Lancaster, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb26.html">1988-Feb-26</Link>	Boardwalk, Manchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb27.html">1988-Feb-27</Link>	The Venue, Edinburgh, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb28.html">1988-Feb-28</Link>	Rooftops, Glasgow, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Feb29.html">1988-Feb-29</Link>	University, Leeds, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar.html">1988-Mar</Link>	, CBC, Montreal, QuebecCanada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}
			</p>
		<Link href="/gigs/1988/Mar2.html">1988-Mar-2</Link>	Mardi Gras, Nottingham, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar3.html">1988-Mar-3</Link>	Raffles, Port Talbot, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar4.html">1988-Mar-4</Link>	Polytechnic, Stoke-On-Trent, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar5.html">1988-Mar-5</Link>	Tropic Club, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar8.html">1988-Mar-8</Link>	Elysee Montmartre, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar9.html">1988-Mar-9</Link>	Caveau Des Dominicains, Nancy, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar10.html">1988-Mar-10</Link>	Ubu, Rennes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar11.html">1988-Mar-11</Link>	Le Royal, Le Mans, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar14.html">1988-Mar-14</Link>	The Loft, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar15.html">1988-Mar-15</Link>	Hyde Park, Osnabruck
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar16.html">1988-Mar-16</Link>	Pumpwerk, Wilhelmshaven
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar17.html">1988-Mar-17</Link>	Markthalle, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar18.html">1988-Mar-18</Link>	Fbz Burgerhalle, Braunschweig, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar19.html">1988-Mar-19</Link>	Gesamtschule, Herten, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar20.html">1988-Mar-20</Link>	Zeche, Bochum, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar21.html">1988-Mar-21</Link>	Luxor, Cologne, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar22.html">1988-Mar-22</Link>	Kunstbunker, Kassel, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar23.html">1988-Mar-23</Link>	Batschkapp, Frankfurt, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar24.html">1988-Mar-24</Link>	Metropol, Aachen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar25.html">1988-Mar-25</Link>	Zabo Linde, Nuermberg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar27.html">1988-Mar-27</Link>	Rohre, Stuttgart, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar28.html">1988-Mar-28</Link>	Alabamahalle, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Mar31.html">1988-Mar-31</Link>	Domino, Schaffhausen
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr1.html">1988-Apr-1</Link>	Spielboden, Dornbirn, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr2.html">1988-Apr-2</Link>	Bogen 13, Innsbruck, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr3.html">1988-Apr-3</Link>	Arena, Vienna, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr7.html">1988-Apr-7</Link>	Piper 80, Rome, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr8.html">1988-Apr-8</Link>	Julien, Marseille, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr9.html">1988-Apr-9</Link>	The End, Vitoria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr11.html">1988-Apr-11</Link>	Zeleste, Barcelona, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr13.html">1988-Apr-13</Link>	Garage, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr14.html">1988-Apr-14</Link>	Heartbreak Hotel, Sete
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr15.html">1988-Apr-15</Link>	Rail Theatre, Lyon, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Apr16.html">1988-Apr-16</Link>	Rex Club, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/May2.html">1988-May-2</Link>	Dingwall&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/May11.html">1988-May-11</Link>	Bierkeller, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo & the Blue Aeroplanes
			</p>
		<Link href="/gigs/1988/May19.html">1988-May-19</Link>	St Catherine&apos;s College, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/May22.html">1988-May-22</Link>	The Marquee, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Jun2.html">1988-Jun-2</Link>	Maxwell&apos;s, Hoboken, New Jersey, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/May3.html">1988-May-3</Link>	T.T. The Bear&apos;s Place, Boston, Massachusetts, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Jun4.html">1988-Jun-4</Link>	Club Soda, Montreal, Quebec, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Jun6.html">1988-Jun-6</Link>	Barrymore&apos;s Theatre, Ottawa, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Jun7.html">1988-Jun-7</Link>	R.P.M., Toronto, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Jul1.html">1988-Jul-1</Link>	The Coach House, San Juan Capistrano, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug8.html">1988-Aug-8</Link>	Victoria Park Pavilion, Kitchener, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug9.html">1988-Aug-9</Link>	Peabody&apos;s Down-Under, Cleveland, Ohio, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug10.html">1988-Aug-10</Link>	St Andrew&apos;s Hall, Detroit, Michigan, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug11.html">1988-Aug-11</Link>	, Cubby Bear, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug12.html">1988-Aug-12</Link>	Odd Rock Cafe, Milwaukee, Wisconsin, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug13.html">1988-Aug-13</Link>	First Avenue, Minneapolis, Minnesota, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug15.html">1988-Aug-15</Link>	Spectrum, Winnipeg, Manitoba, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug16.html">1988-Aug-16</Link>	The Venue, Regina, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug17.html">1988-Aug-17</Link>	Holiday Inn, Saskatoon, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug18.html">1988-Aug-18</Link>	University, Edmonton, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug19.html">1988-Aug-19</Link>	McEwen Hall, Calgary, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug21.html">1988-Aug-21</Link>	Town Pump, Vancouver, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug22.html">1988-Aug-22</Link>	Town Pump, Vancouver, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug23.html">1988-Aug-23</Link>	Town Pump, Vancouver, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug24.html">1988-Aug-24</Link>	Moore&apos;s Theatre, Seattle, Washington, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug25.html">1988-Aug-25</Link>	Satyricon, Portland, Oregon, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug27.html">1988-Aug-27</Link>	I-Beam, San Fransisco, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug28.html">1988-Aug-28</Link>	Oasis, San Jose, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug30.html">1988-Aug-30</Link>	Roxy Theatre, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Aug7_2000.html">1988-Aug-7</Link>	Town & Country Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Aug22.html">1988-Aug-22</Link>	Dingwall&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1988/Sep8.html">1988-Sep-8</Link>	Market Tavern, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1988/Sep14.html">1988-Sep-14</Link>	Portlands, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1988/Oct5.html">1988-Oct-5</Link>	After Dark, Reading, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Oct6.html">1988-Oct-6</Link>	Town & Country Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Oct21.html">1988-Oct-21</Link>	The Limelight, Belfast, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Oct22.html">1988-Oct-22</Link>	Trinity College, Dublin, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Oct23.html">1988-Oct-23</Link>	Union Hall, Derry City, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Nov1.html">1988-Nov-1</Link>	Drummonds, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Nov2.html">1988-Nov-2</Link>	Ealing College, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Nov4.html">1988-Nov-4</Link>	Galerie Galea, Caen, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1988/Nov10.html">1988-Nov-10</Link>	City Hall, Salisbury, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1988/Nov12.html">1988-Nov-12</Link>	Polytechnic, Manchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Nov30.html">1988-Nov-30</Link>	University Of Surrey, Guildford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Dec14.html">1988-Dec-14</Link>	After Dark, Reading, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Dec16.html">1988-Dec-16</Link>	Polytechnic, Glasgow, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1988/Dec21.html">1988-Dec-21</Link>	Market Tavern, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} and Ed Ball
			</p>
		<Link href="/gigs/1989/Jan21.html">1989-Jan-21</Link>	The Hothouse, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('max')}, {expand('owen')}, {expand('dj')}, Louis
			</p>
		<Link href="/gigs/1989/Feb3.html">1989-Feb-3</Link>	Western Star Domino Club, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/Feb25.html">1989-Feb-25</Link>	Boardwalk, Manchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/Feb28.html">1989-Feb-28</Link>	Drummonds, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/Mar10.html">1989-Mar-10</Link>	White Horse, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Apr6.html">1989-Apr-6</Link>	Le Troupeau, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Apr7.html">1989-Apr-7</Link>	Le Troupeau, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Apr12.html">1989-Apr-12</Link>	The Marquee, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/Apr14.html">1989-Apr-14</Link>	Carribean Centre, Ipswich, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/Apr26.html">1989-Apr-26</Link>	Dingwall&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/Apr28.html">1989-Apr-28</Link>	Roadmender Centre, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1989/May3.html">1989-May-3</Link>	National Ballroom, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('kizzy')}, {expand('larry')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1989/May5.html">1989-May-5</Link>	University, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/May12.html">1989-May-12</Link>	University, London, England (U.L.U.)
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('larry')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1989/May13.html">1989-May-13</Link>	St Edmund&apos;s Hall, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('larry')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1989/May23.html">1989-May-23</Link>	Zap Club, Brighton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('larry')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1989/Jun6.html">1989-Jun-6</Link>	Reverb Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Jun9.html">1989-Jun-9</Link>	Powerhaus, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('kizzy')}, {expand('larry')}
			</p>
		<Link href="/gigs/1989/Jun24.html">1989-Jun-24</Link>	Queen&apos;s College, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('kizzy')}, {expand('larry')}
			</p>
		<Link href="/gigs/1989/Jun28.html">1989-Jun-28</Link>	University, Lancaster, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('kizzy')}, {expand('larry')}
			</p>
		<Link href="/gigs/1989/Jul5.html">1989-Jul-5</Link>	Romer, Bremen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Jul6.html">1989-Jul-6</Link>	The Loft, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Jul7.html">1989-Jul-7</Link>	Grosse Freiheit 36, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Jul9.html">1989-Jul-9</Link>	Live Station, Dortmund, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Jul10.html">1989-Jul-10</Link>	Cookie&apos;s, Frankfurt, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Jul27.html">1989-Jul-27</Link>	Jericho Tavern, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Sep1.html">1989-Sep-1</Link>	Powerhaus, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1989/Sep2.html">1989-Sep-2</Link>	Adelphi, Hull, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1989/Sep4.html">1989-Sep-4</Link>	Take 2, Sheffield, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('kizzy')}
			</p>
		<Link href="/gigs/1989/Sep7.html">1989-Sep-7</Link>	Boardwalk, Manchester, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}
			</p>
		<Link href="/gigs/1989/Sep19.html">1989-Sep-19</Link>	Studio, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Sep20.html">1989-Sep-20</Link>	Camden Workers&apos; Social Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Sep21.html">1989-Sep-21</Link>	Duchess Of York, Leeds, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Oct4.html">1989-Oct-4</Link>	Subterrania, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Oct5.html">1989-Oct-5</Link>	Joiner&apos;s Arms, Southampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Oct6.html">1989-Oct-6</Link>	Jericho Tavern, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Oct13.html">1989-Oct-13</Link>	Szenerie, Landesbergen
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Oct14.html">1989-Oct-14</Link>	The Falcon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Oct24.html">1989-Oct-24</Link>	The Falcon, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1989/Nov3.html">1989-Nov-3</Link>	Maxwell&apos;s, Hoboken, New Jersey, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov4.html">1989-Nov-4</Link>	930 Club, Washington D.C., USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov5.html">1989-Nov-5</Link>	Knitting Factory, New York City, New York, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov6.html">1989-Nov-6</Link>	J.C. Dobbs, Philadelphia, Pennsylvania, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov8.html">1989-Nov-8</Link>	Paradise, Boston, Massachusetts, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov9.html">1989-Nov-9</Link>	University, Brunswick, New Jersey, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov10.html">1989-Nov-10</Link>	Tree Cafe, Portland, Oregon, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov11.html">1989-Nov-11</Link>	Foufounes Electriques, Montreal, Quebec, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov13.html">1989-Nov-13</Link>	Barrymore&apos;s Theatre, Ottawa, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov14.html">1989-Nov-14</Link>	R.P.M., Toronto, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov15.html">1989-Nov-15</Link>	The Blind Pig, Ann Arbor, Michigan, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov16.html">1989-Nov-16</Link>	<Link href="http://www.infinet.com/~markg/liveshow/staches.html">Stache&apos;s</Link>, Columbus, Ohio, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov17.html">1989-Nov-17</Link>	, Lounge Axe, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov18.html">1989-Nov-18</Link>	Ratskeller, Madison, Wisconsin, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov19_1600.html">1989-Nov-19</Link>	Pat, Milwaukee, Wisconsin, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}
			</p>
		<Link href="/gigs/1989/Nov19_2000.html">1989-Nov-19</Link>	Shank Hall, Milwaukee, Wisconsin, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov20.html">1989-Nov-20</Link>	First Avenue, Minneapolis, Minnesota, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov22.html">1989-Nov-22</Link>	Circuit Cabaret, Winnipeg, Manitoba, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov23.html">1989-Nov-23</Link>	The Venue, Regina, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov24.html">1989-Nov-24</Link>	The Airliner, Saskatoon, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov25.html">1989-Nov-25</Link>	Dinwoodie Lounge, Edmonton, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov26.html">1989-Nov-26</Link>	McEwen Hall, Calgary, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov28.html">1989-Nov-28</Link>	Commodore Ballroom, Vancouver, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Nov29.html">1989-Nov-29</Link>	The Forge, Victoria, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec1.html">1989-Dec-1</Link>	Backstage, Seattle, Washington, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec2.html">1989-Dec-2</Link>	Blue Gallery, Portland, Oregon, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec4.html">1989-Dec-4</Link>	Cactus Club, San Jose
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec5.html">1989-Dec-5</Link>	Slim&apos;s, San Fransisco
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec6.html">1989-Dec-6</Link>	, KCRW, Santa Monica, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('larry')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec7.html">1989-Dec-7</Link>	Bogart&apos;s, Long Beach
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec8.html">1989-Dec-8</Link>	Roxy Theatre, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec9.html">1989-Dec-9</Link>	Roxy Theatre, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec10.html">1989-Dec-10</Link>	The Coach House, San Juan Capistrano
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec11.html">1989-Dec-11</Link>	The Casbah, San Diego
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec13.html">1989-Dec-13</Link>	Atomic Theatre, Albuquerque
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec15.html">1989-Dec-15</Link>	The Venue, Dallas
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec16.html">1989-Dec-16</Link>	Liberty Lunch, Austin
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec17.html">1989-Dec-17</Link>	Rockerfeller&apos;s, Houston
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec18.html">1989-Dec-18</Link>	Tipitina&apos;s, New Orleans
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec19.html">1989-Dec-19</Link>	The Cotton Club, Atlanta
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1989/Dec20.html">1989-Dec-20</Link>	Days Inn Hotel Lobby, Atlanta
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}
			</p>
		<Link href="/gigs/1989/Dec29.html">1989-Dec-29</Link>	The Rock Garden, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1990/Feb26.html">1990-Feb-26</Link>	Dingwall&apos;s, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}
			</p>
		<Link href="/gigs/1990/Mar2.html">1990-Mar-2</Link>	Sala Gares, Pamplona
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar3.html">1990-Mar-3</Link>	Txitxarro, Deba
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar4.html">1990-Mar-4</Link>	Periferia, Leon
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar7.html">1990-Mar-7</Link>	Sala Hippo, Valladollid
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar8.html">1990-Mar-8</Link>	Universal, Madrid, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar9.html">1990-Mar-9</Link>	Central, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar10.html">1990-Mar-10</Link>	Zeleste, Barcelona, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar13.html">1990-Mar-13</Link>	Le Truc(k), Lyon, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar14.html">1990-Mar-14</Link>	New Morning, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar15.html">1990-Mar-15</Link>	Vrije Universitat, Brussels, Belgium
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar16.html">1990-Mar-16</Link>	Le Plan, Ris-Orangis
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar17.html">1990-Mar-17</Link>	Cahier De Brouillon, Hoogstraaten
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar30.html">1990-Mar-30</Link>	I.S.C., Bern, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Mar31.html">1990-Mar-31</Link>	Usine, Geneva, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr1.html">1990-Apr-1</Link>	La Dolce Vita, Lausanne
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr4.html">1990-Apr-4</Link>	Cineteatro Astra, Rome, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr5.html">1990-Apr-5</Link>	Teatro C.T.M. Arco, Brescia
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr6.html">1990-Apr-6</Link>	Gratis, Senigallia
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr7.html">1990-Apr-7</Link>	Macabre, Bra
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr8.html">1990-Apr-8</Link>	Vinile, Bassano Del Grappa
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr11.html">1990-Apr-11</Link>	Blue Box, Budapest, Hungary
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr13.html">1990-Apr-13</Link>	Rote Fabrik, Zurich, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr15.html">1990-Apr-15</Link>	Spielboden, Dornbirn, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr17.html">1990-Apr-17</Link>	Utopia, Innsbruck, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr18.html">1990-Apr-18</Link>	Posthof, Linz, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr19.html">1990-Apr-19</Link>	Szene Wien, Vienna, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr20.html">1990-Apr-20</Link>	Altes Schutzenhaus, Stuttgart, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr21.html">1990-Apr-21</Link>	Nachtwerk, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr22.html">1990-Apr-22</Link>	Kulturzentrum, Mainz
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr23.html">1990-Apr-23</Link>	Rockfabrik, Ubach-Palenberg
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr24.html">1990-Apr-24</Link>	New York, Kassel, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr25.html">1990-Apr-25</Link>	University, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr26.html">1990-Apr-26</Link>	Hunky Dory, Detmold, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr27.html">1990-Apr-27</Link>	Live Station, Germany, Dortmund, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr28.html">1990-Apr-28</Link>	Szenerie, Landesbergen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr29.html">1990-Apr-29</Link>	Markthalle, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Apr30.html">1990-Apr-30</Link>	Riders Cafe, Lubeck
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/May1.html">1990-May-1</Link>	M.A.X. Musikhalle, Kiel
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/May23.html">1990-May-23</Link>	Freud&apos;s, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Jun16.html">1990-Jun-16</Link>	Tonfestival, Kuchl
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Jul4.html">1990-Jul-4</Link>	Powerhaus, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Aug21.html">1990-Aug-21</Link>	The Borderline, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Aug25.html">1990-Aug-25</Link>	Festival, Tonara, Sardinia
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('richard')} (his last show), {expand('green')}
			</p>
		<Link href="/gigs/1990/Sep13.html">1990-Sep-13</Link>	Duchess Of York, Leeds, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Sep14.html">1990-Sep-14</Link>	The Venue, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Sep15.html">1990-Sep-15</Link>	The Venue, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Oct22.html">1990-Oct-22</Link>	Melody Ballroom, Portland, Oregon, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Oct23.html">1990-Oct-23</Link>	Backstage, Seattle, Washington, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Oct26.html">1990-Oct-26</Link>	Commodore Ballroom, Vancouver, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Oct29.html">1990-Oct-29</Link>	The Bronx, Edmonton, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Oct30.html">1990-Oct-30</Link>	Westward Club, Calgary, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Oct31.html">1990-Oct-31</Link>	University, Regina, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov1.html">1990-Nov-1</Link>	University, Saskatoon, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov3.html">1990-Nov-3</Link>	Circuit Cabaret, Winnipeg, Manitoba, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov5.html">1990-Nov-5</Link>	First Avenue, Minneapolis, Minnesota, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov6.html">1990-Nov-6</Link>	, Cabaret Metro, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov7.html">1990-Nov-7</Link>	Peabody&apos;s Down-Under, Cleveland, Ohio, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov8.html">1990-Nov-8</Link>	The Diamond, Toronto, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov9.html">1990-Nov-9</Link>	Peter Clark Hall, Guelph, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov10.html">1990-Nov-10</Link>	Club Soda, Montreal, Quebec, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov11.html">1990-Nov-11</Link>	Paradise, Boston, Massachusetts, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov12.html">1990-Nov-12</Link>	Maxwell&apos;s, Hoboken, New Jersey, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov13.html">1990-Nov-13</Link>	The Marquee, New York City, New York, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov14.html">1990-Nov-14</Link>	930 Club, Washington D.C., USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov15.html">1990-Nov-15</Link>	Cat&apos;s Cradle, Chapel Hill, North Carolina, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov16.html">1990-Nov-16</Link>	Masquerade, Atlanta, Georgia, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov17.html">1990-Nov-17</Link>	Jimmy&apos;s, New Orleans, Louisiana, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov19.html">1990-Nov-19</Link>	KTBS, Austin, Texas, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}
			</p>
		<Link href="/gigs/1990/Nov19_2000.html">1990-Nov-19</Link>	Liberty Lunch, Austin, Texas, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov20.html">1990-Nov-20</Link>	Trees, Dallas, Texas, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov23.html">1990-Nov-23</Link>	Roxy Theatre, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov24_1600.html">1990-Nov-24</Link>	, KCRW, Santa MonicaCalifornia, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, Gerard Langley
			</p>
		<Link href="/gigs/1990/Nov24_2000.html">1990-Nov-24</Link>	Bogart&apos;s, Long Beach, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Nov25.html">1990-Nov-25</Link>	Slim&apos;s, San Fransisco, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('larry')}, {expand('paul')}, {expand('jules')}, {expand('green')}
			</p>
		<Link href="/gigs/1990/Dec12.html">1990-Dec-12</Link>	Jericho Tavern, Oxford, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('sonic')}
			</p>
		<Link href="/gigs/1991/Apr25.html">1991-Apr-25</Link>	Arc Club, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1991/Jun11.html">1991-Jun-11</Link>	The Borderline, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('pete')}
			</p>
		<Link href="/gigs/1991/Jun18.html">1991-Jun-18</Link>	, Mean Fiddler, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('pete')}
			</p>
		<Link href="/gigs/1991/Aug27.html">1991-Aug-27</Link>	Molly Malone&apos;s, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')},Charlie Baldonado, {expand('hask')}
			</p>
		<Link href="/gigs/1991/Sep4.html">1991-Sep-04</Link>	Whisky A-Go-Go, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1991/Oct12.html">1991-Oct-12</Link>	Theatre Eurupeen, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct14.html">1991-Oct-14</Link>	???, Vitoria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct16.html">1991-Oct-16</Link>	Txitxarro, Deba
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct17.html">1991-Oct-17</Link>	???, Logrono
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct21.html">1991-Oct-21</Link>	Central, Valencia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct22.html">1991-Oct-22</Link>	Limite, Murcia, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct26.html">1991-Oct-26</Link>	Revolver, Madrid, Spain
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct27.html">1991-Oct-27</Link>	Pepe, Burgos
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Oct28.html">1991-Oct-28</Link>	Periferia, Leon
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov3.html">1991-Nov-3</Link>	Luxor, Cologne, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov4.html">1991-Nov-4</Link>	The Loft, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov5.html">1991-Nov-5</Link>	Vier Linden, Hildesheim, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov6.html">1991-Nov-6</Link>	Knust, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov7.html">1991-Nov-7</Link>	Romer, Bremen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov8.html">1991-Nov-8</Link>	Batschkapp, Frankfurt, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov9.html">1991-Nov-9</Link>	Maxim Gorki, Stuttgart, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov11.html">1991-Nov-11</Link>	Jazzhaus, Freiburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov13.html">1991-Nov-13</Link>	Utopia, Innsbruck, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov14.html">1991-Nov-14</Link>	Arena, Vienna, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1991/Nov15.html">1991-Nov-15</Link>	Orpheum, Graz, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1992/1992.html">1992</Link>		Demo Tape, The Vaguely Familiar
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('richard')}, female singer
			</p>
		<Link href="/gigs/1992/Mar18.html">1992-Mar-18</Link>	Powerhaus, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1992/Apr11.html">1992-Apr-11</Link>	Olympic Cinema, Nantes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Apr18.html">1992-Apr-18</Link>	Underworld, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Apr24.html">1992-Apr-24</Link>	Georgia Theatre, Athens, Georgia, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Apr25_1200.html">1992-Apr-25</Link>	WRAS, Atlanta, Georgia, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}
			</p>
		<Link href="/gigs/1992/Apr25_1600.html">1992-Apr-25</Link>	Turtle&apos;s Records, Atlanta, Georgia, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}
			</p>
		<Link href="/gigs/1992/Apr25_2000.html">1992-Apr-25</Link>	Cotton Club, Atlanta, Georgia, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Apr26_1200.html">1992-Apr-26</Link>	, WXYC, Chapel Hill, North Carolina, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1992/Apr26_2000.html">1992-Apr-26</Link>	Cat&apos;s Cradle, Chapel Hill, North Carolina, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Apr28.html">1992-Apr-28</Link>	Max&apos;s, Baltimore, Maryland, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Apr29.html">1992-Apr-29</Link>	J.C. Dobbs, Philadelphia, Pennsylvania, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Apr30.html">1992-Apr-30</Link>	Maxwell&apos;s, Hoboken, New Jersey, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May1.html">1992-May-1</Link>	930 Club, Washington D.C., USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May2_2000.html">1992-May-2</Link>	Tramp&apos;s, New York City, New York, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May3.html">1992-May-3</Link>	Club Babyhead, Providence, Rhode Island, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May5.html">1992-May-5</Link>	Nightstage, Boston, Massachusetts, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May6_1200.html">1992-May-6</Link>	, CBC, Montreal, QuebecCanada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}
			</p>
		<Link href="/gigs/1992/May6_2000.html">1992-May-6</Link>	Club Soda, Montreal, Quebec, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May7.html">1992-May-7</Link>	Zaphod Beeblebrox, Ottawa, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May8.html">1992-May-8</Link>	The Bomb Shelter, Waterloo, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May9.html">1992-May-9</Link>	El Mocambo, Toronto, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May10.html">1992-May-10</Link>	Trasheteria, Guelph, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May12.html">1992-May-12</Link>	The Hideaway, St Catherine&apos;s, Ontario, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May13.html">1992-May-13</Link>	Peabody&apos;s Down-Under, Cleveland, Ohio, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May14.html">1992-May-14</Link>	St Andrew&apos;s Hall, Detroit, Michigan, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May15.html">1992-May-15</Link>	, Lounge Axe, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May16_1600.html">1992-May-16</Link>	, WNUR, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}
			</p>
		<Link href="/gigs/1992/May16_1200.html">1992-May-16</Link>	, Tower Records, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1992/May16_2000.html">1992-May-16</Link>	, Lounge Axe, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May18.html">1992-May-18</Link>	First Avenue, Minneapolis, Minnesota, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May20.html">1992-May-20</Link>	Spectrum, Winnipeg, Manitoba, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May21.html">1992-May-21</Link>	Channel One, Regina, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May22.html">1992-May-22</Link>	University, Saskatoon, Saskatchewan, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May23.html">1992-May-23</Link>	McEwen Hall, Calgary, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May24.html">1992-May-24</Link>	The Bronx, Edmonton, Alberta, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May26.html">1992-May-26</Link>	Harpo&apos;s, Victoria, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May27.html">1992-May-27</Link>	Commodore Ballroom, Vancouver, Canada
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May29.html">1992-May-29</Link>	Backstage, Seattle, Washington, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/May30.html">1992-May-30</Link>	Pine Street Theatre, Portland, Oregon, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun1.html">1992-Jun-1</Link>	Slim&apos;s, San Fransisco, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun2.html">1992-Jun-2</Link>	Fx The Club, San Jose, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun3.html">1992-Jun-3</Link>	Sweetwater Saloon, Los Osos, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun5.html">1992-Jun-5</Link>	Roxy Theatre, Los Angeles, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun6.html">1992-Jun-6</Link>	Winter&apos;s, San Diego, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun7.html">1992-Jun-7</Link>	Bogart&apos;s, Long Beach, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun10.html">1992-Jun-10</Link>	The Mason Jar, Phoenix, Arizona, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun12.html">1992-Jun-12</Link>	Clearview, Dallas, Texas, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun13.html">1992-Jun-13</Link>	Liberty Lunch, Austin, Texas, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun14.html">1992-Jun-14</Link>	Fitzgerald&apos;s, Houston, Texas, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun15.html">1992-Jun-15</Link>	Tipitina&apos;s, New Orleans, Louisiana, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun17.html">1992-Jun-17</Link>	The Nick, Birmingham, Alabama, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Jun26.html">1992-Jun-26</Link>	WHPK, Chicago, Illinois, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('eg')}
			</p>
		<Link href="/gigs/1992/Aug28.html">1992-Aug-28</Link>	Ponder&apos;s Alley, Rugby, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Sep9.html">1992-Sep-9</Link>	Umbrella Festival, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1992/Sep15.html">1992-Sep-15</Link>	Demo Tape, Peter Murphy
		<p className="ml-20 -mt-1 mb-3">
			{expand('eg')}
			</p>
		<Link href="/gigs/1992/Dec22.html">1992-Dec-22</Link>	, Mean Fiddler, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb16.html">1993-Feb-16</Link>	Theatre Europeen, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb17.html">1993-Feb-17</Link>	Le Jimmy, Bordeaux, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb18.html">1993-Feb-18</Link>	Floride, Nantes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb19.html">1993-Feb-19</Link>	Ubu, Rennes, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb20.html">1993-Feb-20</Link>	Le Manege En Chantier, Lorient, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb21.html">1993-Feb-21</Link>	Coatelan, Morlaix, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb24.html">1993-Feb-24</Link>	Zinetti, Netherlands, Breda, Holland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb25.html">1993-Feb-25</Link>	Kremlin, Amsterdam, Holland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb26_2000.html">1993-Feb-26</Link>	Para, Breda, Netherlands
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb26_2300.html">1993-Feb-26</Link>	Zinetti, Breda, Netherlands
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb27.html">1993-Feb-27</Link>	Logo, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Feb28.html">1993-Feb-28</Link>	Loft, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Mar1.html">1993-Mar-1</Link>	Charterhalle, Munich, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('pete')}
			</p>
		<Link href="/gigs/1993/Mar2.html">1993-Mar-2</Link>	Luxor, Cologne, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Mar4.html">1993-Mar-4</Link>	Circolo Palomar, Valenza Po, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Mar5.html">1993-Mar-5</Link>	Auditorium Flog, Florence, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Mar6.html">1993-Mar-6</Link>	Ex Macchina, Forli, Italy
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('pete')}, {expand('nick')}
			</p>
		<Link href="/gigs/1993/Mar7.html">1993-Mar-7</Link>	Arge Nonntal, Salzburg, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}
			</p>
		<Link href="/gigs/1993/Mar9.html">1993-Mar-9</Link>	Glocklturm, Linz, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('lix')}
			</p>
		<Link href="/gigs/1993/Mar10.html">1993-Mar-10</Link>	Utopia, Innsbruck, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('lix')}
			</p>
		<Link href="/gigs/1993/Mar11.html">1993-Mar-11</Link>	Szene Wien, Vienna, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('lix')}
			</p>
		<Link href="/gigs/1993/Mar12.html">1993-Mar-12</Link>	Kind, Ebensee, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('lix')}
			</p>
		<Link href="/gigs/1993/Mar13.html">1993-Mar-13</Link>	Spielboden, Dornbirn, Austria
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('lix')}
			</p>
		<Link href="/gigs/1993/Apr7.html">1993-Apr-7</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1993/Apr21.html">1993-Apr-21</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1993/May15.html">1993-May-15</Link>	, Mean Fiddler, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1993/Aug11.html">1993-Aug-11</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1993/Aug27.html">1993-Aug-27</Link>	Congo Square Cafe, Santa Monica, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1993/Aug29.html">1993-Aug-29</Link>	Discafe, La Jolla, California, USA
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1993/Sep1.html">1993-Sep-1</Link>	Demo Tape, l&apos;esprit formidable
		<p className="ml-20 -mt-1 mb-3">
			{expand('eg')}
			</p>
		<Link href="/gigs/1993/Sep3.html">1993-Sep-3</Link>	, Mean Fiddler, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')} solo
			</p>
		<Link href="/gigs/1993/Sep9.html">1993-Sep-9</Link>	Powerhaus, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('lix')}, {expand('paul')}
			</p>
		<Link href="/gigs/1993/Sep15.html">1993-Sep-15</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1993/Oct20.html">1993-Oct-20</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('richard')}
			</p>
		<Link href="/gigs/1993/Oct22.html">1993-Oct-22</Link>	The Racehorse, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('richard')}, {expand('dooj')} {expand('paul')}
			</p>
		<Link href="/gigs/1993/Oct28.html">1993-Oct-28</Link>	The Forum, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('green')}
			</p>
		<Link href="/gigs/1993/Oct30.html">1993-Oct-30</Link>	Festival De Di-Venir, St Quentin, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('paul')}, {expand('dooj')} {expand('richard')}
			</p>
		<Link href="/gigs/1993/Nov12.html">1993-Nov-12</Link>	Zinetti, Breda, Netherlands
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('richard')}
			</p>
		<Link href="/gigs/1993/Nov13.html">1993-Nov-13</Link>	Maison De La Jeunesse, Colmar, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('richard')}
			</p>
		<Link href="/gigs/1993/Nov15.html">1993-Nov-15</Link>	Tao&apos;s Blue, Besancon, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('richard')}
			</p>
		<Link href="/gigs/1993/Nov17.html">1993-Nov-17</Link>	Le Salamandre, Strasbourg, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('richard')}
			</p>
		<Link href="/gigs/1993/Nov19.html">1993-Nov-19</Link>	Passage Du Nord-Ouest, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('richard')}
			</p>
		<Link href="/gigs/1993/Nov27.html">1993-Nov-27</Link>	The Venue, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('richard')}
			</p>
		<Link href="/gigs/1993/Dec22.html">1993-Dec-22</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1993/Dec23.html">1993-Dec-23</Link>	The Racehorse, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dj')}
			</p>
		<Link href="/gigs/1994/Feb1.html">1994-Feb-1</Link>	Logo, Hamburg, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb2.html">1994-Feb-2</Link>	Loft, Berlin, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb3.html">1994-Feb-3</Link>	Rumer, Bremen, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb4.html">1994-Feb-4</Link>	Live station, Dortmund, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb5.html">1994-Feb-5</Link>	Kamp, Bielefeld, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb6.html">1994-Feb-6</Link>	Nachtleben, Frankfurt, Germany
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb8.html">1994-Feb-8</Link>	Usine, Geneva, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb9.html">1994-Feb-9</Link>	Cafe Des Grandes Places, Fribourg, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb10.html">1994-Feb-10</Link>	Palais Xtra, Zurich, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb11.html">1994-Feb-11</Link>	I.S.C., Bern, Switzerland
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb12.html">1994-Feb-12</Link>	Anciennes Prisons, Moudon, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb15.html">1994-Feb-15</Link>	Le Bikini, Toulouse, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb16.html">1994-Feb-16</Link>	CLUB 3000, Clermont-Ferrand, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb17.html">1994-Feb-17</Link>	Arapaho, Paris, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb18.html">1994-Feb-18</Link>	Odd Balls, Dordrecht, Netherlands
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Feb19.html">1994-Feb-19</Link>	Zinetti, Breda, Netherlands
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('nick')}, {expand('curt')}
			</p>
		<Link href="/gigs/1994/Mar10.html">1994-Mar-10</Link>	The Garage, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('paul')}
			</p>
		<Link href="/gigs/1994/Apr8.html">1994-Apr-8</Link>	, Mean Fiddler, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('hend')}, {expand('gab')}
			</p>
		<Link href="/gigs/1994/Apr13.html">1994-Apr-13</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('hend')}
			</p>
		<Link href="/gigs/1994/Apr30.html">1994-Apr-30</Link>	Festival, Arlon
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('hend')}, {expand('gab')}
			</p>
		<Link href="/gigs/1994/May21.html">1994-May-21</Link>	The Barbican, Lincoln, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('hend')}
			</p>
		<Link href="/gigs/1994/May25.html">1994-May-25</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('hend')}, {expand('dooj')}
			</p>
		<Link href="/gigs/1994/Jun1.html">1994-Jun-1</Link>	The Sound Shaft, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('eg')}
			</p>
		<Link href="/gigs/1994/Jun4.html">1994-Jun-4</Link>	Royal Albert Hall, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('hend')}, {expand('gab')}, {expand('green')}
			</p>
		<Link href="/gigs/1994/Jul15.html">1994-Jul-15</Link>	Powerhaus, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}
			</p>
		<Link href="/gigs/1994/Jul26.html">1994-Jul-26</Link>	Fleece Firkins, Bristol, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('dooj')} {expand('gab')}, {expand('hend')}
			</p>
		<Link href="/gigs/1994/Aug3.html">1994-Aug-3</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('dooj')} {expand('gab')}, {expand('hend')}
			</p>
		<Link href="/gigs/1994/Aug6.html">1994-Aug-6</Link>	, Slurp&apos;s Wino Bar, Northampton, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('eg')}
			</p>
		<Link href="/gigs/1994/Aug17.html">1994-Aug-17</Link>	Borderline, London, England
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('dooj')} {expand('gab')}, {expand('hend')}
			</p>
		<Link href="/gigs/1994/Sep.html">1994-Sep</Link>	Festival Rock Au Maximum, Clermont-Ferrand, France
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('green')}, {expand('dooj')} {expand('gab')}, {expand('hend')}
			</p>
		<Link href="/gigs/1994/Oct7.html">1994-Oct-7</Link>	The Boat Race, Cambridge, England	
			<p />
		<Link href="/gigs/1994/Oct12.html">1994-Oct-12</Link>	, Slurp&apos;s Wino Bar, Northampton, England	
			<p />
		<Link href="/gigs/1994/Nov15.html">1994-Nov-15</Link>	Roadmender&apos;s, Northampton, England	
		<p className="ml-20 -mt-1 mb-3">
			{expand('pat')}, {expand('dooj')} {expand('gab')}, {expand('hend')}
			</p>
		<Link href="/gigs/1994/Dec21.html">1994-Dec-21</Link>	, Slurp&apos;s Wino Bar, Northampton, England	
			<p />
		<Link href="/gigs/1994/Dec31.html">1994-Dec-31</Link>	, Mean Fiddler, London, England
		<p className="ml-20 -mt-1 mb-3">
				{expand('pat')}, {expand('gab')}, {expand('hend')}
			</p>
		<Link href="/gigs/1995/Mar11.html">1995-Mar-11</Link>	Cellar Bar, Rugby, England
			<p />
		<Link href="/gigs/1995/Mar23.html">1995-Mar-11</Link>	Borderline, London, England
			<p />
		<Link href="/gigs/1995/Apr1.html">1995-Apr-1</Link>	Nene College, Northampton, England
			<p />
	</main>
	<Footer />
</>

export default Letter;
