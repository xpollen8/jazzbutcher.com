"use client"

import { type HashedType, parseCredit } from '@/lib/utils';
import useAudioUnreleased from '@/lib/useAudioUnreleased';
import EmbedMedia from '@/components/EmbedMedia';
import { NotesTag } from '@/components/Notes';
import Tag from '@/components/Tag';

const exists = (str?: string) => (str && str?.length && str !== ';;;;') ? str : null;

const AudioSection = ({ data }: any) => {
	const collections: HashedType = {};
	if (!data) return;
	console.log("AudioSection", data);
	for (const track of data) {
		if (!collections[track.collection]) { collections[track.collection] = [] }
		collections[track.collection]?.push(track);
	}
	return (data && data?.length) && (<>
		{Object.keys(collections)?.map((collection: string, key: number) => {
			const data: any[] = collections[collection];
			return (<div className="listItem" key={key}>
				<Tag>{collection}</Tag>
				{data?.sort((a: any, b: any) => a?.name.localeCompare(b?.name))?.map((d: any, key: number) => {
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
					const { credit: mediacredit, crediturl: mediacrediturl, creditdate: mediacreditdate } = (credit?.includes(';;') && parseCredit(credit)) || { credit };
					const { credit: venue, crediturl: city, creditdate: country } = (collection?.includes(';;') && parseCredit(collection)) || {};
					return <div className="clickListItem" key={key}><EmbedMedia data={{ autolink: true, mediaurl: mp3, mediacredit, mediacrediturl, mediacreditdate, song: name, comment: exists(comment) ? comment : (!venue) ? exists(collection) : '', venue, city, datetime }} /></div>
				})}
			</div>)
		})}
	</>)
}

const AudioUnreleased = () => {
	const { data, isLoading, error } = useAudioUnreleased();
	return <>
		<NotesTag> Un-released Audio </NotesTag>
		<AudioSection title="Un-released Audio" data={data?.results} />
	</>
}

export default AudioUnreleased;
