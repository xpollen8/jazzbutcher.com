use jazzbutcher_com;

drop table if exists press;

create table press (
	press_id mediumint unsigned NOT NULL auto_increment,
	url varchar(200) NOT NULL,
	type varchar(20),
	person varchar(50) NOT NULL,
	dtadded datetime,
	dtpublished datetime NOT NULL,
	dtgig datetime NOT NULL,
	todo varchar(20) NOT NULL,
	album varchar(20) NOT NULL,
	thumb varchar(200) NOT NULL,
	images varchar(500) NOT NULL,
	media varchar(500) NOT NULL,
	publication varchar(200) NOT NULL,
	location varchar(100) NOT NULL,
	title varchar(200) NOT NULL,
	headline varchar(200) NOT NULL,
	subhead varchar(200) NOT NULL,
	summary varchar(200) NOT NULL,
	source varchar(200) NOT NULL,
	credit varchar(200) NOT NULL,
	body text,
	INDEX idx0(press_id),
	UNIQUE INDEX idx1(url),
	INDEX idx2(type),
	INDEX idx3(person),
	INDEX idx4(album)
);
