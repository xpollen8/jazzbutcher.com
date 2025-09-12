import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JBCListMessage, { JBCListing } from '@/components/JBCList';

const MailingListMessage = ({ params }: any) => {
	const { year, id } = params;
	const i = parseInt(id);

	if (i > 0) {
		// we have an actual message
		return (<>
			<Header section="mailinglist" title={ [ `${year};;/mailinglist/${year}`, `${i}` ] } />
			<main className="etc">
				<JBCListMessage { ...params } />
			</main>
			<Footer />
		</>);
	} else {
		// otherwise we are in the 'listing mode' (by subject, by sender, etc)
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
