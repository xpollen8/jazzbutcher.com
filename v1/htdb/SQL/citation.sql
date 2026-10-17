use jazzbutcher_com;

# INTENTION: serve as a place to cite JBCcom-hosted objects
# where information about a particular thing originated.
# IMPETUS: some gigs are only listed in some documents.
# it would be nice for such giigs to be able to display links
# back to the cited document.
# IN ORDER FOR THIS TO WORK:
# every object that has citations has to have a UNIQUE ID.
# currently, only "gigs" have such an ID (datetime).
# SITE-WIDE UPDATE NEEEDED: an static ID for every object.
# at a minimum, this should exist for gigs, lyrics, releases.
# at a maximum, everything - images gigtext, audio objects.
drop table if exists citation;

# THIS IS A WORK IN PROGRESS - NOT YET IN DATABASE
create table citation (
	citation_id mediumint unsigned NOT NULL auto_increment,
	datetime datetime NOT NULL,
	dtadded datetime NOT NULL,
	targetype enum('gig','lyric','release','press','jbclist','gigmedia','gigtext'),
	tags varchar(512) DEFAULT NULL,
	mediaurl varchar(200) DEFAULT NULL,
	mediacredit varchar(200) DEFAULT 'none',
	mediacrediturl varchar(200) DEFAULT NULL,
	subject text,
	body text,
	INDEX idx0(citation_id),
	UNIQUE INDEX idx1(datetime,type,mediacredit),
	INDEX idx2(mediacredit),
	INDEX idx3(tags)
);
