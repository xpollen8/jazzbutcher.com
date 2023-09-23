import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Source, Attribution } from '@/components/GenericWeb';
import { expand } from '@/lib/defines';

const TheUndertakers = () => 
<>
	<Header section="the_undertakers" />
	<main>
		<div className="listItem">
			<div className="flex flex-wrap justify-center">
			<Link href="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheUndertakers/1995_MarkRefoy_TheUndertakers.jpg"><Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheUndertakers/1995_MarkRefoy_TheUndertakers.jpg" width={500} height={500} alt="The Undertakers" /></Link>
			<Link href="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheUndertakers/1995_MarkRefoy_TheUndertakers.jpg"><Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheUndertakers/1995_MarkRefoy_TheUndertakers2.jpg" width={500} height={500} alt="The Undertakers 2" /></Link>
			</div>
			<blockquote className="annotation">
				My dear old friend, mentor and all round genius Pat Fish aka Jazz Butcher has passed on. Heartbreaking. Here he is after a gig with our ramshackle knockabout beat combo The Undertakers in the 90s. Rest easy Pat mate
				<p />
			</blockquote>
			<Source g="Mark Refoy" u="https://twitter.com/slipmark/status/1445992873946714114" p="Twitter" d="2021-10-06" />
		</div>
		<div className="listItem">
			<blockquote className="annotation">
				In 1995 a friend with a bar made me form a supergroup to keep him entertained on a slow Wednesday night. We had me, Mark Refoy (Guitarist: Spacemen 3, Spiritualised, Slipstream, Pet Shop Boys); Tim Harries (Bassist: Eno, Steeleye Span, David Holmes, Katie Melua!) and Jon Mattock (Drummer: Spacemen 3, Spiritualised. Slipstream, Perfect Disaster, The Breeders, Massive Attack). The set was all covers. I remember we did the Velvets’ “Foggy Notion,” Can’s “Mother Sky,” some Plastic Ono Band stuff, “Suzie Q,” “Roadrunner” and a few others. We called ourselves The Undertakers. We only ever did it twice. In a sort of KLF moment, I sold the only cassette of the show for £80.
				<p />
			</blockquote>
			<Source g="Pat Fish" u="/press/20081120_caughtinthecarousel#undertakers" p="Caught in the Carousel" d="2008-11-20" />
		</div>
		<div className="listItem">
			<b>Tape:</b> T017<br />
			<b>Title:</b> The Undertakers : Keep Music Dead<br />
			<b>Auction Price:</b> $45<br />
			<b>Winner:</b> jay@....ary.com<br />
			<b>Pat's Description:</b>
				<blockquote>
					Formed as the house band of Slurp's Bar, Northampton, the
					Undertakers feature {expand('pat')}, Mark Refoy and Jon Mattocks ({expand('space')},
					Spiritualized), and Tim Harris (Everything But The Girl, Doctor Didg).
					They don't rehearse, they only play covers, and a total of about 43
					people have ever seen them play live.  How cool is that?
					Sound quality is exactly the same as on the Velvet Underground's
					&quot;Live 69&quot; album (which is to say, pretty crappy).
					So now you know.
					Covers by: Can, Velvets, Creedence, Kraftwerk, Plastic Ono Band, etc.
				</blockquote>
			<Source g="David Whittemore" p="early Jazz Butcher Website Auction" d="1997-10-30 01:45:39" />
		</div>
		<div className="listItem">
			<blockquote className="annotation">
				In 1997, Pat had a few things he wanted auctioned off on the JBC website,
				and sent me a load of stuff (posters, cassettes, etc).
				In the end, we were able to send Pat a nice wad of cash.
				<p />
				Some of those tapes, I did tape copies of before sending the orignals onto
				the auction winners.  I will need to go through my stored pile to see if
				The Undertakers tape was one of those.  If not.. well, Jay, you're the keeper of something pretty rare.
			</blockquote>
			<Attribution g="David Whittemore" d="2023-09-22" />
		</div>
	</main>
	<Footer />
</>

export default TheUndertakers;
/* from V1 auction.htdb file
#   OLD #   $45 jay@ossuary.com Thu, 30 Oct 1997 01:45:39 -0800
#   OLD     <td valign=top>T017</td>
#   OLD     <td valign=top>$45</td>
#   OLD     <td valign=top>${itemSold}<br>
#   OLD     jay @
#   OLD     </td>
#   OLD     <td valign=top><b>The Undertakers : Keep Music Dead</b>
#   OLD     <br>Formed as the house band of Slurp's Bar, Northampton, the
#   OLD     Undertakers feature ${pat}, Mark Refoy and Jon Mattocks (${space},
#   OLD     Spiritualized), and Tim Harris (Everything But The Girl, Doctor Didg).
#   OLD     They don't rehearse, they only play covers, and a total of about 43
#   OLD     people have ever seen them play live.  How cool is that?
#   OLD     Sound quality is exactly the same as on the Velvet Underground's
#   OLD     &quot;Live 69&quot; album (which is to say, pretty crappy).
#   OLD     So now you know.
#   OLD     Covers by: Can, Velvets, Creedence, Kraftwerk, Plastic Ono Band, etc.
#   OLD     </td>
#   OLD     </tr>
*/
