import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LinkAudio from '@/components/LinkAudio';

const BlackEg = () => 
<>
	<Header section="project" title="The Black Eg"/>
	<div className="gig_eg" />
<b>Unique black eg tracks</b>
<p />source: Kevin Carroll 2018-08-31
<p />
<LinkAudio mp3="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Yokohama.mp3" title="Yokohama" />
<LinkAudio mp3="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Song Of The Homeland.mp3" title="Song Of The Homeland" />
<LinkAudio mp3="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Ostrava Girls.mp3" title="Ostrava Girls" />
<LinkAudio mp3="https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Indianapolis 500.mp3" title="Indianapolis 500" />
	<Footer />
</>

export default BlackEg;
