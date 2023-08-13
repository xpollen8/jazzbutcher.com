import { searchOptions } from '../lib/macros';

type ResultRecord = {
	[key: string]: any
}

type ResultType = {
	type?: string
	noun?: string
	numResults?: number
	key?: string
	results?: ResultRecord[]
	searchTerms?: string[]
}

const layoutNone = (results: ResultType, index: number) => {
	const { noun, numResults, key } = results;
	return (
		<>
		<h1>
		(no layout implemented)
		</h1>
		</>
	)
}

const SearchResults = ({ results }: { results: ResultType }): React.ReactNode => {
	const { type, noun, numResults, key, searchTerms } = results;
	const layout = searchOptions.find(so => so.noun === type)?.layout || layoutNone;

	return <>
		{(noun) && <h1>
			{numResults} {noun} matched <i>&quot;{searchTerms}&quot;</i>
		</h1>}
		{results?.results?.map(layout)}
		</>
}

export default SearchResults;
