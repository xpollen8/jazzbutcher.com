import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterReleases from '@/components/FilterReleases';
import FilterPresses from '@/components/FilterPresses';
import AudioReleases from '@/components/AudioReleases';

const Sumosonic = () => 
<>
	<Header project="sumo" section="sumosonic" />
	<main>
		<FilterReleases project="sumo" />
		<AudioReleases project="sumo" />
		<FilterPresses title="Sumosonic Press" project="sumo" />
	</main>
	<Footer />
</>

export default Sumosonic;
