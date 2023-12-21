import Link from 'next/link';

const MakeSimpleURI = ({ uri='', text, aux, children, className }: {
	uri?: string
	text: string
	aux?: string | React.ReactNode
	className?: string
	children?: string | React.ReactNode
}, key: number): React.ReactNode  => {
	const useUri = uri?.startsWith('/') ? uri : `/${uri}`;
	return (
		<div key={key} className={className}>
		{(uri) ?
			<Link href={useUri} style={{ display: 'inline-block', width: '100%', borderBottom: 'none' }}>
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
}

export default MakeSimpleURI;
