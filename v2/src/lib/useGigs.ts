import useSWR from 'swr';
import { gigSearchOptionsByType } from '@/components/GigSearch';

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
	//console.log("FILTERING", { gigs, query, options });
	//console.log("FILTERINGX", gigs?.results);
	return options.filter(gigs, query);
}

const useGigs = ({ type, query, year }: any) => {
	const options = gigSearchOptionsByType(type);
	const fetcher = async ([ url, { year, type, query } ]: any) => {
		return fetch(url)
			.then((res) => res.json())
			.then(gigs => filterGigs(gigs, query, year, type, options));
		}

	const route = (year?.length) ? `/api/${options.route}/${year}` : 
		(query ? `/api/${options.route}/${query}` : `/api/${options.route}`);

	const { data, isLoading } = useSWR([ route, { year, type, query }], fetcher);

	return {
		data: { ...data, year, type, query },
		isLoading,
		error: data?.error,
	}
}

export default useGigs;
