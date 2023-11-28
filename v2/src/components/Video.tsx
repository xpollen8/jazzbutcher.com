"use client"

import { parseCredit } from '@/lib/utils';
import useVideo from '@/lib/useVideo';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';

const VideoSection = ({ title, data }: any) => {
	//console.log("DATA", data);
	return !!(data && data?.length) && (<>
		<LetterHeader title={title} />
		{data?.map((d: any, key: number) => {
			const { performance_id, datetime, category, lookup, variant, type, performer, aka, title, setnum, ordinal, name, version, author, instruments, media, href, comment, collection } = d;
			return <EmbedMedia key={key}
				data={{
					lookup,
					//datetime: datetime,
					//venue: lookup,
					//venue: d.venue,
					//city: d.city,
					mediaurl: href,
					title: name,
					author: d.collection,
					comment,
					// mediacredit: credit,
					// mediacrediturl: crediturl,
					// mediacreditdate: creditdate,
					//children: creditcaption
				}} />;
		})}
	</>)
}

const Video = () => {
	const { data, isLoading, error } = useVideo();
	return <VideoSection title="Video" data={data?.results} />
}

export default Video;
