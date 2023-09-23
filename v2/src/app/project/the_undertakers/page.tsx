import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Credit } from '@/components/GenericWeb';

const TheUndertakers = () => 
<>
	<Header section="the_undertakers" />
	<main>
		<blockquote className="annotation listItem">
			In 1995 a friend with a bar made me form a supergroup to keep him entertained on a slow Wednesday night. We had me, Mark Refoy (Guitarist: Spacemen 3, Spiritualised, Slipstream, Pet Shop Boys); Tim Harries (Bassist: Eno, Steeleye Span, David Holmes, Katie Melua!) and Jon Mattock (Drummer: Spacemen 3, Spiritualised. Slipstream, Perfect Disaster, The Breeders, Massive Attack). The set was all covers. I remember we did the Velvets’ “Foggy Notion,” Can’s “Mother Sky,” some Plastic Ono Band stuff, “Suzie Q,” “Roadrunner” and a few others. We called ourselves The Undertakers. We only ever did it twice. In a sort of KLF moment, I sold the only cassette of the show for £80.
			<p />
			<Credit g="Pat Fish" u="/press/20081120_caughtinthecarousel.html" d="2008-11-20" />
		</blockquote>
		<blockquote className="listItem">
			<center>
			<Link href="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheUndertakers/1995_MarkRefoy_TheUndertakers.jpg"><Image src="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheUndertakers/1995_MarkRefoy_TheUndertakers.jpg" width={500} height={500} alt="The Undertakers" /></Link>
			</center>

			<div className="annotation">
				My dear old friend, mentor and all round genius Pat Fish aka Jazz Butcher has passed on. Heartbreaking. Here he is after a gig with our ramshackle knockabout beat combo The Undertakers in the 90s. Rest easy Pat mate
				<p />
				<Credit g="Mark Refoy" u="https://twitter.com/slipmark/status/1445992873946714114" d="2021-10-06" />
			</div>
		</blockquote>

	</main>
	<Footer />
</>

export default TheUndertakers;
