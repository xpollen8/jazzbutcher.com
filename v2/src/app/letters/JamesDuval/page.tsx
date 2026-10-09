import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toJamesDuval, letterMeta } from '../page';

const main = () => (
	<>
	<Header section='letters' title='to James Duval' />
	<main>
		{letterMeta(toJamesDuval)}
	</main>
	<Footer />
	</>
)

export default main;
