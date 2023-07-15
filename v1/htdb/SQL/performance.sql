use jazzbutcher_com;

DROP TABLE IF EXISTS `performance`;
CREATE TABLE `performance` (
  `performance_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `datetime` datetime NOT NULL,
  `category` enum('event','release','with') DEFAULT 'event',
  `type` enum('warmup','set','encore'),
  `performer` varchar(100) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,	/* album title, eg */
  `setnum` tinyint(3) unsigned DEFAULT NULL,
  `ordinal` tinyint(3) unsigned DEFAULT NULL,
  `song` varchar(50) DEFAULT NULL,
  `instruments` varchar(100) DEFAULT NULL,
  KEY `idx0` (`performance_id`),
  KEY `idx1` (`datetime`,`category`),
  KEY `idx2` (`category`,`title`),
  KEY `idx3` (`performer`)
) ENGINE=InnoDB AUTO_INCREMENT=6983 DEFAULT CHARSET=latin1;

LOCK TABLES `performance` WRITE;


insert into performance set category="event", datetime="1995-12-21 00:00:00", type="set", setnum=1, ordinal=2, song="D.R.I.N.K.", performer="[[person:Max_Eider]]", instruments="vocals";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=1, ordinal=6, song="Girls Who Keep Goldfish", performer="[[person:Owen_Jones]]", instruments="accordion";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=1, ordinal=9, song="Who Loves You Now?", performer="[[person:Owen_Jones]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=1, ordinal=9, song="Who Loves You Now?", performer="[[person:Pat_Fish]]", instruments="bass";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=1, ordinal=10, song="D.R.I.N.K.", performer="[[person:Owen_Jones]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=1, song="Soul Happy Hour", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=1, song="Soul Happy Hour", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=2, song="She's On Drugs", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=2, song="She's On Drugs", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=3, song="Mr. Odd", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=3, song="Mr. Odd", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=4, song="Rain", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=4, song="Rain", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=5, song="Walk With The Devil", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=5, song="Walk With The Devil", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=6, song="Caroline Wheeler's Birthday Present", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=6, song="Caroline Wheeler's Birthday Present", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=7, song="Angels", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=7, song="Angels", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=8, song="Girlfriend", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=8, song="Girlfriend", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=9, song="The Long Night Starts", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=9, song="The Long Night Starts", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=11, song="Bigfoot Motel", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=11, song="Bigfoot Motel", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=12, song="Zombie Love", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="set", setnum=2, ordinal=12, song="Zombie Love", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="encore", setnum=2, ordinal=1, song="Jazz Butcher -v- Count Dracula", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-16 00:00:00", type="encore", setnum=2, ordinal=1, song="Jazz Butcher -v- Count Dracula", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="2002-04-18 00:00:00", type="encore", setnum=1, ordinal=1, song="D.R.I.N.K.", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="2002-04-18 00:00:00", type="encore", setnum=1, ordinal=1, song="D.R.I.N.K.", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=3, song="Raking Up the Leaves", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=4, song="Girls Who Keep Goldfish", performer="[[person:Owen_Jones]]", instruments="accordion";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=6, song="Who Loves You Now?", performer="[[person:Owen_Jones]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=6, song="Who Loves You Now?", performer="[[person:Pat_Fish]]", instruments="bass";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=7, song="D.R.I.N.K.", performer="[[person:Owen_Jones]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=7, song="D.R.I.N.K.", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=8, song="Soul Happy Hour", performer="[[person:Owen_Jones]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=8, song="Soul Happy Hour", performer="[[person:Steve_Valentine]]", instruments="bass";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=10, song="Jazz Butcher -v- Count Dracula", performer="[[person:Kevin_Haskins]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=1, ordinal=10, song="Jazz Butcher -v- Count Dracula", performer="[[person:Owen_Jones]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=1, song="She's On Drugs", performer="[[person:Kevin_Haskins]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=1, song="She's On Drugs", performer="[[person:Owen_Jones]]", instruments="keyboards";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=3, song="Walk With The Devil", performer="[[person:Owen_Jones]]", instruments="accordion";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=4, song="President Reagan's Birthday Present", performer="[[person:Owen_Jones]]", instruments="keyboards";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=5, song="Caroline Wheeler's Birthday Present", performer="[[person:Owen_Jones]]", instruments="percussion";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=5, song="Caroline Wheeler's Birthday Present", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=7, song="Rain", performer="[[person:Owen_Jones]]", instruments="keyboards";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=7, song="Rain", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=9, song="Old Snakey", performer="[[person:Owen_Jones]]", instruments="percussion";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=9, song="Old Snakey", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=10, song="Bigfoot Motel", performer="[[person:Owen_Jones]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=10, song="Bigfoot Motel", performer="[[person:Kevin_Haskins]]", instruments="percussion";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=10, song="Bigfoot Motel", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=11, song="Zombie Love", performer="[[person:Kevin_Haskins]]", instruments="drums";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=11, song="Zombie Love", performer="[[person:Owen_Jones]]", instruments="guitar";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="set", setnum=2, ordinal=11, song="Zombie Love", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-09-23 20:00:00", type="encore", setnum=1, ordinal=2, song="Forever", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="2005-03-04 00:00:00", type="set", setnum=1, ordinal=2, song="Girls Say Yes", performer="[[person:Joe_Woolley]]", instruments="guitar";
insert into performance set category="with", datetime="1999-02-26 00:00:00", performer="[[person:Curtis_E._Johnson]]";
insert into performance set category="event", datetime="1999-02-26 00:00:00", performer="[[person:Curtis_E._Johnson]]";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=4, song="Raking Up The Leaves", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=5, song="Soul Happy Hour", performer="[[person:Owen_Jones]]", instruments="triangle, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=9, song="Girls Who Keep Goldfish", performer="[[person:Owen_Jones]]", instruments="accordion";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=9, song="Girls Who Keep Goldfish", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=9, song="Girls Who Keep Goldfish", performer="[[person:Nikki_Whittaker]]", instruments="guitar";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=9, song="Girls Who Keep Goldfish", performer="[[person:Max_Eider]]", instruments="guitar";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=10, song="D.R.I.N.K.", performer="[[person:Owen_Jones]]", instruments="drums vocals, kazoo";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=10, song="D.R.I.N.K.", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=12, song="The New World", performer="[[person:Owen_Jones]]", instruments="snare drum";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=12, song="The New World", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=13, song="Old Snakey", performer="[[person:Owen_Jones]]", instruments="snare";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=13, song="Old Snakey", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=14, song="The Human Jungle", performer="[[person:Owen_Jones]]", instruments="bongos, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=14, song="The Human Jungle", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=15, song="Who Loves You Now?", performer="[[person:Owen_Jones]]", instruments="snare, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=15, song="Who Loves You Now?", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=15, song="Who Loves You Now?", performer="[[person:Pat_Fish]]", instruments="bass";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=16, song="Girlfriend", performer="[[person:Owen_Jones]]", instruments="snare, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=17, song="Rain", performer="[[person:Owen_Jones]]", instruments="snare, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=18, song="Go-Go Gorilla/Caroline Wheeler's Birthday Present", performer="[[person:Owen_Jones]]", instruments="snare, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=18, song="Go-Go Gorilla/Caroline Wheeler's Birthday Present", performer="[[person:Pat_Beirne]]", instruments="harmonica, tequila";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=19, song="Bigfoot Motel", performer="[[person:Owen_Jones]]", instruments="snare, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=19, song="Bigfoot Motel", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=20, song="The Long Night Starts", performer="[[person:Owen_Jones]]", instruments="nepalese drum";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=20, song="The Long Night Starts", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=21, song="Zombie Love", performer="[[person:Owen_Jones]]", instruments="snare, vocals";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=1, ordinal=21, song="Zombie Love", performer="[[person:Pat_Beirne]]", instruments="harmonica";
insert into performance set category="event", datetime="1999-02-26 00:00:00", type="set", setnum=2, ordinal=4, song="My Desert", performer="[[person:Owen_Jones]]", instruments="accordion, vocals";
insert into performance set category="event", datetime="2005-08-27 00:00:00", type="set", setnum=1, ordinal=6, song="Sister Death", performer="[[person:Joe_Woolley]]", instruments="electric guitar";
insert into performance set category="event", datetime="2000-04-19 00:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="2000-04-19 00:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="2000-04-19 00:00:00", type="set", setnum=1, ordinal=2, song="Girls Who Keep Goldfish", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="2000-04-19 00:00:00", type="set", setnum=1, ordinal=2, song="Girls Who Keep Goldfish", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="1989-07-07 00:00:00", type="set", setnum=1, ordinal=19, song="Girlfriend", performer="[[person:Peter Astor]]", instruments="guitar, vocals";
insert into performance set category="event", datetime="1993-12-23 00:00:00", type="set", setnum=1, ordinal=1, song="Moscow Drug Club", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="1992-06-05 00:00:00", type="set", setnum=1, ordinal=4, song="Girlfriend", performer="[[person:Charlie_Raldonado]]", instruments="guitar";
insert into performance set category="event", datetime="1992-06-05 00:00:00", type="set", setnum=1, ordinal=14, song="Racheland", performer="[[person:J'anna_Jacobi]]", instruments="violin";
insert into performance set category="event", datetime="2000-05-07 00:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Pat_Fish]]";
insert into performance set category="event", datetime="2000-05-07 00:00:00", type="set", setnum=1, ordinal=1, song="Partytime", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="2000-05-07 00:00:00", type="set", setnum=1, ordinal=5, song="D.R.I.N.K.", performer="[[person:Pat_Fish]]", instruments="kazoo";
insert into performance set category="event", datetime="2000-05-07 00:00:00", type="set", setnum=1, ordinal=5, song="D.R.I.N.K.", performer="[[person:Max_Eider]]";
insert into performance set category="event", datetime="2000-05-07 00:00:00", type="set", setnum=1, ordinal=5, song="D.R.I.N.K.", performer="[[person:Owen_Jones]]";
insert into performance set category="event", datetime="2000-05-07 00:00:00", type="set", setnum=1, ordinal=5, song="D.R.I.N.K.", performer="[[person:Steve_Valentine]]", instruments="bass";
insert into performance set category="event", datetime="2000-05-07 00:00:00", type="set", setnum=1, ordinal=7, song="Who Loves You Now?", performer="[[person:Pat_Fish]]", instruments="bass";


UNLOCK TABLES;
