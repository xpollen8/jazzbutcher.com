//import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetterHeader from '@/components/LetterHeader';

const Missing = ({ params }: any) => {
	return (<>
		<Header section="mailinglist" title={params.year} />
		<main>
			<div className="etc">
				<LetterHeader title="JBC Mailing List Archives" subhead={`For ${params.year}`} />
				<h1>This section is not yet ported from old JBC site</h1>
			</div>
		</main>
		<Footer />
	</>);
}

export default Missing;
