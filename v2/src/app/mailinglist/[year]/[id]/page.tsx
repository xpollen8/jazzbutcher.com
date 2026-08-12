import { use } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JBCListMessage, { JBCListing } from '@/components/JBCList';

const MailingListMessage = ({ params }: any) => {
	const Params: any = use(params);
	const { year, id } = Params;
	const i = parseInt(id);

	if (i > 0) {
		// we have an actual message
		return (<>
			<Header section="mailinglist" title={ [ `${year};;/mailinglist/${year}`, `${i}` ] } />
			<main className="etc">
				<JBCListMessage { ...Params } />
			</main>
			<Footer />
		</>);
	} else {
		// otherwise we are in the 'listing mode' (by subject, by sender, etc)
		return (<>
			<Header section="mailinglist" title={ [ `${year};;/mailinglist/${year}`, `${id}` ] } />
			<main className="etc">
				<JBCListing { ...Params } />
			</main>
			<Footer />
		</>);
	}
}

export default MailingListMessage;
