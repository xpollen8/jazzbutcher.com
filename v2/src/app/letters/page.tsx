import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';

const Letters = () => 
<>
	<Header section='letters' />
	<Tag>
	Pat responds to questions posed by fans of the band (historical).
	</Tag>
	<div className="letter">
		<div className="flex flex-wrap">
			<div className="w-3/4">
				<ul>
					<li><Link href="/letters/90Feb14">1990-02-14</Link> - <b>Cult Of The Basement</b> </li>
					<li><Link href="/letters/91Feb01">1991-02-01</Link> - the &quot;Hunter S. Thompson&quot; letter </li>
					<li><Link href="/letters/93Aug30">1993-08-30</Link> - The Albums, The Bands, <b>LoveBus</b>, 93 Euro Tour </li>
					<li><Link href="/letters/93Oct19">1993-10-19</Link> - Eider, The Fall, News </li>
					<li><Link href="/letters/94Apr13">1994-04-13</Link> - 94 Euro Tour, Two Gigs, News, 93/94 Tours </li>
					<li><Link href="/press/94stop_press.html">1994-05-20</Link> - Press Release </li>
					<li><Link href="/letters/94Jun24">1994-06-24</Link> - All the gigs, Pat&apos;s Top 20 Gigs (circa) </li>
					<li><Link href="/letters/94Sep13">1994-09-13</Link> - Gig reviews, <Link href="/mailinglist">jbc-list</Link> rebuttals, etc </li>
					<li><Link href="/letters/artwork.html">1994</Link> - Sketches culled from the above letters </li>
					<li><Link href="/press/20020709_starindia.html">2002-07</Link> - The Star Of India: Pat reviews his favorite Restaurant </li>
				</ul>
			</div>
			<div className="w-1/4">
				<Link href="https://jazzbutcher.com/images/pat_party.jpg">
					<Image alt="[photo]" width={195} height={145} src="https://jazzbutcher.com/images/spat_party.gif" />
				</Link>
				<Image alt="[PatFishInfo]" width={289} height={139} src="https://jazzbutcher.com/images/pat_sig.gif" />
			</div>
		</div>
	</div>
	<Footer />
</>

export default Letters;
