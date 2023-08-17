import { useState } from 'react';
import { doSearch, searchOptions, Nobr } from '../lib/macros';

const GigHeader = (props : { section: string | null, f: string | null, q: string | null, setResults: any, setError: any }) => {
	const [f, setF] = useState(props?.f);
	const [q, setQ] = useState(props?.q);

	if (!(props?.section === 'Gigs')) return <></>;

	return (props?.setResults &&
		<>
		<form onSubmit={async (ev) => {
			ev.preventDefault();
			props?.setError();
			if (f && q) {
				props?.setResults();
				doSearch(f, q, props?.setResults, props?.setError);
			} else {
				props?.setError("Please choose a type and a search value");
			}
		}}
		>
		<div style={{ padding: '5px', background: '#eee' }}>
			<Nobr>
				<label htmlFor="f">Find:</label>
				<select value={f as string} onChange={(e) => setF(e.target.value)}>
					<option key={'blank'}>Choose</option>
					{searchOptions.filter(o => o.menu).map((o, key) => <option key={key} value={o.noun}>{o.text}</option>)}
				</select>
				<label htmlFor="q">Containing:</label>
				<input type="text" value={q as string} onChange={(e) => setQ(e.target.value)} />
				<button type="submit">Search!</button>
			</Nobr>
		</div>
		</form>
		</>
	)
}

export default GigHeader;
