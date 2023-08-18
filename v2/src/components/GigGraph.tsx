import { RecordType} from '../lib/macros';

export const types: RecordType = {
	other: {
		title: 'JBC',
		color: '#333',
		background: 'oldlace',
	},
	solo: {
		title: 'Pat Solo',
		color: '#eee',
		background: '#888',
	},
	wilson: {
		title: 'Wilson',
		color: '#eee',
		background: '#e00',
	},
	sumo: {
		title: 'Sumosonic',
		color: '#eee',
		background: '#020887',
	},
	nopat: {
		title: 'Hosted..',
		color: '#333',
		background: '#aae',
	},
	eg: {
		title: 'Black Eg',
		color: '#000',
		background: '#ee9',
	},
	tribute: {
		title: 'Tribute',
		color: '#eee',
		background: '#000',
	},
	duo: {
		title: 'Pat + Max',
		color: '#eee',
		background: '#333',
	},
	interview: {
		title: 'Interview',
		color: '#000',
		background: '#a9e',
	},
}

const DoGraph = ({ scaling, year, gigs=[], section='main', inpage=false, skip0=false, href }:
{
	scaling: number
	year: number
	gigs: RecordType[]
	section?: string
	inpage?: boolean
	skip0?: boolean
	href?: string
}) => {

	if (!(gigs.length || !skip0)) return <></>;	// no data

	//const totalColar = '#ededed';
	const totalColar = '#ee0';
	const extras: string[] = Object.keys(types);
	const sums: RecordType = {};
	extras.forEach((e: string) => { sums[e] = 0 });

	let attributed = 0;
	gigs.forEach((g: RecordType) => {
		const useG = (g?.gig) ? g.gig : g;
		//console.log(useG);
		extras.forEach((e) => {
			// hack - if !players, turn into 'solo'
			//if (useG?.extra && !useG?.extra?.includes('players')) {
				//useG.extra += ',solo';
			//}
			if (useG?.extra?.includes(e)) attributed++;
			sums[e] += useG?.extra?.includes(e) || 0;
		});
	});
	sums['other'] = gigs.length - attributed;	// JBC gigs are default
	let maxGigs = 0;
	extras.forEach((e) => {
		if (sums[e] > maxGigs) maxGigs = sums[e];
	})

	const link = (inpage) ? `#${year}_${section}` : ((href) ?  href : `/gigs/${year}`);
	const calcWidth = (num: number, max: number) => `${(1 + (100 * num / (scaling * 1.1)))}%`;

	const Bar = ({ color, background, width, num }: { color: string, background: string, width: string, num: number }) => <div className="drop-shadow-md border" style={{ borderRadius: '10px', background, height: '15px', marginRight: '5px', width, color, textAlign: 'right', paddingRight: '3px', paddingTop: '1px' }} >{num}</div>

	const mainColor = 'whitesmoke';

	return (<>
		<table style={{
			width: '100%',
			backgroundColor: mainColor,
			margin: '2px',
			borderRadius: '10px',
		}}>
		<tbody>
			<tr>
			<td style={{ padding: '3px', border: '1px solid #999' }}>
				<a style={{ fontSize: '2.2em'}} href={link}>{year}</a>
			</td>

			{(gigs.length) &&
				<td style={{
						width: '100%',
						lineHeight: '15px',
						border: '1px solid #999'
					}} >

					{(() => {
						return (<>
							{(maxGigs !== gigs.length) &&
								<div className="flex m-1">
									<Bar color="#000" background={totalColar} width={calcWidth(gigs.length, maxGigs)} num={gigs.length} />
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
						<Bar color="#000" background={totalColar} width={calcWidth(0, maxGigs)} num={0} />
					0
				</td>
			}
			</tr>
		</tbody>
		</table>
	</>)
}

const GigGraph = ({ year, gigs, scaling=110 }: { year: number, gigs: RecordType[], scaling: number }) => {
	if (!gigs) return <></>;
	return <DoGraph scaling={scaling} year={year} gigs={gigs} section='main' inpage={false} skip0={false} />
}

export default GigGraph;
