"use client"

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { pat, max, owen, eg, at } from '../../lib/defines';

import Header from '../../components/Header';
import GigHeader from '../../components/GigHeader';
import SearchResults from '../../components/SearchResults';
import apiData from '../../lib/apiData';
import { Source } from '../../components/GenericWeb';
import { doSearch, searchOptions } from '../../lib/macros';

const GigBlurb = () =>
<>
	<div className="annotation">
		<p>
		The first JBC dates are shrouded in confusion.
		{max}, {pat} and Louis played three very small shows under
		the umbrella of &quot;Cabaret Cent-Neuf&quot; during November and
		December 1981.
		</p>
		<p>
		These shows, which were almost entirely acoustic also
		featured the shadowy figure of The Antichrist, who performed
		as Ramon Destine (with {max}
		on guitar; it was Ramon who first uttered the words &quot;Take
		it, Max... &quot;), the Rockin&apos; Belgians and Terence Walpole,
		a deranged poet later to find recording fame with {eg}.
		The shows were at Merton College Oxford; Chez Louis,
		Wimbledon (!) ; and Drayton Court flats New Year&apos;s Eve
		party in Chelsea.
		</p>
		<p>
		The first show to be advertised as &quot;The Jazz Butcher&quot;
		was at Merton College, Oxford on 20th February 1982.
		The band lined up as: {pat}: guitar and voice, The Antichrist:
		guitar and voice, {at}: organ and voice, Chris &quot;Snogger&quot;
		Rudd (later of the Lost T-Shirts Of Atlantis) on bass,
		and {owen} on drums.
		</p>
		<p>
		It was perceived as a one-off laugh, not unlike something that
		happened last Wednesday in a ditch in central London.
		</p>
		<p>
		Pat then went away to the country and started writing
		some tunes.  The Glass deal was offered, and eventually
		a new romantic band called Where&apos;s Lisse?, who lived
		in Pat&apos;s area and who were also on Glass, suggested a
		&quot;gig&quot; together.  This is where it really starts ...
		</p>
		<Source g='Pat Letter: 1994-06-24' u='/letters/94Jun24/all_the_gigs.html' d='1994-06-24' />
	</div>
</>

const Gigs = () => {
	const searchParams = useSearchParams();
	const [f, setF] = useState(searchParams.get('f'));
	const [q, setQ] = useState(searchParams.get('q'));
	const [results, setResults] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		(async () => {
			// set initial results
			if (f && q) {
				doSearch(f, q, setResults, setError);
			} else {
				setResults({ type: "archive", noun: "archive", ...(await apiData('gigs')) });
			}
		})();
		return () => {}
	}, [ f, q ]);

	return (<>
		<Header section={`Gigs`} navType={`Gig`} navPrev={{ datetime: '2020-10-11' }} navNext={{ datetime: '2020-10-13' }}>
			<GigHeader section='Gigs' f={f} q={q} setResults={setResults} setError={setError}/>
		</Header>
		{(error) && <h1 style={{ color: 'red' }}>{error}</h1>}
		{(!(f && q) || !(results)) && <GigBlurb />}
		{(results) && <SearchResults results={results || {}} />}
	</>)
}

export default Gigs;
