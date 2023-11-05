"use client"

import { ts2URI, parseCredit } from '@/lib/utils';
import useAudio from '@/lib/useAudio';
import EmbedMedia from '@/components/EmbedMedia';
import Tag from '@/components/Tag';

const exists = (str?: string) => (str && str?.length && str !== ';;;;') ? str : null;

const AudioSection = ({ title, data }: any) => {
	return (data && data?.length) && (<>
		<Tag>{title}</Tag>
		<blockquote>
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
					//parent,
					project,
					subtype,
					type,
				} = d;
				const { credit: mediacredit, crediturl: mediacrediturl, creditdate: mediacreditdate } = credit?.includes(';;') && parseCredit(credit);
				const { credit: venue, crediturl: city, creditdate: country } = collection?.includes(';;') && parseCredit(collection);
				const parent = (!datetime.match(/0000-00-00 00:00:00/)) ? `/gigs/${ts2URI(datetime)}` : undefined;
				return <div key={key} className={(type === 'video') ? 'listItem' : ''}><EmbedMedia data={{ autolink: true, mediaurl: (!href.includes('.html') && exists(href)) || exists(mp3), mediacredit, mediacrediturl, mediacreditdate, song: name, comment: exists(comment) ? comment : (!venue) ? exists(collection) : '', venue, city, datetime, parent }} /></div>
				})}
		</blockquote>
	</>)
}

const Audio = () => {
	const { data, isLoading, error } = useAudio();
	return <AudioSection title="Audio" data={data?.results} />
}

export default Audio;
