import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toDavidWhittemore, letterMeta } from '../page';

const main = () => (
	<>
	<Header section='letters' title='to David Whittemore' />
	<main>
		{letterMeta(toDavidWhittemore)}
	</main>
	<Footer />
	</>
)

export default main;
