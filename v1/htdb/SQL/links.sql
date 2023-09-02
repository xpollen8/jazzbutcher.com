
##live  if (sql(insert IGNORE into gigposter set datetime="${${prefix}->datetime}", image="${ts2PosterLink(${${prefix}->datetime})}", credit="${parseCredit(${${prefix}->postercredit})}"))
use jazzbutcher_com;

drop table if exists links;

create table links (
	links_id mediumint unsigned NOT NULL auto_increment,
	type varchar(20) NOT NULL,
	name varchar(200) NOT NULL,
	href varchar(200) NOT NULL,
	dtcreated datetime not null default NOW(),
	INDEX idx0(links_id),
	UNIQUE INDEX idx1(type, name)
);
