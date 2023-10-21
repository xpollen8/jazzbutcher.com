import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { people } from '@/lib/defines';

const sortByLastName = (a: any, b: any) => {
	const n1 = a.name.split(' ').pop();
	const n2 = b.name.split(' ').pop();
	return n1.localeCompare(n2);
}

const Conspirators = () => {
	let lastLetter: string;
	return (
		<>
		<Header section='conspirators' />
		<main>
			{people.filter((p: any) => !p.act ).sort(sortByLastName).map((props: any, key: number) => {
				const letter = props.name.split(' ').pop().substr(0, 1);
				let banner;
				if (letter !== lastLetter) {
					banner = <Tag>{letter}</Tag>;
					lastLetter = letter;
				}
				return <div key={key}>
					{banner}
					<Link className="ml-5" href={`/conspirators/${(props?.href && !props?.href.startsWith('http')) ? props?.href : props.name}`}>{props.name}</Link>
				</div>
			})}
		</main>
		<Footer />
		</>
	)
}

export default Conspirators;
