import Image from 'next/image';
import { RecordType} from '../lib/macros';
import Tag from './Tag';

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
	const typeLookup: RecordType = {
		eg: '	Black Eg',
		wilson: 'Wilson',
		sumo: 'Sumosonic',
		nopat: 'Presents',
		tribute: 'Tribute',
		solo: 'Pat Solo',
		other: 'JBC',
	}
	const extras: string[] = [ 'eg', 'wilson', 'sumo', 'nopat', 'tribute', 'solo', 'other' ];
	const sums: RecordType = {};
	extras.forEach((e: string) => { sums[e] = 0 });

	let attributed = 0;
	gigs.forEach((g: RecordType) => {
		extras.forEach((e) => {
			if (g?.extra?.includes(e)) attributed++;
			sums[e] += g?.extra?.includes(e) || 0;
		});
	});
	const JBC = gigs.length - attributed;
	sums['other'] = JBC;
	let maxGigs = 0;
	extras.forEach((e) => {
		if (sums[e] > maxGigs) maxGigs = sums[e];
	})

	const link = (inpage) ? `#${year}_${section}` : ((href) ?  href : `/gigs/${year}`);
	const calcWidth = (num: number, max: number) => `${(1 + (100 * num / (scaling * 1.2)))}%`;

	return (<>
		<table style={{
			listStyle: 'none',
			paddingTop: '10px',
			width: '100%',
			marginBottom: '10px',
			border: '1px',
		}}>
			<tr>
			<td>
				<a href={link}>{year}</a>
			</td>

			{(gigs.length) &&
				<td style={{
						backgroundColor: 'rgba(245,245,245,0.7)',
						width: '100%',
						height: '15px',
						color: 'black',
						lineHeight: '15px',
						padding: '0px 5px',
						marginBottom: '1px',
					}} >

					{(() => {
						const color = (maxGigs) ? 'gray' : 'blue';
						return (<>
							{(maxGigs !== gigs.length) &&
								<div className="flex m-1">
									<Image
										alt="gig count"
										style={{ borderRadius: '10px', background: '#dedede', height: '15px', marginRight: '5px', width: calcWidth(gigs.length, maxGigs) }}
										src="https://jazzbutcher.com/images/spacer.gif"
										height="15"
										width="500" />
									<b>{gigs.length} gigs</b>
								</div>
							}
							{extras.map((type: string, key: number) => {
								const num = sums[type];
								if (num > 0) {
									return <div key={key} className="flex m-1">
										<Image
											alt="segment count"
											style={{ borderRadius: '10px', height: '15px', marginRight: '5px', width: calcWidth(num, maxGigs) }}
											src={`https://jazzbutcher.com/images/gig_spacer_${type}.gif`}
											height="15"
											width="500"
										/>
										<span className="smalltext">
											<span style={{ color }}>
												{num}
											</span>
											{' '}({typeLookup[type]})
										</span>
									</div>
								}
							})}
						</>)
					})()}
				</td>
			}

			{!(gigs.length) &&
				<td style={{
						backgroundColor: 'rgba(245,245,245,0.7)',
						width: '100%',
						height: '15px',
						color: 'black',
						lineHeight: '15px',
						padding: '0px 5px',
						marginBottom: '1px',
					}} >
						<Image
							alt="gig count"
							style={{ background: '#dedede', height: '15px', width: calcWidth(0, maxGigs) }}
							src="https://jazzbutcher.com/images/spacer.gif"
							height="15"
							width="500" />
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
