drop table if exists lyrics;

create table lyrics (
	lyrics_id mediumint unsigned NOT NULL auto_increment,
	project varchar(40) NOT NULL,
	href varchar(100) NOT NULL,
	title varchar(200) NOT NULL,
	lyrics text NOT NULL,
	mp3 varchar(200) NOT NULL,
	mp4 varchar(200) NOT NULL,
	embed_link varchar(200) NOT NULL,
	caption varchar(200) NOT NULL,
	found_on varchar(400) NOT NULL,
	pat_says text NOT NULL,
	others_say text NOT NULL,
	credits varchar(200) NOT NULL,
	tablature text NOT NULL,
	tablature_credit varchar(200) NOT NULL,
	dtcreated datetime not null default NOW(),
	INDEX idx0(lyrics_id),
	UNIQUE INDEX idx1(href),
	UNIQUE INDEX idx2(project, title),
	INDEX idx3(mp3),
	INDEX idx4(found_on)
);
