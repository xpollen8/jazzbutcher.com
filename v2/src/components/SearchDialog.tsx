import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { searchOptions } from '@/lib/macros';

const SearchDialog = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [isPending, startTransition] = useTransition();

	const [f, setF] = useState(searchParams.get('f') || 'all');
	const [q, setQ] = useState(searchParams.get('q') || '');

	const setNavigation = (_f: string = '', _q: string = '') => {
		const searchParams = new URLSearchParams();
		searchParams.set('f', _f || '');
		searchParams.set('q', _q || '');
		startTransition(() => {
			router.replace(`${pathname}?${searchParams.toString()}`)
		});
	}
	const debounce = (func: any) => {
		const timeout = 0;
		let timer: any;
		return (...args: any) => {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		}
	}
	return (<>
		<form onSubmit={async (ev) => {
			ev.preventDefault();
			setNavigation(f, q);
		}}
		>
		<div style={{
			padding: '3px',
			background: '#eee',
			margin: '5px',
			}}
			className="flex flex-wrap justify-center space-x-5"
		>
				<div className="m-1">
					<select className="p-2" value={f as string || 'all'} onChange={(e) => {
							//debounce(setNavigation(e.target.value, q));
							setF(e.target.value);
						}}>
						<option key={'blank'} className="-1">Find..</option>
						{searchOptions.filter(o => o.menu).map((o, key) => <option key={key} value={o.noun}>{o.text}</option>)}
					</select>
				</div>
				<div className="p-1">
					<input type="text" value={q as string || ''} placeholder="contains.." onChange={(e) => {
						//debounce(setNavigation(f, e.target.value));
							setQ(e.target.value);
					}} className="p-1" />
				</div>
				<span className="w-1/4">
					<button type="submit" className="rounded-full m-2 border bg-slate-300 hover:border-black hover:bg-slate-100 w-1/4">Go!</button>
					{(f && q) && <button onClick={(ev) => {
						ev.preventDefault();
						setNavigation('', '');
						}} type="submit" className="rounded-full m-2 border bg-slate-300 hover:border-black hover:bg-slate-100 w-1/4">Clear!</button>}
				</span>
		</div>
		</form>
		</>
	)
}

export default SearchDialog;
