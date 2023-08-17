import Link from 'next/link';
import { linkInternal, linkExternal } from './macros';

const linkSearch = ({ name, text, act }:
{
	name: string;
	text?: string;
	act?: 'yes' | 'no';
}) =>
<>
	{(() => {
		if (act) return <Link href={`/search?f=act&q=${name}`}>{(text) ? text : name}</Link>
		return <Link href={`/search?f=performer&q=${name}`}>{(text) ? text : name}</Link>
	})()}
</>

const linkPerson = (href: string, name: string) => <span className="person">{linkInternal(href, name)}</span>

export const butch = 'The Butcher';
export const pat = 	linkInternal('https://patfish.com', 'Pat Fish');
export const max = 	linkInternal('/people/max_eider.html', 'Max Eider');
export const solo = pat;
export const duo = 	<>{pat}, {max}</>;
export const steve_beswick = 	linkInternal('/people/steve_beswick.html', 'Steve Beswick');
export const steve_gordon = 	linkInternal('/people/steve_gordon.html', 'Steve Gordon');
export const steve_gordon_gman = 	linkInternal('/people/steve_gordon.html', 'G-Man');
export const garofalo = 	linkInternal('/people/steve_garofalo.html', 'Steve Garofalo');
export const stevenew = 	linkInternal('/people/steve_new.html', 'Steve New');
export const simon = 	linkInternal('/people/simon_taylor.html', 'Simon Taylor');
export const steve = linkInternal('/people/steve_valentine.html', 'Steve Valentine');
export const beirne = linkInternal('/people/pat_beirne.html', 'Pat Beirne');
export const at = 	linkInternal('/people/alice_thompson.html', 'Alice Thompson');
export const dj = 	linkInternal('/people/david_j.html', 'David J.');
export const rolo = linkInternal('/people/rolo_mcginty.html', 'Rolo McGinty');
export const hask = linkInternal('/people/kevin_haskins.html', 'Kevin Haskins');
export const felix = linkInternal('/people/felix_ray.html', 'Felix Ray');
export const owen = linkInternal('/people/owen_jones.html', 'Owen Jones');
export const wolfi = linkInternal('/people/wolfgang_tschegg.html', 'Wolfgang Tschegg');
export const green = linkInternal('/people/alex_green.html', 'Alex Green');
export const paul = linkInternal('/people/paul_mulreany.html', 'Paul Mulreany');
export const larry = linkInternal('/people/laurence_okeefe.html', 'Laurence O&apos;Keefe');
export const kizzy = linkInternal('/people/kizzy_ocallaghan.html', 'Kizzy O&apos;Callaghan');
export const richard = linkInternal('/people/richard_formby.html', 'Richard Formby');
export const pete = linkInternal('/people/peter_crouch.html', 'Peter Crouch');
export const dooj = linkInternal('/people/dooj_wilkinson.html', 'Dooj Wilkinson');
export const nick = linkInternal('/people/nick_burson.html', 'Nick Burson');
export const lix = 	linkInternal('/people/alex_lee.html', 'Alex Lee');
export const jules = linkInternal('/people/julian_poole.html', 'Julian Poole');
export const sonic = linkInternal('/people/sonic_boom.html', 'Sonic Boom');
export const astor = linkInternal('/people/peter_astor.html', 'Peter Astor');
export const rivers = linkInternal('/people/john_rivers.html', 'John A. Rivers');
export const barker = linkInternal('/people/david_barker.html', 'David E. Barker');
export const rev = 	linkInternal('/people/martin_stebbing.html', 'Martin Stebbing (Rev. Botus Whiteblood Fleming)');
export const iain = linkInternal('/people/iain_ohiggins.html', 'Iain O&apos;Higgins');
export const hend = linkInternal('/people/dave_henderson.html', 'Dave Henderson');
export const gab = 	linkInternal('/people/gabriel_turner.html', 'Gabriel Turner');
export const damm = linkInternal('/people/von_dammerung.html', 'Von D&auml;mmerung');
export const karel = linkInternal('/people/von_dammerung.html', 'Karel Von D&auml;mmerung');
export const joea = linkInternal('/people/joe_allen.html', 'Joe Allen');
export const rodney = linkInternal('/people/rodney_allen.html', 'Rodney Allen');
export const colin = linkInternal('/people/colin.html', 'Colin Harris');
export const indge = linkInternal('/people/alastair_indge.html', 'Alastair Indge');
export const curt = linkInternal('/people/curtis_johnson.html', 'Curtis E. Johnson');
export const curt_eman = linkInternal('/people/curtis_johnson.html', 'E-Man');
export const sumo_botty = linkInternal('/people/ian_botterill.html', 'Mister B');
export const botty = linkInternal('/people/ian_botterill.html', 'Ian Botterill');
export const botty_bman = linkInternal('/people/ian_botterill.html', 'B-Man');
export const mitch = linkInternal('/people/mitch_jenkins.html', 'Mitch Jenkins');
export const sumishta = linkInternal('/people/sumishta_brahm.html', 'Sumishta Brahm');
export const del = 	linkInternal('/people/david_whittemore.html', 'David Whittemore');
export const lb = 	linkInternal('/people/david_barker.html', 'Lionel Brando');
export const ll = 	linkInternal('/people/marc_hadley.html', 'Louis Leroi');

export const john_silver = 'John Silver';
export const simon_mawby = 'Simon Mawby';
export const undertakers = <b>The Undertakers</b>;

export const mike_novakovic = 	linkSearch({ name: 'Mike Novakovic' });
export const is = 	linkSearch({ name: 'Ian Sturgess' });
export const hook = linkSearch({ name: 'Paul Hookham' });
export const sm = 	linkSearch({ name: 'Steve Musgrove' });
export const mick = linkSearch({ name: 'Mick Packwood' });
export const blair = linkSearch({ name: 'Blair MacDonald' });
export const erol = linkSearch({ name: 'Erol Suleyman' });
export const jody = linkSearch({ name: 'Jody Palmer' });
export const lohan = linkSearch({ name: 'Richard Lohan' });
export const gerard = linkSearch({ name: 'Gerard Langley' });
export const gould = linkSearch({ name: 'Greenwood Goulding' });
export const burrell = linkSearch({ name: 'Tim Burrell' });
export const deirdre = linkSearch({ name: 'Deirdre O&apos;Donoghue' });
export const brent = linkSearch({ name: 'Brent Bambury' });
export const kevin = linkSearch({ name: 'Kevin Komoda' });
export const max_read = 	linkSearch({ name: 'Max Read' });
export const anita_allbright = 	linkSearch({ name: 'Anita Allbright' });
export const felce = linkSearch({ name: 'Dave Felce' });
export const joe = 	linkSearch({ name: 'Joe Foster' });
export const joe_woolley = linkSearch({ name: 'Joe Woolley', act: 'yes' });

export const wilson = linkExternal('https://wilsondub.com', 'Wilson');
export const mercer = linkExternal('https://www.mickmercer.com', 'Mick Mercer');

export const kathie = linkInternal('/people/kathie_mcginty.html', 'Kathie McGinty');
export const sumo_kathie = linkInternal('/people/kathie_mcginty.html', 'Kathie M');
export const morgan = linkInternal('/people/dave_morgan.html', 'Dave Morgan');
export const mark_refoy = 	linkInternal('/people/mark_refoy.html', 'Mark Refoy');
export const sumo_russ = linkInternal('/people/russell_cooper.html', 'Agent Russell Cooper');
export const russ = linkInternal('/people/russell_cooper.html', 'Russell Cooper');
export const russ_agent = linkInternal('/people/russell_cooper.html', 'Agent Wilson');
export const tim_harries = linkInternal('/people/tim_harries.html', 'Tim Harries');
export const joel_harries = linkInternal('/people/joel_harries.html', 'Joel Harries');
export const jonny_mattock = linkInternal('/people/jonny_mattock.html', 'Jonny Mattock');
export const sumo_kathy = linkInternal('/people/kathy_schaer.html', 'Special K');
export const kathy = linkInternal('/people/kathy_schaer.html', 'Kathy Schaer');
export const kathy_misery = linkInternal('/people/kathy_schaer.html', 'Misery Wilson');
export const sumo_pat = 	linkInternal('https://patfish.com', 'Headstone');
export const pat_headstone = linkInternal('https://patfish.com', 'Wilson Headstone');


//
//       conspirators
//
//define	butch	The Butcher
//define	pat		${linkPerson(href=https://patfish.com, name=Pat Fish)}
//define	solo	${pat}
//define	duo		${pat}, ${max}
//define	steve_beswick		${linkPerson(href=${jbc_people}/steve_beswick.html, name=Steve Beswick)}
//define	steve_gordon		${linkPerson(href=${jbc_people}/steve_gordon.html, name=Steve Gordon)}
//define	steve_gordon_gman		${linkPerson(href=${jbc_people}/steve_gordon.html, name=G-Man)}
//define	garofalo		${linkPerson(href=${jbc_people}/steve_garofalo.html, name=Steve Garofalo)}
//define	stevenew		${linkPerson(href=${jbc_people}/steve_new.html, name=Steve New)}
//define	simon		${linkPerson(href=${jbc_people}/simon_taylor.html, name=Simon Taylor)}
//define	max		${linkPerson(href=${jbc_people}/max_eider.html, name=Max Eider)}
//define	steve	${linkPerson(href=${jbc_people}/steve_valentine.html, name=Steve Valentine)}
//define	beirne	${linkPerson(href=${jbc_people}/pat_beirne.html, name=Pat Beirne)}
//define	at		${linkPerson(href=${jbc_people}/alice_thompson.html, name=Alice Thompson)}
//define	dj		${linkPerson(href=${jbc_people}/david_j.html, name=David J.)}
//define	rolo	${linkPerson(href=${jbc_people}/rolo_mcginty.html, name=Rolo McGinty)}
//define	hask	${linkPerson(href=${jbc_people}/kevin_haskins.html, name=Kevin Haskins)}
//define	felix	${linkPerson(href=${jbc_people}/felix_ray.html, name=Felix Ray)}
//define	owen	${linkPerson(href=${jbc_people}/owen_jones.html, name=Owen Jones)}
//define	wolfi	${linkPerson(href=${jbc_people}/wolfgang_tschegg.html, name=Wolfgang Tschegg)}
//define	green	${linkPerson(href=${jbc_people}/alex_green.html, name=Alex Green)}
//define	paul	${linkPerson(href=${jbc_people}/paul_mulreany.html, name=Paul Mulreany)}
//define	larry	${linkPerson(href=${jbc_people}/laurence_okeefe.html, name=Laurence O'Keefe)}
//define	kizzy	${linkPerson(href=${jbc_people}/kizzy_ocallaghan.html, name=Kizzy O'Callaghan)}
//define	richard	${linkPerson(href=${jbc_people}/richard_formby.html, name=Richard Formby)}
//define	pete	${linkPerson(href=${jbc_people}/peter_crouch.html, name=Peter Crouch)}
//define	dooj	${linkPerson(href=${jbc_people}/dooj_wilkinson.html, name=Dooj Wilkinson)}
//define	nick	${linkPerson(href=${jbc_people}/nick_burson.html, name=Nick Burson)}
//define	lix		${linkPerson(href=${jbc_people}/alex_lee.html, name=Alex Lee)}
//define	jules	${linkPerson(href=${jbc_people}/julian_poole.html, name=Julian Poole)}
//define	sonic	${linkPerson(href=${jbc_people}/sonic_boom.html, name=Sonic Boom)}
//define	astor	${linkPerson(href=${jbc_people}/peter_astor.html, name=Peter Astor)}
//define	rivers	${linkPerson(href=${jbc_people}/john_rivers.html, name=John A. Rivers)}
//define	barker	${linkPerson(href=${jbc_people}/david_barker.html, name=David E. Barker)}
//define	rev		${linkPerson(href=${jbc_people}/martin_stebbing.html, name=Martin Stebbing (Rev. Botus Whiteblood Fleming))}
//define	iain	${linkPerson(href=${jbc_people}/iain_ohiggins.html, name=Iain O'Higgins)}
//define	hend	${linkPerson(href=${jbc_people}/dave_henderson.html, name=Dave Henderson)}
//define	gab		${linkPerson(href=${jbc_people}/gabriel_turner.html, name=Gabriel Turner)}
//define	damm	${linkPerson(href=${jbc_people}/von_dammerung.html, name=Von D&auml;mmerung)}
//define	karel	${linkPerson(href=${jbc_people}/von_dammerung.html, name=Karel Von D&auml;mmerung)}
//define	joea	${linkPerson(href=${jbc_people}/joe_allen.html, name=Joe Allen)}
//define	rodney	${linkPerson(href=${jbc_people}/rodney_allen.html, name=Rodney Allen)}
//define	colin	${linkPerson(href=${jbc_people}/colin.html, name=Colin Harris)}
//define	indge	${linkPerson(href=${jbc_people}/alastair_indge.html, name=Alastair Indge)}
//define	curt	${linkPerson(href=${jbc_people}/curtis_johnson.html, name=Curtis E. Johnson)}
//define	curt_eman	${linkPerson(href=${jbc_people}/curtis_johnson.html, name=E-Man)}
//define	sumo_botty	${linkPerson(href=${jbc_people}/ian_botterill.html, name=Mister B)}
//define	botty	${linkPerson(href=${jbc_people}/ian_botterill.html, name=Ian Botterill)}
//define	botty_bman	${linkPerson(href=${jbc_people}/ian_botterill.html, name=B-Man)}
//define	mitch	${linkPerson(href=${jbc_people}/mitch_jenkins.html, name=Mitch Jenkins)}
//define	sumishta	${linkPerson(href=${jbc_people}/sumishta_brahm.html, name=Sumishta Brahm)}
//define	del		${linkPerson(href=${jbc_people}/david_whittemore.html, name=David Whittemore)}
//define	mike_novakovic		${linkSearch(query=Mike Novakovic)}
//define	lb		${linkPerson(href=${jbc_people}/david_barker.html, name=Lionel Brando)}
//define	ll		${linkPerson(href=${jbc_people}/marc_hadley.html, name=Louis Leroi)}
//define	is		${linkSearch(query=Ian Sturgess)}
//define	hook	${linkSearch(query=Paul Hookham)}
//define	john_silver	John Silver
//define	simon_mawby	Simon Mawby
//define	sm		${linkSearch(query=Steve Musgrove)}
//define	mick	${linkSearch(query=Mick Packwood)}
//define	blair	${linkSearch(query=Blair MacDonald)}
//define	erol	${linkSearch(query=Erol Suleyman)}
//define	jody	${linkSearch(query=Jody Palmer)}
//define	lohan	${linkSearch(query=Richard Lohan)}
//define	gerard	${linkSearch(query=Gerard Langley)}
//define	gould	${linkSearch(query=Greenwood Goulding)}
//define	morgan	${linkPerson(href=${jbc_people}/dave_morgan.html, name=Dave Morgan)}
//define	burrell	${linkSearch(query=Tim Burrell)}
//define	deirdre	${linkSearch(query=Deirdre O'Donoghue)}
//define	brent	${linkSearch(query=Brent Bambury)}
//define	kevin	${linkSearch(query=Kevin Komoda)}
//define	max_read		${linkSearch(query=Max Read)}
//define	anita_allbright		${linkSearch(query=Anita Allbright)}
//define	mark_refoy		${linkPerson(href=${jbc_people}/mark_refoy.html, name=Mark Refoy)}
//define	sumo_russ	${linkPerson(href=${jbc_people}/russell_cooper.html, name=Agent Russell Cooper)}
//define	russ	${linkPerson(href=${jbc_people}/russell_cooper.html, name=Russell Cooper)}
//define	russ_agent	${linkPerson(href=${jbc_people}/russell_cooper.html, name=Agent Wilson)}
//define	tim_harries	${linkPerson(href=${jbc_people}/tim_harries.html, name=Tim Harries)}
//define	joel_harries	${linkPerson(href=${jbc_people}/joel_harries.html, name=Joel Harries)}
//define	jonny_mattock	${linkPerson(href=${jbc_people}/jonny_mattock.html, name=Jonny Mattock)}
//define	sumo_kathy	${linkPerson(href=${jbc_people}/kathy_schaer.html, name=Special K)}
//define	kathy	${linkPerson(href=${jbc_people}/kathy_schaer.html, name=Kathy Schaer)}
//define	kathy_misery	${linkPerson(href=${jbc_people}/kathy_schaer.html, name=Misery Wilson)}
//define	sumo_pat		${linkPerson(href=https://patfish.com, name=Headstone)}
//define	pat_headstone	${linkPerson(href=https://patfish.com, name=Wilson Headstone)}
//define	felce	${linkSearch(query=Dave Felce)}
//define	mercer	${linkExternal(https://www.mickmercer.com, Mick Mercer)}
//define	joe_woolley	${linkSearch(query=Joe Woolley, act=yes)}
//define	kathie	${linkPerson(href=${jbc_people}/kathie_mcginty.html, name=Kathie McGinty)}
//define	sumo_kathie	${linkPerson(href=${jbc_people}/kathie_mcginty.html, name=Kathie M)}
//define	joe		${linkSearch(query=Joe Foster)}
//define	wilson	${linkExternal(https://wilsondub.com, Wilson)}
//define	undertakers	<b>The Undertakers</b>

//
//	producers/engineers/soundmen/other
//	TODO: all these need to be linkSearch(.., act=yes)
//
//define	proctor		${linkSearch(query=Steve Proctor)}
//define	howy		${linkExternal(http://www.studiowizard.com/ht.html, Howard Turner)}
//define	momus		${linkExternal(http://www.demon.co.uk/momus/, Momus)}
//define	4AD			${linkExternal(http://www.evo.org/eyesore.html, 4AD)}
//define	coonce		Cole Coonce
//define	vu			${linkExternal(http://www.rocknroll.net/loureed/, Velvet Underground)}
//define	richman		${linkExternal(http://www.base.com/jonathan/jonathan.html, Jonathan Richman)}
//define	dronesclub		${linkExternal(https://thedronesclub.co.uk/, The Drones Club)}
//define	space		${linkExternal(http://www.spiritualized.com/, Spacemen 3)}
//define	aero		${linkSearch(query=The Blue Aeroplanes, act=yes)}
//define	haus		${linkExternal(http://www.partium.com/~andrewb/bauhaus/, Bauhaus)}
//define	tractors	${linkExternal(http://www.geocities.com/Nashville/Stage/8818/favorite.htm, Stranger Tractors)}
//define	poi			${linkExternal(http://www.poidogpondering.com/, Poi Dog Pondering)}
//define	davidj		${linkExternal(http://www.davidjonline.com, David J)}
//define	bwatch		${linkExternal(http://www.theblackwatchmusic.com, The Black Watch)}
//define	purelove	${linkExternal(http://ourworld.compuserve.com/homepages/RobertFliegel/purelove.htm, Purelove)}
export const eg	= <a href="https://adjective.com/htdb/eg">The Black Eg</a>
//define	vergift		<a href="${v_root}">Vergiftung</a>
//define	cave		${linkSearch(query=Nick Cave, act=yes)}
//define	cvb			Camper Van Beethoven
//define	mbv			My Bloody Valentine
//define	tvamp		${linkSearch(query=Transvision Vamp, act=yes)}
//define	swynn		${linkSearch(query=Steve Wynn, act=yes)}
//define	bangles		${linkSearch(query=The Bangles, act=yes)}
//define	cale		${linkExternal(http://john-cale.com/, John Cale)}
//define	braind		${linkSearch(query=Braindead Soundmachine, act=yes)}
//define	eno			${linkSearch(query=Brian Eno, act=yes)}
//define	weather		${linkSearch(query=Weather Prophets, act=yes)}
//define	hitch		${linkSearch(query=Robyn Hitchcock, act=yes)}
//define	perfect		${linkSearch(query=The Perfect Disaster, act=yes)}
//define	spect		${linkSearch(query=Spectrum, act=yes)}
//define	belly		${linkSearch(query=Belly, act=yes)}
//define	tops		${linkSearch(query=The Woodentops, act=yes)}
//define	rocket		${linkSearch(query=Love And Rockets, act=yes)}
//define	scream		${linkSearch(query=Primal Scream, act=yes)}
//define	strange		${linkSearch(query=Strangelove, act=yes)}
//define	levit		${linkSearch(query=Levitation, act=yes)}
//define	kmfdm		${linkSearch(query=KMFDM, act=yes)}
//define	mildew		${linkSearch(query=Downey Mildew, act=yes)}
//define	star		${linkSearch(query=Big Star, act=yes)}
//
//	artwork
//
//define	lucien		${linkSearch(query=Lucien Borderline)}
//define	bd			${linkSearch(query=Ben Davis)}
//define	novak		${linkSearch(query=Alex Novak)}
//define	loony		${linkSearch(query=Pascal Legras)}
//
//	jbc-list people
//
//define	killer		${linkSearch(query=Joe Beaulieu)}
//define	nancy		${linkSearch(query=Nancy Everson)}
//define	woj			${linkSearch(query=The Woj)}
//define	matt		Matt Cockerill
//define	rob			${linkSearch(query=Robert Jacob)}
//define	ed			${linkSearch(query=Ed Carter)}
//define	coop		${linkSearch(query=John Cooper)}
//define	frang		${linkSearch(query=Robert Frangooles)}
//define	syd			${linkExternal(http://www.sydmeats.co.uk, Sydney Meats)}
//define	davison		${linkSearch(query=John Michael Davison)}
//define	camf		${linkSearch(query=Chris Camfield)}
//define	jdavies		${linkSearch(query=Jim Davies)}
//define	knight		${linkSearch(query=Knight Berman)}
//define	jimmy		${linkExternal(https://twitter.com/RealJamesDuval, James Duval)}

//
//	useful defines
//
//define	instr	<center><b>This song is an instrumental</b></center>
//
//	Bath Of Bacon
//
//define	bacon		${linkAlbum(href=${jbc_albums}/bath.html, title=Bath Of Bacon)}
//define	gloop		${linkSong(title=Gloop Jiving, href=${jbc_lyrics}/gloop_jiving.html)}
//define	jbtheme		${linkSong(href=${jbc_lyrics}/jb_theme.html, title=Jazz Butcher Theme)}
//define	party		${linkSong(title=Partytime, href=${jbc_lyrics}/partytime.html)}
//define	foot		${linkSong(href=${jbc_lyrics}/bigfoot.html, title=Bigfoot Motel)}
//define	engine		${linkSong(href=${jbc_lyrics}/sex_engine.html, title=Sex Engine)}
//define	china		${linkSong(href=${jbc_lyrics}/chinatown.html, title=Chinatown)}
//define	zombie		${linkSong(href=${jbc_lyrics}/zombie_love.html, title=Zombie Love)}
//define	flan		${linkSong(href=${jbc_lyrics}/grey_flannelette.html, title=Grey Flannelette)}
//define	mer			${linkSong(href=${jbc_lyrics}/la_mer.html, title=La Mer)}
//define	poison		${linkSong(href=${jbc_lyrics}/poisoned_by_food.html, title=Poisoned By Food)}
//define	kitten		${linkSong(href=${jbc_lyrics}/love_kittens.html, title=Love Kittens)}
//define	bath		${linkSong(href=${jbc_lyrics}/bath.html, title=Bath Of Bacon)}
//define	gold		${linkSong(title=Girls Who Keep Goldfish, href=${jbc_lyrics}/goldfish.html)}
//
//
//	wilson
//
//define wilson_play_it_all_night_long  ${linkSong(title=Play It All Night Long, author=Warren Zevon)}
//define	wilson_quality_people		${linkSong(href=${jbc_lyrics}/wilson_quality_people.html, title=Quality People, author=Wilson)}
//define	wilson_buffalo_sniper		${linkSong(href=${jbc_lyrics}/wilson_buffalo_sniper.html, title=Buffalo Sniper, author=Wilson)}
//define	wilson_police_chief		${linkSong(href=${jbc_lyrics}/wilson_police_chief.html, title=Police Chief, author=Wilson)}
//define	wilson_istanbul_connection		${linkSong(href=${jbc_lyrics}/wilson_istanbul_connection.html, title=Istanbul Connection, author=Wilson)}
//define	wilson_hippy_shit		${linkSong(href=${jbc_lyrics}/wilson_hippy_shit.html, title=Hippy Shit, author=Wilson)}
//define	wilson_burn_hollywood_burn		${linkSong(href=${jbc_lyrics}/wilson_burn_hollywood_burn.html, title=Burn\, Hollywood\, Burn, author=Wilson)}
//define	wilson_dark_agenda		${linkSong(href=${jbc_lyrics}/wilson_dark_agenda.html, title=Dark Agenda, author=Wilson)}
//define	wilson_battle_time		${linkSong(title=Battle Time Now, author=Wilson, href=${jbc_lyrics}/wilson_battle_time_now.html)}
//define	wilson_critters		${linkSong(title=Critters, author=Wilson, href=${jbc_lyrics}/wilson_critters.html)}
//define	wilson_filter_kings		${linkSong(title=Filter Kings, author=Wilson, href=${jbc_lyrics}/wilson_filter_kings.html)}
//define	wilson_no_winners		${linkSong(title=No Winners, author=Wilson, href=${jbc_lyrics}/wilson_no_winners.html)}
//define	wilson_saturday_night		${linkSong(title=Every Saturday Night, author=Wilson, href=${jbc_lyrics}/wilson_every_saturday_bnight.html)}
//define	wilson_secret_government		${linkSong(title=Secret Government, author=Wilson, href=${jbc_lyrics}/wilson_secret_government.html)}
//define	wilson_two_dragons		${linkSong(title=Two Dragons, author=Wilson, href=${jbc_lyrics}/wilson_two_dragons.html)}
//
//	A Scandal In Bohemia
//
//define	scandal		${linkAlbum(href=${jbc_albums}/scandal.html, title=A Scandal In Bohemia)}
//define	smiff		${linkSong(title=Southern Mark Smith, href=${jbc_lyrics}/smith.html)}
//define	men			${linkSong(title=Real Men, href=${jbc_lyrics}/real_men.html)}
//define	hour		${linkSong(href=${jbc_lyrics}/soul_happy_hour.html, title=Soul Happy Hour)}
//define	meat		${linkSong(href=${jbc_lyrics}/i_need_meat.html, title=I Need Meat)}
//define	betty		${linkSong(href=${jbc_lyrics}/betty_page.html, title=Just Like Betty Page)}
//define	marn		${linkSong(title=Marnie, href=${jbc_lyrics}/marnie.html)}
//define	wheel		${linkSong(title=Caroline Wheeler's Birthday Present, href=${jbc_lyrics}/caroline_wheeler.html)}
//define	mind		${linkSong(href=${jbc_lyrics}/mind_like_a_playgroup.html, title=Mind Like A Playgroup)}
//define	gf			${linkSong(href=${jbc_lyrics}/girlfriend.html, title=Girlfriend)}
//define	desert		${linkSong(href=${jbc_lyrics}/my_desert.html, title=My Desert)}
//
//	Sex And Travel
//
//define	sex			${linkAlbum(href=${jbc_albums}/sex.html, title=Sex And Travel)}
//define	sat			${linkSong(href=${jbc_lyrics}/big_saturday.html, title=Big Saturday)}
//define	holiday		${linkSong(href=${jbc_lyrics}/holiday.html, title=Holiday)}
//define	pets		${linkSong(href=${jbc_lyrics}/red_pets.html, title=Red Pets)}
//define	rumour		${linkSong(href=${jbc_lyrics}/rumour.html, title=Only A Rumour)}
//define	reagan		${linkSong(href=${jbc_lyrics}/president_reagan.html, title=President Reagan's Birthday Present)}
//define	boy			${linkSong(href=${jbc_lyrics}/whats_the_matter_boy.html, title=What's The Matter\, Boy?)}
//define	walk		${linkSong(href=${jbc_lyrics}/walk_with_the_devil.html, title=Walk With The Devil)}
//define	drain		${linkSong(href=${jbc_lyrics}/down_the_drain.html, title=Down The Drain)}
//
//	Conspiracy
//
//define	conspir		${linkAlbum(href=${jbc_albums}/conspiracy.html, title=Conspiracy)}
//define	conspir12	${linkAlbum(href=${jbc_albums}/conspiracy12.html, title=Conspiracy (single))}
//define	lorre		${linkSong(title=Peter Lorre, href=${jbc_lyrics}/peter_lorre.html)}
//define	wind		${linkSong(href=${jbc_lyrics}/big_old_wind.html, title=Big Old Wind)}
//define	consp		${linkSong(href=${jbc_lyrics}/conspiracy.html, title=Conspiracy)}
//define	becky		${linkSong(href=${jbc_lyrics}/rebecca.html, title=Rebecca Wants Her Bike Back)}
//define	vienna		${linkSong(href=${jbc_lyrics}/vienna_song.html, title=Vienna Song)}
//define	groove		${linkSong(href=${jbc_lyrics}/grooving_in_the_bus_lane.html, title=Grooving In The Bus Lane)}
//define	you			${linkSong(href=${jbc_lyrics}/it_has_to_be_you.html, title=It Has To Be You)}
//define	thing		${linkSong(title=Thing, href=${jbc_lyrics}/thing.html)}
//
//	Hamburg
//
//define	hamburg		${linkAlbum(href=${jbc_albums}/hamburg.html, title=Hamburg)}
//define	dentist		${linkSong(href=${jbc_lyrics}/death_dentist.html, title=Death Dentist)}
//define	rain		${linkSong(href=${jbc_lyrics}/rain.html, title=Rain)}
//define	count		${linkSong(href=${jbc_lyrics}/count_dracula.html, title=Jazz Butcher -v- Count Dracula)}
//
//	 Distressed Gentlefolk
//
//define	dist		${linkAlbum(href=${jbc_albums}/distressed.html, title=Distressed Gentlefolk)}
//define	fall		${linkSong(href=${jbc_lyrics}/falling_in_love.html, title=Falling In Love)}
//define	bigbad		${linkSong(href=${jbc_lyrics}/big_bad_thing.html, title=Big Bad Thing)}
//define	kitch		${linkSong(href=${jbc_lyrics}/still_in_the_kitchen.html, title=Still In The Kitchen)}
//define	hung		${linkSong(href=${jbc_lyrics}/hungarian_love_song.html, title=Hungarian Love Song)}
//define	world		${linkSong(href=${jbc_lyrics}/the_new_world.html, title=The New World)}
//define	who			${linkSong(href=${jbc_lyrics}/who_loves_you_now.html, title=Who Loves You Now?)}
//define	domest		${linkSong(href=${jbc_lyrics}/domestic_animal.html, title=Domestic Animal)}
//define	shame		${linkSong(href=${jbc_lyrics}/buffalo_shame.html, title=Buffalo Shame)}
//define	nada		${linkSong(href=${jbc_lyrics}/nothing_special.html, title=Nothing Special)}
//define	angels		${linkSong(href=${jbc_lyrics}/angels.html, title=Angels)}
//define	sa			${linkSong(href=${jbc_lyrics}/south_america.html, title=South America)}
//
//	Spooky
//
//define	brave		${linkAlbum(href=${jbc_albums}/brave.html, title=Brave New Waves Session)}
//define	spook		${linkSingle(href=${jbc_albums}/spooky.html, title=Spooky (EP))}
//define	spook12		${linkSingle(href=${jbc_albums}/spooky12.html, title=Spooky (12"))}
//define	spook7		${linkSingle(href=${jbc_albums}/spooky7.html, title=Spooky (7"))}
//define	spooky		${linkSong(title=Spooky)}
//define	go			${linkSong(href=${jbc_lyrics}/girl_go.html, title=Girl-Go)}
//define	blame		${linkSong(href=${jbc_lyrics}/blame.html, title=Blame)}
//define	sarah		${linkSong(href=${jbc_lyrics}/whitfield.html, title=Whitfield\, Sarah & The Birchfield Road Affair)}
//
//	Fishcotheque
//
//define	fishco		${linkAlbum(href=${jbc_albums}/fishcotheque.html, title=Fishcotheque)}
//define	next		${linkSong(href=${jbc_lyrics}/next_move_sideways.html, title=Next Move Sideways)}
//define	touch		${linkSong(href=${jbc_lyrics}/out_of_touch.html, title=Out Of Touch)}
//define	wrong		${linkSong(href=${jbc_lyrics}/get_it_wrong.html, title=Get It Wrong)}
//define	village		${linkSong(href=${jbc_lyrics}/living_in_a_village.html, title=Living In A Village)}
//define	swell		${linkSong(href=${jbc_lyrics}/swell.html, title=Swell)}
//define	49			${linkSong(href=${jbc_lyrics}/lot_49.html, title=Looking For Lot 49)}
//define	best		${linkSong(href=${jbc_lyrics}/best_way.html, title=The Best Way)}
//define	chick		${linkSong(href=${jbc_lyrics}/chickentown.html, title=Chickentown)}
//define	sue			${linkSong(title=Susie, href=${jbc_lyrics}/susie.html)}
//define	keep		${linkSong(href=${jbc_lyrics}/curtains.html, title=Keeping The Curtains Closed)}
//
//	Big Planet, Scarey Planet
//
//define	planet		${linkAlbum(href=${jbc_albums}/planet.html, title=Big Planet\, Scarey Planet)}
//define	newinv		${linkSingle(href=${jbc_albums}/invention.html, title=New Invention)}
//define	invent		${linkSong(href=${jbc_lyrics}/new_invention.html, title=New Invention)}
//define	lineo		${linkSong(href=${jbc_lyrics}/line_of_death.html, title=Line Of Death)}
//define	hyst		${linkSong(href=${jbc_lyrics}/hysteria.html, title=Hysteria)}
//define	word		${linkSong(href=${jbc_lyrics}/word_i_was_looking_for.html, title=The Word I Was Looking For)}
//define	kid			${linkSong(href=${jbc_lyrics}/bicycle_kid.html, title=Bicycle Kid)}
//define	burg		${linkSong(href=${jbc_lyrics}/burglar_of_love.html, title=Burglar Of Love)}
//define	being		${linkSong(href=${jbc_lyrics}/nightmare_being.html, title=Nightmare Being)}
//define	plague		${linkSong(href=${jbc_lyrics}/bubonic_plague.html, title=Do The Bubonic Plague)}
//define	dream		${linkSong(href=${jbc_lyrics}/bad_dream_lover.html, title=Bad Dream Lover)}
//define	good		${linkSong(href=${jbc_lyrics}/the_good_ones.html, title=The Good Ones)}
//
//	Cult Of The Basement
//
//define	cult		${linkAlbum(href=${jbc_albums}/cult.html, title=Cult Of The Basement)}
//define	baset		${linkSong(href=${jbc_lyrics}/basement_theme.html, title=The Basement)}
//define	drugs		${linkSong(href=${jbc_lyrics}/shes_on_drugs.html, title=She's On Drugs)}
//define	tues		${linkSong(href=${jbc_lyrics}/pineapple_tuesday.html, title=Pineapple Tuesday)}
//define	onion		${linkSong(href=${jbc_lyrics}/the_onion_field.html, title=The Onion Field)}
//define	daycare		${linkSong(href=${jbc_lyrics}/daycare_nation.html, title=Daycare Nation)}
//define	zeppo		${linkSong(href=${jbc_lyrics}/my_zeppelin.html, title=My Zeppelin)}
//define	fert		${linkSong(href=${jbc_lyrics}/fertiliser.html, title=Fertiliser)}
//define	odd			${linkSong(href=${jbc_lyrics}/mr_odd.html, title=Mr. Odd)}
//define	euph		${linkSong(href=${jbc_lyrics}/euphrates.html, title=After The Great Euphrates)}
//define	panic		${linkSong(href=${jbc_lyrics}/panic.html, title=Panic In Room 109)}
//define	bait		${linkSong(href=${jbc_lyrics}/turtlebait.html, title=Turtle Bait)}
//define	sis			${linkSong(href=${jbc_lyrics}/sister_death.html, title=Sister Death)}
//
//	Condition Blue
//
//define	blue		${linkAlbum(href=${jbc_albums}/blue.html, title=Condition Blue)}
//define	girls		${linkSong(href=${jbc_lyrics}/girls_say_yes.html, title=Girls Say Yes)}
//define	filth		${linkSong(href=${jbc_lyrics}/filth.html, title=Our Friends The Filth)}
//define	harlan		${linkSong(href=${jbc_lyrics}/harlan.html, title=Harlan)}
//define	still		${linkSong(href=${jbc_lyrics}/still_and_all.html, title=Still & All)}
//define	monkey		${linkSong(href=${jbc_lyrics}/monkeyface.html, title=Monkeyface)}
//define	yoyo		${linkSingle(href=${jbc_albums}/yo_yo.html, title=She's A Yo-Yo)}
//define	yo			${linkSong(href=${jbc_lyrics}/shes_a_yo_yo.html, title=She's A Yo-Yo)}
//define	honey		${linkSong(href=${jbc_lyrics}/honey.html, title=Honey)}
//define	shirl		${linkSong(href=${jbc_lyrics}/shirley.html, title=Shirley Maclaine)}
//define	rachel		${linkSong(href=${jbc_lyrics}/racheland.html, title=Racheland)}
//
//	Western Family
//
//define	family		${linkAlbum(href=${jbc_albums}/western.html, title=Western Family)}
//define	snowy		${linkSong(href=${jbc_lyrics}/snowy.html, title=Beautiful Snow-White Hair)}
//
//	Waiting For The Love Bus
//
//define	bus			${linkAlbum(href=${jbc_albums}/bus.html, title=Waiting For The Love Bus)}
//define	davis		${linkSong(href=${jbc_lyrics}/rosemary_davis.html, title=Rosemary Davis' World Of Sound)}
//define	bake		${linkSong(href=${jbc_lyrics}/bakersfield.html, title=Bakersfield)}
//define	mall		${linkSong(href=${jbc_lyrics}/kids_in_the_mall.html, title=Kids In The Mall/Kaliningrad)}
//define	whad		${linkSong(href=${jbc_lyrics}/whaddya.html, title=Whaddya?)}
//define	sweet		${linkSong(href=${jbc_lyrics}/sweet_water.html, title=Sweetwater)}
//define	ghost		${linkSong(href=${jbc_lyrics}/ghosts.html, title=Ghosts)}
//define	baltic		${linkSong(href=${jbc_lyrics}/baltic.html, title=Baltic)}
//define	kill		${linkSong(href=${jbc_lyrics}/killed_out.html, title=Killed Out)}
//define	ben			${linkSong(href=${jbc_lyrics}/ben.html, title=Ben)}
//define	penguin		${linkSong(href=${jbc_lyrics}/penguins.html, title=Penguins)}
//define	chang		${linkSong(href=${jbc_lyrics}/president_chang.html, title=President Chang)}
//define	stat		${linkSong(href=${jbc_lyrics}/angel_station.html, title=Angel Station)}
//
//	Draining The Glass
//
//define	drainglass		${linkAlbum(href=${jbc_albums}/drainglass.html, title=Draining The Glass 1982 - 86)}
//define	best_kisser		${linkAlbum(title=The Best Kisser In The World)}
//define	glorious		${linkAlbum(href=${jbc_albums}/glorious.html, title=Glorious And Idiotic)}
//define	glass			<b>Glass Records</b>
//
//	Sumosonic
//
//define	thisissumo		${linkAlbum(title=This Is Sumo, href=${jbc_albums}/sumosonic_this_is_sumo.html)}
//define	sumo_spacemen		${linkSong(title=Come\, Friendly Spacemen, href=${jbc_lyrics}/sumosonic_come_friendly_spacemen.html)}
//define	sumo_earth		${linkSong(title=God's Green Earth, href=${jbc_lyrics}/sumosonic_gods_green_earth.html)}
//define	sumo_fern		${linkSong(title=Fern Schnell Gut, href=${jbc_lyrics}/sumosonic_fern_schnell_gut.html)}
//define	sumo_cats		${linkSong(title=Cat's Life, href=${jbc_lyrics}/sumosonic_cats_life.html)}
//define	sumo_wonderful		${linkSong(title=Everything Is Wonderful, href=${jbc_lyrics}/sumosonic_everything_is_wonderful.html)}
//define	sumo_stupid		${linkSong(title=Stupid, href=${jbc_lyrics}/sumosonic_stupid.html)}
//define	sumo_monsters		${linkSong(title=Destroy All Monsters, href=${jbc_lyrics}/sumosonic_destroy_all_monsters.html)}
//define	sumo_radio		${linkSong(title=Radio Saigon, href=${jbc_lyrics}/sumosonic_radio_saigon.html)}
//define	sumo_business		${linkSong(title=Business And Work, href=${jbc_lyrics}/sumosonic_business_and_work.html)}
//define	sumo_monks		${linkSong(title=Monks Of Kung Fu, href=${jbc_lyrics}/sumosonic_monks_of_kung_fu.html)}
//define	sumo_sputnik		${linkSong(title=Sputnik, href=${jbc_lyrics}/sumosonic_sputnik.html)}

//
//	b-sides
//
//define	devil			${linkSong(href=${jbc_lyrics}/devil_is_my_friend.html, title=The Devil Is My Friend)}
//define	swingin			${linkSingle(href=${jbc_albums}/pygmies.html, title=Christmas With The Pygmies)}
//define	pygmie			${linkSong(href=${jbc_lyrics}/xmas_with_the_pygmies.html, title=Christmas With The Pygmies)}
//define	drink			${linkSong(href=${jbc_lyrics}/drink.html, title=D.R.I.N.K.)}
//define	h2o				${linkSong(href=${jbc_lyrics}/water.html, title=Water)}
//define	fever			${linkSong(title=Cowgirl Fever, href=${jbc_lyrics}/cowgirl_fever.html)}
//define	ever			${linkSong(href=${jbc_lyrics}/forever.html, title=Forever)}
//define	jungle			${linkSong(href=${jbc_lyrics}/human_jungle.html, title=The Human Jungle)}
//define	olof			${linkSong(href=${jbc_lyrics}/olof_palme.html, title=Olof Palme)}
//define	city			${linkSong(href=${jbc_lyrics}/city_of_night.html, title=City Of Night)}
//define	jbpm			${linkSong(href=${jbc_lyrics}/jb_v_pm.html, title=The Jazz Butcher Meets the Prime Minister)}
//define	hair			${linkSong(href=${jbc_lyrics}/hairbrush_and_tank.html, title=The Hairbrush And The Tank)}
//define	almost			${linkSong(href=${jbc_lyrics}/almost_brooklyn.html, title=Almost Brooklyn)}
//define	welove			${linkSingle(href=${jbc_albums}/weloveyou.html, title=We Love You)}
//define	weloveyou		${welove}
//define	excel			${linkSong(href=${jbc_lyrics}/excellent.html, title=Excellent!)}
//define	vodka			${linkSong(href=${jbc_lyrics}/vodka_girls.html, title=Vodka Girls)}
//define	va_abus_21		${linkSingle(href=${jbc_albums}/va_abus_dangereux_21.html, title=VA: Abus Dangereux #21)}
//define	va_canyoutalktothedude_1		${linkSingle(href=${jbc_albums}/va_canyoutalktothedude_1.html, title=VA: Can You Talk To The Dude #1)}
//define	va_canyoutalktothedude_2		${linkSingle(href=${jbc_albums}/va_canyoutalktothedude_2.html, title=VA: Can You Talk To The Dude #2)}
//define	va_creation_unreleased		${linkSingle(title=VA: Creation Unreleased)}
//define	va_shadow		${linkSingle(title=VA: Shadow And Light, href=${jbc_albums}/va_shadow_and_substance.html)}
//define	va_nationofsaints		${linkSingle(title=VA: Nation Of Saints, href=${jbc_albums}/va_nationofsaints.html)}
//define	va_creation_price		${linkSingle(title=VA: Creation Price, href=${jbc_albums}/va_creation_price.html)}
//define	va_unautomne93		${linkSingle(title=VA: Un Automne '93, href=${jbc_albums}/va_unautomne93.html)}
//define	va_wilson_heyday		${linkSingle(title=VA: Straight Through The Sound Barrier, href=${jbc_albums}/va_wilson_heyday.html)}
//define	va_spark		${linkSingle(title=VA: Another Spark, href=${jbc_albums}/va_another_spark.html)}
//define	shock_drugs		${linkSingle(title=She's On Drugs)}
//define	va_seventeen_2	${linkSingle(title=VA: What A Nice Way To Turn Seventeen #2)}
//define	va_seventeen_3	${linkSingle(title=VA: What A Nice Way To Turn Seventeen #3)}
//define	bigtime_sampler	${linkSingle(title=Big Bad Thing)}
//define	bigtime_jungle	${linkSingle(href=${jbc_albums}/bigtime_jungle_smith,html, title=The Human Jungle/Southern Mark Smith)}
//define	bigtime_angels	${linkSingle(href=${jbc_albums}/bigtime_angels_kitchen,html, title=Angels/Still In The Kitchen)}
//define	va_nm_vol1		${linkSingle(title=VA: Now That's What I Call Northampton Vol #1)}
//define	va_andy_2007	${linkSingle(title=VA: Uncle Andy's 2007 Christmas Album)}

//
//	recorded covers
//
//define	aff				${linkSong(title=Affection, author=Jonathan Richman)}
//define	capt		${linkSong(title=Tugboat Captain, author=Dean Wareham)}
//define	dance		${linkSong(title=Do You Wanna Dance, author=Bobby Freeman)}
//define	envoy			${linkSong(title=The Chinese Envoy, author=John Cale)}
//define	indian_summer	${linkSong(title=Indian Summer, author=Beats Happening)}
//define	jane		${linkSong(title=Sweet Jane, author=Lou Reed)}
//define	king			${linkSong(title=King Of Joy, author=Bill Drummond)}
//define	knock			${linkSong(title=Knocking On Heaven's Door, author=Bob Dylan)}
//define	leaves			${linkSong(title=Raking Up the Leaves, author=${max})}
//define	lost			${linkSong(href=${jbc_lyrics}/lost_in_france.html, title=Lost In France, author=Scott/Wolfe)}
//define	mersey			${linkSong(title=Mersey, author=David Surkamp)}
//define	moscow			${linkSong(title=Moscow Drug Club, author=B. B. Gabor)}
//define	night			${linkSong(title=The Long Night Starts, author=${max})}
//define	over			${linkSong(title=Over You, author=Lou Reed)}
//define	rainbow		${linkSong(title=Over The Rainbow, author=Arlen/Hamburg)}
//define	road		${linkSong(title=Roadrunner, author=Richman)}
//define	speed			${linkSong(title=Speedy Gonzalez, author=Hess\, Kaye\, Lee)}
//define	talk		${linkSong(title=Everybody's Talkin', author=F. Neil)}
//define	uptoyou			${linkSong(title=Leaving It Up To You, author=John Cale)}
//define	weluv			${linkSong(title=We Love You, author=Mick Jagger)}
//
//	guest pass 2000
//
//define	cdr_guestpass2000		${linkAlbum(href=${jbc_albums}/cdr_guestpass2000.html, title=Guest Pass 2000)}
//define	anthrax		${linkSong(title=Doktor Anthrax, href=${jbc_lyrics}/doktor_anthrax.html)}
//define	dont		${linkSong(title=Don't Let Me Keep You, author=${owen})}
//define	arse		${linkSong(title=Hey Now Baby (My Arse Is On Fire), author=${max})}
//define	hobbu		${linkSong(title=The Hobbu Song, href=${jbc_lyrics}/hobbu.html, author=Robert Goodman)}
//
//	live covers
//
//define	afterhours	${linkSong(title=After Hours, author=Velvet Underground)}
//define	rosemary		${linkSong(title=Rosemarie, author=Max Eider)}
//define	steph			${linkSong(title=Stephanie Says, author=Lou Reed)}
//define	pover			${linkSong(title=The Party's Over, author=David J.)}
//define	skins			${linkSong(title=Take The Skinheads Bowling (Camper Van Beethoven))}
//define	punks			${linkSong(title=Part Time Punks, author=The Television Personalities)}
//define	biggy			${linkSong(title=Biggest Loudest Hairiest Group Of All, author=John Cale)}
//define	inside_heart	${linkSong(title=Inside Your Heart, author=Velvet Underground)}
//define	ache			${linkSong(title=Heartache Following Me, author=Jim Reeves)}
//define	nature_boy	${linkSong(title=Nature Boy, author=Eden Ahbez)}
//define	hey_star	${linkSong(title=Hey\, Star, author=${wolfi})}
//define	satellite_of_love	${linkSong(title=Satellite Of Love, author=Lou Reed)}
//define	rocking_in_the_free_world	${linkSong(title=Rocking In The Free World, author=Neil Young)}
//define	september_gurls	${linkSong(title=September Gurls, author=Alex Chilton)}
//define	Radio_Saigon	${linkSong(title=Radio Saigon, author=Sumosonic)}
//define	Stop_This_City	${linkSong(title=Stop This City, author=David J.)}
//define	Tread_Water		${linkSong(title=Tread Water, author=De La Soul)}
//define	Just_One_Victory		${linkSong(title=Just One Victory, author=Todd)}
//
//	unreleased tracks
//
//define	wildlife	${linkSong(title=Wildlife, href=${jbc_lyrics}/wildlife.html)}
//
//	albums
//
//define	nons			${linkAlbum(href=${jbc_albums}/nonsense.html, title=Bloody Nonsense)}
//define	closet			${linkAlbum(href=${jbc_albums}/closet.html, title=Edward's Closet)}
//define	gift1			${linkAlbum(href=${jbc_albums}/gift1.html, title=The Gift of Music)}
//define	gift2			${linkAlbum(href=${jbc_albums}/gift2.html, title=Big Questions)}
//define	uncond			${linkAlbum(href=${jbc_albums}/unconditional.html, title=Unconditional)}
//define	damn			${linkAlbum(href=${jbc_albums}/blackeg.html, title=The Black Eg)}

//define	human			${linkSingle(href=${jbc_albums}/jungle.html, title=The Human Jungle)}
//define	girlgo			${linkSingle(href=${jbc_albums}/girl.html, title=Girl-Go)}
//define	rmen			${linkSingle(href=${jbc_albums}/men.html, title=Real Men)}
//define	smith			${linkSingle(href=${jbc_albums}/smith.html, title=Southern Mark Smith)}
//define	runner			${linkSingle(href=${jbc_albums}/roadrunner.html, title=Roadrunner)}
//define	hard			${linkSingle(href=${jbc_albums}/hard.html, title=Hard)}
//define	may				${linkSingle(href=${jbc_albums}/mayi.html, title=Speedy Gonzalez)}
//define	angel			${linkSingle(href=${jbc_albums}/angels.html, title=Angels)}
//define	zomby			${linkSingle(href=${jbc_albums}/zombie.html, title=Zombie Love)}
//define	affect			${linkSingle(href=${jbc_albums}/va_another_spark.html, title=Affection)}
//define	shir			${linkSingle(href=${jbc_albums}/shirley.html, title=Shirley Maclaine)}
//define	marnie			${linkSingle(href=${jbc_albums}/marnie.html, title=Marnie)}
//define	water			${linkSingle(href=${jbc_albums}/sweet_water.html, title=Sweetwater)}

//define	thought			${linkSong(title=Thought for the Day)}
//define	hardy			${linkSong(href=${jbc_lyrics}/hard.html, title=Hard)}
//define	mayi			${linkSong(title=May I, author=Ayers)}

//
//	illuminate
//
//define	ill				${linkAlbum(href=${jbc_albums}/illuminate.html, title=Illuminate)}
//define	violent			${linkSingle(href=${jbc_albums}/violent.html, title=&#161;Excellent! The Violent Years)}
//define	16yr			${linkSingle(href=${jbc_albums}/sixteen_years.html, title=Sixteen Years)}
//define	cute			${linkSong(href=${jbc_lyrics}/cute_submarines.html, title=Cute Submarines)}
//define	16				${linkSong(href=${jbc_lyrics}/sixteen_years.html, title=Sixteen Years)}
//define	elephant_man	${linkSong(title=Elephant Man)}
//define	eleph			${linkSong(href=${jbc_lyrics}/great_elephants.html, title=A Great Visitation Of Elephants)}
//define	enos			${linkSong(href=${jbc_lyrics}/when_eno_sings.html, title=When Eno Sings)}
//define	ugly			${linkSong(href=${jbc_lyrics}/ugly_song.html, title=The Ugliest Song In The World)}
//define	scarlet			${linkSong(href=${jbc_lyrics}/scarlett.html, title=Scarlett)}
//define	beetle			${linkSong(href=${jbc_lyrics}/beetle_george.html, title=Beetle George)}
//define	cops			${linkSong(href=${jbc_lyrics}/cops_and_hospitals.html, title=Cops And Hospitals)}
//define	truck			${linkSong(href=${jbc_lyrics}/truck_o_fear.html, title=Truck Of Fear)}
//define	dean			${linkSong(href=${jbc_lyrics}/blues_for_dean_read.html, title=Blues For Dean Read)}
//define	sumo			${linkSong(href=${jbc_lyrics}/waiting_for_sumo.html, title=Waiting For Sumo)}
//define	snakey			${linkSong(href=${jbc_lyrics}/old_snakey.html, title=Old Snakey)}
//define	land			${linkSong(href=${jbc_lyrics}/land.html, title=Land)}
//define	lulu			${linkSong(href=${jbc_lyrics}/lulus_nightmare.html, title=Lulu's Nightmare)}
//define	surf			${linkSong(href=${jbc_lyrics}/surf_gear_in_idaho.html, title=Surf Gear In Idaho)}
//define	true			${linkSong(href=${jbc_lyrics}/true_stories.html, title=True Stories)}

//
//	rotten soul
//
//define	rotten			${linkAlbum(href=${jbc_albums}/rotten.html, title=Rotten Soul)}
//define	bigcats			${linkSong(href=${jbc_lyrics}/big_cats.html, title=Big Cats)}
//define	comeon			${linkSong(href=${jbc_lyrics}/come_on_marie.html, title=${literalizeCommas(Come On, Marie)})}
//define	baby			${linkSong(href=${jbc_lyrics}/baby_its_you.html, title=${literalizeCommas(Baby, It's You)})}
//define	siberia			${linkSong(href=${jbc_lyrics}/mister_siberia.html, title=Mister Siberia)}
//define	tough			${linkSong(href=${jbc_lyrics}/tough_priest.html, title=Tough Priest)}
//define	sleepwalking	${linkSong(href=${jbc_lyrics}/sleepwalking.html, title=Sleepwalking)}
//define	niagara			${linkSong(href=${jbc_lyrics}/niagara.html, title=Niagara)}
//define	adore			${linkSong(href=${jbc_lyrics}/the_one_you_adore.html, title=The One You Adore)}
//define	clyde			${linkSong(href=${jbc_lyrics}/the_ballad_of_tiny_and_clyde.html, title=The Ballad Of Tiny And Clyde)}
//define	hatelove		${linkSong(href=${jbc_lyrics}/i_hate_love.html, title=I Hate Love)}
//define	callme			${linkSong(href=${jbc_lyrics}/call_me.html, title=Call Me)}
//define	morphine		${linkSong(href=${jbc_lyrics}/diamorphine.html, title=Diamorphine)}
//
//	gentlemen adventurers
//
//define	adventurers	${linkAlbum(href=${jbc_albums}/last_of_the_gentlemen_adventurers.html, title=Last of the Gentleman Adventurers)}
//define	animals	${linkSong(href=${jbc_lyrics}/animals.html, title=Animals)}
//define	shame_about_you	${linkSong(href=${jbc_lyrics}/shame_about_you.html, title=Shame About You)}
//define	last_of_the_gentlemen_adventurers	${linkSong(href=${jbc_lyrics}/last_of_the_gentleman_adventurers.html, title=Last of the Gentleman Adventurers)}
//define	tombe	${linkSong(href=${jbc_lyrics}/tombe_dans_les_pomes.html, title=Tomb&eacute; dans les pommes)}
//define	count_me_out	${linkSong(href=${jbc_lyrics}/count_me_out.html, title=Count Me Out)}
//define	single_saints	${linkSingle(href=${jbc_albums}/all_the_saints.html, title=All the Saints)}
//define	all_the_saints	${linkSong(href=${jbc_lyrics}/all_the_saints.html, title=All the Saints)}
//define	mercy	${linkSong(href=${jbc_lyrics}/mercy.html, title=Mercy)}
//define	black_raoul	${linkSong(href=${jbc_lyrics}/black_raoul.html, title=Black Raoul)}
//define	shakey	${linkSong(href=${jbc_lyrics}/shakey.html, title=Shakey)}
//define	solar_core	${linkSong(href=${jbc_lyrics}/solar_core.html, title=Solar Core)}
//define	saints_prayer	${linkSong(href=${jbc_lyrics}/saints_prayer.html, title=Saints Prayer)}
//
//	Highest In The Land
//
//define	highest		${linkAlbum(href=${jbc_albums}/highest_in_the_land.html, title=Highest in the Land)}
//define	melanie		${linkSong(title=Melanie Hargreaves' Father's Jaguar, href=${jbc_lyrics}/melanie_hargreave.html)}
//define	time		${linkSong(href=${jbc_lyrics}/time.html, title=Time)}
//define	madness		${linkSong(title=Sea Madness, href=${jbc_lyrics}/sea_madness.html)}
//define	never		${linkSong(title=Never Give Up, href=${jbc_lyrics}/never_give_up.html)}
//define	amalfi		${linkSong(title=Amalfi Coast May 1963, href=${jbc_lyrics}/amalfi_coast.html)}
//define	fumes		${linkSong(title=Running on Fumes, href=${jbc_lyrics}/running_on_fumes.html)}
//define	thehighest	${linkSong(title=The Highest in the Land, href=${jbc_lyrics}/highest_in_the_land.html)}
//define	sebastian	${linkSong(title=Sebastian's Medication, href=${jbc_lyrics}/sebastians_medication.html)}
//define	goodnight	${linkSong(title=Goodnight Sweetheart, href=${jbc_lyrics}/goodnight_sweetheart.html)}
//
//	Fire Records box-sets
//
//define	fire_wasted	${linkAlbum(href=${jbc_albums}/fire_wasted.html, title=The Wasted Years)}
//define	fire_violent	${linkAlbum(href=${jbc_albums}/fire_violent.html, title=The Violent Years)}
//define	fire_cholmondley	${linkAlbum(href=${jbc_albums}/fire_cholmondley.html, title=Dr Cholmondley Repents)}
//
//	sumo
//
//define	sumosonic	${linkExternal(https://www.sumosonic.com, Sumosonic)}
//define	friendly		${linkSong(title=${literalizeCommas(Come, Friendly Spacemen)})}

//define	lunch			${linkAlbum(href=${jbc_albums}/free_lunch.html, title=The Jazz Butcher's Free Lunch)}
//define	cake			${linkAlbum(href=${jbc_albums}/cake_city.html, title=Cake City)}

//
//	places
//
//define	USA	USA
//define	DE	Germany
//define	SW	Switzerland
//define	HO	Holland
//define	ITALIA	Italy
//define	NOR	Norway
//define	FR	France
//define	CA	California
//define	UK	UK
//define	AU	Austria
//define	ES	Spain
//define	CAN	Canada
//define	ONT	Ontario
//define	NYC	New York
//define	NH	Northampton
//define	BELG	It's Got To Be Belgium (Slurp's Wino Bar)
//define	HAM	Hamburg
//define	FRANK	Frankfurt
//define	PO	Onkel P&ouml;
//define	LO	London
//define	TOR	Toronto
//define	AMST	Amsterdam
//define	PAR	Paris
//define	CHI	Chicago
//define	LA	Los Angeles
//define	SF	San Francisco
//define	WA	Washington
//define	FIDDLER			Mean Fiddler
//define	AX				Lounge Ax
//define	METRO			Cabaret Metro
//define	CUBBY			Cubby Bear
//define	TOWER			Tower Records <img width=126 height=57 alt="[image]" src="${jbc_images}/tower.gif">
//define	KCRW			${linkExternal(https://www.kcrw.org, KCRW)}
//define	KTBS			${linkExternal(http://www.utexas.edu/students/kvrx, KTBS)}
//define	WNUR			${linkExternal(http://www.wnur.org, WNUR)} <img width=114 height=77 alt="[image]" src="${jbc_images}/wnur.gif">
//define	WHPK			${linkExternal(http://whpk.uchicago.edu, WHPK)}
//define	WXYC			${linkExternal(http://www.wxyc.org, WXYC)}
//						<img width=129 height=56 alt="[image]" src="${jbc_images}/wxyc.gif">
//define	CBC				<img alt="[CBC]" src="${jbc_images}/cbc.gif">
//
//	bootlegging codes
//
//define	code	(out of 10)
//define	room	<span className="recording_source">Room</span>
//define	d	<span className="recording_source">Soundboard</span>
//define	r	<span className="recording_source">Radio Recording</span>
//define	w	<span className="recording_media">Walkman</span>
//define	DAT	<span className="recording_media">DAT</span>
//define	VHS	<span className="recording_media">NTSC VHS</a>
//define	PZM	<span className="recording_tech">PZM mics + soundboard mixed live</span>
//define	mono	<span className="recording_channels">mono</span>
//define	q(g)	Quality: <span className="recording_quality">${g}</span> ${code}
//define	p(g)	Performance: <span className="recording_peformance">${g}</span>
//define	g(g)	Generation: <span className="recording_generation">${g}</span>
//define	i(g)	Interest: <span className="recording_interest">${g}</span> ${code}
//define	g_details(g)	Details: <span className="recording_details">${g}</span>
//define	yuck	<span className="recording_quality">Not so good quality...</span>
//define	mt	<span className="recording_generation">Master Copy</span>
