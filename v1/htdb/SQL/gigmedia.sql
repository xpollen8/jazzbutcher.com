##live  if (sql(insert IGNORE into gigmedia set type="${type}", image="${p[${y}]}", credit="${p[${p->numResults}]}"))

##live  if (sql(insert IGNORE into gigposter set datetime="${${prefix}->datetime}", image="${ts2PosterLink(${${prefix}->datetime})}", credit="${parseCredit(${${prefix}->postercredit})}"))
use jazzbutcher_com;

drop table if exists gigmedia;

create table gigmedia (
	gigmedia_id mediumint unsigned NOT NULL auto_increment,
	datetime datetime not null,
	type varchar(200) NOT NULL,
	image varchar(200) NOT NULL,
	credit varchar(200) NOT NULL,
	INDEX idx0(gigmedia_id),
	UNIQUE INDEX idx1(type, datetime, image)
);
