"use client"

import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import GigHeader from '../../components/GigHeader';
import SearchResults from '../../components/SearchResults';

const Gigs = () => {
	const [results, setResults] = useState({});
	const [error, setError] = useState();

	return (<>
		<Header section={`Gigs`} navType={`Gig`} navPrev={{ datetime: '2020-10-11' }} navNext={{ datetime: '2020-10-13' }}>
			<GigHeader section='Gigs' f='venue' q='' setResults={setResults} setError={setError}/>
		</Header>
		{(error) && <h1 style={{ color: 'red' }}>{error}</h1>}
		<SearchResults results={results} />
	</>)
}

export default Gigs;
