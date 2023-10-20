import { type RecordType} from '@/lib/macros';

export const GigBarTypes: RecordType = {
	other: {
		title: 'JBC',
		color: '#333',
		background: 'oldlace',
		icon: '/images/performance_jbc.png',
	},
	project: {
		title: 'Side Project',
		color: '#fff',
		background: '#55e',
	},
	solo: {
		title: 'Pat Solo',
		color: '#555',
		background: '#aba',
		icon: '/images/performance_solo.png',
	},
	wilson: {
		title: 'Wilson',
		color: '#eee',
		background: '#e00',
		icon: '/images/performance_wilson.png',
	},
	sumo: {
		title: 'Sumosonic',
		color: '#eee',
		background: '#000',
		icon: '/images/performance_sumo.png',
	},
	nopat: {
		title: 'Hosted..',
		color: '#f6eaea',
		background: '#77c',
		icon: '/images/performance_nopat.png',
	},
	eg: {
		title: 'Black Eg',
		color: '#000',
		background: '#ee9',
		icon: '/images/performance_eg.png',
	},
	tribute: {
		title: 'Tribute',
		color: '#eee',
		background: '#000',
		icon: '/images/performance_other.png',
	},
	duo: {
		title: 'Pat + Max',
		color: '#eee',
		background: '#0258bc',
		icon: '/images/performance_duo.png',
	},
	interview: {
		title: 'Interview',
		color: '#000',
		background: '#9e9',
		icon: '/images/performance_other.png',
	},
}

const DoGraph = ({ scaling, year, gigs=[], section='main', queryString='' }:
{
	scaling: number
	year: number
	gigs: RecordType[]
	section?: string
	queryString?: string
}) => {

	if (!(gigs.length)) return <></>;	// no data

	const totalColar = '#ee0';
	const extras: string[] = Object.keys(GigBarTypes);
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

	const calcWidth = (num: number, max: number) => `${(1 + (100 * num / (scaling * 1.1)))}%`;

	const Bar = ({ color, background, width, num }: { color: string, background: string, width: string, num: number }) => <div className="drop-shadow-md border" style={{ borderRadius: '10px', background, height: '15px', marginRight: '5px', width, color, textAlign: 'right', paddingRight: '3px', paddingTop: '1px' }} >{num}</div>

	const mainColor = 'whitesmoke';

	return (<>
		<table style={{
			width: '100%',
			backgroundColor: mainColor,
			borderRadius: '10px',
		}}>
		<tbody>
			<tr>
			<td style={{ padding: '3px', border: '1px solid #999' }}>
				<a style={{ fontSize: '2.2em'}} href={`/gigs/${year}${queryString}`}>{year}</a>
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
										<Bar color={GigBarTypes[type].color} background={GigBarTypes[type].background} width={calcWidth(num, maxGigs)} num={num} />
										{(num === gigs.length)
											?  <b>
													<span style={{ color: 'blue' }}>
													{GigBarTypes[type].title}
													</span>
												</b>
											: <span className="smalltext">
													{GigBarTypes[type].title}
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

const GigGraph = (props: { year: number, gigs: RecordType[], scaling: number, queryString?: string }) => {
	if (!props?.gigs) return <></>;
	return <DoGraph {...props} />
}

export default GigGraph;
