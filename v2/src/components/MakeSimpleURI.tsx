import Link from 'next/link';

const MakeSimpleURI = ({ uri='', text, aux, children }: {
	uri?: string
	text: string
	aux?: string
	children?: React.ReactNode
}, key: number): React.ReactNode  => (
	<div key={key} className="mt-2 p-1">
	{(uri) ?
		<Link href={uri} style={{ display: 'inline-block', width: '100%' }}>
			<div className="clickDiv hover:outline bg-white">
				{text}
				{' '}<span className="date">{aux}</span>
			</div>
		</Link>
		:
		<div className="clickDiv bg-white" style={{ marginBottom: '20px' }}>
			{text}
			{' '}<span className="date">{aux}</span>
		</div>
	}
	{(children) && <div className="p-2">{children}</div>}
	</div>
)

export default MakeSimpleURI;
