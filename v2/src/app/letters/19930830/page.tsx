import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FIDDLER } from '@/lib/defines';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const Letter = () => 
<>
	<Header section='letters' title='30Aug93'/>
	<main>
		<div className="flex flex-wrap justify-around">
			<div className="min-w-[50%]">
				<MakeSimpleURI uri="/letters/93Aug30/intro.html" text="Introduction" />
				<MakeSimpleURI uri="/letters/93Aug30/albums.html" text="The Albums" />
				<MakeSimpleURI uri="/letters/93Aug30/band.html" text="Where Is Butcher Band?" />
				<MakeSimpleURI uri="/letters/93Aug30/fiddler.html" text={`${FIDDLER} gig, London`} />
				<MakeSimpleURI uri="/letters/93Aug30/love.html" text="Waiting For The Love Bus" />
				<MakeSimpleURI uri="/letters/93Aug30/messages.html" text="Individual Messages" />
				<MakeSimpleURI uri="/letters/93Aug30/tour.html" text="1993 European Tour Report" />
			</div>
			<div className="m-1">
				<Image width={243} height={111} alt="[signature]" src="https://jazzbutcher.com/images/19930830/93Aug30_sig.gif" />
			</div>
		</div>
	</main>
	<Footer />
</>

export default Letter;
