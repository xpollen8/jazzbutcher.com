import Image from 'next/image';
import Link from 'next/link';

const Documentary = () =>
	<>
	<Link href={`https://www.gofundme.com/f/help-james-and-tom-preserve-jazz-butchers-legacy`} rel="noopener noreferrer" target="_blank">
	<Image src={`https://v1.jazzbutcher.com/docu_hero.jpg`} alt={`Documentary`} width={1000} height={500} />
	</Link>
	</>;

export default Documentary;
