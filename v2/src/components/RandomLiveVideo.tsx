import Tag from '@/components/Tag';

const RandomLiveVideo = () => {
//#live	if ((sql(ev:select g.*, gs.* from gigsong gs, gig g where gs.datetime=g.datetime and gs.mediaurl like "%%youtube%%" order by rand() limit 1)) && (getnum(ev->numResults) = 1))
	return (<>
		<Tag>
			Random Forced Viewing
		</Tag>
	<div className="listenItem">
	</div>
	</>)
//		<b>${songLinkMapped(${ev->song})}</b>
//		- <a href="${jbc_gigs}/${ts2URI(${ev->datetime})}">${substr(0, 10, ${ev->datetime})}</a> \@ ${ev->venue}, ${ev->city}
//		${embedVideo(url=${ev->mediaurl})}
//#live	if (getval(ev->mediacredit))
//		${g_credit(g=${ev->mediacredit}, u=${ev->mediacrediturl})}
//#live	endif
}

export default RandomLiveVideo;
