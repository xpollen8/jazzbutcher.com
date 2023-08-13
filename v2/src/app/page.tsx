//"use client"	// to enable blurb rotations

import Header from '../components/Header';
import Tag from '../components/Tag';
import Release from '../components/Release';
import FeaturedItem from '../components/FeaturedItem';

const homeBlurb = [
	`Being brilliant since before you were born`,
	`Better than a cold bath`,
	`"Boozer, intellectual and troubadour.."`,
	`Not eating meat, not playing jazz`,
	`"What I do is not entertainment"`,
];

const BookSikkorski = () =>
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		title={`Earl Sikkorski’s Golden Treasury`}
		image={`https://jazzbutcher.com/images/book_sikkorski`}
		alt={`book cover`}
		buy_title="Order direct from the author"
	>
		&quot;Earl Sikkorski&apos;s Golden Treasury&quot;, a facsimile of the Jazz Butcher fan club scrapbook, pinned out, examined under the microscope and expanded upon, by Philip Snow.  Hardback book out now.
	</FeaturedItem>

const BookMiraclesAndWonders = () => 
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/HRQWCR4BWWF5W`}
		buy={`https://www.paypal.com/instantcommerce/checkout/HRQWCR4BWWF5W`}
		title={`Miracles and Wonders`}
		image={`https://jazzbutcher.com/images/songbook/cover`}
		alt={`book cover`}
	>
		<>
			<i>A Meandering, Cacophonous Concordance of The Jazz Butcher Songbook</i>,
			by Pat Fish & Philip Snow, will be officially published on the first day of May, 2022.
			<p>
				A 400 page volume with hundreds of illustrations, many uniquely sourced from the
				Fishy Mansions Archives and friends worldwide.  Big Answers, finally.
			</p>
		</>
	</FeaturedItem>

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

const HomeBooks = () =>
<>
	<BookSikkorski />
	<BookMiraclesAndWonders />
</>

const HomeReleases = () =>
<>
		<Release lookup='highest' />
		<Release lookup='fire_cholmondley' />
		<Release lookup='fire_violent' />
		<Release lookup='fire_wasted' />
		<Release lookup='adventurers' />
</>

const Home = (): React.ReactNode => (
	<>
		<Header title={homeBlurb[Math.floor(Math.random() * homeBlurb.length)]} />
		<div className="container">
			<div className="right">
				<Release lookup='never7' />
				<HomeBooks />
				<HomeReleases />
				<RandomLiveVideo />
				<DateInHistory />
			</div>
		</div>
	</>
)

export default Home;
