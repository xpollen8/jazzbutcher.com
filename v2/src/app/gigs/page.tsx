"use client"

import { useSearchParams } from 'next/navigation'
import { pat, max, owen, eg, at } from '@/lib/defines';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchDialog from '@/components/SearchDialog';
import SearchResults from '@/components/SearchResults';
import useGigs from '@/components/useGigs';
import { Source } from '@/components/GenericWeb';
import { bannerGigs } from '@/lib/macros';

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
		as Ramon Destine (with {max} on guitar; it was Ramon who first uttered the words &quot;Take
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
	const type = searchParams.get('f') as string;
	const query = searchParams.get('q') as string;
	const { data, isLoading, error } = useGigs({ type, query });

	return (<>
		<Header section='gigs' />
		<SearchDialog />
		{(data?.error) && <h1 style={{ color: 'red' }}>{data.error}</h1>}
		{(!(type && query)) && <GigBlurb />}
		{(isLoading) ?
			<>Loading..</>
			: <SearchResults results={data} banner={() => bannerGigs(data) }/>
		}
		<Footer />
	</>)
}

export default Gigs;
