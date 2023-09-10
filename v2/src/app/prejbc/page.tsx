import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const projects = [
	{ uri: '/prejbc/institution', text: 'The Institution' },
	{ uri: '/prejbc/nightshift', text: 'Nightshift' },
	{ uri: '/prejbc/sonc_tonix', text: 'Sonic Tonix' },
	{ uri: '/prejbc/the_tonix', text: 'The Tonix' },
];

const Missing = () => 
<>
	<Header section="prejbc" />
		{projects.map(MakeSimpleURI)}
	<Footer />
</>

export default Missing;
/*
# Jonathan Stephenson - https://www.youtube.com/channel/UCKfznmFizRjptR0VAw5Edgw
#
#	https://www.discogs.com/release/5338218-The-Institution-Jane-And-Jon
#	7"er:
#	A. https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_JaneAndJon.mp3
#	B. https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_Stephanie.mp3
#	Label:	Industrial Accident – SGS-112
#	Format:	
#	Vinyl, 7", 45 RPM, White Label
#	Country:	UK
#	Released:	1979
#	Genre:	Rock, Reggae
#	Style:	Post-Punk, Dub
#	
#	Credits
#	Bass – Rolo (3)
#	Drums – Rob Wilford
#	Guitar – Max Eider
#	Vocals, Saxophone – Pat Fish
#	
#	Issued on a hand-stamped white label in a plain white sleeve.
#	
#	Other original members included Johnathan Stephenson on Synthesizers and John Duvall on Drums.
#	Both left before the record was cut.
#
#	youtube:
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_JonathanStephenson_InnocentsAndEnglishmen.mp3
#	https://www.youtube.com/watch?v=PdvFEe55_i0
#	Nov 4, 2021  Probably our masterpiece!  Words of course, Patrick, sax Patrick, and I think the music was a joint effort.
#
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_JonathanStephenson_JaneAndJon.mp3
#	https://www.youtube.com/watch?v=omFadRK4O4Q
#	Oct 14, 2021  The Institution.  About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall. This track by Pete.
#
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_JonathanStephenson_JeremyAiroplane.mp3
#	https://www.youtube.com/watch?v=xoDh_HYROWs
#	Oct 14, 2021  The Institution. About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall. This track by Rolo.
#
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_JonathanStephenson_LoveAndARecordContract.mp3
#	https://www.youtube.com/watch?v=CHwt3C4MkDQ
#	Oct 14, 2021  The Institution. About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall.  This track by Rolo
#
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_JonathanStephenson_Stephanie.mp3
#	https://www.youtube.com/watch?v=umKEN-VcAsI
#	Oct 14, 2021  The Institution. About 1978. About 1978. Pat Fish, Rolo McGinty, Pete Millson, Jonathan Stephenson, John Duvall.   This track:  Pat
#
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_JonathanStephenson_Vampire.mp3
#
#	internet:
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/Institution/Institution_Unknown_InnocentsAndEnglishman.mp3
	${mkSimpleURI(text=Sonic Tonix)}
#	https://www.discogs.com/release/2078217-Sonic-Tonix-Dont-Go-Away-Telepathy
#	Label:	Industrial Accident –  SGS-114
#	Format:	
#	Vinyl, 7", Single, Test Pressing
#	Country:	UK
#	Released:	1980
#	Genre:	Rock
#	Style:	Power Pop, New Wave
#	A		Don't Go Away
#	Vocals – John Silver (4)
#	B		Telepathy
#	Vocals – Dave Goldie
#	Bass, Vocals – John Silver (4)
#	Drums, Vocals – Owen Jones
#	Guitar, Vocals – Dave Goldie, Simon Mawby
#	Photography By – Crispin Plaskitt
#	Producer – Fish*, Tonix*
#	Recorded at DUFFY'S.
#	This was an Oxford-based outfit (ft. former members of INSTITUTION) who's sole release comes with rubber-stamped white labels (500 copies made). Members resurfaced in THE JAZZ BUTCHER and THE WOODENTOPS.
#
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/SonicTonix/SonicTonix_DontGoAway.mp3
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/SonicTonix/SonicTonix_Telepathy.mp3

	${mkSimpleURI(text=The Tonix)}
#	https://www.discogs.com/release/2270038-The-Tonix-Strangers
#	Label:	109 Product – STEG 002
#	Format:	
#	Vinyl, 7"
#	Country:	UK
#	Released:	1981
#	Genre:	Rock
#	Style:	New Wave
#	A		Strangers
#	B		Talk To Me
#	Recorded At – Foel Studio
#	Phonographic Copyright ℗ – Cherry Red Music Ltd.
#	Pressed By – SNA
#	Cover [Design] – Crispin Plaskitt
#	Guitar, Backing Vocals – Max Eider
#	Lacquer Cut By – Porky (5)
#	Lead Vocals, Saxophone – Pat Fish
#	Producer – Dave Anderson (3)
#	Written-By, Recorded By, Producer – The Tonix
#	Matrix / Runout (Side A runout etched): STEG 002 A1 SNA A PORKY PRIME CUT.
#	Matrix / Runout (Side B runout etched): STEG 002 B1 SNA WELSHPOOL ... WOW HELLO K.B.
#
#	https://s3.amazonaws.com/assets.jazzbutcher.com/projects/TheTonix/TheTonix_TalkToMe.mp3
*/
