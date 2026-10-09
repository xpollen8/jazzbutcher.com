import Image from 'next/image';
import MyLink from '@/components/MyLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const letter = [
  { src: '/images/letters/DavidJ/19840106/19840106_DavidJ_LetterFromPatFish_1.jpg' },
  { src: '/images/letters/DavidJ/19840106/19840106_DavidJ_LetterFromPatFish_2.jpg' },
]

const Letter = () => 
<>
	<Header section='letters' title={ [ 'to David J;;/letters/DavidJ', '19840106' ] } />
	<main>
		<PhotoSet title='The Letter' photos={letter} description="600 DPI scan of Pat's letter to David J, penned 1984-01-06" credit='David J' credit_date='2026-10-09' />
	</main>
	<Footer />
</>

export default Letter;
