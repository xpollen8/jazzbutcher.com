import Image from 'next/image';
import Link from 'next/link';
import NotebookHero from '@/components/NotebookHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OnThisDay from '@/components/OnThisDay';
import RecentUpdates from '@/components/RecentUpdates';
import { MostRecentNews } from '@/components/News';
import { Credit } from '@/components/GenericWeb';

const Home = (): React.ReactNode =>
<>
	<Header section='jbc' />
	<main>
		<center>
			<div style={{ maxWidth: '100%', height: 'auto' }}>
				<Link href="/gigs/2014-08-20"><Image src={'https://v1.jazzbutcher.com/images/20140820/20140820_2_1500.jpg'} width='1500' height='500' alt={'Pat and Max'} objectFit='contain' /></Link>
				<Credit g="Mat Wallis" d="2014-08-20" />
			</div>
			<NotebookHero />
		</center>
		<div className="flex flex-col min-[750px]:flex-row gap-1">
			<div className="w-full min-[750px]:w-1/2">
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
