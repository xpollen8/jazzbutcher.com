import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Letter = () => 
<>
	<Header section='letters' title='14Feb90'/>
	<main className="etc">
			<blockquote className="annotation">
			<Image className="float-right" width={397/1.7} height={219/1.7} alt="[signature]" src="https://jazzbutcher.com/images/19900214/90Feb14_sig.gif" />
				The <Link href="/releases/cult">new l.p.</Link>
				is every bit as strange and twisted as I thought it might
				be.  We may yet have to make a couple of minor adjustments,
				I think, but it&apos;s just about ready.  God only knows what
				the record company are going to make of it.  When I told
				Dick that we were making a deeply twisted cover version
				of the Big Star Third that would sell about eight copies
				worldwide he sounded dead sarcastic and said &quot;Thanks.&quot;
				Ha!  That&apos;s what record companies are for, right?  Make
				&apos;em sweat...  I guess we&apos;re aiming to get it out May
				or June, so that we can come back and harrass you people
				a bit more in the summer.
				<p className="clear-float" />
		</blockquote>
	</main>
	<Footer />
</>

export default Letter;
