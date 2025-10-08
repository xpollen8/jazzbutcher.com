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
		<Documentary />
		<NotebookHero />
		<OnThisDay />
		<MostRecentNews />
		<RecentUpdates />
	</main>
	<Footer />
</>

export default Home;
