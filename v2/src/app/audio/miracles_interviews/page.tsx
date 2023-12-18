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
		number: '??',
		title: 'Living in a Village',
		topics: [],
		media: 'https://www.youtube.com/embed/zYpruNL9Rr0',
		description: '',
	},
	{
		date: '2020-??-??',
		location: 'Fishy Mansions',
		number: '16',
		title: 'Highest in the Land',
		topics: [],
		media: 'https://s3.amazonaws.com/assets.jazzbutcher.com/audio/interviews/PhilipSnow_PatFish/Pat+16+Highest.mp3',
		description: <>This was recording #16 of the &apos;Miracles & Wonders&apos; sessions, that eventually became the &apos;Highest in the Land&apos; chapter in the book. Unexpurgated, and consequently, at times offensive. But I think Pat is as rude about the Brits as he is about Canadians, so there&apos;s a certain balance.<p />This session included a mop up of all the official releases not covered previously, tales of penury misery and diminishing returns, and, uniquely, a little strum on a tuneless guitar of the songs being considered for the final album. This being early 2020, before global disaster descended. <p />Not all of the songs that Pat was considering made the final cut, but I rather hope that professional musicians can make something of those fragments and bring them to life.</>,
	},
];

const Miracles = () =>
<>
	<Header section="audio/miracles_interviews" />
	<main>
	<SectionOptions section='audio/miracles_interviews' />
	<BookMiraclesAndWonders />
	<Tag>The Interviews</Tag>
	<blockquote>
	{interviews.map((i: any, key: number) => (<div key={key} className="listItem">
		Interview #{i.number} - <b>{i.title}</b> - <span className="smalltext">({i.location}, {i.date})</span>
		<EmbedMedia data={{ mediaurl: i.media }} >
		{i.description}
		</EmbedMedia>
	</div>))}
	</blockquote>
	</main>
	<Footer />
</>

export default Miracles;
