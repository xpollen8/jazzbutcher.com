
##live  if (sql(insert IGNORE into gigposter set datetime="${${prefix}->datetime}", image="${ts2PosterLink(${${prefix}->datetime})}", credit="${parseCredit(${${prefix}->postercredit})}"))
use jazzbutcher_com;

drop table if exists gigtext;

create table gigtext (
	gigtext_id mediumint unsigned NOT NULL auto_increment,
	datetime datetime not null,
	type varchar(200) NOT NULL,
	author varchar(200) NOT NULL,
	body text,
	INDEX idx0(gigtext_id),
	UNIQUE INDEX idx1(type, datetime, author)
);
