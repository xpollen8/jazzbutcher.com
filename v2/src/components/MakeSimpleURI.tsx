import Link from 'next/link';

const MakeSimpleURI = ({ uri='', text, aux, children }: {
	uri?: string
	text: string
	aux?: string
	children?: React.ReactNode
}, key: number): React.ReactNode  => (
	<div key={key} style={{ marginBottom: '-20px', marginRight: '10px' }}>
	{(uri) ?
		<Link href={uri}>
			<div className="clickDiv hover:outline bg-white">
				{text}
				{' '}<span className="date">{aux}</span>
			</div>
		</Link>
		:
		<div className="clickDiv" style={{ marginBottom: '30px' }}>
			{text}
			{' '}<span className="date">{aux}</span>
		</div>
	}
	{(children) && <div className="ml-5 mr-5 mb-10 -mt-4">{children}</div>}
	</div>
)

export default MakeSimpleURI;
