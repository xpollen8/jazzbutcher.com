use jazzbutcher_com;

drop table if exists press;

create table press (
	press_id mediumint unsigned NOT NULL auto_increment,
	url varchar(200) NOT NULL,
	type set('gig','interview','kit','album','pat','eg','wilson','sumo'),
	person varchar(200) NOT NULL,
	dtpublished datetime NOT NULL,
	dtgig datetime NOT NULL,
	album varchar(200) NOT NULL,
	thumb varchar(200) NOT NULL,
	publication varchar(200) NOT NULL,
	title varchar(200) NOT NULL,
	location varchar(200) NOT NULL,
	summary varchar(200) NOT NULL,
	source varchar(200) NOT NULL,
	credit varchar(200) NOT NULL,
	INDEX idx0(press_id),
	INDEX idx1(album)
);
