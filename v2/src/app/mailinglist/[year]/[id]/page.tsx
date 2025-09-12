import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JBCListMessage, { JBCListing } from '@/components/JBCList';

const MailingListMessage = ({ params }: any) => {
	const { year, id } = params;
	const i = parseInt(id);

	if (i > 0) {
		return (<>
			<Header section="mailinglist" title={ [ `${year};;/mailinglist/${year}`, `${i}` ] } />
			<main className="etc">
				<JBCListMessage { ...params } />
			</main>
			<Footer />
		</>);
	} else {
		return (<>
			<Header section="mailinglist" title={ [ `${year};;/mailinglist/${year}`, `${id}` ] } />
			<main className="etc">
				<JBCListing { ...params } />
			</main>
			<Footer />
		</>);
	}
}

export default MailingListMessage;
