import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contributions from '@/components/Contributions';
import { isKnownPerson } from '@/lib/defines';

const Person = ({ params }: { params?: any }) => {
	const person = decodeURIComponent(params?.who);
	const known = isKnownPerson(person);
	return <>
		<Header section="contributions" title={person} />
		<main>
			<Contributions label={person} options={{
				all: true,
				filter: { field: 'credit', value: person, exact: true, aliases: known?.aliases },
			}} />
		</main>
		<Footer />
	</>
}

export default Person;
