drop table if exists media;

create table media (
	media_id mediumint unsigned NOT NULL auto_increment,
	lookup varchar(30) NOT NULL,
	type varchar(20) NOT NULL,
	subtype varchar(100),
	ordinal varchar(50) NOT NULL,
	project varchar(20) NOT NULL,
	collection varchar(200) NOT NULL,
	name varchar(200) NOT NULL,
	comment varchar(200) NOT NULL,
	version varchar(200) NOT NULL,
	variant varchar(200) NOT NULL,
	mp3 varchar(200) NOT NULL,
	href varchar(200) NOT NULL,
	author varchar(200) NOT NULL,
	credit varchar(200),
	parent varchar(50),
	`datetime` datetime not null,
	images text,
	dtcreated datetime not null default NOW(),
	INDEX idx0(media_id),
	INDEX idx1(type,subtype),
	INDEX idx2(href),
	INDEX idx4(lookup),
	UNIQUE INDEX idx3(project, collection, mp3, href)
);
