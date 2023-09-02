drop table if exists song;

create table song (
	song_id mediumint unsigned NOT NULL auto_increment,
	name varchar(200) NOT NULL,
	href varchar(200) NOT NULL,
	audio varchar(200) NOT NULL,
	mp3 varchar(200) NOT NULL,
	author varchar(200) NOT NULL,
	dtcreated datetime not null default NOW(),
	INDEX idx0(song_id),
	UNIQUE INDEX idx1(name, mp3, audio)
);
