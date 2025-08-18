import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contributions from '@/components/Contributions';

const Person = ({ params }: { params?: any }) => {
	const person = decodeURIComponent(params?.who);
	return <>
		<Header section="contributions" title={person} />
		<main>
			<Contributions label={person} options={{
				all: true,
				filter: { field: 'credit', value: person, exact: true },
			}} />
		</main>
		<Footer />
	</>
}

export default Person;
