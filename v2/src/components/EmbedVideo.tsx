import { truncAt } from '@/lib/utils';

const EmbedVideo = ({ data = {}, className, children }: { data: any, className?: string, children?: React.ReactNode }) => {
	const { datetime, type, setnum, ordinal, song, author, comment, performers, mediaurl: inMediaurl, mediacredit, mediacrediturl } = data;
	const mediaurl = truncAt(';;', inMediaurl);
	return (<div className={className}>
		{(() => {
			if (mediaurl.startsWith('/video')) {
				// local video
				return (
					<video controls={true} preload="none"
						className="video"
						poster={`https://v1.jazzbutcher.com${mediaurl}_thumbnail.jpg`} >
						<source src={`https://v1.jazzbutcher.com${mediaurl}.mp4`} type="video/mp4" />
					</video>
				);
			} else if (mediaurl.includes('assets.jazzbutcher.com')) {
				// AWS mp4
				console.log("URL", mediaurl);
				return (
					<video
						width={560}
						controls={true}
						preload="none"
						className="video"
						poster={`${mediaurl.replace('.mp4', '')}_thumbnail.jpg`}
					>
						<source src={mediaurl} type="video/mp4" />
					</video>
				);
			} else {
				// youtube/vimeo/myspace(h1)
				const urlClean = mediaurl.replace('https://vimeo.com/', 'https://assets.jazzbutcher.com/video/');
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
