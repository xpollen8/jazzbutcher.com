"use client"

import { parseCredit } from '@/lib/utils';
import useAudio from '@/lib/useAudio';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';

const AudioSection = ({ title, data }: any) => {
	return (data && data?.length) && (<>
		<LetterHeader title={title} />
		{data?.map((d: any, key: number) => {
			const { credit=d.mediacredit, crediturl=d.mediacrediturl, creditdate, creditcaption } = parseCredit(d?.credit || '');
			//if (d.credit) console.log("CR", { cr: d.credit, credit, crediturl, creditdate, creditcaption });
			//if (title === 'Live Shows') console.log("DATA", d);
			//if (title === 'Live Shows' && !d.mediaurl) console.log("DATA", d);
			return <EmbedMedia key={key}
				data={{
					datetime: d.datetime,
					venue: d.venue,
					city: d.city,
					mediaurl: d.mp3 || d.mediaurl,
					title: d.name || d.song || 'XXXXXXX',
					author: d.collection,
					comment: d.comment,
					mediacredit: credit,
					mediacrediturl: crediturl,
					mediacreditdate: creditdate,
					children: creditcaption
				}} />;
		})}
	</>)
}

const Audio = () => {
	const { data, isLoading, error } = useAudio();
	return <AudioSection title="Audio" data={data?.results} />
}

export default Audio;
