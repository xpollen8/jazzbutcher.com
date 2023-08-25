import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Missing = () => 
<>
	<Header />
	<h1>This section is not yet implemented</h1>
	<Footer />
</>

export default Missing;
//"use client"
//
//import Link from 'next/link';
//import { useState, useEffect } from 'react';
//import { useSearchParams } from 'next/navigation'
//import { pat, max, owen, eg, at } from '@/lib/defines';
//
//import Header from '@/components/Header';
//import Footer from '@/components/Footer';
//import SearchDialog from '@/components/SearchDialog';
//import SearchResults from '@/components/SearchResults';
//import apiData from '@/lib/apiData';
//import { Source } from '@/components/GenericWeb';
//import { parseYear, ts2URI, doSearch, searchOptions } from '@/lib/macros';
//
//type GigResults = {
//	[key: string]: any;
//	datetime?: string;
//}
//
//type Props_MakeHeader = {
//	project?: string
//	section?: string
//	title?: string
//	passthru?: string
//	navType?: 'Gig' | 'Year'
//	navPrev?: GigResults
//	navNext?: GigResults
//	children?: React.ReactNode
//}
//
//const ResultNavigator = (props: Props_MakeHeader): React.ReactNode => {
//	if (!props?.navType) return <></>;
//	const setGUI = (type: string, chr: React.ReactNode, cls: string, datetime?: string) => {
//		if (!datetime) return;
//		const uri = (type === 'Gig') ? ts2URI(datetime) : parseYear(datetime);
//		if (!uri) return;
//		return (
//			<Link href={`/gigs/${uri}`}>
//				<div className={cls}>
//					{chr}
//				</div>
//			</Link>
//		)
//	}
//	const prev = setGUI(props.navType, <>&lt;</>, 'left-arrow', props?.navPrev?.datetime);
//	const next = setGUI(props.navType, <>&gt;</>, 'right-arrow', props?.navNext?.datetime);
//	return (
//		<span className="smalltext" style={{ padding: '40px' }}>
//				{prev}
//				{next}
//		</span>
//	)
//}
//
//const Gigs = (props) => {
//	const year = props?.params?.year;
//	const datetime = props?.params?.datetime;
//	const searchParams = useSearchParams();
//	const [f, setF] = useState(searchParams.get('f'));
//	const [q, setQ] = useState(searchParams.get('q'));
//	const [results, setResults] = useState();
//	const [error, setError] = useState();
//	const [filteredResults, setFilteredResults] = useState();
//
//	useEffect(() => {
//		(async () => {
//			// set initial results
//			if (f && q) {
//				doSearch(f, q, setResults, setError);
//			} else {
//				//const pix = (await apiData('gigmedias'))?.results.filter(r => r.type === 'pix');
//				const gigs = await apiData('gigs');
//				/*
//				gigs.results?.forEach((g, idx) => {
//					gigs.results[idx].pix = pix?.filter(p => p.datetime == g.datetime);
//					console.log("PIX", gigs.results[idx].pix);
//				});
//				*/
//				setResults({ type: "archive", noun: "archive", ...gigs });
//			}
//		})();
//		return () => {}
//	}, [ f, q ]);
//
//	useEffect(() => {
//		if (results && results.results) {
//			results.results = results?.results?.filter(g => { console.log("C", year, g.datetime); return g.datetime.startsWith(year) });
//			setFilteredResults(results);
//		}
//	}, [ results ]);
//
//	const extraNav = <ResultNavigator navType='Gig' navPrev={{ datetime: '2020-10-11' }} navNext={{ datetime: '2020-10-13' }} />;
//	return (<>
//		<Header section='gigs' extraNav={extraNav} />
//		<SearchDialog f={f} q={q} setResults={setResults} setError={setError} />
//		{(error) && <h1 style={{ color: 'red' }}>{error}</h1>}
//		{(filteredResults) && <SearchResults results={filteredResults || {}} />}
//		<Footer />
//	</>)
//}
//
//export default Gigs;
