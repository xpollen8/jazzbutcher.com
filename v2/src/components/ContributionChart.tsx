import { type HashedType } from '@/lib/utils';
import { BarChart, ColumnChart, LineChart } from 'react-chartkick';
import 'chartkick/chart.js';
const ContributionChart = ({ data, ...options }: any) => {

	const chartByAttribute = (data: any, attribute: string) => {
		let maxCount: number = 0;
		let minYear: number = 9999;
		let maxYear: number = 0;
		const years: HashedType = {};
		data.forEach((d: any) => {
			let year = parseInt(d[attribute]?.substring(0, 4));
			if (attribute === 'added' && year < 1994) {
				// website didn't exist before 1994
				year = 1994;
			}
			if (year > maxYear) maxYear = year;
			if (year < minYear) minYear = year;
			const count: number = d?.count || 1;
			//const type = 
			if (year) {
				if (!years[year]) years[year] = 0;
				years[year] = years[year] + count;
				if ( years[year] > maxCount) maxCount = years[year];
			}
		});
		// fill in missing years
		for (let y = minYear ; y < maxYear ; y++) {
			if (!years[y]) years[y] = 0;
		}
		const ret = Object?.keys(years)?.map((y: string) => {
			return [ y, years[y] ]
		})
		return [ ret, Math.trunc(maxCount * 1.0), minYear, maxYear ];
	}

	const [ addedData, addedCount, minY1, maxY1 ] = chartByAttribute(data, 'added');
	const [ datetimeData, datetimeCount, minY2, maxY2 ] = chartByAttribute(data, 'datetime');
	const minY = Math.min(...[ minY1, minY2 ].filter((x: number) => x < 9999));
	const maxY = Math.max(...[ maxY1, maxY2 ].filter((x: number) => x > 0));

	const spread = maxY - minY;

	// @ts-ignore
	return (spread > 2) && <BarChart height={`${100 + ((spread + 1) * 5)}px`} {...options} width={'100%'} max={Math.max([ addedCount, datetimeCount ])} data={[{ name: "Event", data: datetimeData }, { name: "Added", data: addedData } ]} />;
	//return <ColumnChart stacked={true} width={'100%'} max={Math.max([ addedCount, datetimeCount ])} data={[{ name: "Event", data: datetimeData }, { name: "Added", data: addedData } ]} />;
	//return <LineChart width={'100%'} max={Math.max([ addedCount, datetimeCount ])} data={[{ name: "Event", data: datetimeData }, { name: "Added", data: addedData } ]} />;
}

export default ContributionChart;
