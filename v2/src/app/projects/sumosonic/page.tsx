import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterReleases from '@/components/FilterReleases';
import FilterPresses from '@/components/FilterPresses';
import AudioReleases from '@/components/AudioReleases';
import VideoReleases from '@/components/VideoReleases';
import PhotoSet from '@/components/PhotoSet';

const duval = [
	{ src: '/assets/projects/Sumosonic/Sumosonic_James_Duval_Master_Cassette.jpg',
	alt: 'promo advance to the album "This Is Sumo".' },
	{ src: '/assets/projects/Sumosonic/Sumosonic_James_Duval_Spacemen_Cassette.jpg', alt: 'promo advance to the single "Come, Friendly Spaceman"' },
	{ src: '/assets/projects/Sumosonic/Sumosonic_James_Duval_ThisIsSumo_Cassette.jpg',
	alt: 'The "This Is Sumo" Demo is almost Identical artwork to the Sumo Demos on jazzbutcher.com except slightly altered artwork but with the same track listing. ' },
];

const Sumosonic = (props: any) => 
<>
	<Header project="sumo" section="sumosonic" />
	<main>
		<PhotoSet title="James Duval promo cassettes" photos={duval} credit="James Duval" credit_date="2022-01-29" description=<>Here are scans of the Sumosonic Cassettes I got from Pat back in the 90&apos;s. The &quot;This Is Sumo&quot; Demo is almost Identical artwork to the Sumo Demos on jazzbutcher.com except slightly altered artwork but with the same track listing. The other two Sumo cassettes were promo advances to the single &quot;Come, Friendly Spaceman&quot; and the album &quot;This Is Sumo&quot;.</>/>
		<FilterReleases project="sumo" filters={props.searchParams?.filters} />
		<AudioReleases project="sumo" />
		<VideoReleases project="sumo" />
		<FilterPresses project="sumo" />
	</main>
	<Footer />
</>

export default Sumosonic;
