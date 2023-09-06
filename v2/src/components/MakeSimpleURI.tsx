import Link from 'next/link';

const MakeSimpleURI = ({ uri='', text, aux, children }: {
	uri?: string
	text: string
	aux?: string
	children?: React.ReactNode
}): React.ReactNode  => (
	<div style={{ marginBottom: '-20px', marginRight: '10px' }}>
	<Link href={uri}>
		<div className="clickDiv hover:outline bg-white">
			{text}
			{' '}<span className="date">{aux}</span>
		</div>
	</Link>
	{(children) && <div className="ml-5 mr-5 mb-10 -mt-4">{children}</div>}
	</div>
)

export default MakeSimpleURI;
