"use client"

import { ts2URI, parseCredit } from '@/lib/utils';
import useAudioUnreleased from '@/lib/useAudioUnreleased';
import EmbedMedia from '@/components/EmbedMedia';
import Tag from '@/components/Tag';
import { type HashedType } from '@/lib/utils';

const exists = (str?: string) => (str && str?.length && str !== ';;;;') ? str : null;

const AudioSection = ({ title, data }: any) => {
	const collections: HashedType = {};
	if (!data) return;
	for (const track of data) {
		if (!collections[track.collection]) { collections[track.collection] = [] }
		collections[track.collection]?.push(track);
	}
	return (data && data?.length) && (<>
		<Tag>{title}</Tag>
		<blockquote>
		{Object.keys(collections)?.map((collection: string, key: number) => {
			const data: any[] = collections[collection];
			return (<div className="listItem" key={key}>
				<Tag>{collection}</Tag>
				{data?.map((d: any, key: number) => {
					const { author,
						collection,
						comment,
						credit,
						datetime,
						dtcreated,
						href,
						images,
						lookup,
						media_id,
						mp3,
						name,
						ordinal,
						project,
						subtype,
						type,
					} = d;
					const { credit: mediacredit, crediturl: mediacrediturl, creditdate: mediacreditdate } = credit?.includes(';;') && parseCredit(credit);
					const { credit: venue, crediturl: city, creditdate: country } = collection?.includes(';;') && parseCredit(collection);
					return <div key={key} className={(type === 'video') ? 'listItem' : ''}><EmbedMedia data={{ autolink: true, mediaurl: (!href.includes('.html') && exists(href)) || exists(mp3), mediacredit, mediacrediturl, mediacreditdate, song: name, comment: exists(comment) ? comment : (!venue) ? exists(collection) : '', venue, city, datetime }} /></div>
				})}
			</div>)
		})}
		</blockquote>
	</>)
}

const AudioUnreleased = () => {
	const { data, isLoading, error } = useAudioUnreleased();
	return <AudioSection title="Un-released Audio" data={data?.results} />
}

export default AudioUnreleased;
