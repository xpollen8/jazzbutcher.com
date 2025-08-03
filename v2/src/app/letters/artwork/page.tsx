import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const Artwork = () => 
<>
	<Header section='letters' title='Pat Fish Sketches' />
	<main>
		<div className="flex flex-wrap justify-around border pt-3">
			<div className="m-1">
				<Link href="https://adjective.com/images/eg/pmurphy.jpg">
					<Image width={400} height={400} alt="[image]" src="https://adjective.com/images/eg/pmurphy.jpg" />
				</Link>
			</div>
			<div className="min-w-[50%]">
				<LetterHeader title="Extracted Images:" />
				<MakeSimpleURI uri="https://adjective.com/images/eg/eg.gif" text="Happy Eg(g)" />
				<MakeSimpleURI uri="https://adjective.com/images/eg/flag_bw.gif" text="Tutto Possibile Flag" />
				<MakeSimpleURI uri="https://adjective.com/images/eg/flag.gif" text="Tutto Possibile Flag (color)" />
				<MakeSimpleURI uri="https://adjective.com/images/eg/blackeg.gif" text="The Black Eg" />
				<MakeSimpleURI uri="https://adjective.com/images/eg/bigblackeg.gif" text="The Black Eg (bigger)" />
				<MakeSimpleURI uri="https://adjective.com/images/eg/pmurphy.gif" text="Color Flag &amp; Eg" />
			</div>
		</div>
	</main>
	<Footer />
</>

export default Artwork;

