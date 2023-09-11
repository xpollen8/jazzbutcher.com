import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const letters = [
	{ uri: "/letters/90Feb14", text: "1990-02-14", aux: "Cult Of The Basement" },
	{ uri: "/letters/91Feb01", text: "1991-02-01", aux: 'the "Hunter S. Thompson" letter' },
	{ uri: "/letters/93Aug30", text: "1993-08-30", aux: "The Albums, The Bands, LoveBus, 93 Euro Tour" },
	{ uri: "/letters/93Oct19", text: "1993-10-19", aux: "Eider, The Fall, News" },
	{ uri: "/letters/94Apr13", text: "1994-04-13", aux: "94 Euro Tour, Two Gigs, News, 93/94 Tours" },
	{ uri: "/press/94stop_press.html", text: "1994-05-20", aux: "Press Release" },
	{ uri: "/letters/94Jun24", text: "1994-06-24", aux: "All the gigs, Pat's Top 20 Gigs (circa)" },
	{ uri: "/letters/94Sep13", text: "1994-09-13", aux: "Gig reviews, jbc-list rebuttals, etc" },
	{ uri: "/letters/artwork.html", text: "1994", aux: "Sketches culled from the above letters" },
	{ uri: "/press/20020709_starindia.html", text: "2002-07", aux: "The Star Of India: Pat reviews his favorite Restaurant" },
];

const Letters = () => 
<>
	<Header section='letters' />
	<div className="etc">
		<LetterHeader title="Pat responds to mailinglist questions posted by fans"
			subhead=<>
		Just prior to gaining Internet access for himself, Pat would update the website&apos;s maintainer the old-fashioned way: through type-written correspondence.
		<p />
		&quot;Letters From Pat&quot; covers news and answers to fan questions in 9 lengthy letters.
			</>
		/>
		<div className="flex flex-wrap justify-around">
			<div className="min-w-[50%]">
				{letters.map(MakeSimpleURI)}
			</div>
			<div className="m-1">
				<center>
				<Link href="https://jazzbutcher.com/images/pat_party.jpg">
					<Image alt="[photo]" width={400} height={400} src="https://jazzbutcher.com/images/pat_party.jpg" />
				</Link>
				<Image alt="[PatFishInfo]" width={289} height={139} src="https://jazzbutcher.com/images/pat_sig.gif" />
				</center>
			</div>
		</div>
	</div>
	<Footer />
</>

export default Letters;
