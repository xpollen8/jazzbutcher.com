import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toDavidJ, letterMeta } from '../page';

const main = () => (
	<>
	<Header section='letters' title='to David J' />
	<main>
		{letterMeta(toDavidJ)}
	</main>
	<Footer />
	</>
)

export default main;
