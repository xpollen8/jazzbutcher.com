import HomeGallery from '@/components/HomeGallery';
import NotebookHero from '@/components/NotebookHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OnThisDay from '@/components/OnThisDay';
import RecentUpdates from '@/components/RecentUpdates';
import { MostRecentNews } from '@/components/News';

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
	<main>
		<HomeGallery />
		<center>
			<NotebookHero />
		</center>
		<div>
			<OnThisDay />
			<MostRecentNews />
			<RecentUpdates />
		</div>
	</main>
	<Footer />
</>

export default Home;
