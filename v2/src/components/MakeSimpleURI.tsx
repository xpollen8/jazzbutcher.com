import Link from 'next/link';

const MakeSimpleURI = ({ uri, text }: {
	uri?: string,
	text: string,
}): React.ReactNode  => (
	<div className="menuDiv">
		{uri ? <Link href={uri}>{text}</Link> : <div>{text}</div>}
	</div>
)

export default MakeSimpleURI;
