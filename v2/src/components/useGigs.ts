import useSWR from 'swr';
import { getOptions } from '@/lib/macros';

const filterGigs = (gigs: any, query: any, year: any, type: any, options: any) => {
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
	const fetcher = async ([ url, { year, type, query } ]: any) => {
		const localValue = await localStorage.getItem('gigs');
		if (localValue) {
				//console.log("FROM LOCAL", localValue.length);
				return filterGigs(JSON.parse(localValue), query, year, type, options);
		}
		return fetch(url)
			.then((res) => res.json())
			.then(gigs => {

				// TODO - have a time-based cache invalidation
				//console.log("SET LOCAL");
				localStorage.setItem('gigs', JSON.stringify(gigs));

				return filterGigs(gigs, query, year, type, options);
			});
		}

	const route = (year?.length) ? `/api/${options.route}/${year}` : `/api/${options.route}`;

	const { data, error, isLoading } = useSWR([ route, { year, type, query }], fetcher);

	//console.log("RET", data);
	return {
		data,
		year, type, query,
		isLoading,
		error,
	}
}

export default useGigs;
