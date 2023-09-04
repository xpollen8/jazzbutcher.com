import useSWR from 'swr';
import { getOptions } from '@/lib/macros';

const useGigs = ({ type, query, year }: any) => {
	// TODO have fetchGig add .prevGig & .nextGig to object
	// NOTE: array to bust SWR cache
	const options = getOptions(type);

	const fetcher = ([ url, { year, type, query } ]: any) => fetch(url)
		.then((res) => res.json())
		.then(gigs => {

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
		});

	const { data, error, isLoading } = useSWR([ `/api/${options.route}/${query}`, { year, type, query }], fetcher);

	return {
		data,
		year, type, query,
		isLoading,
		error,
	}
}

export default useGigs;
