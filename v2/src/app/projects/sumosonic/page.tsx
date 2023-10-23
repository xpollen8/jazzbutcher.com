import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterReleases from '@/components/FilterReleases';
import FilterPresses from '@/components/FilterPresses';
import AudioReleases from '@/components/AudioReleases';
import VideoReleases from '@/components/VideoReleases';

const Sumosonic = (props: any) => 
<>
	<Header project="sumo" section="sumosonic" />
	<main>
		<FilterReleases project="sumo" filters={props.searchParams?.filters} />
		<AudioReleases project="sumo" />
		<VideoReleases project="sumo" />
		<FilterPresses project="sumo" />
	</main>
	<Footer />
</>

export default Sumosonic;
