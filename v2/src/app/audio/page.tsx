import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionOptions from '@/components/SectionOptions';
import Notes from '@/components/Notes';

const AudioPage = () => {
	return (<>
		<Header section="audio" />
		<main>
			<Notes />
			<SectionOptions section='audio' />
		</main>
		<Footer />
	</>)
}

export default AudioPage;
