//import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';
//import MakeSimpleURI from '@/components/MakeSimpleURI';

const MailingListMessage = ({ params}: any) => {
	return (<>
		<Header section="mailinglist" title={ [ `${params.year};;/mailinglist/${params.year}`, `Message: ${params.id}` ] } />
		<main className="etc">
			<LetterHeader title="JBC Mailing List Archives" subhead={`For ${params.year}`} />
			<h1>This section is not yet ported from old JBC site</h1>
		</main>
		<Footer />
	</>);
}

export default MailingListMessage;
