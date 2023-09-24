import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';
import { linkInternal } from '@/lib/macros';
import { Credit } from '@/components/GenericWeb';

const tracks = [
    { title: "We Are The Traffic", comment: "#1", mediaurl: "https://jazzbutcher.com/audio/Cambodia/199108_Cambodia_WeAreTheTraffic_No1.mp3" },
		{ title: "We Are The Traffic", comment: "#2", mediaurl: "https://jazzbutcher.com/audio/Cambodia/199108_Cambodia_WeAreTheTraffic_No2.mp3" },
];

const Cambodia = () => {
	return (<>
		<Header section="cambodia" />
			<main>
			<LetterHeader
				title="Cambodia"
				subhead=<>
					Demo tracks from the August 1991 {expand('pat')} and {expand('coonce')} collaboration.
				</>
				aux="Written at the Nitronic Research Wind Tunnels, Los Angeles, California."
				/>
			<blockquote className="annotation">
				This version was recorded by Cole Coonce (Braindead Sound Machine)
				and myself at the Nitronic
				Research Wind Tunnels, Silverlake, California in August1991 when I was
				hiding out in L.A. We had just been to see the L.A. Dodgers, who at the time
				had Darryl Strawberry on their team. Darryl had fled New York after cynical
				home fans had started chanting "Oh Daaaaaryl..." at him when he was off form
				(most of the time, as it goes). Imagine our delight when the L.A. crowd
				started doing exactly the same thing! In addition, Darryl had recently
				become a follower of The Lord, a piety that did not seem to do anything very
				much for his game. Hence the "put that Bible back!" line.
				The original version of "Traffic" was credited to "Cambodia", which was also
				the working name for Sumosonic throughout much of 1996. You can probably
				guess why we never ended up going public with that name.
			</blockquote>
				{tracks.map(({ title, mediaurl, comment }: { title: string, mediaurl: string, comment: string }, key: number) =>
					<EmbedMedia key={key} data={{ mediaurl, title, }} >
						<p className="annotation"> {comment} </p>
					</EmbedMedia>)}
			</main>
		<Footer />
	</>)
}

export default Cambodia;
