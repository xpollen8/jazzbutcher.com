import Link from 'next/link';
import Header from '@/components/Header';
import ReleaseBlurb from '@/components/ReleaseBlurb';
import OnThisDay from '@/components/OnThisDay';
import RecentUpdates from '@/components/RecentUpdates';
import Memorial from '@/components/Memorial';
import { BookSikkorski, BookMiraclesAndWonders } from '@/components/Books';
import { MostRecentNews } from '@/components/News';
import Tag from '@/components/Tag';

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
				<MostRecentNews />
				<div className="max-w-lg grow">
					<Tag style={{ marginBottom: '10px' }}>Jazz Butcher Books</Tag>
					<HomeBooks />
					<OnThisDay />
				</div>
			</div>
			<div className="max-w-lg grow">
				<RecentUpdates />
				<Tag style={{ marginBottom: '10px' }}>Recent Releases</Tag>
				<HomeReleases />
			</div>
		</div>
	</main>
</>

export default Home;
