drop table if exists media;

create table media (
	media_id mediumint unsigned NOT NULL auto_increment,
	type varchar(20) NOT NULL,
	project varchar(20) NOT NULL,
	collection varchar(200) NOT NULL,
	name varchar(200) NOT NULL,
	comment varchar(200) NOT NULL,
	mp3 varchar(200) NOT NULL,
	href varchar(200) NOT NULL,
	author varchar(200) NOT NULL,
	dtcreated datetime not null default NOW(),
	INDEX idx0(media_id),
	INDEX idx1(type),
	INDEX idx2(href),
	UNIQUE INDEX idx3(project, collection, mp3, href)
);
