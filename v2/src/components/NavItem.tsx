import MyLink from '@/components/MyLink';

const NavItem = ({ uri, text }: {
	uri?: string
	text: string
}): React.ReactNode  => (
	<div className="menuDiv hover:outline">
		{uri ? <MyLink href={uri}>{text}</MyLink> : <div>{text}</div>}
	</div>
)

export default NavItem;
