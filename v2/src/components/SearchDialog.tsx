import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useTransition } from 'react';
import { doSearch, searchOptions, Nobr } from '@/lib/macros';

const SearchDialog = (props : { year?: number, navPrev?: string, navNext?: string, f: string | null, q: string | null, setResults: any, setError: any }) => {
	const router = useRouter();
	const pathname = usePathname();

	const [isPending, startTransition] = useTransition();

	const year = props?.year;
	const [f, setF] = useState(props?.f);
	const [q, setQ] = useState(props?.q);

///*
//	const SearchDialog = () => (
//		<Dialog.Root>
//			<Dialog.Trigger asChild>
//				<button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-full bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
//					<MagnifyingGlassIcon />
//				</button>
//			</Dialog.Trigger>
//			<Dialog.Portal>
//				<Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
//				<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
//					<Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
//						Let's find some stuff
//					</Dialog.Title>
//					<Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
//						Select a type, and enter a value
//					</Dialog.Description>
//					<fieldset className="mb-[15px] flex items-center gap-5">
//						<label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="f">
//							Find
//						</label>
//							{/**/}
//							<select value={f as string || ''} onChange={(e) => setF(e.target.value)} className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px]  items-center justify- rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]">
//								<option key={'blank'}>Choose..</option>
//								{searchOptions.filter(o => o.menu).map((o, key) => <option key={key} value={o.noun}>{o.text}</option>)}
//							</select>
//							{/**/}
//						{/*<input
//							className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
//							id="name"
//							defaultValue="Pedro Duarte"
//						/>*/}
//					</fieldset>
//					<fieldset className="mb-[15px] flex items-center gap-5">
//						<label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="q">
//							Containing
//						</label>
//						<input type="text" value={q as string || ''} onChange={(e) => setQ(e.target.value)} className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]" />
//						{/*<input
//							className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
//							id="username"
//							defaultValue="@peduarte"
//						/>*/}
//					</fieldset>
//					<div className="mt-[25px] flex justify-end">
//						<Dialog.Close asChild>
//							<button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
//								Search!
//							</button>
//						</Dialog.Close>
//					</div>
//					<Dialog.Close asChild>
//						<button
//							className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
//							aria-label="Close"
//						>
//							<Cross2Icon />
//						</button>
//					</Dialog.Close>
//				</Dialog.Content>
//			</Dialog.Portal>
//		</Dialog.Root>
//	);
//*/
	const setNavigation = (f: string | null, q: string | null) => {
		const searchParams = new URLSearchParams();
		if (f) searchParams.set('f', f);
		if (q) searchParams.set('q', q);
		startTransition(() => {
			router.replace(`${pathname}?${searchParams.toString()}`)
		});
	}
	const debounce = (func: any) => {
		const timeout = 500;
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
	return (props?.setResults &&
		<form onSubmit={async (ev) => {
			ev.preventDefault();
			props?.setError();
			if (f && q) {
				///props?.setResults();
				///doSearch(f, q, props?.setResults, props?.setError);
				setNavigation(f, q);
			} else {
				//props?.setError("Please choose a type and a search value");
				doSearch({ year }, props?.setResults, props?.setError);
				///props?.setResults();
			}
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
					<select className="p-2" value={f as string || ''} onChange={(e) => {
						setF(e.target.value)
						if (e.target.value && q) debounce(setNavigation(e.target.value, q));
						}}>
						<option key={'blank'} className="-1">Find..</option>
						{searchOptions.filter(o => o.menu).map((o, key) => <option key={key} value={o.noun}>{o.text}</option>)}
					</select>
				</div>
				<div className="p-1">
					<input type="text" value={q as string || ''} placeholder="contains.." onChange={(e) => {
						setQ(e.target.value)
						if (f && e.target.value) debounce(setNavigation(f, e.target.value));
					}} className="p-1" />
				</div>
				<span className="w-1/4">
					<button type="submit" className="rounded-full m-2 border bg-slate-300 hover:border-black hover:bg-slate-100 w-1/4">Go!</button>
					{(f && q) && <button onClick={(ev) => {
						ev.preventDefault();
						setF(null);
						setQ(null);
						setNavigation(null, null);
						}} type="submit" className="rounded-full m-2 border bg-slate-300 hover:border-black hover:bg-slate-100 w-1/4">Clear!</button>}
				</span>
		</div>
		</form>
	)
}

export default SearchDialog;
