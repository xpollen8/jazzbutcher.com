import { truncAt } from '@/lib/utils';

const EmbedVideo = ({ data = {}, className, children }: { data: any, className?: string, children?: React.ReactNode }) => {
	const { datetime, type, setnum, ordinal, song, author, comment, performers, mediaurl, mediacredit, mediacrediturl } = data;
	return (<div className={className}>
		{(() => {
			if (mediaurl?.startsWith('/video') || mediaurl?.includes('assets.jazzbutcher.com')) {
				const videoURL = (str: string) => {
					const appendMP4 = (str: string) => {
						if (!str.includes('.mp4')) return str + '.mp4';
						return str;
					}
					const mediaurl = appendMP4(str);
					if (mediaurl?.startsWith('/video')) return `https://v1.jazzbutcher.com${mediaurl}`;
					return mediaurl;
				}
				const url = videoURL(truncAt(';;', mediaurl) || '');
				return (
					<video
						width={560}
						controls={true}
						preload="none"
						className="video"
						poster={`${url.replace('.mp4', '')}_thumbnail.jpg`}
					>
						<source src={url} type="video/mp4" />
					</video>
				);
			} else {
				// youtube/vimeo/myspace(h1)
				const urlClean = mediaurl?.replace('https://vimeo.com/', 'https://assets.jazzbutcher.com/video/');
				return (
					<div className="js-video [vimeo, widescreen]">
						<iframe width={560} height={315} src={`${urlClean}?showinfo=0`} frameBorder={0} allowFullScreen></iframe>
					</div>
				);
			}
		})()}
		{(comment) && <div className="annotation"> {comment} </div>}
		{children}
	</div>);
}

export default EmbedVideo;
