import { RecordType} from '../lib/macros';

const DoGraph = ({ year, gigs=[], section='main', inpage=false, skip0=false, href }:
{
	year: number
	gigs: RecordType[]
	section?: string
	inpage?: boolean
	skip0?: boolean
	href?: string
}) => {

	if (!(gigs.length || !skip0)) return <></>;	// no data

	const scaling = 110;	// max # of gigs in a year
	const types: RecordType = {
		eg: {
			title: 'Black Eg',
			color: '#fff',
			background: '#666',
		},
		wilson: {
			title: 'Wilson',
			color: '#fff',
			background: '#e00',
		},
		sumo: {
			title: 'Sumosonic',
			color: '#fff',
			background: '#00e',
		},
		nopat: {
			title: 'Presents',
			color: '#fff',
			background: '#555',
		},
		tribute: {
			title: 'Tribute',
			color: '#fff',
			background: '#000',
		},
		solo: {
			title: 'Pat Solo',
			color: '#333',
			background: '#0d0',
		},
		other: {
			title: 'JBC',
			color: '#333',
			background: '#ee0',
		},
	}
	const extras: string[] = Object.keys(types);
	const sums: RecordType = {};
	extras.forEach((e: string) => { sums[e] = 0 });

	let attributed = 0;
	gigs.forEach((g: RecordType) => {
		extras.forEach((e) => {
			if (g?.extra?.includes(e)) attributed++;
			sums[e] += g?.extra?.includes(e) || 0;
		});
	});
	sums['other'] = gigs.length - attributed;	// JBC gigs are default
	let maxGigs = 0;
	extras.forEach((e) => {
		if (sums[e] > maxGigs) maxGigs = sums[e];
	})

	const link = (inpage) ? `#${year}_${section}` : ((href) ?  href : `/gigs/${year}`);
	const calcWidth = (num: number, max: number) => `${(1 + (100 * num / (scaling * 1.2)))}%`;

	const Bar = ({ color, background, width, num }: { color: string, background: string, width: string, num: number }) => <div style={{ borderRadius: '10px', background, height: '15px', marginRight: '5px', width, color, textAlign: 'right', paddingRight: '3px', paddingTop: '1px' }} >{num}</div>

	return (<>
		<table style={{
			width: '100%',
			backgroundColor: 'rgba(245,245,245,0.7)',
		}}>
			<tr>
			<td style={{ padding: '3px' }}>
				<a href={link}>{year}</a>
			</td>

			{(gigs.length) &&
				<td style={{
						width: '100%',
						lineHeight: '15px',
					}} >

					{(() => {
						return (<>
							{(maxGigs !== gigs.length) &&
								<div className="flex m-1">
									<Bar color="#000" background='#dedede' width={calcWidth(gigs.length, maxGigs)} num={gigs.length} />
									<b style={{ color: 'blue' }}>Total</b>
								</div>
							}
							{extras.map((type: string, key: number) => {
								const num = sums[type];
								if (num > 0) {
									return <div key={key} className="flex m-1">
										<Bar color={types[type].color} background={types[type].background} width={calcWidth(num, maxGigs)} num={num} />
										{(num === gigs.length)
											?  <b>
													<span style={{ color: 'blue' }}>
													{types[type].title}
													</span>
												</b>
											: <span className="smalltext">
													{types[type].title}
												</span>
										}
									</div>
								}
							})}
						</>)
					})()}
				</td>
			}

			{!(gigs.length) &&
				<td style={{
						width: '100%',
						lineHeight: '15px',
					}} >
						<Bar color="#000" background='#dedede' width={calcWidth(0, maxGigs)} num={0} />
					0
				</td>
			}
			</tr>
		</table>
	</>)
}

const GigGraph = ({ year, gigs }: { year: number, gigs: RecordType[] }) => {
	if (!gigs) return <></>;
	return <DoGraph year={year} gigs={gigs} section='main' inpage={false} skip0={false} />
}

export default GigGraph;
