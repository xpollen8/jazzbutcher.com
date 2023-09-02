drop table if exists gigmedia;

create table gigmedia (
	gigmedia_id mediumint unsigned NOT NULL auto_increment,
	datetime datetime not null,
	type varchar(10) NOT NULL,
	image varchar(150) NOT NULL,
	image_caption varchar(1000) NOT NULL,
	credit varchar(200) NOT NULL,
	credit_url varchar(200) NOT NULL,
	credit_date datetime NOT NULL,
	INDEX idx0(gigmedia_id),
	UNIQUE INDEX idx1(type, datetime, image)
);
