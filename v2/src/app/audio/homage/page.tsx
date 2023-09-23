import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TributeAudio } from '@/components/Tributes';

const Home = (): React.ReactNode =>
<>
	<Header section='homage' />
	<main>
			<TributeAudio />
	</main>
	<Footer />
</>

export default Home;
