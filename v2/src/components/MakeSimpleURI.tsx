import Link from 'next/link';

const MakeSimpleURI = ({ uri='', text, aux, children }: {
	uri?: string
	text: string
	aux?: string | React.ReactNode
	children?: string | React.ReactNode
}, key: number): React.ReactNode  => (
	<div key={key}>
	{(uri) ?
		<Link href={uri} style={{ display: 'inline-block', width: '100%' }}>
			<div className="clickDiv hover:outline bg-white">
				{text}
				{(aux) && <>{' - '}<span className="smalltext">{aux}</span></>}
			</div>
		</Link>
		:
		<div className="clickDiv bg-white" style={{ marginBottom: '5px' }}>
			{text}
			{' - '}<span className="smalltext">{aux}</span>
		</div>
	}
	{(children) && <div className="p-3">{children}</div>}
	</div>
)

export default MakeSimpleURI;
