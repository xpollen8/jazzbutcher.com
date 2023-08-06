import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Tag from '../components/Tag';
import { linkExternal } from '../lib/macros';

const homeBlurb = [
	`Being brilliant since before you were born`,
	`Better than a cold bath`,
	`"Boozer, intellectual and troubadour.."`,
	`Not eating meat, not playing jazz`,
	`"What I do is not entertainment"`,
];

const FeaturedItem = ({ link, image, thumb, alt, width, height, title, text, action_title, action_text }: {
	link: string
	image: string,
	thumb: string,
	alt: string,
	width: number,
	height: number,
	title: string,
	text: string | React.ReactNode,
	action_title?: string,
	action_text?: string | React.ReactNode,
}): React.ReactNode => (
	<div className="release">
		<div className="album_details">
			<span className="album_title">
				{linkExternal(link, title)}
			</span>
			<div className="album_blurb">
				{text}
			</div>
			{!!(action_title?.length) && (<>
				<div className="album_purchase">
					{linkExternal(link, action_title)}
				</div>
				{action_text}
			</>)}
		</div>
		<div style={{ maxWidth: '350px', flex: 1 }}>
			<Link href={thumb}>
				<Image src={image} width={width} height={height} alt={alt} />
			</Link>
		</div>
	</div>
)

const BookSikkorski = () =>
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		title={`Earl Sikkorski’s Golden Treasury`}
		text={`&quot;Earl Sikkorski’s Golden Treasury&quot;, a facsimile of the Jazz Butcher fan club scrapbook, pinned out, examined under the microscope and expanded upon, by Philip Snow.  Hardback book out now.`}
		image={`https://jazzbutcher.com/images/book_sikkorski.jpg`}
		thumb={`https://jazzbutcher.com/images/book_sikkorski_500.jpg`}
		alt={`book cover`}
		width={583}
		height={410}
		action_title={`Order direct from the author`}
		action_text={`at a discounted cost of 15GBP, which includes delivery to anywhere on the planet.`}
	/>

const	ReleaseNeverGiveUp = () =>
	<FeaturedItem
		link={`https://cargorecordsdirect.co.uk/products/the-jazz-butcher-never-give-up-glass-version-7`}
		title={`Cargo Records UK | The Jazz Butcher 'Never Give Up (Glass Version)'`}
		text=<>
			&quot;Order this now and let’s do a “Pastels/Sonic Youth” and get it in the charts!&quot; -
			{linkExternal(`https://twitter.com/chrisseventeen`, `Chris Coleman`)}
			</>
		image={`https://jazzbutcher.com/images/releases/nevergiveup_poster.jpg`}
		thumb={`https://jazzbutcher.com/images/releases/nevergiveup_poster_500.jpg`}
		alt={`book cover`}
		width={583}
		height={410}
		action_title={``}
		action_text={``}
	/>

const BookMiraclesAndWonders = () => 
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/HRQWCR4BWWF5W`}
		title={`Miracles and Wonders`}
		text=<>
			<i>A Meandering, Cacophonous Concordance of The Jazz Butcher Songbook</i>,
			by Pat Fish & Philip Snow, will be officially published on the first day of May, 2022.
			<p>
				A 400 page volume with hundreds of illustrations, many uniquely sourced from the
				Fishy Mansions Archives and friends worldwide.  Big Answers, finally.
			</p>
		</>
		image={`https://jazzbutcher.com/images/songbook/cover.jpg`}
		thumb={`https://jazzbutcher.com/images/songbook/cover_500.jpg`}
		alt={`book cover`}
		width={583}
		height={250}
		action_title={`Purchase Now`}
		action_text=<>
			(Via <b>Paypal</b>, includes shipping, literally anywhere)
		</>
	/>

const RandomLiveVideo = () => {
//#live	if ((sql(ev:select g.*, gs.* from gigsong gs, gig g where gs.datetime=g.datetime and gs.mediaurl like "%%youtube%%" order by rand() limit 1)) && (getnum(ev->numResults) = 1))
	return (<>
		<Tag>
			Random Forced Viewing
		</Tag>
	<div className="listenItem">
	</div>
	</>)
//		<b>${songLinkMapped(${ev->song})}</b>
//		- <a href="${jbc_gigs}/${ts2URI(${ev->datetime})}">${substr(0, 10, ${ev->datetime})}</a> \@ ${ev->venue}, ${ev->city}
//		${embedVideo(url=${ev->mediaurl})}
//#live	if (getval(ev->mediacredit))
//		${g_credit(g=${ev->mediacredit}, u=${ev->mediacrediturl})}
//#live	endif
}

const DateInHistory = () => {
//#live	if ((sql(dih:select * from gig where month(datetime)=month(now()) and day(datetime)=day(now()) order by datetime)) && (getnum(dih->numResults) > 0))
	return (
		<Tag>
			On This Date In History..
		</Tag>
	)
/*
#live	while (d = dih[*]->datetime)
	${showGigListing(prefix=dih[${d}])}
#live	endwhile
#live	endif
*/
}

const Home = () => (
	<>
		<Header title={homeBlurb[Math.floor(Math.random() * homeBlurb.length)]} />
		<div className="container">
			<div className="right">
				<BookSikkorski />
				<ReleaseNeverGiveUp />
				<BookMiraclesAndWonders />
				<RandomLiveVideo />
				<DateInHistory />
			</div>
		</div>
	</>
)

export default Home;
					/*
					${mkAlbumBlurb(prefix=albums[87], details=no)}
					${mkAlbumBlurb(prefix=albums[88], details=no)}
					${mkAlbumBlurb(prefix=albums[86], details=no)}
					${mkAlbumBlurb(prefix=albums[73], details=no)}
					${mkAlbumBlurb(prefix=albums[76], details=no)}
					${mkAlbumBlurb(prefix=albums[47], details=no)}
				</div>
				<div className="left">
					${upcomingGigs()}
					*/
