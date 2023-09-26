import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterReleases from '@/components/FilterReleases';

const Sumosonic = () => 
<>
	<Header project="sumo" section="sumosonic" />
	<main>
		<FilterReleases project="sumo" />
	</main>
	<Footer />
</>

export default Sumosonic;
