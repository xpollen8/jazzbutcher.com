use jazzbutcher_com;

DROP TABLE IF EXISTS `performance`;
CREATE TABLE `performance` (
  `performance_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `datetime` datetime NOT NULL,
  `category` enum('event','release','with') DEFAULT 'event',
  `project` varchar(20),
  `lookup` varchar(100),
  `variant` varchar(20),
  `type` varchar(20),
  `performer` varchar(100) DEFAULT NULL,
  `aka` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,	/* album title, eg */
  `setnum` tinyint(3) unsigned DEFAULT NULL,
  `ordinal` tinyint(3) unsigned DEFAULT NULL,
  `song` varchar(50) DEFAULT NULL,
  `version` varchar(100),
  `author` varchar(50) DEFAULT NULL,
  `instruments` varchar(200) DEFAULT NULL,
  `media` varchar(200) DEFAULT NULL,
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


# ${addAlbumPerf(release=adventurers, person=[[person:Eric_James]], instruments=mastered)}
# ${addAlbumPerf(release=adventurers, person=[[person:Jonny_Mattock]], instruments=drums\, percussion)}
# ${addAlbumPerf(release=adventurers, person=[[person:Max_Eider]], instruments=guitar\, singing)}
# ${addAlbumPerf(release=adventurers, person=[[person:Owen_Jones]], instruments=accordion, song='Tomb&eacute; dans les Pommes')}
# ${addAlbumPerf(release=adventurers, person=[[person:Pat_Fish]], instruments=guitar\, organ\, singing)}
# ${addAlbumPerf(release=adventurers, person=[[person:Richard_Formby]], instruments=guitar\, indian harmonium)}
# ${addAlbumPerf(release=adventurers, person=[[person:Richard_Formby]], instruments=mixed)}
# ${addAlbumPerf(release=adventurers, person=[[person:Richard_Formby]], instruments=produced)}
# ${addAlbumPerf(release=adventurers, person=[[person:Sonic_Boom]], instruments=ghost chorus\, drones, song='Saints Prayer')}
# ${addAlbumPerf(release=adventurers, person=[[person:Tim_Harries]], instruments=bass guitar)}
# ${addAlbumPerf(release=angel, person=[[person:Buffalo_Shame]], instruments=sleeve)}
# ${addAlbumPerf(release=angel, person=[[person:Felix_Ray]])}
# ${addAlbumPerf(release=angel, person=[[person:John_A._Rivers]], instruments=engineer, song="Angels")}
# ${addAlbumPerf(release=angel, person=[[person:John_A._Rivers]], instruments=producer, song="Angels")}
# ${addAlbumPerf(release=angel, person=[[person:Malcolm_Rivett-Carnac]], instruments=engineer, song="Rebecca Wants Her Bike Back\, Mersey")}
# ${addAlbumPerf(release=angel, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=angel, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=angel, person=[[person:Owen_Jones]])}
# ${addAlbumPerf(release=angel, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=angel, person=[[person:Pat_Fish]], instruments=producer, song="Rebecca Wants Her Bike Back\, Mersey")}
# ${addAlbumPerf(release=bacon, person=[[person:Alice_Thompson]], instruments=Vocals, song='La Mer')}
# ${addAlbumPerf(release=bacon, person=[[person:Ian_Sturgess]], instruments=Fretless Bass, song='Gloop Jiving')}
# ${addAlbumPerf(release=bacon, person=[[person:Ian_Sturgess]], instruments=Fretless Bass, song='Partytime')}
# ${addAlbumPerf(release=bacon, person=[[person:John_Silver]], instruments=Mad Guitar, song='Jazz Butcher Theme')}
# ${addAlbumPerf(release=bacon, person=[[person:Lionel_Brando]], instruments=Drums)}
# ${addAlbumPerf(release=bacon, person=[[person:Lionel_Brando]], instruments=producer)}
# ${addAlbumPerf(release=bacon, person=[[person:Louis_Leroi]], instruments=Saxophone)}
# ${addAlbumPerf(release=bacon, person=[[person:Martin._K._Daley]], instruments=Guitar, song='Bath Of Bacon')}
# ${addAlbumPerf(release=bacon, person=[[person:Martin._K._Daley]], instruments=Thin Bass, song='Zombie Love')}
# ${addAlbumPerf(release=bacon, person=[[person:Martin._K._Daley]], instruments=engineer)}
# ${addAlbumPerf(release=bacon, person=[[person:Max_Eider]], instruments=Guitar)}
# ${addAlbumPerf(release=bacon, person=[[person:Mitch_Jenkins]], instruments=photograpy)}
# ${addAlbumPerf(release=bacon, person=[[person:Mr._B]], instruments=photograpy)}
# ${addAlbumPerf(release=bacon, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar\, Bass\, Drums\, Xylophone\, Flute\, Organ)}
# ${addAlbumPerf(release=bacon, person=[[person:Pat_Fish]], instruments=producer)}
# ${addAlbumPerf(release=bacon, person=[[person:Rolo_McGinty]], instruments=Bass, song='Grey Flannelette')}
# ${addAlbumPerf(release=bacon, person=[[person:The_Sausage_People]], instruments=Vocals, song='Poisoned By Food')}
# ${addAlbumPerf(release=bacon, person=[[person:The_Undead]], instruments=Vocals, song='Zombie Love')}
# ${addAlbumPerf(release=blue, person=[[person:Alastair_Indge]], instruments=Vocals)}
# ${addAlbumPerf(release=blue, person=[[person:Alex_Green]], instruments=Tenor and Alto Saxophones\, String Arrangements)}
# ${addAlbumPerf(release=blue, person=[[person:Alex_Lee]], instruments=Lead Guitar\, Rhythm & Backwards Guitar\, Motorcycle & Fuel Air Explosions\, Lynch-Mob)}
# ${addAlbumPerf(release=blue, person=[[person:Andy_Elliot]], instruments=engineer)}
# ${addAlbumPerf(release=blue, person=[[person:Colin_Harris]], instruments=Samples)}
# ${addAlbumPerf(release=blue, person=[[person:Howard_Turner]], instruments=Vocals)}
# ${addAlbumPerf(release=blue, person=[[person:Howard_Turner]], instruments=engineer)}
# ${addAlbumPerf(release=blue, person=[[person:James_Rogers]], instruments=Vocals)}
# ${addAlbumPerf(release=blue, person=[[person:Joe_Allen]], instruments=Bass Guitar)}
# ${addAlbumPerf(release=blue, person=[[person:Laurence_O'Keefe]], instruments=Lead Guitar, song='Harlan')}
# ${addAlbumPerf(release=blue, person=[[person:Laurence_O'Keefe]], instruments=Singing)}
# ${addAlbumPerf(release=blue, person=[[person:Lionel_Cullman]], instruments=photography)}
# ${addAlbumPerf(release=blue, person=[[person:Owen_Jones]], instruments=Organ solo, song='Our Friends The Filth')}
# ${addAlbumPerf(release=blue, person=[[person:Owen_Jones]], instruments=Percussion\, Singing)}
# ${addAlbumPerf(release=blue, person=[[person:Pascal_Legras]], instruments=sleeve)}
# ${addAlbumPerf(release=blue, person=[[person:Pat_Fish]], instruments=Lead Guitar\, Rhythm & 12 String Guitar\, Keyboards\, Percussion\, Vocals)}
# ${addAlbumPerf(release=blue, person=[[person:Pat_Fish]], instruments=engineer)}
# ${addAlbumPerf(release=blue, person=[[person:Paul_Mulreany]], instruments=Drums)}
# ${addAlbumPerf(release=blue, person=[[person:Peter_Astor]], instruments=Aquamarine Guitar, song='Harlan')}
# ${addAlbumPerf(release=blue, person=[[person:Peter_Astor]], instruments=Harmonica\, Singing)}
# ${addAlbumPerf(release=blue, person=[[person:Peter_Astor]], instruments=Lead Guitar, song='Honey')}
# ${addAlbumPerf(release=blue, person=[[person:Peter_Crouch]], instruments=Bird Guitar, song='Girls Say Yes')}
# ${addAlbumPerf(release=blue, person=[[person:Peter_Crouch]], instruments=Rhythm Guitar)}
# ${addAlbumPerf(release=blue, person=[[person:Richard_Formby]], instruments=Lead Guitar\, Tremelo & 12 String Guitar\, Infinite Guitar and Feedback)}
# ${addAlbumPerf(release=blue, person=[[person:Sumishta_Brahm]], instruments=Singing)}
# ${addAlbumPerf(release=blue, person=[[person:Tim_Burrell]], instruments=Piano, song='Girls Say Yes')}
# ${addAlbumPerf(release=blue, person=[[person:Tim_Burrell]], instruments=engineer)}
# ${addAlbumPerf(release=brave, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=brave, person=[[person:Brent_Bambury]], instruments=Backing Vocals)}
# ${addAlbumPerf(release=brave, person=[[person:Kevin_Komoda]], instruments=Organ)}
# ${addAlbumPerf(release=brave, person=[[person:Kizzy_O'Callaghan]], instruments=Guitar)}
# ${addAlbumPerf(release=brave, person=[[person:Laurence_O'Keefe]], instruments=Bass)}
# ${addAlbumPerf(release=brave, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar)}
# ${addAlbumPerf(release=brave, person=[[person:Paul_Mulreany]], instruments=Drums)}
# ${addAlbumPerf(release=bus, person=[[person:Dooj_Wilkinson]], instruments=Wal Bass Guitar\, Voice)} 
# ${addAlbumPerf(release=bus, person=[[person:Mark_Brown]], instruments=artwork)} 
# ${addAlbumPerf(release=bus, person=[[person:Nick_Burson]], instruments=Drums)} 
# ${addAlbumPerf(release=bus, person=[[person:Pascal_Legras]], instruments=artwork)} 
# ${addAlbumPerf(release=bus, person=[[person:Pat_Fish]], instruments=Fender Telecaster\, Fender Jaguar\, Yamaha sf-800\, 6 & 12 String Acoustic Guitars\, Keyboards\, Percussion\, Programming\, Vocals)} 
# ${addAlbumPerf(release=bus, person=[[person:Pat_Fish]], instruments=engineer)} 
# ${addAlbumPerf(release=bus, person=[[person:Peter_Crouch]], instruments=Fender Stratocaster\, Fender Jaguar\, Yamaha sf-800)}
# ${addAlbumPerf(release=bus, person=[[person:Richard_Formby]], instruments=Fender Jaguar\, Gibson Firebird\, Burns Electric X11 String\, Programming\, Tapes)} 
# ${addAlbumPerf(release=bus, person=[[person:Richard_Formby]], instruments=engineer)} 
# ${addAlbumPerf(release=bus, person=[[person:Richard_Formby]], instruments=producer)} 
# ${addAlbumPerf(release=cake, person=[[person:Alastair_Indge]], instruments=photography)}
# ${addAlbumPerf(release=cake, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=closet, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=closet, person=[[person:Alex_Lee]], instruments=Lead Guitar)}
# ${addAlbumPerf(release=closet, person=[[person:Alex_Novak]], instruments=sleeve)}
# ${addAlbumPerf(release=closet, person=[[person:Ben_Davis]], instruments=photography)}
# ${addAlbumPerf(release=closet, person=[[person:Dave_Morgan]], instruments=Drums)}
# ${addAlbumPerf(release=closet, person=[[person:David_Whittemore]], instruments=photography)}
# ${addAlbumPerf(release=closet, person=[[person:Greenwood_Goulding]], instruments=Drums)}
# ${addAlbumPerf(release=closet, person=[[person:Howard_Turner]], instruments=engineer)}
# ${addAlbumPerf(release=closet, person=[[person:Iain_O'Higgins]], instruments=engineer)}
# ${addAlbumPerf(release=closet, person=[[person:John_A._Rivers]], instruments=engineer)}
# ${addAlbumPerf(release=closet, person=[[person:Kevin_Komoda]], instruments=engineer)}
# ${addAlbumPerf(release=closet, person=[[person:Kizzy_O'Callaghan]], instruments=Lead Guitar)}
# ${addAlbumPerf(release=closet, person=[[person:Laurence_O'Keefe]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=closet, person=[[person:Lucien_Borderline]], instruments=photography)}
# ${addAlbumPerf(release=closet, person=[[person:Martin_Stebbing]], instruments=engineer)}
# ${addAlbumPerf(release=closet, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=closet, person=[[person:Pat_Fish]], instruments=Rhythm Guitar\, Vocals)}
# ${addAlbumPerf(release=closet, person=[[person:Paul_Mulreany]], instruments=Drums\, Vocals)}
# ${addAlbumPerf(release=closet, person=[[person:Richard_Formby]], instruments=Lead Guitar)}
# ${addAlbumPerf(release=closet, person=[[person:Sonic_Boom]], instruments=Guitar)}
# ${addAlbumPerf(release=closet, person=[[person:Tim_Burrell]], instruments=engineer)}
# ${addAlbumPerf(release=conspir, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=conspir, person=[[person:Buffalo_Shame]], instruments=sleeve)}
# ${addAlbumPerf(release=conspir, person=[[person:Malcolm_Rivett-Carnac]], instruments=engineer)}
# ${addAlbumPerf(release=conspir, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=conspir, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=conspir, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=conspir12, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=conspir12, person=[[person:Buffalo_Shame]], instruments=sleeve)}
# ${addAlbumPerf(release=conspir12, person=[[person:Malcolm_Rivett-Carnac]], instruments=engineer)}
# ${addAlbumPerf(release=conspir12, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=conspir12, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=conspir12, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=cult, person=[[person:ALex_Lee]], instruments=Lead Guitar)}
# ${addAlbumPerf(release=cult, person=[[person:Alastair_Indge]], instruments=photography)}
# ${addAlbumPerf(release=cult, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=cult, person=[[person:David_Whittemore]], instruments=photography)}
# ${addAlbumPerf(release=cult, person=[[person:Howard_Turner]], instruments=engineer)}
# ${addAlbumPerf(release=cult, person=[[person:Kizzy_O'Callaghan]], instruments=Guitar)}
# ${addAlbumPerf(release=cult, person=[[person:Laurence_O'Keefe]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=cult, person=[[person:Martin_Stebbing]], instruments=engineer)}
# ${addAlbumPerf(release=cult, person=[[person:Martin_Stebbing]], instruments=producer)}
# ${addAlbumPerf(release=cult, person=[[person:Pascal_Legras]], instruments=sleeve)}
# ${addAlbumPerf(release=cult, person=[[person:Pat_Fish]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=cult, person=[[person:Pat_Fish]], instruments=producer)}
# ${addAlbumPerf(release=cult, person=[[person:Paul_Mulreany]], instruments=Drums\, Vocals)}
# ${addAlbumPerf(release=cult, person=[[person:Richard_Formby]], instruments=Guitar)}
# ${addAlbumPerf(release=cult, person=[[person:Sumishta_Brahm]], instruments=Vocals)}
# ${addAlbumPerf(release=cult, person=[[person:Tim_Burrell]], instruments=engineer)}
# ${addAlbumPerf(release=dist, person=[[person:Felix_Ray]])}
# ${addAlbumPerf(release=dist, person=[[person:John_A._Rivers]], instruments=Backing Vocals, song='Buffalo Shame')}
# ${addAlbumPerf(release=dist, person=[[person:John_A._Rivers]], instruments=Backing Vocals, song='Domestic Animal')}
# ${addAlbumPerf(release=dist, person=[[person:John_A._Rivers]], instruments=engineer)}
# ${addAlbumPerf(release=dist, person=[[person:Lionel_Brando]], instruments=sleeve)}
# ${addAlbumPerf(release=dist, person=[[person:Mark_Steeds]], instruments=Piano, song='Who Loves You Now?')}
# ${addAlbumPerf(release=dist, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=dist, person=[[person:Owen_Jones]])}
# ${addAlbumPerf(release=dist, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=dist, person=[[person:Richard_Dumas]], instruments=photography)}
# ${addAlbumPerf(release=drainglass, person=[[person:Alice_Thompson]], instruments=organ, song="Jazz Butcher -v- Count Dracula")}
# ${addAlbumPerf(release=drainglass, person=[[person:David_J.]], instruments=bass guitar\, electric guitar\, voice)}
# ${addAlbumPerf(release=drainglass, person=[[person:Derek_Tomkins]], instruments=engineer)}
# ${addAlbumPerf(release=drainglass, person=[[person:Felix_Ray]], instruments=bass guitar\, voice, song="The Human Jungle \, Partytime \, Domestic Animal \, Nothing Special\, Angels")}
# ${addAlbumPerf(release=drainglass, person=[[person:John_A._Rivers]], instruments=engineer)}
# ${addAlbumPerf(release=drainglass, person=[[person:Kevin_Haskins]], instruments=drums, song="Jazz Butcher -v- Count Dracula")}
# ${addAlbumPerf(release=drainglass, person=[[person:Lionel_Brando]], instruments=drums, song="Zombie Love")}
# ${addAlbumPerf(release=drainglass, person=[[person:Martin._K._Daley]], instruments=engineer)}
# ${addAlbumPerf(release=drainglass, person=[[person:Martin_K._Daley]], instruments=bass, song="Zombie Love")}
# ${addAlbumPerf(release=drainglass, person=[[person:Max_Eider]], instruments=electric guitar\, acoustic & classical guitars\, voice)}
# ${addAlbumPerf(release=drainglass, person=[[person:Owen_Jones]], instruments=drums\, percussion\, organ\, vocals)}
# ${addAlbumPerf(release=drainglass, person=[[person:Pat_Fish]], instruments=compiler)}
# ${addAlbumPerf(release=drainglass, person=[[person:Pat_Fish]], instruments=electric & acoustic guitars\, saxes\, flutes\, organ\, voice)}
# ${addAlbumPerf(release=drainglass, person=[[person:Paul_Taylor]], instruments=trombone, song="D.R.I.N.K.")}
# ${addAlbumPerf(release=drainglass, person=[[person:Pete_Gardiner]], instruments=compiler)}
# ${addAlbumPerf(release=drainglass, person=[[person:Rolo_McGinty]], instruments=bass, song="Jazz Butcher -v- Count Dracula")}
# ${addAlbumPerf(release=drainglass, person=[[person:The_Undead]], instruments=backing vocals, song="Zombie Love")}
# ${addAlbumPerf(release=drainglass, person=[[person:Tony_Harris]], instruments=engineer)}
# ${addAlbumPerf(release=family, person=[[person:David_Whittemore]], instruments=engineer)}
# ${addAlbumPerf(release=family, person=[[person:Dooj_Wilkinson]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=family, person=[[person:Iain_O'Higgins]], instruments=engineer)}
# ${addAlbumPerf(release=family, person=[[person:Mark_Brown]], instruments=photography)}
# ${addAlbumPerf(release=family, person=[[person:Martin_Stebbing]], instruments=producer)}
# ${addAlbumPerf(release=family, person=[[person:Mike_Egli]], instruments=photography)}
# ${addAlbumPerf(release=family, person=[[person:Nick_Burson]], instruments=Drums)}
# ${addAlbumPerf(release=family, person=[[person:Pascal_Legras]], instruments=sleeve)}
# ${addAlbumPerf(release=family, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=family, person=[[person:Pat_Fish]], instruments=Rhythm Guitar\, Vocals)}
# ${addAlbumPerf(release=family, person=[[person:Peter_Crouch]], instruments=Lead Guitar)}
# ${addAlbumPerf(release=fishco, person=[[act:The_Perfect_Disaster]], instruments=Backing Vocals, song='The Best Way')}
# ${addAlbumPerf(release=fishco, person=[[person:Alex_Green]], instruments=Saxophones)}
# ${addAlbumPerf(release=fishco, person=[[person:Blair_MacDonald]], instruments=Drums, song='Lot 49')}
# ${addAlbumPerf(release=fishco, person=[[person:Dave_Morgan]], instruments=Drums)}
# ${addAlbumPerf(release=fishco, person=[[person:Erol_Suleyman]], instruments=Bass, song='Lot 49')}
# ${addAlbumPerf(release=fishco, person=[[person:Greenwood_Goulding]], instruments=Bass Guitar)}
# ${addAlbumPerf(release=fishco, person=[[person:Iain_O'Higgins]], instruments=engineer)}
# ${addAlbumPerf(release=fishco, person=[[person:Iain_O'Higgins]], instruments=producer)}
# ${addAlbumPerf(release=fishco, person=[[person:Kizzy_O'Callaghan]], instruments=Guitars\, Vocals)}
# ${addAlbumPerf(release=fishco, person=[[person:Laurence_O'Keefe]], instruments=Bass, song='Swell')}
# ${addAlbumPerf(release=fishco, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=fishco, person=[[person:Pat_Fish]], instruments=Songs\, Vocals\, Instruments)}
# ${addAlbumPerf(release=fishco, person=[[person:Pat_Fish]], instruments=producer)}
# ${addAlbumPerf(release=fishco, person=[[person:Sonic_Boom]], instruments=Feedback, song='Susie')}
# ${addAlbumPerf(release=gift1, person=[[person:Alice_Thompson]], instruments=Organ)}
# ${addAlbumPerf(release=gift1, person=[[person:David_J.]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=gift1, person=[[person:Jody_Palmer]], instruments=Drums)}
# ${addAlbumPerf(release=gift1, person=[[person:Kevin_Haskins]], instruments=Drums)}
# ${addAlbumPerf(release=gift1, person=[[person:Max_Eider]], instruments=Lead Guitar\, Vocals)}
# ${addAlbumPerf(release=gift1, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=gift1, person=[[person:Owen_Jones]], instruments=Drums)}
# ${addAlbumPerf(release=gift1, person=[[person:Pat_Fish]], instruments=Rhythm Guitar\, Vocals)}
# ${addAlbumPerf(release=gift1, person=[[person:Rolo_McGinty]], instruments=Bass)}
# ${addAlbumPerf(release=gift2, person=[[person:Alastair_Indge]], instruments=photography)}
# ${addAlbumPerf(release=gift2, person=[[person:Elvis_Brando]], instruments=sleeve)}
# ${addAlbumPerf(release=girlgo, person=[[person:Laurence_O'Keefe]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=girlgo, person=[[person:Martin_Stebbing]], instruments=producer)}
# ${addAlbumPerf(release=girlgo, person=[[person:Pascal_Legras]], instruments=sleeve)}
# ${addAlbumPerf(release=girlgo, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=girlgo, person=[[person:Pat_Fish]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=girlgo, person=[[person:Pat_Fish]], instruments=producer)}
# ${addAlbumPerf(release=girlgo, person=[[person:Paul_Mulreany]], instruments=Drums\, Vocals)}
# ${addAlbumPerf(release=girlgo, person=[[person:Richard_Formby]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=glorious, person=[[person:Curtis_E._Johnson]])}
# ${addAlbumPerf(release=glorious, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=glorious, person=[[person:Owen_Jones]])}
# ${addAlbumPerf(release=glorious, person=[[person:Pat_Beirne]])}
# ${addAlbumPerf(release=glorious, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=hamburg, person=[[person:Felix_Ray]], instruments=Bass)}
# ${addAlbumPerf(release=hamburg, person=[[person:Jazz_Kandinsky]], instruments=sleeve)}
# ${addAlbumPerf(release=hamburg, person=[[person:Martin_Berschel]], instruments=mixed)}
# ${addAlbumPerf(release=hamburg, person=[[person:Max_Eider]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=hamburg, person=[[person:Owen_Jones]], instruments=Drums\, Vocals)}
# ${addAlbumPerf(release=hamburg, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=hamburg, person=[[person:Pat_Fish]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=hamburg, person=[[person:The_Conspiracy]], instruments=producer)}
# ${addAlbumPerf(release=hamburg, person=[[person:Vaut_Baby]], instruments=photography)}
# ${addAlbumPerf(release=hamburg, person=[[person:Volkspark_Studio_Mobile]], instruments=engineer)}
# ${addAlbumPerf(release=hard, person=[[person:Andy_Butlin]], instruments=engineer)}
# ${addAlbumPerf(release=hard, person=[[person:Felix_Ray]], instruments=Bass)}
# ${addAlbumPerf(release=hard, person=[[person:Malcolm_Rivett-Carnac]], instruments=engineer, song="Vienna Song")}
# ${addAlbumPerf(release=hard, person=[[person:Max_Eider]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=hard, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=hard, person=[[person:Owen_Jones]], instruments=Drums)}
# ${addAlbumPerf(release=hard, person=[[person:Pat_Fish]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=hard, person=[[person:Prince_Darren]], instruments=sleeve)}
# ${addAlbumPerf(release=hard, person=[[person:Slasher_Harris]], instruments=engineer)}
# ${addAlbumPerf(release=hard, person=[[person:Tony_Harris]], instruments=producer)}
# ${addAlbumPerf(release=human, person=[[person:Felix_Ray]], instruments=Bass Guitar\, Vocals)}
# ${addAlbumPerf(release=human, person=[[person:Jak_Munich]], instruments=photography)}
# ${addAlbumPerf(release=human, person=[[person:John_A._Rivers]], instruments=producer)}
# ${addAlbumPerf(release=human, person=[[person:Martin_F._Bedford]], instruments=sleeve)}
# ${addAlbumPerf(release=human, person=[[person:Max_Eider]], instruments=Electric Guitar\, Vocals)}
# ${addAlbumPerf(release=human, person=[[person:Owen_Jones]], instruments=Drums\, Vocals)}
# ${addAlbumPerf(release=human, person=[[person:Pat_Fish]], instruments=Rhythm Guitar\, Vocals)}
# ${addAlbumPerf(release=ill, person=[[person:Alex_Green]], instruments=tenor and alto saxophones)}
# ${addAlbumPerf(release=ill, person=[[person:Alex_Lee]], instruments=guitars)}
# ${addAlbumPerf(release=ill, person=[[person:Bolly]], instruments=dijeridoo, song='A Great Visitation Of Elephants')}
# ${addAlbumPerf(release=ill, person=[[person:Curtis_E._Johnson]], instruments=hungarian stockwhip)}
# ${addAlbumPerf(release=ill, person=[[person:Dave_Fleece]], instruments=guitar, song='True Stories')}
# ${addAlbumPerf(release=ill, person=[[person:Dave_Henderson]], instruments=electric guitars)}
# ${addAlbumPerf(release=ill, person=[[person:David_J.]], instruments=producer)}
# ${addAlbumPerf(release=ill, person=[[person:Dooj_Wilkinson]], instruments=bass guitar\, synthesiser\, guitar\, singing)}
# ${addAlbumPerf(release=ill, person=[[person:Gabriel_Turner]], instruments=drums\, guitars\, singing)}
# ${addAlbumPerf(release=ill, person=[[person:Ian_Botterill]], instruments=sumo prfund)}
# ${addAlbumPerf(release=ill, person=[[person:Kathie_McGinty]], instruments=ford transit\, singing)}
# ${addAlbumPerf(release=ill, person=[[person:Max_Read]], instruments=singing)}
# ${addAlbumPerf(release=ill, person=[[person:Max_Reed]], instruments=engineer)}
# ${addAlbumPerf(release=ill, person=[[person:Pascal Legras]], instruments=design, photography\, little girls with candles on their heads)}
# ${addAlbumPerf(release=ill, person=[[person:Pat_Fish]], instruments=guitars\, keyboards\, singing)}
# ${addAlbumPerf(release=lunch, person=[[person:Alex_Green]], instruments=saxophones)}
# ${addAlbumPerf(release=lunch, person=[[person:Alex_Lee]], instruments=guitar, song="She's On Drugs \, She's A Yo-Yo \, Shirley Maclaine \, Monkeyface \, Scarlett \, Sister Death")}
# ${addAlbumPerf(release=lunch, person=[[person:Blair_MacDonald]], instruments=drums, song="Looking For Lot 49")}
# ${addAlbumPerf(release=lunch, person=[[person:Dave_Felce]], instruments=guitar, song="True Stories")}
# ${addAlbumPerf(release=lunch, person=[[person:Dave_Henderson]], instruments=guitar, song="Scarlett \, Cops And Hospitals")}
# ${addAlbumPerf(release=lunch, person=[[person:David_J.]], instruments=producer, song="Scarlett \, Cops And Hospitals \, True Stories")}
# ${addAlbumPerf(release=lunch, person=[[person:David_Whittemore]], instruments=photography)}
# ${addAlbumPerf(release=lunch, person=[[person:Dooj_Wilkinson]], instruments=bass guitar\, vocals, song="Bakersfield \, Vodka Girls \, President Chang \, Scarlett \, Cops And Hospitals \, Sister Death \, True Stories")}
# ${addAlbumPerf(release=lunch, person=[[person:Erol_Suleyman]], instruments=bass guitar, song="Looking For Lot 49")}
# ${addAlbumPerf(release=lunch, person=[[person:Gabriel_Turner]], instruments=drums\, vocals, song="Scarlett \, Cops And Hospitals")}
# ${addAlbumPerf(release=lunch, person=[[person:Iain_O'Higgins]], instruments=producer, song="Looking For Lot 49")}
# ${addAlbumPerf(release=lunch, person=[[person:Joe_Allen]], instruments=bass guitar, song="She's A Yo-Yo \, Shirley Maclaine \, Still & All \, Monkeyface")}
# ${addAlbumPerf(release=lunch, person=[[person:Kizzy_O'Callaghan]], instruments=guitar, song="Looking For Lot 49")}
# ${addAlbumPerf(release=lunch, person=[[person:L._J._Renfield]], instruments=photography)}
# ${addAlbumPerf(release=lunch, person=[[person:Laurence_O'Keefe]], instruments=bass guitar\, vocals, song="Mr. Odd \, She's On Drugs \, Girl-Go \, Sister Death")}
# ${addAlbumPerf(release=lunch, person=[[person:Martin_Stebbing]], instruments=producer, song="Mr. Odd \, She's On Drugs \, Girl-Go \, Sister Death")}
# ${addAlbumPerf(release=lunch, person=[[person:Mick_Mercer]], instruments=photography)}
# ${addAlbumPerf(release=lunch, person=[[person:Nick_Burson]], instruments=drums, song="Bakersfield \, Vodka Girls \, President Chang")}
# ${addAlbumPerf(release=lunch, person=[[person:Pat_Fish]], instruments=guitar\, keyboards\, percussion\, vocals)}
# ${addAlbumPerf(release=lunch, person=[[person:Pat_Fish]], instruments=producer, song="She's A Yo-Yo \, Shirley Maclaine \, Still & All \, Monkeyface")}
# ${addAlbumPerf(release=lunch, person=[[person:Paul_Mulreany]], instruments=drums\, guitar\, vocals, song="Mr. Odd \, She's On Drugs \, Girl-Go \, She's A Yo-Yo \, Shirley Maclaine \, Still & All \, Monkeyface \, Sister Death")}
# ${addAlbumPerf(release=lunch, person=[[person:Peter_Crouch]], instruments=guitar, song="Bakersfield \, Vodka Girls \, President Chang")}
# ${addAlbumPerf(release=lunch, person=[[person:Richard_Formby]], instruments=guitar, song="Mr. Odd \, Girl-Go \, Shirley Maclaine \, Still & All \, Bakersfield \, Vodka Girls \, President Chang")}
# ${addAlbumPerf(release=lunch, person=[[person:Richard_Formby]], instruments=producer, song="Bakersfield \, Vodka Girls \, President Chang")}
# ${addAlbumPerf(release=marnie, person=[[person:Buffalo_Shame]], instruments=sleeve)}
# ${addAlbumPerf(release=marnie, person=[[person:David_E._Barker]], instruments=producer)}
# ${addAlbumPerf(release=marnie, person=[[person:Jody_Palmer]], instruments=Drums)}
# ${addAlbumPerf(release=marnie, person=[[person:Lee_Sanders]], instruments=engineer)}
# ${addAlbumPerf(release=marnie, person=[[person:Lionel_Brando]], instruments=Tambourine)}
# ${addAlbumPerf(release=marnie, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=marnie, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=marnie, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=marnie, person=[[person:Rolo_McGinty]], instruments=Bass)}
# ${addAlbumPerf(release=may, person=[[person:Alastair_Indge]], instruments=photography)}
# ${addAlbumPerf(release=may, person=[[person:Felix_Ray]], instruments=bass)}
# ${addAlbumPerf(release=may, person=[[person:Max_Eider]], instruments=guitar\, vocal)}
# ${addAlbumPerf(release=may, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=may, person=[[person:Owen_Jones]], instruments=drums\, vocal)}
# ${addAlbumPerf(release=may, person=[[person:Pat_Fish]], instruments=guitar\, vocals)}
# ${addAlbumPerf(release=never7, person=[[person:David_J.]], instruments=Bass\, Backing Vocals\, Produced, song="Never Give Up")}
# ${addAlbumPerf(release=never7, person=[[person:Fiona_Brice]], instruments=Violin, song="Never Give Up")}
# ${addAlbumPerf(release=never7, person=[[person:Janet Schiff]], instruments=Cello, song="Never Give Up")}
# ${addAlbumPerf(release=never7, person=[[person:Lionel_Brando]], instruments=Label Photos)}
# ${addAlbumPerf(release=never7, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar, song="Never Give Up")}
# ${addAlbumPerf(release=never7, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar\, Produced, song="Silver Street Up")}
# ${addAlbumPerf(release=never7, person=[[person:Sophie_Joiner]], instruments=Sleeve Paintings)}
# ${addAlbumPerf(release=never7, person=[[person:Tony_Green]], instruments=engineer, song="Never Give Up")}
# ${addAlbumPerf(release=never7, person=[[person:Victor DeLorenzo]], instruments=Drums, song="Never Give Up")}
# ${addAlbumPerf(release=newinv, person=[[person:Dave_Freak]], instruments=sleeve)}
# ${addAlbumPerf(release=newinv, person=[[person:John_A._Rivers]], instruments=engineer)}
# ${addAlbumPerf(release=newinv, person=[[person:Laurence_O'Keefe]])}
# ${addAlbumPerf(release=newinv, person=[[person:Pascal_Legras]], instruments=sleeve)}
# ${addAlbumPerf(release=newinv, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=newinv, person=[[person:Pat_Fish]], instruments=engineer, song="Almost Brooklyn")}
# ${addAlbumPerf(release=newinv, person=[[person:Paul_Mulreany]])}
# ${addAlbumPerf(release=nons, person=[[person:Alastair_Indge]], instruments=photography)}
# ${addAlbumPerf(release=nons, person=[[person:Alice_Thompson]], instruments=Organ, song="Southern Mark Smith")}
# ${addAlbumPerf(release=nons, person=[[person:David_E._Barker]], instruments=producer)}
# ${addAlbumPerf(release=nons, person=[[person:David_J.]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=nons, person=[[person:Felix_Ray]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=nons, person=[[person:Jeff_Price]], instruments=sleeve)}
# ${addAlbumPerf(release=nons, person=[[person:John_A._Rivers]], instruments=producer)}
# ${addAlbumPerf(release=nons, person=[[person:Kevin_Haskins]], instruments=Drums, song="Southern Mark Smith")}
# ${addAlbumPerf(release=nons, person=[[person:Lendon_Flanagan]], instruments=sleeve)}
# ${addAlbumPerf(release=nons, person=[[person:Max_Eider]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=nons, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=nons, person=[[person:Owen_Jones]], instruments=Drums\, Vocals)}
# ${addAlbumPerf(release=nons, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar)}
# ${addAlbumPerf(release=nons, person=[[person:Paul_Taylor]], instruments=Trombone, song="D.R.I.N.K.")}
# ${addAlbumPerf(release=nons, person=[[person:Rolo_McGinty]], instruments=Bass, song="Southern Mark Smith")}
# ${addAlbumPerf(release=nons, person=[[person:The_Conspiracy]], instruments=producer)}
# ${addAlbumPerf(release=nons, person=[[person:Tony_Harris]], instruments=producer)}
# ${addAlbumPerf(release=planet, person=[[person:Alex_Green]])}
# ${addAlbumPerf(release=planet, person=[[person:David_Jackson]], instruments=photography)}
# ${addAlbumPerf(release=planet, person=[[person:Francisco_Cabeza]], instruments=engineer)}
# ${addAlbumPerf(release=planet, person=[[person:John_A._Rivers]], instruments=engineer)}
# ${addAlbumPerf(release=planet, person=[[person:John_A._Rivers]], instruments=producer)}
# ${addAlbumPerf(release=planet, person=[[person:Kizzy_O'Callaghan]])}
# ${addAlbumPerf(release=planet, person=[[person:Laurence_O'Keefe]])}
# ${addAlbumPerf(release=planet, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=planet, person=[[person:Pascal_legras]], instruments=sleeve)}
# ${addAlbumPerf(release=planet, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=planet, person=[[person:Pat_Fish]], instruments=producer)}
# ${addAlbumPerf(release=planet, person=[[person:Paul_Mulreany]])}
# ${addAlbumPerf(release=rmen, person=[[person:Alice_Thompson]], instruments=Organ, song='Southern Mark Smith')}
# ${addAlbumPerf(release=rmen, person=[[person:Buffalo_Shame]], instruments=sleeve)}
# ${addAlbumPerf(release=rmen, person=[[person:David_E._Barker]], instruments=producer)}
# ${addAlbumPerf(release=rmen, person=[[person:David_J.]])}
# ${addAlbumPerf(release=rmen, person=[[person:Iku_Yanatse]], instruments=sleeve)}
# ${addAlbumPerf(release=rmen, person=[[person:John_A._Rivers]], instruments=producer)}
# ${addAlbumPerf(release=rmen, person=[[person:Kevin_Haskins]], instruments=Drums, song='Southern Mark Smith')}
# ${addAlbumPerf(release=rmen, person=[[person:Kevin_Haskins]], instruments=producer)}
# ${addAlbumPerf(release=rmen, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=rmen, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=rmen, person=[[person:Owen_Jones]])}
# ${addAlbumPerf(release=rmen, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=rmen, person=[[person:Pat_Fish]], instruments=producer)}
# ${addAlbumPerf(release=rmen, person=[[person:Rolo_McGinty]], instruments=Bass, song='Southern Mark Smith')}
# ${addAlbumPerf(release=rotten, person=[[person:Kathie_McGinty]],
# ${addAlbumPerf(release=rotten, person=[[person:Max_Eider]],
# ${addAlbumPerf(release=rotten, person=[[person:Max_Eider]], instruments=producer)})}
# ${addAlbumPerf(release=rotten, person=[[person:Mitch_Jenkins]], instruments=photography)})}
# ${addAlbumPerf(release=rotten, person=[[person:Owen_Jones]],
# ${addAlbumPerf(release=rotten, person=[[person:Pat_Beirne]],
# ${addAlbumPerf(release=rotten, person=[[person:Pat_Fish]],
# ${addAlbumPerf(release=rotten, person=[[person:Pat_Fish]], instruments=producer)})}
# ${addAlbumPerf(release=rotten, person=[[person:Peter_Crouch]],
# ${addAlbumPerf(release=rotten, person=[[person:Peter_Crouch]], instruments=engineer)})}
# ${addAlbumPerf(release=runner, person=[[person:Buffalo_Shame]], instruments=sleeve)}
# ${addAlbumPerf(release=runner, person=[[person:David_J.]], instruments=Bass Guitar\, Vocals)}
# ${addAlbumPerf(release=runner, person=[[person:Derek_Tomkins]], instruments=engineer)}
# ${addAlbumPerf(release=runner, person=[[person:Marc and Paul of the Hackney Horns]])}
# ${addAlbumPerf(release=runner, person=[[person:Max_Eider]], instruments=Electric Guitar\, Organ\, Vocals)}
# ${addAlbumPerf(release=runner, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=runner, person=[[person:Owen_Jones]], instruments=Drums\, Vocals)}
# ${addAlbumPerf(release=runner, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=runner, person=[[person:Pat_Fish]], instruments=Guitar\, Organ\, Vocals)}
# ${addAlbumPerf(release=scandal, person=[[person:David_J.]])}
# ${addAlbumPerf(release=scandal, person=[[person:Emerson_Hunt]], instruments=sleeve)}
# ${addAlbumPerf(release=scandal, person=[[person:John_A._Rivers]], instruments=engineer)}
# ${addAlbumPerf(release=scandal, person=[[person:John_A._Rivers]], instruments=producer)}
# ${addAlbumPerf(release=scandal, person=[[person:Jonathan_Dee]], instruments=engineer)}
# ${addAlbumPerf(release=scandal, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=scandal, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=scandal, person=[[person:Owen_Jones]])}
# ${addAlbumPerf(release=scandal, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=sex, person=[[person:Buffalo_Shame]], instruments=sleeve)}
# ${addAlbumPerf(release=sex, person=[[person:David_J.]])}
# ${addAlbumPerf(release=sex, person=[[person:Felix_Ray]])}
# ${addAlbumPerf(release=sex, person=[[person:John_A._Rivers]], instruments=producer)}
# ${addAlbumPerf(release=sex, person=[[person:Max_Eider]])}
# ${addAlbumPerf(release=sex, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=sex, person=[[person:Owen_Jones]])}
# ${addAlbumPerf(release=sex, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=sixteen_years, person=[[person:Dave_Henderson]])}
# ${addAlbumPerf(release=sixteen_years, person=[[person:David_J.]], instruments=producer)}
# ${addAlbumPerf(release=sixteen_years, person=[[person:Dooj_Wilkinson]])}
# ${addAlbumPerf(release=sixteen_years, person=[[person:Gabriel_Turner]])}
# ${addAlbumPerf(release=sixteen_years, person=[[person:Max_Reed]], instruments=engineer)}
# ${addAlbumPerf(release=sixteen_years, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=smith, person=[[person:Alice_Thompson]], instruments=Organ)}
# ${addAlbumPerf(release=smith, person=[[person:David_E._Barker]], instruments=producer)}
# ${addAlbumPerf(release=smith, person=[[person:Kevin_Haskins]], instruments=Drums)}
# ${addAlbumPerf(release=smith, person=[[person:Kevin_Haskins]], instruments=producer)}
# ${addAlbumPerf(release=smith, person=[[person:Max_Eider]], instruments=Lead Guitar\, Vocals)}
# ${addAlbumPerf(release=smith, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=smith, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=smith, person=[[person:Pat_Fish]], instruments=Rhythm Guitar\, Vocals)}
# ${addAlbumPerf(release=smith, person=[[person:Pat_Fish]], instruments=producer)}
# ${addAlbumPerf(release=smith, person=[[person:Rolo_McGinty]], instruments=Bass)}
# ${addAlbumPerf(release=spook, person=[[person:Alastair_Indge]], instruments=photography)}
# ${addAlbumPerf(release=spook, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=spook, person=[[person:Barbara_Taylor]], instruments=photography)}
# ${addAlbumPerf(release=spook, person=[[person:Berry_Carrington]], instruments=photography)}
# ${addAlbumPerf(release=spook, person=[[person:Brent_Bambury]], instruments=Backing Vocals)}
# ${addAlbumPerf(release=spook, person=[[person:Iain_O'Higgins]], instruments=engineer, song="Spooky")}
# ${addAlbumPerf(release=spook, person=[[person:Iain_O'Higgins]], instruments=producer, song="Spooky")}
# ${addAlbumPerf(release=spook, person=[[person:Kevin_Komoda]], instruments=Organ)}
# ${addAlbumPerf(release=spook, person=[[person:Kevin_Komoda]], instruments=producer)}
# ${addAlbumPerf(release=spook, person=[[person:Kizzy_O'Callaghan]], instruments=Guitar)}
# ${addAlbumPerf(release=spook, person=[[person:Laurence_O'Keefe]], instruments=Bass)}
# ${addAlbumPerf(release=spook, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=spook, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar)}
# ${addAlbumPerf(release=spook, person=[[person:Paul_Mulreany]], instruments=Drums)}
# ${addAlbumPerf(release=spook, person=[[person:Richard_and_Yves]], instruments=engineer)}
# ${addAlbumPerf(release=spook12, person=[[person:Alastair_Indge]], instruments=photography)}
# ${addAlbumPerf(release=spook12, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=spook12, person=[[person:Iain_O'Higgins]], instruments=engineer, song="Spooky")}
# ${addAlbumPerf(release=spook12, person=[[person:Iain_O'Higgins]], instruments=producer, song="Spooky")}
# ${addAlbumPerf(release=spook12, person=[[person:Kizzy_O'Callaghan]], instruments=Guitar)}
# ${addAlbumPerf(release=spook12, person=[[person:Laurence_O'Keefe]], instruments=Bass)}
# ${addAlbumPerf(release=spook12, person=[[person:Mitch_Jenkins]], instruments=photography)}
# ${addAlbumPerf(release=spook12, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar\, Producer)}
# ${addAlbumPerf(release=spook12, person=[[person:Paul_Mulreany]], instruments=Drums)}
# ${addAlbumPerf(release=spook12, person=[[person:Philip_Thain]], aka="[[person:Crusher]]", instruments=busmaster)}
# ${addAlbumPerf(release=spook12, person=[[person:Steve_Malloy]], aka="[[person:De_Judge]]", instruments=justice & security)}
# ${addAlbumPerf(release=spook7, person=[[person:Alex_Green]], instruments=Saxophone)}
# ${addAlbumPerf(release=spook7, person=[[person:Iain_O'Higgins]], instruments=engineer, song="Spooky")}
# ${addAlbumPerf(release=spook7, person=[[person:Iain_O'Higgins]], instruments=producer, song="Spooky")}
# ${addAlbumPerf(release=spook7, person=[[person:Kizzy_O'Callaghan]], instruments=Guitar)}
# ${addAlbumPerf(release=spook7, person=[[person:Laurence_O'Keefe]], instruments=Bass)}
# ${addAlbumPerf(release=spook7, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar\, Producer)}
# ${addAlbumPerf(release=spook7, person=[[person:Paul_Mulreany]], instruments=Drums)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Agent_Russell_Cooper]], aka="[[person:Russell_Cooper]]", instruments=percussionist extraordinaire)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Anita_Allbright]], instruments=vocalist)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Bolly]], instruments=dijeridoo, song="Monks Of Kung Fu")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Curtis_E._Johnson]], instruments=backing vocal, song="Stupid")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Curtis_E._Johnson]], instruments=crime rap, song="God's Green Earth")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Curtis_E._Johnson]], instruments=music\,words, song="Everything Is Wonderful")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Darren_Nash]], instruments=mixed)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Dave_Henderson]], instruments=slide and solo guitar, song="Come\, Friendly Spacemen")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Gabriel_Turner]], instruments=drumming\,vocalist)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Headstone]], aka="[[person:Pat_Fish]]", instruments=guitars\,keyboards\,bass\,programming\,vocalist)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Jamie_Jab]], instruments=morricone chorus, song="God's Green Earth")}
# ${addAlbumPerf(release=thisissumo, person=[[person:John_Langley]], instruments=drum loop, song="Fern Schnell Gut")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Johnny_Octopus]], instruments=production, song="Come\, Friendly Spacemen")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Jonny_Mattock]], instruments=singing, song="Come\, Friendly Spacemen")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Kathie_M]], aka="[[person:Kathie_McGinty]]", instruments=vocalist)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Mandy_Parnell]], instruments=mastered)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Mark_Refoy]], instruments=acoustic guitar, song="Everything Is Wonderful")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Max_Read]], instruments=singing, song="Come\, Friendly Spacemen")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Max_Read]], instruments=slide guitar, song="Sputnik")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Mister_B]], aka="[[person:Ian_Botterill]]", instruments=vocalist)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Pat_Fish]], instruments=music\,words)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Special_K]], aka="[[person:Kathy_Shaer]]", instruments=vocalist)}
# ${addAlbumPerf(release=thisissumo, person=[[person:Steve_Davies]], instruments=guitar solo, song="Radio Saigon")}
# ${addAlbumPerf(release=thisissumo, person=[[person:Tom_Withers]], instruments=production, song="Come\, Friendly Spacemen")}
# ${addAlbumPerf(release=uncond, person=[[person:Alex_Green]], instruments=Saxophone)} 
# ${addAlbumPerf(release=uncond, person=[[person:Alex_Lee]], instruments=Guitar)} 
# ${addAlbumPerf(release=uncond, person=[[person:Dave_Morgan]])}
# ${addAlbumPerf(release=uncond, person=[[person:David_J.]], instruments=Bass\, Vocals)} 
# ${addAlbumPerf(release=uncond, person=[[person:Felix_Ray]], instruments=Bass)} 
# ${addAlbumPerf(release=uncond, person=[[person:Francisco_Cabeza]], instruments=engineer)} 
# ${addAlbumPerf(release=uncond, person=[[person:Greenwood_Goulding]], instruments=Bass)} 
# ${addAlbumPerf(release=uncond, person=[[person:Howard_Turner]], instruments=engineer)} 
# ${addAlbumPerf(release=uncond, person=[[person:Iain_O'Higgins]], instruments=producer)} 
# ${addAlbumPerf(release=uncond, person=[[person:Ian_Sturgess]], instruments=Bass)} 
# ${addAlbumPerf(release=uncond, person=[[person:Joe_Allen]], instruments=Bass)} 
# ${addAlbumPerf(release=uncond, person=[[person:John_A._Rivers]], instruments=producer)} 
# ${addAlbumPerf(release=uncond, person=[[person:Kizzy_O'Callaghan]], instruments=Guitar\, Vocals)} 
# ${addAlbumPerf(release=uncond, person=[[person:Laurence_O'Keefe]], instruments=Bass\, Vocals)} 
# ${addAlbumPerf(release=uncond, person=[[person:Martin_K._Daley]], instruments=engineer)} 
# ${addAlbumPerf(release=uncond, person=[[person:Martin_Stebbing]], instruments=producer)} 
# ${addAlbumPerf(release=uncond, person=[[person:Max_Eider]], instruments=Guitar\, Vocals)} 
# ${addAlbumPerf(release=uncond, person=[[person:Owen_Jones]], instruments=Drums\, Keyboards\, Vocals)} 
# ${addAlbumPerf(release=uncond, person=[[person:Pascal_Legras]], instruments=sleeve)} 
# ${addAlbumPerf(release=uncond, person=[[person:Pat_Fish]], instruments=Saxophone\, Keyboards\, Guitar\, Vocals)} 
# ${addAlbumPerf(release=uncond, person=[[person:Pat_Fish]], instruments=producer)} 
# ${addAlbumPerf(release=uncond, person=[[person:Paul_Mulreany]], instruments=Drums\, Vocals)} 
# ${addAlbumPerf(release=uncond, person=[[person:Peter_Astor]], instruments=Guitar)} 
# ${addAlbumPerf(release=uncond, person=[[person:Peter_Crouch]], instruments=Guitar)} 
# ${addAlbumPerf(release=uncond, person=[[person:Richard_Formby]], instruments=Guitar)} 
# ${addAlbumPerf(release=uncond, person=[[person:Sumishta_Brahm]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=uncond, person=[[person:Tim_Burrell]], instruments=engineer)} 
# ${addAlbumPerf(release=va_abigail, person=[[person:Pat_Fish]], instruments=Vocals\, Guitar)}
# ${addAlbumPerf(release=va_abus_21, person=[[person:Dooj_Wilkinson]], instruments=Bass\, Vocals)}
# ${addAlbumPerf(release=va_abus_21, person=[[person:Nick_Burson]], instruments=Drums)}
# ${addAlbumPerf(release=va_abus_21, person=[[person:Pat_Fish]], instruments=Guitar\, Vocals)}
# ${addAlbumPerf(release=va_abus_21, person=[[person:Peter_Crouch]], instruments=Guitar)}
# ${addAlbumPerf(release=va_abus_21, person=[[person:Richard_Formby]], instruments=Guitar)}
# ${addAlbumPerf(release=va_abus_21, person=[[person:Richard_Formby]], instruments=Producer)}
# ${addAlbumPerf(release=va_canyoutalktothedude_1, person=[[person:Pat_Fish]], instruments=Vocals)}
# ${addAlbumPerf(release=va_canyoutalktothedude_2, person=[[person:Pat_Fish]], instruments=Vocals)}
# ${addAlbumPerf(release=va_nationofsaints, person=[[person:Pat_Fish]], instruments=Vocals)}
# ${addAlbumPerf(release=va_shadow, person=[[person:Alice_Thompson]], instruments=Organ)}
# ${addAlbumPerf(release=va_shadow, person=[[person:Pat_Fish]])}
# ${addAlbumPerf(release=va_shadow, person=[[person:Pat_Fish]], instruments=Rhythm Guitar\, Vocals)}
# ${addAlbumPerf(release=va_spark, person=[[person:Alice_Thompson]], instruments=Vocals)}
# ${addAlbumPerf(release=va_spark, person=[[person:Lionel_Brando]], instruments=producer)}
# ${addAlbumPerf(release=va_spark, person=[[person:Mike_Novakovic]], instruments=engineer)}
# ${addAlbumPerf(release=va_spark, person=[[person:Pat_Fish]], instruments=Rhythm Guitar\, Vocals\, producer)}
# ${addAlbumPerf(release=violent, person=[[person:Alex_Green]], instruments=Tenor and alto saxophone)}
# ${addAlbumPerf(release=violent, person=[[person:Alex_Lee]], instruments=Guitars, song="She's A Yo-Yo\, She's On Drugs\, Sister Death\, Girls Say Yes\, Our Friends The Filth\, Shirley Maclaine")}
# ${addAlbumPerf(release=violent, person=[[person:Dave_Morgan]], instruments=Drums, song="Get It Wrong\, Chickentown")}
# ${addAlbumPerf(release=violent, person=[[person:David_Whittemore]], instruments=photography)}
# ${addAlbumPerf(release=violent, person=[[person:Dooj_Wilkinson]], instruments=Bass guitar\, voice, song="Sweetwater\, Whaddya?\, Ghosts")}
# ${addAlbumPerf(release=violent, person=[[person:Greenwood_Goulding]], instruments=Bass guitar, song="Get It Wrong\, Chickentown")}
# ${addAlbumPerf(release=violent, person=[[person:Iain_O'Higgins]], instruments=producer, song="Get It Wrong\, Chickentown")}
# ${addAlbumPerf(release=violent, person=[[person:Joe_Foster]], instruments=Bass guitar, song="She's A Yo-Yo\, Girls Say Yes\, Our Friends The Filth\, Shirley Maclaine")}
# ${addAlbumPerf(release=violent, person=[[person:John_A._Rivers]], instruments=producer, song="Bicycle Kid")}
# ${addAlbumPerf(release=violent, person=[[person:Kizzy_O'Callaghan]], instruments=Guitars\, Voice, song="Bicycle Kid\, Get It Wrong\, Chickentown")}
# ${addAlbumPerf(release=violent, person=[[person:Laurence_O'Keefe]], instruments=Bass guitar\, voice)}
# ${addAlbumPerf(release=violent, person=[[person:Martin_Stebbing]], instruments=producer, song="Mr. Odd\, She's On Drugs\, Sister Death\, Pineapple Tuesday\, Girl-Go")}
# ${addAlbumPerf(release=violent, person=[[person:Nick_Burson]], instruments=Drums, song="Sweetwater\, Whaddya?\, Ghosts")}
# ${addAlbumPerf(release=violent, person=[[person:Owen_Jones]], instruments=Organ\, percussion\, voice, song="She's A Yo-Yo\, Sister Death\, Girls Say Yes\, Shirley Maclaine")}
# ${addAlbumPerf(release=violent, person=[[person:Pat_Fish]], instruments=Guitars\, keyboards\, percussion\, voice)}
# ${addAlbumPerf(release=violent, person=[[person:Pat_Fish]], instruments=producer, song="She's A Yo-Yo\, Girls Say Yes\, Our Friends The Filth\, Shirley Maclaine")}
# ${addAlbumPerf(release=violent, person=[[person:Paul_Mulreany]], instruments=Drums\, percussion\, guitar\, voice)}
# ${addAlbumPerf(release=violent, person=[[person:Peter_Crouch]], instruments=Guitars, song="Girls Say Yes\, Our Friends The Filth\, Sweetwater\, Whaddya?\, Ghosts")}
# ${addAlbumPerf(release=violent, person=[[person:Richard_Formby]], instruments=Guitars, song="She's A Yo-Yo\, Mr. Odd\, Ghosts\, Shirley Maclaine\, Girl-Go")}
# ${addAlbumPerf(release=violent, person=[[person:Richard_Formby]], instruments=producer, song="Sweetwater\, Whaddya?\, Ghosts")}
# ${addAlbumPerf(release=violent, person=[[person:Sumishta_Brahm]], instruments=Voice, song="Girls Say Yes\, Our Friends The Filth")}
# ${addAlbumPerf(release=violent, person=[[person:Tim_Burrell]], instruments=Piano, song="Girls Say Yes")}
# ${addAlbumPerf(release=welove, person=[[person:Luke_Hayes]], instruments=photo)}
# ${addAlbumPerf(release=welove, person=[[person:Steve_Proctor]], instruments=producer)}
