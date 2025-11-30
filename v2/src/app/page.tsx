import NotebookHero from '@/components/NotebookHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OnThisDay from '@/components/OnThisDay';
import Documentary from '@/components/Documentary';
import RecentUpdates from '@/components/RecentUpdates';
import { MostRecentNews } from '@/components/News';

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
	<main>
		<NotebookHero />
		<div className="flex flex-col min-[750px]:flex-row gap-5">
			<div className="w-full min-[750px]:w-1/2">
				<Documentary />
				<OnThisDay />
			</div>
			<div className="w-full min-[750px]:w-1/2">
				<MostRecentNews />
				<RecentUpdates />
			</div>
		</div>
	</main>
	<Footer />
</>

export default Home;
