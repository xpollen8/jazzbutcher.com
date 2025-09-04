import { type HashedType } from '@/lib/utils';
import { LineChart } from 'react-chartkick';
import 'chartkick/chart.js';
const ContributionChart = ({ data }: any) => {

	const chartByAttribute = (data: any, attribute: string) => {
		let maxCount: number = 0;
		let minYear: number = 9999;
		let maxYear: number = 0;
		const years: HashedType = {};
		data.forEach((d: any) => {
			const year = parseInt(d[attribute]?.substring(0, 4));
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
		return [ ret, Math.trunc(maxCount * 1.1) ];
	}

	const [ addedData, addedCount ] = chartByAttribute(data, 'added');
	const [ datetimeData, datetimeCount ] = chartByAttribute(data, 'datetime');

	// @ts-ignore
	return <LineChart width={'100%'} max={Math.max([ addedCount, datetimeCount ])} data={[{ name: "Event", data: datetimeData }, { name: "Added", data: addedData } ]} />;
}

export default ContributionChart;
