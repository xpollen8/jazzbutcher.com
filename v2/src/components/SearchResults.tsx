type ResultRecord = {
	[key: string]: any;
}

type ResultType = {
	noun?: string;
	numResults?: number;
	key?: string;
	value?: string;
	results?: ResultRecord[];
}

const SearchResults = ({ results: nyResults }: { results: ResultType }): React.ReactNode => {
	const { noun, numResults, key, value, results } = nyResults;
	//console.log("POP", { nyResults, results });
	return results && (
		<>
		<h1>
			{numResults} {noun} matching <i>{value}</i> were found
		</h1>
		{results?.map((res: ResultRecord, key) => {
			return <div key={key}>
				<label>Venue</label>
				{res?.venue}
				<label>Date</label>
				{res?.datetime}
				<label>Location</label>
				{res?.city}
				{res?.state}
				{res?.country}
				{res?.postalcode}
			</div>
		})}
	</>)
}

export default SearchResults;
