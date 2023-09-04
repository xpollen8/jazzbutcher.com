import { getOptions } from '@/lib/macros';

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

const SearchResults = ({ results={}, banner }: { results: ResultType, banner?: any }): React.ReactNode => {
	const options = getOptions(results?.type);
	const layout = options.layout;
	const template = options?.template;

	return (
		<>
			{(banner) && banner(results)}
			{(template) && template(results, layout)}
		</>
	)
}

export default SearchResults;
