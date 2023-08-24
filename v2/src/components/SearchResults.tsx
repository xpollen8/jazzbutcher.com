import { searchOptions } from '@/lib/macros';

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
	const template = searchOptions.find(so => so.noun === type)?.template;

	if (template) return template(results, layout);
	return <>No template for {noun} results yet</>
}

export default SearchResults;
