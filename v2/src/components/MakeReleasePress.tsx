import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { dateDiff } from '@/lib/macros';
import useReleasePress from '@/lib/useReleasePress';
import Tag from '@/components/Tag';

export const PressSummary = (r: any, key: number) => {
	const [ thumb ] = r?.thumb.split(';;') || '';
	return (<Link key={key} href={r.url}><div className="flex flex-grow gap-5 border bg-slate-50">
		<div className="w-full">
			{(r.publication) && <b>{r.publication}</b>} {(r.location) && <>({r.location})</>}
			{(r.title || r.headline || r.subhead)  && <br/>}
			{(r.title) && <i>{r.title}</i>} {(r.headline) && <i>{r.headline}</i>}
			{(r.subhead) && <i>{r.subhead}</i>}
			<br/>
			{dateDiff(r.dtpublished, '')}
			{(r.added) && <><br />Added: {dateDiff(r.added, '')}</>}
		</div>
		{(thumb) && <Image className="" width={200} height={200} alt="article thumbnail" src={`https://jazzbutcher.com${thumb}_250.jpg`} />}
	</div></Link>)
}

const MakeReleasePress = ({ lookup }: { lookup: string }) => {
	const { data, isLoading, error } = useReleasePress(lookup);
	const reviews = data?.results;

	if (!data) return <></>;

	return (
		<Suspense fallback=<>Loading...</> >
			{!!(reviews?.length) && (<>
				<Tag>Reviews</Tag>
				<blockquote>
					{reviews.map(PressSummary)}
					{/*reviews.map((r: any, key: number) => {
						const [ thumb ] = r?.thumb.split(';;') || '';
						return (<Link key={key} href={r.url}><div className="flex flex-grow gap-5 border p-3 bg-slate-50">
							<div className="w-full">
								{(r.publication) && <b>{r.publication}</b>} {(r.location) && <>({r.location})</>}
								{(r.title || r.headline || r.subhead)  && <br/>}
								{(r.title) && <i>{r.title}</i>}
								{(r.headline) && <i>{r.headline}</i>}
								{(r.subhead) && <i>{r.subhead}</i>}
								<br/>
								{dateDiff(r.dtpublished, '')}
								{(r.added) && <><br />Added: {dateDiff(r.added, '')}</>}
							</div>
							{(thumb) && <Image className="" width={200} height={200} alt="article thumbnail" src={`https://jazzbutcher.com${thumb}_250.jpg`} />}
						</div></Link>)
					})*/}
				</blockquote>
			</>)}
		</Suspense>
	)
}

export default MakeReleasePress;
