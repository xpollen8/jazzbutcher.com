import Image from 'next/image';
import MyLink from '@/components/MyLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';

const letter = [
  { src: '/images/letters/JamesDuval/19960929/19960929_JamesDuval_LetterFromPatFish_1.jpg' },
  { src: '/images/letters/JamesDuval/19960929/19960929_JamesDuval_LetterFromPatFish_2.jpg' },
]

const Letter = () => 
<>
	<Header section='letters' title={ [ 'to James Duval;;/letters/JamesDuval', '19960929' ] } />
	<main>
		<PhotoSet title='The Letter' photos={letter} description="600 DPI scan of Pat's letter to James Duval, penned 1996-09-29" credit='James Duval' credit_date='2026-10-08' />
	</main>
	<Footer />
</>

export default Letter;
