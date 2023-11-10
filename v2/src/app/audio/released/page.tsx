import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioReleases from '@/components/AudioReleases';

const Audio = () =>
<>
	<Header section="audio/released" />
	<main>
		<AudioReleases />
	</main>
	<Footer />
</>

export default Audio;
