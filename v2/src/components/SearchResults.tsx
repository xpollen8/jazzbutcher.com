import { searchOptions } from '../lib/macros';

type ResultRecord = {
	[key: string]: any;
}

type ResultType = {
	type?: string;
	noun?: string;
	numResults?: number;
	key?: string;
	value?: string;
	results?: ResultRecord[];
}

const layoutNone = (results: ResultType, index: number) => {
	const { noun, numResults, key, value } = results;
	return (
		<>
		<h1>
		(no layout implemented)
		</h1>
		</>
	)
}

const SearchResults = ({ results }: { results: ResultType }): React.ReactNode => {
	const { type, noun, numResults, key, value } = results;
	const layout = searchOptions.find(so => so.noun === type)?.layout || layoutNone;

	return results && (
		<>
		<h1>
			{numResults} {noun} matched <i>{value}</i>
		</h1>
		{results?.results?.map(layout)}
	</>)
}

export default SearchResults;
