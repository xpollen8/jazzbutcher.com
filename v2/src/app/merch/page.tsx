import Merch from '@/components/Merch';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Page = (): React.ReactNode =>
<>
	<Header section='merch' />
	<main>
		<Merch />
	</main>
	<Footer />
</>

export default Page;
