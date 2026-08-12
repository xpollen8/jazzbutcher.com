import { use } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JBCListing } from '@/components/JBCList';

const MailinglistYear = ({ params }: any) => {
	const Params: any = use(params);
	const year = Params?.year;
	return (<>
		<Header section="mailinglist" title={year} />
		<main className="etc">
			<JBCListing year={year}  />
		</main>
		<Footer />
	</>);
}

export default MailinglistYear;
