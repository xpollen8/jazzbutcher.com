import Tag from '@/components/Tag';

const DayInHistory = () => {
//#live	if ((sql(dih:select * from gig where month(datetime)=month(now()) and day(datetime)=day(now()) order by datetime)) && (getnum(dih->numResults) > 0))
	return (
		<Tag>
			On This Date In History..
		</Tag>
	)
/*
#live	while (d = dih[*]->datetime)
	${showGigListing(prefix=dih[${d}])}
#live	endwhile
#live	endif
*/
}

export default DayInHistory;
