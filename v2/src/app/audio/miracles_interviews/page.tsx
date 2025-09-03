import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import SectionOptions from '@/components/SectionOptions';
import Tag from '@/components/Tag';
import { BookMiraclesAndWonders } from '@/components/Books';

const interviews = [
	{
		date: '2019-10-05',
		location: 'The Plough, Shutlanger',
		number: '6',
		title: 'Fishco',
		topics: [],
		media: 'https://www.youtube.com/embed/zYpruNL9Rr0',
		description: <>
		The late Pat Fish in conversation with me on 5th October 2019.
		<p />Much of this would become the &apos;Fishcotheque&apos; chapter of &apos;Miracles and Wonders&apos;, the book Pat and I wrote, which I finished and published after he shuffled off on 5th October 2021.  
		<p />
		It was a lovely, if emotional day.  We ate bagels and smoked cheese at my house, watched the Tottenham game (they lost 3-0 to Brighton), aborted an intended trip to Uppingham, before arriving at the Plough, Shutlanger. 
		<p />After the recording we went on a little pub crawl, witnessed a skein of geese fly noisily overhead (&quot;I don&apos;t think I&apos;ve ever seen that before&quot;, said Pat), and consumed a takeaway back at Fishy Mansions.
		</>
	},
	{
		date: '2020-02-09',
		location: 'Fishy Mansions',
		number: '16',
		title: 'Highest',
		topics: [],
		media: 'https://s3.amazonaws.com/assets.jazzbutcher.com/audio/interviews/PhilipSnow_PatFish/Pat+16+Highest.mp3',
		description: <>This was recording #16 of the &apos;Miracles & Wonders&apos; sessions, that eventually became the &apos;Highest in the Land&apos; chapter in the book.
		<p />Unexpurgated, and consequently, at times offensive. But I think Pat is as rude about the Brits as he is about Canadians, so there&apos;s a certain balance.<p />This session included a mop up of all the official releases not covered previously, tales of penury misery and diminishing returns, and, uniquely, a little strum on a tuneless guitar of the songs being considered for the final album. This being early 2020, before global disaster descended. <p />Not all of the songs that Pat was considering made the final cut, but I rather hope that professional musicians can make something of those fragments and bring them to life.</>,
	},
];

const Miracles = () =>
<>
	<Header section="audio/miracles_interviews" />
	<main>
	<SectionOptions section='audio/miracles_interviews' />
	<Tag>The Interviews</Tag>
	<blockquote>
	{interviews.map((i: any, key: number) => (<div key={key} className="listItem">
		#{i.number}/16 - <b>{i.title}</b> - <span className="smalltext">({i.location}, {i.date})</span>
		<blockquote>
		{i.description}
		</blockquote>
		<EmbedMedia data={{ mediaurl: i.media, mediacredit: 'Philip Snow' }} />
	</div>))}
	</blockquote>
	<Tag>Get The Book</Tag>
	<blockquote>
	<BookMiraclesAndWonders />
	</blockquote>
	</main>
	<Footer />
</>

export default Miracles;
