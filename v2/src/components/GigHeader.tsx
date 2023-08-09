import { useState } from 'react';
import { doSearch, searchOptions, Nobr } from '../lib/macros';

const GigHeader = (props : { section: string | null, f: string, q: string, setResults: any, setError: any }) => {
	const [f, setF] = useState(props?.f);
	const [q, setQ] = useState(props?.q);

	if (!(props?.section === 'Gigs')) return <></>;

	return (props?.setResults &&
		<>
		<form onSubmit={async (ev) => {
			ev.preventDefault();
			doSearch(f, q, props?.setResults, props?.setError);
		}}
		>
		<div style={{ padding: '5px', background: '#eee' }}>
			<Nobr>
				<label htmlFor="f">Find:</label>
				<select value={f} onChange={(e) => setF(e.target.value)}>
					{searchOptions.map((o, key) => <option key={key} value={o.noun}>{o.text}</option>)}
				</select>
				<label htmlFor="q">Containing:</label>
				<input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
				<button type="submit">Search!</button>
			</Nobr>
		</div>
		</form>
		</>
	)
}

export default GigHeader;
