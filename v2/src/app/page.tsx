import Link from 'next/link';
import Header from '@/components/Header';
import ReleaseBlurb from '@/components/ReleaseBlurb';
import FeaturedItem from '@/components/FeaturedItem';
import DayInHistory from '@/components/DayInHistory';
import RecentUpdates from '@/components/RecentUpdates';
import Memorial from '@/components/Memorial';
import Tag from '@/components/Tag';

const BookSikkorski = () =>
	<FeaturedItem
		link={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		buy={`https://www.paypal.com/instantcommerce/checkout/B9R9UNV97A754`}
		title={`Earl Sikkorski’s Golden Treasury`}
		image={`/images/book_sikkorski`}
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
		image={`/images/songbook/cover`}
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

const HomeBooks = () =>
<>
	<BookSikkorski />
	<BookMiraclesAndWonders />
</>

const HomeReleases = () =>
<>
		<ReleaseBlurb lookup='never7' key={1} />
		<ReleaseBlurb lookup='highest' key={2} />
		<ReleaseBlurb lookup='fire_cholmondley' key={3} />
		<ReleaseBlurb lookup='fire_violent' key={4} />
		<ReleaseBlurb lookup='fire_wasted' key={5} />
		<ReleaseBlurb lookup='adventurers' key={6} />
</>

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
	<main>
		<div className="flex flex-wrap justify-center gap-1">
			<div className="grow max-w-lg">
				<div className="border p-3 bg-slate-100 drop-shadow-sm mb-3">
					<Link href="/memoriam">
						<Memorial home={true} />
					</Link>
				</div>
				<div className="max-w-lg grow">
					<Tag style={{ marginBottom: '10px' }}>Jazz Butcher Books</Tag>
					<HomeBooks />
					<RecentUpdates />
					<DayInHistory />
				</div>
			</div>
				<div className="max-w-lg grow">
					<Tag style={{ marginBottom: '10px' }}>Recent Releases</Tag>
					<HomeReleases />
				</div>
		</div>
	</main>
</>

export default Home;
