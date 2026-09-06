import Image from 'next/image';
import MyLink from '@/components/MyLink';

const Documentary = () =>
	<>
	<MyLink href={`https://www.gofundme.com/f/help-james-and-tom-preserve-jazz-butchers-legacy`} rel="noopener noreferrer" target="_blank">
	<Image src={`https://v1.jazzbutcher.com/docu_hero.jpg`} alt={`Documentary`} width={1000} height={500} />
	</MyLink>
	</>;

export default Documentary;
