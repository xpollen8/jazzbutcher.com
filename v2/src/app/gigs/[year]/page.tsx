"use client"

import { useState, useEffect } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchDialog from '@/components/SearchDialog';
import SearchResults from '@/components/SearchResults';
import apiData from '@/lib/apiData';
import ResultNavigator from '@/components/ResultNavigator';
import { Hashed, bannerGigs, parseYear, doSearch, searchOptions } from '@/lib/macros';

const Gigs = (props: any) => {
	const { params = {}, searchParams = {} } = props;
	const year = params?.year;
	const f = searchParams?.f;
	const q = searchParams?.q;
	const queryString = new URLSearchParams(searchParams).toString();
	const [results, setResults] = useState<Hashed>({});
	const [error, setError] = useState();
	const [filteredResults, setFilteredResults] = useState<Hashed>({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			// set initial results
			setLoading(true);
			if (f && q) {
				setError(undefined);
				doSearch({ year, f, q }, setResults, setError);
			} else {
				//const pix = (await apiData('gigmedias'))?.results.filter(r => r.type === 'pix');
				const gigs = await apiData('gigs');
				/*
				gigs.results?.forEach((g, idx) => {
					gigs.results[idx].pix = pix?.filter(p => p.datetime == g.datetime);
					console.log("PIX", gigs.results[idx].pix);
				});
				*/
				setResults({ type: "archive", noun: "archive", ...gigs });
			}
		})();
	}, [ year, f, q ]);

	useEffect(() => {
		if (results?.numResults) {
				results.results = results.results?.filter((g: any) => g.datetime.startsWith(year));
				results.numResults = results.results.length;
				setFilteredResults({ type: "archive", noun: "archive", ...results });
		}
		setLoading(false);
	}, [ year, results ]);

	const prevYear = (year > 1982) ? { datetime: `${(parseInt(year, 10) - 1)}-00-00` } : undefined;
	const nextYear = (year < 2023) ? { datetime: `${(parseInt(year, 10) + 1)}-00-00` } : undefined;
	const extraNav = <ResultNavigator searchParams={queryString} uriPrefix='/gigs' navPrev={prevYear} navNext={nextYear} />;

	return (<>
		<Header section='gigs' title={year} extraNav={extraNav} />
		<SearchDialog year={year} f={f} q={q} setResults={setResults} setError={setError} />
		{(error) && <h1 style={{ color: 'red' }}>{error}</h1>}
		{(!loading) && <SearchResults results={filteredResults || {}} banner={() => bannerGigs(results, year) } />}
		{(loading) && <>Loading..</>}
		<Footer />
	</>)
}

export default Gigs;
