import Link from 'next/link';

const MakeSimpleURI = ({ strikeout=false, uri='', text, aux, children, className }: {
	strikeout?: boolean
	uri?: string
	text: string
	aux?: string | React.ReactNode
	className?: string
	children?: string | React.ReactNode
}, key: number): React.ReactNode  => {
	const useUri = (uri?.startsWith('/') || uri?.startsWith('http')) ? uri : `/${uri}`;
	const strikeClass = (strikeout) ? "[text-decoration:underline_line-through]" : "";
	return (
		<div key={key} className={className}>
		{(uri) ?
			<Link href={useUri} style={{ display: 'inline-block', width: '100%', borderBottom: 'none' }}>
				<div className={`clickDiv hover:outline bg-white ${strikeClass}`}>
					{text}
					{(aux) && <>{' - '}<span className="smalltext">{aux}</span></>}
				</div>
			</Link>
			:
			<div className="clickDiv bg-white">
				{text}
				{' - '}<span className="smalltext">{aux}</span>
			</div>
		}
		{(children) && <div className="p-3">{children}</div>}
		</div>
	)
}

export default MakeSimpleURI;
