import Image from 'next/image';
import MyLink from '@/components/MyLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const letter = [
  { src: '/images/letters/DavidJ/undated/undated_DavidJ_LetterFromPatFish_EggDrawings.jpg' },
  { src: '/images/letters/DavidJ/undated/undated_DavidJ_LetterFromPatFish_RoverDrawings.jpg' },
]

const Letter = () => 
<>
	<Header section='letters' title={ [ 'to David J;;/letters/DavidJ', 'undated' ] } />
	<main>
		<PhotoSet title='The Letter' photos={letter} description="600 DPI scan of Pat's sketches to David J" credit='David J' credit_date='2026-10-09' />
	</main>
	<Footer />
</>

export default Letter;
