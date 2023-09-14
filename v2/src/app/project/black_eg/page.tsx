import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';

const BlackEg = () => 
<>
	<Header section="project" title="The Black Eg"/>
	<div className="gig_eg" />
<b>Unique black eg tracks</b>
<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Yokohama.mp3", song: "Yokohama", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Song Of The Homeland.mp3", song: "Song Of The Homeland", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Ostrava Girls.mp3", song: "Ostrava Girls", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
<EmbedMedia data={{ mediaurl: "https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheBlackEg/BlackEg_KevinCarroll_Indianapolis 500.mp3", song: "Indianapolis 500", mediacredit: "Kevin Carroll", mediacreditdate: "2018-08-31" }} />
	<Footer />
</>

export default BlackEg;
