drop table if exists entity;

##
##	type='person',
##		lookup='david_whittemore',
##		name='David Whittemore',
##		summary=<<SHORT BIO, ETC>>,
##		internal='/conspirators/davidwhittemore.html',
##		external='https://davidwhittemore.com;;main website$$https://adjective.com;;fun website$$bob@bob.int$$',
##
##
##	should query the table and set up defines:
##		[type]_[lookup]=>[field]
##
##			if [field] is a complex (;;), then parse into constituant parts, as shown below
##
##		${person_david_whittemore->name} => David Whittemore
##		${person_david_whittemore->internal} => /conspirators/davidwhittemore.html
##		${person_david_whittemore->external[1]->link} => https://davidwhittemore.com
##		${person_david_whittemore->external[1]->text} => main webs
##				.
##		${person_david_whittemore->external[3]->email} => bob@bob.int
##
##	etc
##
##
create table entity (
	entity_id mediumint unsigned NOT NULL auto_increment,
	type enum('person','release','song','act','press','audio','video') NOT NULL,
	lookup varchar(200) NOT NULL,
	name varchar(200) NOT NULL,
	summary text,
	internal varchar(200),
	external varchar(200),
	thumb varchar(200),
	dtcreated datetime not null default NOW(),
	INDEX idx0(entity_id),
	UNIQUE INDEX idx1(type,lookup),
	INDEX idx2(name)
);
