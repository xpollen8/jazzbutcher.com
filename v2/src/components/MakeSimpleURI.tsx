import Link from 'next/link';

const MakeSimpleURI = ({ uri, text }: {
	uri?: string,
	text: string,
}): React.ReactNode  => (
	<div className="menuDiv hover:outline">
		{uri ? <Link href={uri}>{text}</Link> : <div>{text}</div>}
	</div>
)

export default MakeSimpleURI;
