import useSWR from 'swr';
import { getOptions } from '@/lib/macros';

const filterGigs = (gigs, query, year, type, options) => {
	gigs.query = query;
	gigs.year = year;
	gigs.type = type;

	if (!(year || (type && query))) return gigs;	// no year, no search

	// filter by year
	if (year) {
		if (gigs?.numResults) {
			gigs.results = gigs.results?.filter((g: any) => g.datetime.startsWith(year));
			gigs.numResults = gigs.results.length;
		}
	}
	if (!type) return gigs;	// no search

	// filter by search
	return options.filter(gigs, query);
}

const useGigs = ({ type, query, year }: any) => {
	// TODO have fetchGig add .prevGig & .nextGig to object
	// NOTE: array to bust SWR cache
	const options = getOptions(type);
	const fetcher = ([ url, { year, type, query } ]: any) => {
		const localValue = localStorage.getItem(type);
		//console.log("localValue", localValue);
		if (localValue) {
				//console.log("FROM LOCAL", localValue.length);
				return filterGigs(JSON.parse(localValue), query, year, type, options);
		}
		fetch(url)
			.then((res) => res.json())
			.then(gigs => {

				//console.log("SET LOCAL");
				localStorage.setItem(type, JSON.stringify(gigs));

				return filterGigs(gigs, query, year, type, options);
			});
		}

	const { data, error, isLoading } = useSWR([ `/api/${options.route}/${query}`, { year, type, query }], fetcher);

	//console.log("RET", data);
	return {
		data,
		year, type, query,
		isLoading,
		error,
	}
}

export default useGigs;
