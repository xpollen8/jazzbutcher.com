import Link from 'next/link';
import Image from 'next/image';
import { linkInternal, linkExternal } from './utils';

const linkSearch = ({ name, text, act }:
{
	name: string
	text?: string
	act?: boolean
}) =>
<>
	{(() => {
	if (act) return <Link href= {`/gigs?f=alsowith&q="${name}"`}>{(text) ? text : name}</Link>
	return <Link href= {`/gigs?f=performer&q="${name}"`}>{(text) ? text : name}</Link>
	})()}
</>

const linkPerson = (props: { href: string, name: string }) => <span className="person">{linkInternal(props?.href?.startsWith('http') ? props?.href : `/conspirators/${props?.href}`, props?.name)}{' '}</span>
const linkAlbum = (props: { title: string, href?: string }) =>
<>
{(props?.href) ?
  <span className="release_title"><b><Link href= {props?.href}>{props?.title}</Link></b></span>
	:
	<span className="release_title"><b>{props?.title}</b></span>
}
</>
const linkSingle = (props: { title: string, href?: string }) =>
<>
{(props?.href) ?
  <span className="release_title"><b><Link href={props?.href}>{props?.title}</Link></b></span>
	:
	<span className="release_title"><b>{props?.title}</b></span>
}
</>

const linkSong = (props: { title?: string, href?: string, author?: string | React.ReactNode }) =>
<>
  <span className='song'>
	{(() => {
		if (props?.title && props?.href) {
			return <i>{' '}<Link href= {props.href}>{props.title}</Link>{' '}</i>
		} else if (props?.title) {
			return <i>{' '}{props.title}{' '}</i>
		}
	})()}
	{(props?.author) && <span className="song_author">({props.author})</span>}
  </span>
</>

//
//       conspirators
//
export const anita_allbright = 	linkSearch({ name: "Anita Allbright" });
export const astor = linkPerson({ href: "peter_astor.html", name: "Peter Astor" });
export const at = linkPerson({ href: "alice_thompson.html", name: "Alice Thompson" });
export const barker = linkPerson({ href: "david_barker.html", name: "David E. Barker" });
export const beirne = linkPerson({ href: "pat_beirne.html", name: "Pat Beirne" });
export const blair = linkSearch({ name: "Blair MacDonald" });
export const botty = linkPerson({ href: "ian_botterill.html", name: "Ian Botterill" });
export const botty_bman = linkPerson({ href: "ian_botterill.html", name: "B-Man" });
export const brent = linkSearch({ name: "Brent Bambury" });
export const burrell = linkPerson({ href: 'tim_burrell.html', name: "Tim Burrell" });
export const butch = 'The Butcher';
export const terry = 'Terry Walpole';
export const tom_hall = linkInternal("/tomhall", "Tom Hall");
export const colin = linkPerson({ href: "colin.html", name: "Colin Harris" });
export const curt = linkPerson({ href: "curtis_johnson.html", name: "Curtis E. Johnson" });
export const curt_eman = linkPerson({ href: "curtis_johnson.html", name: "E-Man" });
export const damm = linkPerson({ href: "von_dammerung.html", name: "Von Dämmerung" });
export const deirdre = linkSearch({ name: "Deirdre O'Donoghue" });
export const del = linkPerson({ href: "david_whittemore.html", name: "David Whittemore" });
export const dj = linkPerson({ href: "david_j.html", name: "David J." });
export const dooj = linkPerson({ href: "dooj_wilkinson.html", name: "Dooj Wilkinson" });
export const erol = linkSearch({ name: "Erol Suleyman" });
export const felce = linkSearch({ name: "Dave Felce" });
export const felix = linkPerson({ href: "felix_ray.html", name: "Felix Ray" });
export const gab = linkPerson({ href: "gabriel_turner.html", name: "Gabriel Turner" });
export const garofalo = linkPerson({ href: "steve_garofalo.html", name: "Steve Garofalo" });
export const gerard = linkSearch({ name: "Gerard Langley" });
export const gould = linkPerson({ href: 'greenwood_goulding.html', name: "Greenwood Goulding" });
export const green = linkPerson({ href: "alex_green.html", name: "Alex Green" });
export const hask = linkPerson({ href: "kevin_haskins.html", name: "Kevin Haskins" });
export const hend = linkPerson({ href: "dave_henderson.html", name: "Dave Henderson" });
export const hook = linkSearch({ name: "Paul Hookham" });
export const iain = linkPerson({ href: "iain_ohiggins.html", name: "Iain O'Higgins" });
export const indge = linkPerson({ href: "alastair_indge.html", name: "Alastair Indge" });
export const is = linkPerson({ href: 'ian_sturgess.html', name: "Ian Sturgess" });
export const joby = linkPerson({ href: 'joby_palmer.html', name: "Joby Palmer" });
export const joe = 	linkPerson({ href: 'joe_foster.html', name: "Joe Foster" });
export const tony = 	linkPerson({ href: 'tony_foster.html', name: "Tony Foster" });
export const joe_woolley = linkSearch({ name: "Joe Woolley", act: true });
export const joea = linkPerson({ href: "joe_allen.html", name: "Joe Allen" });
export const joel_harries = linkPerson({ href: "joel_harries.html", name: "Joel Harries" });
export const john_silver = 'John Silver';
export const jonny_mattock = linkPerson({ href: "jonny_mattock.html", name: "Jonny Mattock" });
export const jules = linkPerson({ href: "julian_poole.html", name: "Julian Poole" });
export const karel = linkPerson({ href: "von_dammerung.html", name: 'Karel Von Dämmerung' });
export const otto = linkPerson({ href: "von_dammerung.html", name: 'Otto Von Dämmerung' });
export const emil = linkPerson({ href: "von_dammerung.html", name: 'Emil Von Dämmerung' });
export const kathie = linkPerson({ href: "kathie_mcginty.html", name: "Kathie McGinty" });
export const kathy = linkPerson({ href: "kathy_schaer.html", name: "Kathy Schaer" });
export const kathy_misery = linkPerson({ href: "kathy_schaer.html", name: "Misery Wilson" });
export const kevin = linkSearch({ name: "Kevin Komoda" });
export const kizzy = linkPerson({ href: "kizzy_ocallaghan.html", name: "Kizzy O'Callaghan" });
export const larry = linkPerson({ href: "laurence_okeefe.html", name: "Laurence O'Keefe" });
export const lb = linkPerson({ href: "david_barker.html", name: "Lionel Brando" });
export const lix = linkPerson({ href: "alex_lee.html", name: "Alex Lee" });
export const martin_k_daley = "Martin K Daley";
export const mark_hadley = linkPerson({ href: "marc_hadley.html", name: "Mark Hadley" });
export const ll = linkPerson({ href: "marc_hadley.html", name: "Louis Leroi" });
export const lohan = linkSearch({ name: "Richard Lohan" });
export const mark_refoy = linkPerson({ href: "mark_refoy.html", name: "Mark Refoy" });
export const max = linkPerson({ href: "max_eider.html", name: "Max Eider" });
export const max_read = linkSearch({ name: "Max Read" });
export const mercer = linkExternal('https://www.mickmercer.com', 'Mick Mercer');
export const mick = linkSearch({ name: "Mick Packwood" });
export const mike_novakovic = linkSearch({ name: "Mike Novakovic" });
export const mitch = linkPerson({ href: "mitch_jenkins.html", name: "Mitch Jenkins" });
export const emerson_hunt = linkPerson({ href: "emerson_hunt.html", name: "Emerson Hunt" });
export const morgan = linkPerson({ href: "dave_morgan.html", name: "Dave Morgan" });
export const nick = linkPerson({ href: "nick_burson.html", name: "Nick Burson" });
export const owen = linkPerson({ href: "owen_jones.html", name: "Owen Jones" });
export const pat = linkPerson({ href: "https://patfish.com", name: "Pat Fish" });
export const pat_fish = pat;
export const duo = <>{pat}, {max}</>
export const pat_headstone = linkPerson({ href: "https://patfish.com", name: "Wilson Headstone" });
export const paul = linkPerson({ href: "paul_mulreany.html", name: "Paul Mulreany" });
export const pete = linkPerson({ href: "peter_crouch.html", name: "Peter Crouch" });
export const rev = linkPerson({ href: "martin_stebbing.html", name: "Martin Stebbing (Rev. Botus Whiteblood Fleming)" });
export const richard = linkPerson({ href: "richard_formby.html", name: "Richard Formby" });
export const rivers = linkPerson({ href: "john_rivers.html", name: "John A. Rivers" });
export const rodney = linkPerson({ href: "rodney_allen.html", name: "Rodney Allen" });
export const rolo = linkPerson({ href: "rolo_mcginty.html", name: "Rolo McGinty" });
export const russ = linkPerson({ href: "russell_cooper.html", name: "Russell Cooper" });
export const russ_agent = linkPerson({ href: "russell_cooper.html", name: "Agent Wilson" });
export const simon = linkPerson({ href: "simon_taylor.html", name: "Simon Taylor" });
export const simon_mawby = 'Simon Mawby';
export const sm = linkSearch({ name: "Steve Musgrove" });
export const solo = pat;
export const sonic = linkPerson({ href: "sonic_boom.html", name: "Sonic Boom" });
export const steve = linkPerson({ href: "steve_valentine.html", name: "Steve Valentine" });
export const steve_beswick = linkPerson({ href: "steve_beswick.html", name: "Steve Beswick" });
export const steve_gordon = linkPerson({ href: "steve_gordon.html", name: "Steve Gordon" });
export const steve_gordon_gman = linkPerson({ href: "steve_gordon.html", name: "G-Man" });
export const stevenew = linkPerson({ href: "steve_new.html", name: "Steve New" });
export const nick_bandy = linkPerson({ href: "nick_bandy.html", name: "Nick Bandy" });
export const lee_brooks = linkPerson({ href: "lee_brooks.html", name: "Lee Brooks" });
export const pat_kenneally = linkPerson({ href: "pat_kenneally.html", name: "Pat Kenneally" });
export const sumishta = linkPerson({ href: "sumishta_brahm.html", name: "Sumishta Brahm" });
export const sumo_botty = linkPerson({ href: "ian_botterill.html", name: "Mister B" });
export const sumo_kathie = linkPerson({ href: "kathie_mcginty.html", name: "Kathie M" });
export const sumo_kathy = linkPerson({ href: "kathy_schaer.html", name: "Special K" });
export const sumo_pat = linkPerson({ href: "https://patfish.com", name: "Headstone" });
export const sumo_russ = linkPerson({ href: "russell_cooper.html", name: "Agent Russell Cooper" });
export const tim_harries = linkPerson({ href: "tim_harries.html", name: "Tim Harries" });
export const undertakers = <b>The Undertakers</b>;
export const wilson = linkInternal('/project/wilson', 'Wilson');
export const wolfi = linkPerson({ href: "wolfgang_tschegg.html", name: "Wolfgang Tschegg" });

//
//	producers/engineers/soundmen/other
//
export const proctor = linkSearch({ name: "Steve Proctor" });
export const howy = linkExternal("http://www.studiowizard.com/ht.html", "Howard Turner");
export const momus = linkExternal("http://www.demon.co.uk/momus/", "Momus");
export const _4AD = linkExternal("http://www.evo.org/eyesore.html", "4AD");
export const coonce = "Cole Coonce";
export const vu = linkExternal("http://www.rocknroll.net/loureed/", "Velvet Underground");
export const richman = linkExternal("http://www.base.com/jonathan/jonathan.html", "Jonathan Richman");
export const dronesclub = linkExternal("https://thedronesclub.co.uk/", "The Drones Club");
export const space = linkExternal("http://www.spiritualized.com/", "Spacemen 3");
export const aero = linkSearch({ name: "The Blue Aeroplanes", act: true });
export const haus = linkExternal("http://www.partium.com/~andrewb/bauhaus/", "Bauhaus");
export const tractors = linkExternal("http://www.geocities.com/Nashville/Stage/8818/favorite.htm", "Stranger Tractors");
export const poi = linkExternal("http://www.poidogpondering.com/", "Poi Dog Pondering");
export const davidj = dj;
export const bwatch = linkExternal("http://www.theblackwatchmusic.com", "The Black Watch");
export const purelove = linkExternal("http://ourworld.compuserve.com/homepages/RobertFliegel/purelove.htm, Purelove");
export const eg	= <Link href="https://adjective.com/htdb/eg">The Black Eg</Link>
export const vergift = <Link href="https://adjective.com/vergiftung/site">Vergiftung</Link>
export const cave = linkSearch({ name: "Nick Cave", act: true });
export const cvb = "Camper Van Beethoven";
export const mbv = "My Bloody Valentine";
export const 	tvamp = linkSearch({ name: "Transvision Vamp", act: true });
export const swynn = linkSearch({ name: "Steve Wynn", act: true });
export const bangles = linkSearch({ name: "The Bangles", act: true });
export const cale = linkExternal("http://john-cale.com", "John Cale");
export const braind = linkSearch({ name: "Braindead Soundmachine", act: true });
export const eno = linkSearch({ name: "Brian Eno", act: true });
export const weather = linkSearch({ name: "Weather Prophets", act: true });
export const hitch = linkSearch({ name: "Robyn Hitchcock", act: true });
export const perfect = linkSearch({ name: "The Perfect Disaster", act: true });
export const spect = linkSearch({ name: "Spectrum", act: true });
export const belly = linkSearch({ name: "Belly", act: true });
export const tops = linkSearch({ name: "The Woodentops", act: true });
export const rocket = linkSearch({ name: "Love And Rockets", act: true });
export const scream = linkSearch({ name: "Primal Scream", act: true });
export const strange = linkSearch({ name: "Strangelove", act: true });
export const levit = linkSearch({ name: "Levitation", act: true });
export const kmfdm = linkSearch({ name: "KMFDM", act: true });
export const mildew = linkSearch({ name: "Downey Mildew", act: true });
export const star = linkSearch({ name: "Big Star", act: true });
//
//	artwork
//
export const dave_coverly = linkExternal("https://www.speedbump.com/", "Dave Coverly");
export const lucien = linkSearch({ name: "Lucien Borderline" });
export const bd = linkSearch({ name: "Ben Davis" });
export const novak = linkSearch({ name: "Alex Novak" });
export const loony = linkSearch({ name: "Pascal Legras" });
//
//	jbc-list people
//
export const killer = linkSearch({ name: "Joe Beaulieu" });
export const nancy = linkSearch({ name: "Nancy Everson" });
export const woj = linkSearch({ name: "The Woj" });
export const matt = "Matt Cockerill";
export const rob = linkSearch({ name: "Robert Jacob" });
export const ed = linkSearch({ name: "Ed Carter" });
export const coop = linkSearch({ name: "John Cooper" });
export const frang = linkSearch({ name: "Robert Frangooles" });
export const syd = linkExternal("http://www.sydmeats.co.uk, Sydney Meats");
export const davison = linkSearch({ name: "John Michael Davison" });
export const camf = linkSearch({ name: "Chris Camfield" });
export const jdavies = linkSearch({ name: "Jim Davies" });
export const knight = linkSearch({ name: "Knight Berman" });
export const jimmy = linkExternal("https://twitter.com/RealJamesDuval, James Duval");

//
//	useful defines
//
export const instr = <b>This song is an instrumental</b>
//
//	Bath Of Bacon
//
export const bacon = linkAlbum({ href: "/releases/bath", title: "Bath Of Bacon" });
export const gloop	= linkSong({ title: "Gloop Jiving", href: "/lyrics/gloop_jiving.html" });
export const jbtheme	= linkSong({ href: "/lyrics/jb_theme.html", title: "Jazz Butcher Theme" });
export const party	= linkSong({ title: "Partytime", href: "/lyrics/partytime.html" });
export const foot	= linkSong({ href: "/lyrics/bigfoot.html", title: "Bigfoot Motel" });
export const engine	= linkSong({ href: "/lyrics/sex_engine.html", title: "Sex Engine" });
export const china	= linkSong({ href: "/lyrics/chinatown.html", title: "Chinatown" });
export const zombie	= linkSong({ href: "/lyrics/zombie_love.html", title: "Zombie Love" });
export const flan	= linkSong({ href: "/lyrics/grey_flannelette.html", title: "Grey Flannelette" });
export const mer	= linkSong({ href: "/lyrics/la_mer.html", title: "La Mer" });
export const poison	= linkSong({ href: "/lyrics/poisoned_by_food.html", title: "Poisoned By Food" });
export const kitten	= linkSong({ href: "/lyrics/love_kittens.html", title: "Love Kittens" });
export const bath	= linkSong({ href: "/lyrics/bath.html", title: "Bath Of Bacon" });
export const gold	= linkSong({ title: "Girls Who Keep Goldfish", href: "/lyrics/goldfish.html" });
//
//
//	wilson
//
export const wilson_play_it_all_night_long = linkSong({ title: "Play It All Night Long", author: "Warren Zevon" });
export const wilson_quality_people = linkSong({ href: "/lyrics/wilson_quality_people.html", title: "Quality People", author: "Wilson" });
export const wilson_buffalo_sniper = linkSong({ href: "/lyrics/wilson_buffalo_sniper.html", title: "Buffalo Sniper", author: "Wilson" });
export const wilson_police_chief = linkSong({ href: "/lyrics/wilson_police_chief.html", title: "Police Chief", author: "Wilson" });
export const wilson_istanbul_connection = linkSong({ href: "/lyrics/wilson_istanbul_connection.html", title: "Istanbul Connection", author: "Wilson" });
export const wilson_hippy_shit = linkSong({ href: "/lyrics/wilson_hippy_shit.html", title: "Hippy Shit", author: "Wilson" });
export const wilson_burn_hollywood_burn = linkSong({ href: "/lyrics/wilson_burn_hollywood_burn.html", title: "Burn, Hollywood, Burn", author: "Wilson" });
export const wilson_dark_agenda = linkSong({ href: "/lyrics/wilson_dark_agenda.html", title: "Dark Agenda", author: "Wilson" });
export const wilson_battle_time = linkSong({ title: "Battle Time Now", author: "Wilson", href: "/lyrics/wilson_battle_time_now.html" });
export const wilson_critters = linkSong({ title: "Critters", author: "Wilson", href: "/lyrics/wilson_critters.html" });
export const wilson_filter_kings = linkSong({ title: "Filter Kings", author: "Wilson", href: "/lyrics/wilson_filter_kings.html" });
export const wilson_no_winners = linkSong({ title: "No Winners", author: "Wilson", href: "/lyrics/wilson_no_winners.html" });
export const wilson_saturday_night = linkSong({ title: "Every Saturday Night", author: "Wilson", href: "/lyrics/wilson_every_saturday_bnight.html" });
export const wilson_secret_government = linkSong({ title: "Secret Government", author: "Wilson", href: "/lyrics/wilson_secret_government.html" });
export const wilson_two_dragons = linkSong({ title: "Two Dragons", author: "Wilson", href: "/lyrics/wilson_two_dragons.html" });
//
//	A Scandal In Bohemia
//
export const scandal = linkAlbum({ href: "/releases/scandal.html", title: "A Scandal In Bohemia" });
export const smiff = linkSong({ title: "Southern Mark Smith", href: "/lyrics/smith.html" });
export const men = linkSong({ title: "Real Men", href: "/lyrics/real_men.html" });
export const hour = linkSong({ href: "/lyrics/soul_happy_hour.html", title: "Soul Happy Hour" });
export const meat = linkSong({ href: "/lyrics/i_need_meat.html", title: "I Need Meat" });
export const betty = linkSong({ href: "/lyrics/betty_page.html", title: "Just Like Bettie Page" });
export const marn = linkSong({ title: "Marnie", href: "/lyrics/marnie.html" });
export const wheel = linkSong({ title: "Caroline Wheeler's Birthday Present", href: "/lyrics/caroline_wheeler.html" });
export const mind = linkSong({ href: "/lyrics/mind_like_a_playgroup.html", title: "Mind Like A Playgroup" });
export const gf = linkSong({ href: "/lyrics/girlfriend.html", title: "Girlfriend" });
export const desert = linkSong({ href: "/lyrics/my_desert.html", title: "My Desert" });
//
//	Sex And Travel
//
export const sex = linkAlbum({ href: "/releases/sex.html", title: "Sex And Travel" });
export const sat = linkSong({ href: "/lyrics/big_saturday.html", title: "Big Saturday" });
export const holiday = linkSong({ href: "/lyrics/holiday.html", title: "Holiday" });
export const pets = linkSong({ href: "/lyrics/red_pets.html", title: "Red Pets" });
export const rumour = linkSong({ href: "/lyrics/rumour.html", title: "Only A Rumour" });
export const reagan = linkSong({ href: "/lyrics/president_reagan.html", title: "President Reagan's Birthday Present" });
export const boy = linkSong({ href: "/lyrics/whats_the_matter_boy.html", title: "What's The Matter, Boy?" });
export const walk = linkSong({ href: "/lyrics/walk_with_the_devil.html", title: "Walk With The Devil" });
export const drain = linkSong({ href: "/lyrics/down_the_drain.html", title: "Down The Drain" });
//
//	Conspiracy
//
export const conspir = linkAlbum({ href: "/releases/conspiracy.html", title: "Conspiracy" });
export const conspir12 = linkAlbum({ href: "/releases/conspiracy12.html", title: "Conspiracy (single)" });
export const lorre = linkSong({ title: "Peter Lorre", href: "/lyrics/peter_lorre.html" });
export const wind = linkSong({ href: "/lyrics/big_old_wind.html", title: "Big Old Wind" });
export const consp = linkSong({ href: "/lyrics/conspiracy.html", title: "Conspiracy" });
export const becky = linkSong({ href: "/lyrics/rebecca.html", title: "Rebecca Wants Her Bike Back" });
export const vienna = linkSong({ href: "/lyrics/vienna_song.html", title: "Vienna Song" });
export const groove = linkSong({ href: "/lyrics/grooving_in_the_bus_lane.html", title: "Grooving In The Bus Lane" });
export const you = linkSong({ href: "/lyrics/it_has_to_be_you.html", title: "It Has To Be You" });
export const thing = linkSong({ title: "Thing", href: "/lyrics/thing.html" });
//
//	Hamburg
//
export const hamburg = linkAlbum({ href: "/releases/hamburg.html", title: "Hamburg" });
export const dentist = linkSong({ href: "/lyrics/death_dentist.html", title: "Death Dentist" });
export const rain = linkSong({ href: "/lyrics/rain.html", title: "Rain" });
export const count = linkSong({ href: "/lyrics/count_dracula.html", title: "Jazz Butcher -v- Count Dracula" });
//
//	 Distressed Gentlefolk
//
export const dist = linkAlbum({ href: "/releases/distressed.html", title: "Distressed Gentlefolk" });
export const fall = linkSong({ href: "/lyrics/falling_in_love.html", title: "Falling In Love" });
export const bigbad = linkSong({ href: "/lyrics/big_bad_thing.html", title: "Big Bad Thing" });
export const kitch = linkSong({ href: "/lyrics/still_in_the_kitchen.html", title: "Still In The Kitchen" });
export const hung = linkSong({ href: "/lyrics/hungarian_love_song.html", title: "Hungarian Love Song" });
export const world = linkSong({ href: "/lyrics/the_new_world.html", title: "The New World" });
export const who = linkSong({ href: "/lyrics/who_loves_you_now.html", title: "Who Loves You Now?" });
export const domest = linkSong({ href: "/lyrics/domestic_animal.html", title: "Domestic Animal" });
export const shame = linkSong({ href: "/lyrics/buffalo_shame.html", title: "Buffalo Shame" });
export const nada = linkSong({ href: "/lyrics/nothing_special.html", title: "Nothing Special" });
export const angels = linkSong({ href: "/lyrics/angels.html", title: "Angels" });
export const sa = linkSong({ href: "/lyrics/south_america.html", title: "South America" });
//
//	Spooky
//
export const brave = linkAlbum({ href: "/releases/brave.html", title: "Brave New Waves Session" });
export const spook = linkSingle({ href: "/releases/spooky.html", title: "Spooky (EP)" });
export const spook12 = linkSingle({ href: "/releases/spooky12.html", title: 'Spooky (12")' });
export const spook7 = linkSingle({ href: "/releases/spooky7.html", title: 'Spooky (7")' });
export const spooky = linkSong({ title: "Spooky" });
export const go = linkSong({ href: "/lyrics/girl_go.html", title: "Girl-Go" });
export const blame = linkSong({ href: "/lyrics/blame.html", title: "Blame" });
export const sarah = linkSong({ href: "/lyrics/whitfield.html", title: "Whitfield, Sarah & The Birchfield Road Affair" });
//
//	Fishcotheque
//
export const fishco = linkAlbum({ href: "/releases/fishcotheque.html", title: "Fishcotheque" });
export const next = linkSong({ href: "/lyrics/next_move_sideways.html", title: "Next Move Sideways" });
export const touch = linkSong({ href: "/lyrics/out_of_touch.html", title: "Out Of Touch" });
export const wrong = linkSong({ href: "/lyrics/get_it_wrong.html", title: "Get It Wrong" });
export const village = linkSong({ href: "/lyrics/living_in_a_village.html", title: "Living In A Village" });
export const swell = linkSong({ href: "/lyrics/swell.html", title: "Swell" });
export const _49 = linkSong({ href: "/lyrics/lot_49.html", title: "Looking For Lot 49" });
export const best = linkSong({ href: "/lyrics/best_way.html", title: "The Best Way" });
export const chick = linkSong({ href: "/lyrics/chickentown.html", title: "Chickentown" });
export const sue = linkSong({ title: "Susie", href: "/lyrics/susie.html" });
export const keep = linkSong({ href: "/lyrics/curtains.html", title: "Keeping The Curtains Closed" });
//
//	Big Planet, Scarey Planet
//
export const planet = linkAlbum({ href: "/releases/planet.html", title: "Big Planet, Scarey Planet" });
export const newinv = linkSingle({ href: "/releases/invention.html", title: "New Invention" });
export const invent = linkSong({ href: "/lyrics/new_invention.html", title: "New Invention" });
export const lineo = linkSong({ href: "/lyrics/line_of_death.html", title: "Line Of Death" });
export const hyst = linkSong({ href: "/lyrics/hysteria.html", title: "Hysteria" });
export const word = linkSong({ href: "/lyrics/word_i_was_looking_for.html", title: "The Word I Was Looking For" });
export const kid = linkSong({ href: "/lyrics/bicycle_kid.html", title: "Bicycle Kid" });
export const burg = linkSong({ href: "/lyrics/burglar_of_love.html", title: "Burglar Of Love" });
export const being = linkSong({ href: "/lyrics/nightmare_being.html", title: "Nightmare Being" });
export const plague = linkSong({ href: "/lyrics/bubonic_plague.html", title: "Do The Bubonic Plague" });
export const dream = linkSong({ href: "/lyrics/bad_dream_lover.html", title: "Bad Dream Lover" });
export const good = linkSong({ href: "/lyrics/the_good_ones.html", title: "The Good Ones" });
//
//	Cult Of The Basement
//
export const cult = linkAlbum({ href: "/releases/cult.html", title: "Cult Of The Basement" });
export const baset = linkSong({ href: "/lyrics/basement_theme.html", title: "The Basement" });
export const drugs = linkSong({ href: "/lyrics/shes_on_drugs.html", title: "She's On Drugs" });
export const tues = linkSong({ href: "/lyrics/pineapple_tuesday.html", title: "Pineapple Tuesday" });
export const onion = linkSong({ href: "/lyrics/the_onion_field.html", title: "The Onion Field" });
export const daycare = linkSong({ href: "/lyrics/daycare_nation.html", title: "Daycare Nation" });
export const zeppo = linkSong({ href: "/lyrics/my_zeppelin.html", title: "My Zeppelin" });
export const fert = linkSong({ href: "/lyrics/fertiliser.html", title: "Fertiliser" });
export const odd = linkSong({ href: "/lyrics/mr_odd.html", title: "Mr. Odd" });
export const euph = linkSong({ href: "/lyrics/euphrates.html", title: "After The Great Euphrates" });
export const panic = linkSong({ href: "/lyrics/panic.html", title: "Panic In Room 109" });
export const bait = linkSong({ href: "/lyrics/turtlebait.html", title: "Turtle Bait" });
export const sis = linkSong({ href: "/lyrics/sister_death.html", title: "Sister Death" });
//
//	Condition Blue
//
export const blue = linkAlbum({ href: "/releases/blue.html", title: "Condition Blue" });
export const girls = linkSong({ href: "/lyrics/girls_say_yes.html", title: "Girls Say Yes" });
export const filth = linkSong({ href: "/lyrics/filth.html", title: "Our Friends The Filth" });
export const harlan = linkSong({ href: "/lyrics/harlan.html", title: "Harlan" });
export const still = linkSong({ href: "/lyrics/still_and_all.html", title: "Still & All" });
export const monkey = linkSong({ href: "/lyrics/monkeyface.html", title: "Monkeyface" });
export const yoyo = linkSingle({ href: "/releases/yo_yo.html", title: "She's A Yo-Yo" });
export const yo = linkSong({ href: "/lyrics/shes_a_yo_yo.html", title: "She's A Yo-Yo" });
export const honey = linkSong({ href: "/lyrics/honey.html", title: "Honey" });
export const shirl = linkSong({ href: "/lyrics/shirley.html", title: "Shirley Maclaine" });
export const rachel = linkSong({ href: "/lyrics/racheland.html", title: "Racheland" });
//
//	Western Family
//
export const family = linkAlbum({ href: "/releases/western.html", title: "Western Family" });
export const snowy = linkSong({ href: "/lyrics/snowy.html", title: "Beautiful Snow-White Hair" });
//
//	Waiting For The Love Bus
//
export const bus = linkAlbum({ href: "/releases/bus.html", title: "Waiting For The Love Bus" });
export const davis = linkSong({ href: "/lyrics/rosemary_davis.html", title: "Rosemary Davis' World Of Sound" });
export const bake = linkSong({ href: "/lyrics/bakersfield.html", title: "Bakersfield" });
export const mall = linkSong({ href: "/lyrics/kids_in_the_mall.html", title: "Kids In The Mall/Kaliningrad" });
export const whad = linkSong({ href: "/lyrics/whaddya.html", title: "Whaddya?" });
export const sweet = linkSong({ href: "/lyrics/sweet_water.html", title: "Sweetwater" });
export const ghost = linkSong({ href: "/lyrics/ghosts.html", title: "Ghosts" });
export const baltic = linkSong({ href: "/lyrics/baltic.html", title: "Baltic" });
export const kill = linkSong({ href: "/lyrics/killed_out.html", title: "Killed Out" });
export const ben = linkSong({ href: "/lyrics/ben.html", title: "Ben" });
export const penguin = linkSong({ href: "/lyrics/penguins.html", title: "Penguins" });
export const chang = linkSong({ href: "/lyrics/president_chang.html", title: "President Chang" });
export const stat = linkSong({ href: "/lyrics/angel_station.html", title: "Angel Station" });
//
//	Draining The Glass
//
export const drainglass = linkAlbum({ href: "/releases/drainglass.html", title: "Draining The Glass 1982 - 86" });
export const best_kisser = linkAlbum({ title: "The Best Kisser In The World" });
export const glorious = linkAlbum({ href: "/releases/glorious.html", title: "Glorious And Idiotic" });
export const glass = <b className="record_label">Glass Records</b>;
export const glass_records = glass;
export const creat = <b className="record_label">Creation Records</b>;
export const creation_records = creat;
export const fire_records = <b className="record_label">Fire Records</b>;
export const sky_records = <b className="record_label">Sky Records</b>;
//
//	Sumosonic
//
export const thisissumo = linkAlbum({ title: "This Is Sumo", href: "/releases/sumosonic_this_is_sumo.html" });
export const sumo_spacemen = linkSong({ title: "Come, Friendly Spacemen", href: "/lyrics/sumosonic_come_friendly_spacemen.html" });
export const sumo_earth = linkSong({ title: "God's Green Earth", href: "/lyrics/sumosonic_gods_green_earth.html" });
export const sumo_fern = linkSong({ title: "Fern Schnell Gut", href: "/lyrics/sumosonic_fern_schnell_gut.html" });
export const sumo_cats = linkSong({ title: "Cat's Life", href: "/lyrics/sumosonic_cats_life.html" });
export const sumo_wonderful = linkSong({ title: "Everything Is Wonderful", href: "/lyrics/sumosonic_everything_is_wonderful.html" });
export const sumo_stupid = linkSong({ title: "Stupid", href: "/lyrics/sumosonic_stupid.html" });
export const sumo_monsters = linkSong({ title: "Destroy All Monsters", href: "/lyrics/sumosonic_destroy_all_monsters.html" });
export const sumo_radio = linkSong({ title: "Radio Saigon", href: "/lyrics/sumosonic_radio_saigon.html", author: "sumosonic" });
export const sumo_business = linkSong({ title: "Business And Work", href: "/lyrics/sumosonic_business_and_work.html" });
export const sumo_monks = linkSong({ title: "Monks Of Kung Fu", href: "/lyrics/sumosonic_monks_of_kung_fu.html" });
export const sumo_sputnik = linkSong({ title: "Sputnik", href: "/lyrics/sumosonic_sputnik.html" });

//
//	b-sides
//
export const devil = linkSong({ href: "/lyrics/devil_is_my_friend.html", title: "The Devil Is My Friend" });
export const swingin = linkSingle({ href: "/releases/pygmies.html", title: "Christmas With The Pygmies" });
export const pygmie = linkSong({ href: "/lyrics/xmas_with_the_pygmies.html", title: "Christmas With The Pygmies" });
export const drink = linkSong({ href: "/lyrics/drink.html", title: "D.R.I.N.K." });
export const h2o = linkSong({ href: "/lyrics/water.html", title: "Water" });
export const fever = linkSong({ title: "Cowgirl Fever", href: "/lyrics/cowgirl_fever.html" });
export const ever = linkSong({ href: "/lyrics/forever.html", title: "Forever" });
export const jungle = linkSong({ href: "/lyrics/human_jungle.html", title: "The Human Jungle" });
export const olof = linkSong({ href: "/lyrics/olof_palme.html", title: "Olof Palme" });
export const city = linkSong({ href: "/lyrics/city_of_night.html", title: "City Of Night" });
export const jbpm = linkSong({ href: "/lyrics/jb_v_pm.html", title: "The Jazz Butcher Meets the Prime Minister" });
export const hair = linkSong({ href: "/lyrics/hairbrush_and_tank.html", title: "The Hairbrush And The Tank" });
export const almost = linkSong({ href: "/lyrics/almost_brooklyn.html", title: "Almost Brooklyn" });
export const welove = linkSingle({ href: "/releases/weloveyou.html", title: "We Love You" });
export const weloveyou = welove;
export const excel = linkSong({ href: "/lyrics/excellent.html", title: "Excellent!" });
export const vodka = linkSong({ href: "/lyrics/vodka_girls.html", title: "Vodka Girls" });
export const va_abus_21 = linkSingle({ href: "/releases/va_abus_dangereux_21.html", title: "VA: Abus Dangereux #21" });
export const va_canyoutalktothedude_1 = linkSingle({ href: "/releases/va_canyoutalktothedude_1.html", title: "VA: Can You Talk To The Dude #1" });
export const va_canyoutalktothedude_2 = linkSingle({ href: "/releases/va_canyoutalktothedude_2.html", title: "VA: Can You Talk To The Dude #2" });
export const va_creation_unreleased = linkSingle({ title: "VA: Creation Unreleased" });
export const va_shadow = linkSingle({ title: "VA: Shadow And Light", href: "/releases/va_shadow_and_substance.html" });
export const va_nationofsaints = linkSingle({ title: "VA: Nation Of Saints", href: "/releases/va_nationofsaints.html" });
export const va_creation_price = linkSingle({ title: "VA: Creation Price", href: "/releases/va_creation_price.html" });
export const va_unautomne93 = linkSingle({ title: "VA: Un Automne '93", href: "/releases/va_unautomne93.html" });
export const va_wilson_heyday = linkSingle({ title: "VA: Straight Through The Sound Barrier", href: "/releases/va_wilson_heyday.html" });
export const va_spark = linkSingle({ title: "VA: Another Spark", href: "/releases/va_another_spark.html" });
export const shock_drugs = linkSingle({ title: "She's On Drugs" });
export const va_seventeen_2 = linkSingle({ title: "VA: What A Nice Way To Turn Seventeen #2" });
export const va_seventeen_3 = linkSingle({ title: "VA: What A Nice Way To Turn Seventeen #3" });
export const bigtime_sampler = linkSingle({ title: "Big Bad Thing" });
export const bigtime_jungle = linkSingle({ href: "/releases/bigtime_jungle_smith,html", title: "The Human Jungle/Southern Mark Smith" });
export const bigtime_angels = linkSingle({ href: "/releases/bigtime_angels_kitchen,html", title: "Angels/Still In The Kitchen" });
export const va_nh_vol1 = linkSingle({ title: "VA: Now That's What I Call Northampton Vol #1" });
export const va_andy_2007 = linkSingle({ title: "VA: Uncle Andy's 2007 Christmas Album" });

//
//	recorded covers
//
export const silver_street = linkSong({ title: "Silver Street", author: "Nikki Sudden" });
export const aff = linkSong({ title: "Affection", author: "Jonathan Richman" });
export const ufo_man = linkSong({ title: "The U.F.O. Man", author: "Jonathan Richman" });
export const capt = linkSong({ title: "Tugboat Captain", author: "Dean Wareham" });
export const dance = linkSong({ title: "Do You Wanna Dance", author: "Bobby Freeman" });
export const envoy = linkSong({ title: "The Chinese Envoy", author: "John Cale" });
export const indian_summer = linkSong({ title: "Indian Summer", author: "Beats Happening" });
export const jane = linkSong({ title: "Sweet Jane", author: "Lou Reed" });
export const king = linkSong({ title: "King Of Joy", author: "Bill Drummond" });
export const knock = linkSong({ title: "Knocking On Heaven's Door", author: "Bob Dylan" });
export const leaves = linkSong({ title: "Raking Up the Leaves", author: max });
export const lost = linkSong({ href: "/lyrics/lost_in_france.html", title: "Lost In France", author: "Scott/Wolfe" });
export const mersey = linkSong({ title: "Mersey", author: "David Surkamp" });
export const moscow = linkSong({ title: "Moscow Drug Club", author: "B. B. Gabor" });
export const night = linkSong({ title: "The Long Night Starts", author: max });
export const over = linkSong({ title: "Over You", author: "Lou Reed" });
export const rainbow = linkSong({ title: "Over The Rainbow", author: "Arlen/Hamburg" });
export const road = linkSong({ title: "Roadrunner", author: "Richman" });
export const speed = linkSong({ title: "Speedy Gonzalez", author: "Hess, Kaye, Lee" });
export const talk = linkSong({ title: "Everybody's Talkin'", author: "F. Neil" });
export const uptoyou = linkSong({ title: "Leaving It Up To You", author: "John Cale" });
export const weluv = linkSong({ title: "We Love You", author: "Mick Jagger" });
//
//	guest pass 2000
//
export const cdr_guestpass2000 = linkAlbum({ href: "/releases/cdr_guestpass2000.html", title: "Guest Pass 2000" });
export const anthrax = linkSong({ title: "Doktor Anthrax", href: "/lyrics/doktor_anthrax.html" });
export const dont = linkSong({ title: "Don't Let Me Keep You", author: owen });
export const arse = linkSong({ title: "Hey Now Baby (My Arse Is On Fire)", author: max });
export const hobbu = linkSong({ title: "The Hobbu Song", href: "/lyrics/hobbu.html", author: "Robert Goodman" });
//
//	live covers
//
export const afterhours = linkSong({ title: "After Hours", author: "Velvet Underground" });
export const rosemary = linkSong({ title: "Rosemarie", author: "Max Eider" });
export const steph = linkSong({ title: "Stephanie Says", author: "Lou Reed" });
export const pover = linkSong({ title: "The Party's Over", author: "David J." });
export const skins = linkSong({ title: "Take The Skinheads Bowling (Camper Van Beethoven)" });
export const punks = linkSong({ title: "Part Time Punks", author: "The Television Personalities" });
export const biggy = linkSong({ title: "Biggest Loudest Hairiest Group Of All", author: "John Cale" });
export const inside_heart = linkSong({ title: "Inside Your Heart", author: "Velvet Underground" });
export const ache = linkSong({ title: "Heartache Following Me", author: "Jim Reeves" });
export const nature_boy = linkSong({ title: "Nature Boy", author: "Eden Ahbez" });
export const hey_star = linkSong({ title: "Hey, Star", author: wolfi });
export const satellite_of_love = linkSong({ title: "Satellite Of Love", author: "Lou Reed" });
export const rocking_in_the_free_world = linkSong({ title: "Rocking In The Free World", author: "Neil Young" });
export const september_gurls = linkSong({ title: "September Gurls", author: "Alex Chilton" });
export const Stop_This_City = linkSong({ title: "Stop This City", author: "David J." });
export const Tread_Water = linkSong({ title: "Tread Water", author: "De La Soul" });
export const Just_One_Victory = linkSong({ title: "Just One Victory", author: "Todd" });
//
//	unreleased tracks
//
export const wildlife = linkSong({ title: "Wildlife", href: "/lyrics/wildlife.html" });
//
//	albums
//
export const nons = linkAlbum({ href: "/releases/nonsense.html", title: "Bloody Nonsense" });
export const closet = linkAlbum({ href: "/releases/closet.html", title: "Edward's Closet" });
export const gift1 = linkAlbum({ href: "/releases/gift1.html", title: "The Gift of Music" });
export const gift2 = linkAlbum({ href: "/releases/gift2.html", title: "Big Questions" });
export const uncond = linkAlbum({ href: "/releases/unconditional.html", title: "Unconditional" });
export const damn = linkAlbum({ href: "/releases/blackeg.html", title: "The Black Eg" });

export const human = linkSingle({ href: "/releases/jungle.html", title: "The Human Jungle" });
export const girlgo = linkSingle({ href: "/releases/girl.html", title: "Girl-Go" });
export const rmen = linkSingle({ href: "/releases/men.html", title: "Real Men" });
export const smith = linkSingle({ href: "/releases/smith.html", title: "Southern Mark Smith" });
export const runner = linkSingle({ href: "/releases/roadrunner.html", title: "Roadrunner" });
export const hard = linkSingle({ href: "/releases/hard.html", title: "Hard" });
export const may = linkSingle({ href: "/releases/mayi.html", title: "Speedy Gonzalez" });
export const angel = linkSingle({ href: "/releases/angels.html", title: "Angels" });
export const zomby = linkSingle({ href: "/releases/zombie.html", title: "Zombie Love" });
export const affect = linkSingle({ href: "/releases/va_another_spark.html", title: "Affection" });
export const shir = linkSingle({ href: "/releases/shirley.html", title: "Shirley Maclaine" });
export const marnie = linkSingle({ href: "/releases/marnie.html", title: "Marnie" });
export const water = linkSingle({ href: "/releases/sweet_water.html", title: "Sweetwater" });

export const thought = linkSong({ title: "Thought for the Day" });
export const hardy = linkSong({ href: "/lyrics/hard.html", title: "Hard" });
export const mayi = linkSong({ title: "May I", author: "Ayers" });

//
//	illuminate
//
export const ill = linkAlbum({ href: "/releases/illuminate.html", title: "Illuminate" });
export const violent = linkSingle({ href: "/releases/violent.html", title: "&#161;Excellent! The Violent Years" });
export const _16yr = linkSingle({ href: "/releases/sixteen_years.html", title: "Sixteen Years" });
export const sixteen_years = linkSingle({ href: "/releases/sixteen_years.html", title: "Sixteen Years" });
export const cute = linkSong({ href: "/lyrics/cute_submarines.html", title: "Cute Submarines" });
export const _16 = linkSong({ href: "/lyrics/sixteen_years.html", title: "Sixteen Years" });
export const elephant_man = linkSong({ title: "Elephant Man" });
export const eleph = linkSong({ href: "/lyrics/great_elephants.html", title: "A Great Visitation Of Elephants" });
export const enos = linkSong({ href: "/lyrics/when_eno_sings.html", title: "When Eno Sings" });
export const ugly = linkSong({ href: "/lyrics/ugly_song.html", title: "The Ugliest Song In The World" });
export const scarlet = linkSong({ href: "/lyrics/scarlett.html", title: "Scarlett" });
export const beetle = linkSong({ href: "/lyrics/beetle_george.html", title: "Beetle George" });
export const cops = linkSong({ href: "/lyrics/cops_and_hospitals.html", title: "Cops And Hospitals" });
export const truck = linkSong({ href: "/lyrics/truck_o_fear.html", title: "Truck Of Fear" });
export const dean = linkSong({ href: "/lyrics/blues_for_dean_read.html", title: "Blues For Dean Read" });
export const sumo = linkSong({ href: "/lyrics/waiting_for_sumo.html", title: "Waiting For Sumo" });
export const snakey = linkSong({ href: "/lyrics/old_snakey.html", title: "Old Snakey" });
export const land = linkSong({ href: "/lyrics/land.html", title: "Land" });
export const lulu = linkSong({ href: "/lyrics/lulus_nightmare.html", title: "Lulu's Nightmare" });
export const surf = linkSong({ href: "/lyrics/surf_gear_in_idaho.html", title: "Surf Gear In Idaho" });
export const _true = linkSong({ href: "/lyrics/true_stories.html", title: "True Stories" });

//
//	rotten soul
//
export const rotten = linkAlbum({ href: "/releases/rotten.html", title: "Rotten Soul" });
export const bigcats = linkSong({ href: "/lyrics/big_cats.html", title: "Big Cats" });
export const comeon = linkSong({ href: "/lyrics/come_on_marie.html", title: "Come On, Marie" });
export const baby = linkSong({ href: "/lyrics/baby_its_you.html", title: "Baby, It's You" });
export const siberia = linkSong({ href: "/lyrics/mister_siberia.html", title: "Mister Siberia" });
export const tough = linkSong({ href: "/lyrics/tough_priest.html", title: "Tough Priest" });
export const sleepwalking = linkSong({ href: "/lyrics/sleepwalking.html", title: "Sleepwalking" });
export const niagara = linkSong({ href: "/lyrics/niagara.html", title: "Niagara" });
export const adore = linkSong({ href: "/lyrics/the_one_you_adore.html", title: "The One You Adore" });
export const clyde = linkSong({ href: "/lyrics/the_ballad_of_tiny_and_clyde.html", title: "The Ballad Of Tiny And Clyde" });
export const hatelove = linkSong({ href: "/lyrics/i_hate_love.html", title: "I Hate Love" });
export const callme = linkSong({ href: "/lyrics/call_me.html", title: "Call Me" });
export const morphine = linkSong({ href: "/lyrics/diamorphine.html", title: "Diamorphine" });
//
//	gentlemen adventurers
//
export const adventurers = linkAlbum({ href: "/releases/last_of_the_gentleman_adventurers.html", title: "Last of the Gentleman Adventurers" });
export const animals = linkSong({ href: "/lyrics/animals.html", title: "Animals" });
export const shame_about_you = linkSong({ href: "/lyrics/shame_about_you.html", title: "Shame About You" });
export const last_of_the_gentleman_adventurers = linkSong({ href: "/lyrics/last_of_the_gentleman_adventurers.html", title: "Last of the Gentleman Adventurers" });
export const tombe = linkSong({ href: "/lyrics/tombe_dans_les_pomes.html", title: "Tombé dans les pommes" });
export const count_me_out = linkSong({ href: "/lyrics/count_me_out.html", title: "Count Me Out" });
export const single_saints = linkSingle({ href: "/releases/all_the_saints.html", title: "All the Saints" });
export const all_the_saints = linkSong({ href: "/lyrics/all_the_saints.html", title: "All the Saints" });
export const mercy = linkSong({ href: "/lyrics/mercy.html", title: "Mercy" });
export const black_raoul = linkSong({ href: "/lyrics/black_raoul.html", title: "Black Raoul" });
export const shakey = linkSong({ href: "/lyrics/shakey.html", title: "Shakey" });
export const solar_core = linkSong({ href: "/lyrics/solar_core.html", title: "Solar Core" });
export const saints_prayer = linkSong({ href: "/lyrics/saints_prayer.html", title: "Saints Prayer" });
//
//	Highest In The Land
//
export const highest = linkAlbum({ href: "/releases/highest_in_the_land.html", title: "The Highest in the Land" });
export const melanie = linkSong({ title: "Melanie Hargreaves' Father's Jaguar", href: "/lyrics/melanie_hargreave.html" });
export const time = linkSong({ href: "/lyrics/time.html", title: "Time" });
export const madness = linkSong({ title: "Sea Madness", href: "/lyrics/sea_madness.html" });
export const never = linkSong({ title: "Never Give Up", href: "/lyrics/never_give_up.html" });
export const amalfi = linkSong({ title: "Amalfi Coast May 1963", href: "/lyrics/amalfi_coast.html" });
export const fumes = linkSong({ title: "Running on Fumes", href: "/lyrics/running_on_fumes.html" });
export const thehighest = linkSong({ title: "The Highest in the Land", href: "/lyrics/highest_in_the_land.html" });
export const sebastian = linkSong({ title: "Sebastian's Medication", href: "/lyrics/sebastians_medication.html" });
export const goodnight = linkSong({ title: "Goodnight Sweetheart", href: "/lyrics/goodnight_sweetheart.html" });
//
//	Fire Records box-sets
//
export const fire_wasted = linkAlbum({ href: "/releases/fire_wasted.html", title: "The Wasted Years" });
export const fire_violent = linkAlbum({ href: "/releases/fire_violent.html", title: "The Violent Years" });
export const fire_cholmondley = linkAlbum({ href: "/releases/fire_cholmondley.html", title: "Dr Cholmondley Repents" });
//
//	sumo
//
export const sumosonic = linkExternal("https://www.sumosonic.com", "Sumosonic");
export const friendly = linkSong({ title: "Come, Friendly Spacemen" });

export const lunch = linkAlbum({ href: "/releases/free_lunch.html", title: "The Jazz Butcher's Free Lunch" });
export const cake = linkAlbum({ href: "/releases/cake_city.html", title: "Cake City" });

export const NME = <b>NME</b>;	// TODO - should search /press, eventually
//
//	places
//
export const USA = "USA";
export const DE = "Germany";
export const SW = "Switzerland";
export const HO = "Holland";
export const ITALIA = "Italy";
export const NOR = "Norway";
export const FR = "France";
export const CA = "California";
export const UK = "UK";
export const AU = "Austria";
export const ES = "Spain";
export const CAN = "Canada";
export const ONT = "Ontario";
export const NYC = "New York";
export const NH = "Northampton";
export const BELG = "It's Got To Be Belgium (Slurp's Wino Bar)";
export const HAM = "Hamburg";
export const FRANK = "Frankfurt";
export const PO = "Onkel P&ouml;";
export const LO = "London";
export const TOR = "Toronto";
export const AMST = "Amsterdam";
export const PAR = "Paris";
export const CHI = "Chicago";
export const LA = "Los Angeles";
export const SF = "San Francisco";
export const WA = "Washington";
export const AX = "Lounge Ax";
export const METRO = "Cabaret Metro";
export const CUBBY = "Cubby Bear";
export const FIDDLER = 'Mean Fiddler';
export const TOWER = <>Tower Records <Image width= {126} height={57} alt="[logo]" src="https://v1.jazzbutcher.com/images/tower.gif" /></>
export const KCRW = linkExternal("https://www.kcrw.org", "KCRW");
export const KTBS = linkExternal("http://www.utexas.edu/students/kvrx", "KTBS");
export const WNUR = linkExternal("http://www.wnur.org", <>WNUR<Image width= {114} height={77} alt="[logo]" src="https://v1.jazzbutcher.com/images/wnur.gif" /></>);
export const WHPK = linkExternal("http://whpk.uchicago.edu", "WHPK");
export const WXYC = linkExternal("http://www.wxyc.org", <>WXYC <Image width= {129} height={56} alt="[logo]" src="https://v1.jazzbutcher.com/images/wxyc.gif" /></>);
export const CBC = <Image width= {100} height={100} alt="[CBC]" src="https://v1.jazzbutcher.com/images/cbc.gif" />
//
//	bootlegging codes
//
export const code = "(out of 10)";
export const room = <span className="recording_source">Room</span>;
export const d = <span className="recording_source">Soundboard</span>;
export const r = <span className="recording_source">Radio Recording</span>;
export const w = <span className="recording_media">Walkman</span>;
export const DAT = <span className="recording_media">DAT</span>;
export const VHS = <span className="recording_media">NTSC VHS</span>;
export const PZM = <span className="recording_tech">PZM mics + soundboard mixed live</span>;
export const mono = <span className="recording_channels">mono</span>;
//export const q(g)	Quality: <span className="recording_quality">${g}</span> ${code}
//export const p(g)	Performance: <span className="recording_peformance">${g}</span>
//export const g(g)	Generation: <span className="recording_generation">${g}</span>
//export const i(g)	Interest: <span className="recording_interest">${g}</span> ${code}
//export const g_details(g)	Details: <span className="recording_details">${g}</span>
export const yuck = <span className="recording_quality">Not so good quality...</span>;
export const mt = <span className="recording_generation">Master Copy</span>;

export const mapActs: {[key: string]: string} = {
	'Curtis_E_Johnson': 'curt',
	'David_J': 'dj',
	'E-Man': 'curt_eman',
	'Joe_Woolley': 'joe_woolley',
	'Owen_Jones': 'owen',
	'Peter_Astor': 'astor',
	'Peter_Crouch': 'pete',
	'Robyn_Hitchcock': 'hitch',
	'Spectrum': 'spect',
	'Syd_Meats': 'syd',
	'Sydney_Meats': 'syd',
	'The_Black_Watch': 'bwatch',
	'The_Blue_Aeroplanes': 'aero',
	'The_Woodentops': 'tops',
	'Wolfgang_Tschegg': 'wolfi',
};

export const mapPerformers: {[key: string]: string} = {
	'Greenwood_Goulding': 'gould',
	'Joe_Allen': 'joea',
	'Joe_Foster': 'joe',
	'Tim_Burrell': 'burrell',
	'Agent_Wilson': 'russ_agent',
	'Alex_Green': 'green',
	'Alex_Lee': 'lix',
	'Alice_Thompson': 'at',
	'Blair_MacDonald': 'blair',
	'B-Man': 'botty_bman',
	'Cole_Coonce': 'coonce',
	'Colin_Harris': 'colin',
	'Curtis_E_Johnson': 'curt',
	'Dave_Henderson': 'hend',
	'Dave_Morgan': 'morgan',
	'David_J': 'dj',
	'Dooj_Wilkinson': 'dooj',
	'Erol_Suleyman': 'erol',
	'Felix_Ray': 'felix',
	'Gabriel_Turner': 'gab',
	'Gerard_Langley': 'gerard',
	'G-Man': 'steve_gordon_gman',
	'Ian_Botterill': 'botty',
	'MC_Bott': 'botty',
	'Mister_B': 'sumo_botty',
	'Ian_Sturgess': 'is',
	'Joel_Harries': 'joel_harries',
	'Joe_Woolley': 'joe_woolley',
	'David_E_Barker': 'barker',
	'John_A_Rivers': 'rivers',
	'Martin_Stebbing': 'rev',
	'Iain_OHiggins': 'iain',
	'Jonny_Mattock':	'jonny_mattock',
	'Julian_Poole': 'jules',
	'Kathie_McGinty': 'kathie',
	'Kathie_M': 'sumo_kathie',
	'Kathy_Schaer': 'kathy',
	'Special_K': 'sumo_kathy',
	'Kevin_Haskins': 'hask',
	'Kizzy_OCallaghan': 'kizzy',
	'Laurence_OKeefe': 'larry',
	'Lionel_Brando': 'lb',
	'Mike_Novakovic': 'mike_novakovic',
	'Louis_Leroi': 'll',
	'Marc_Hadley': 'mark_hadley',
	'Max_Eider': 'max',
	'Mick_Packwood': 'mick',
	'Misery_Wilson': 'kathy_misery',
	'Nick_Burson': 'nick',
	'Owen_Jones': 'owen',
	'Pat_Beirne': 'beirne',
	'Pat_Fish': 'pat',
	'Deirdre_ODonoghue': 'deirdre',
	'Brent_Bambury': 'brent',
	'Paul_Hookham': 'hook',
	'Paul_Mulreany': 'paul',
	'Peter_Astor': 'astor',
	'Peter_Crouch': 'pete',
	'Richard_Formby': 'richard',
	'Richard_Lohan': 'lohan',
	'Rolo_McGinty': 'rolo',
	'Agent_Cooper': 'sumo_russ',
	'Agent_Russell_Cooper': 'sumo_russ',
	'Russell_Cooper': 'russ',
	'Simon_Taylor': 'simon',
	'Sonic_Boom': 'sonic',
	'Steve_Beswick': 'steve_beswick',
	'Karel_Von_Dämmerung': 'karel',
	'Otto_Von_Dämmerung': 'otto',
	'Emil_Von_Dämmerung': 'emil',
	'Steve_Garofalo': 'garofalo',
	'Steve_Gordon': 'steve_gordon',
	'Steve_Musgrove': 'sm',
	'Steve_New': 'stevenew',
	'Nick_Bandy': 'nick_bandy',
	'Lee_Brooks': 'lee_brooks',
	'Pat_Kenneally': 'pat_kenneally',
	'Steve_Valentine': 'steve',
	'Sumishta_Brahm': 'sumishta',
	'Tim_Harries': 'tim_harries',
	'Headstone': 'sumo_pat',
	'Wilson_Headstone': 'pat_headstone',
	'Wolfgang_Tschegg': 'wolfi',
	'Max_Read': 'max_read',
	'Anita_Allbright': 'anita_allbright',
	'Mark_Refoy': 'mark_refoy',
	'Mitch_Jenkins': 'mitch',
	'Emerson_Hunt': 'emerson_hunt',
	'Martin_K_Daley': 'martin_k_daley',
};

export const mapSongs: {[key: string]: string} = {
	"A_Great_Visitation_Of_Elephants": "eleph",
	"Affection": "aff",
	"After_Hours": "afterhours",
	"After_The_Great_Euphrates": "euph",
	"All_the_Saints": "all_the_saints",
	"All_The_Saints": "all_the_saints",
	"Almost_Brooklyn": "almost",
	"Amalfi_Coast_May_1963": "amalfi",
	"Angel_Station": "stat",
	"Angels": "angels",
	"Animals": "animals",
	"Baby_Its_You": "baby",
	"Bad_Dream_Lover": "dream",
	"Bakersfield": "bake",
	"Baltic": "baltic",
	"Bath_Of_Bacon": "bath",
	"Battle_Time_Now": "wilson_battle_time",
	"Beautiful_Snow-White_Hair": "snowy",
	"Beetle_George": "beetle",
	"Ben": "ben",
	"Bicycle_Kid": "kid",
	"Big_Bad_Thing": "bigbad",
	"Big_Cats": "bigcats",
	"Big_Old_Wind": "wind",
	"Big_Saturday": "sat",
	"Bigfoot_Motel": "foot",
	"Biggest_Loudest_Hairiest_Group_Of_All": "biggy",
	"Black_Raoul": "black_raoul",
	"Blame": "blame",
	"Blues_For_Dean_Read": "dean",
	"Buffalo_Shame": "shame",
	"Buffalo_Sniper": "wilson_buffalo_sniper",
	"Burglar_Of_Love": "burg",
	"Burn_Hollywood,_Burn": "wilson_burn_hollywood_burn",
	"Business_And_Work": "sumo_business",
	"Call_Me": "callme",
	"Caroline_Wheelers_Birthday_Present": "wheel",
	"Cats_Life": "sumo_cats",
	"Chickentown": "chick",
	"Chinatown": "china",
	"Christmas_With_The_Pygmies": "pygmie",
	"City_Of_Night": "city",
	"Come_Friendly_Spacemen": "sumo_spacemen",
	"Come_On_Marie": "comeon",
	"Conspiracy": "consp",
	"Cops_And_Hospitals": "cops",
	"Count_Me_Out": "count_me_out",
	"Cowgirl_Fever": "fever",
	"Critters": "wilson_critters",
	"Cute_Submarines": "cute",
	"DRINK": "drink",
	"Dark_Agenda": "wilson_dark_agenda",
	"Daycare_Nation": "daycare",
	"Death_Dentist": "dentist",
	"Destroy_All_Monsters": "sumo_monsters",
	"Diamorphine": "morphine",
	"Do_The_Bubonic_Plague": "plague",
	"Do_You_Wanna_Dance": "dance",
	"Doktor_Anthrax": "anthrax",
	"Domestic_Animal": "domest",
	"Dont_Let_Me_Keep_You": "dont",
	"Down_The_Drain": "drain",
	"Elephant_Man": "elephant_man",
	"Every_Saturday_Night": "wilson_saturday_night",
	"Everybodys_Talkin": "talk",
	"Everything_Is_Wonderful": "sumo_wonderful",
	"Excellent!": "excel",
	"Falling_In_Love": "fall",
	"Fern_Schnell_Gut": "sumo_fern",
	"Fertiliser": "fert",
	"Filter_Kings": "wilson_filter_kings",
	"Forever": "ever",
	"Get_It_Wrong": "wrong",
	"Ghosts": "ghost",
	"Girl-Go": "go",
	"Girlfriend": "gf",
	"Girls_Say_Yes": "girls",
	"Girls_Who_Keep_Goldfish": "gold",
	"Gloop_Jiving": "gloop",
	"Gods_Green_Earth": "sumo_earth",
	"Goodnight_Sweetheart": "goodnight",
	"Grey_Flannelette": "flan",
	"Grooving_In_The_Bus_Lane": "groove",
	"Hard": "hardy",
	"Harlan": "harlan",
	"Heartache_Following_Me": "ache",
	"Hey_Now_Baby_(My_Arse_Is_On_Fire)": "arse",
	"Hey_Star": "hey_star",
	"Hippy_Shit": "wilson_hippy_shit",
	"Holiday": "holiday",
	"Honey": "honey",
	"Hungarian_Love_Song": "hung",
	"Hysteria": "hyst",
	"I_Hate_Love": "hatelove",
	"I_Need_Meat": "meat",
	"Indian_Summer": "indian_summer",
	"Inside_Your_Heart": "inside_heart",
	"Istanbul_Connection": "wilson_istanbul_connection",
	"It_Has_To_Be_You": "you",
	"Jazz_Butcher_-v-_Count_Dracula": "count",
	"Jazz_Butcher_Theme": "jbtheme",
	"Just_Like_Betty_Page": "betty",
	"Just_Like_Bettie_Page": "betty",
	"Just_One_Victory": "Just_One_Victory",
	"Keeping_The_Curtains_Closed": "keep",
	"Kids_In_The_Mall/Kaliningrad": "mall",
	"Killed_Out": "kill",
	"King_Of_Joy": "king",
	"Knocking_On_Heavens_Door": "knock",
	"La_Mer": "mer",
	"Land": "land",
	"Last_of_the_Gentleman_Adventurers": "last_of_the_gentleman_adventurers",
	"Leaving_It_Up_To_You": "uptoyou",
	"Line_Of_Death": "lineo",
	"Living_In_A_Village": "village",
	"Looking_For_Lot_49": "_49",
	"Lost_In_France": "lost",
	"Love_Kittens": "kitten",
	"Lulus_Nightmare": "lulu",
	"Marnie": "marn",
	"May_I": "mayi",
	"Melanie_Hargreaves_Fathers_Jaguar": "melanie",
	"Mercy": "mercy",
	"Mersey": "mersey",
	"Mind_Like_A_Playgroup": "mind",
	"Mister_Siberia": "siberia",
	"Monkeyface": "monkey",
	"Monks_Of_Kung_Fu": "sumo_monks",
	"Moscow_Drug_Club": "moscow",
	"Mr_Odd": "odd",
	"My_Desert": "desert",
	"My_Zeppelin": "zeppo",
	"Nature_Boy": "nature_boy",
	"Never_Give_Up": "never",
	"New_Invention": "invent",
	"Next_Move_Sideways": "next",
	"Niagara": "niagara",
	"Nightmare_Being": "being",
	"No_Winners": "wilson_no_winners",
	"Nothing_Special": "nada",
	"Old_Snakey": "snakey",
	"Olof_Palme": "olof",
	"Only_A_Rumour": "rumour",
	"Our_Friends_The_Filth": "filth",
	"Out_Of_Touch": "touch",
	"Over_The_Rainbow": "rainbow",
	"Over_You": "over",
	"Panic_In_Room_109": "panic",
	"Part_Time_Punks": "punks",
	"Partytime": "party",
	"Penguins": "penguin",
	"Peter_Lorre": "lorre",
	"Pineapple_Tuesday": "tues",
	"Play_It_All_Night_Long": "wilson_play_it_all_night_long",
	"Poisoned_By_Food": "poison",
	"Police_Chief": "wilson_police_chief",
	"President Chang": 'chang',
	"President_Chang": "chang",
	"President_Reagans_Birthday_Present": "reagan",
	"Quality_People": "wilson_quality_people",
	"Racheland": "rachel",
	"Radio_Saigon": "sumo_radio",
	"Rain": "rain",
	"Raking_Up_the_Leaves": "leaves",
	"Real_Men": "men",
	"Rebecca_Wants_Her_Bike_Back": "becky",
	"Red_Pets": "pets",
	"Roadrunner": "road",
	"Rocking_In_The_Free_World": "rocking_in_the_free_world",
	"Rosemarie": "rosemary",
	"Rosemary_Davis_World_Of_Sound": "davis",
	"Running_On_Fumes": "fumes",
	"Saints_Prayer": "saints_prayer",
	"Satellite_Of_Love": "satellite_of_love",
	"Scarlett": "scarlet",
	"Sea_Madness": "madness",
	"Sebastians_Medication": "sebastian",
	"Secret_Government": "wilson_secret_government",
	"September_Gurls": "september_gurls",
	"Sex_Engine": "engine",
	"Shakey": "shakey",
	"Shame_About_You": "shame_about_you",
	"Shes_A_Yo-Yo": "yo",
	"Shes_On_Drugs": "drugs",
	"Shirley_Maclaine": "shirl",
	"Sister_Death": "sis",
	"Sixteen_Years": "_16",
	"Sleepwalking": "sleepwalking",
	"Solar_Core": "solar_core",
	"Soul_Happy_Hour": "hour",
	"South_America": "sa",
	"Southern_Mark_Smith": "smiff",
	"Speedy_Gonzalez": "speed",
	"Spooky": "spooky",
	"Sputnik": "sumo_sputnik",
	"Stephanie_Says": "steph",
	"Still_&_All": "still",
	"Still_In_The_Kitchen": "kitch",
	"Stop_This_City": "Stop_This_City",
	"Stupid": "sumo_stupid",
	"Surf_Gear_In_Idaho": "surf",
	"Susie": "sue",
	"Sweet_Jane": "jane",
	"Sweetwater": "sweet",
	"Swell": "swell",
	"Take_The_Skinheads_Bowling_(Camper_Van_Beethoven)": "skins",
	"The_Ballad_Of_Tiny_And_Clyde": "clyde",
	"The_Basement": "baset",
	"The_Best_Way": "best",
	"The_Chinese_Envoy": "envoy",
	"The_Devil_Is_My_Friend": "devil",
	"The_Good_Ones": "good",
	"The_Hairbrush_And_The_Tank": "hair",
	"The_Highest_in_the_Land": "thehighest",
	"The_Hobbu_Song": "hobbu",
	"The_Human_Jungle": "jungle",
	"The_Jazz_Butcher_Meets_the_Prime_Minister": "jbpm",
	"The_Long_Night_Starts": "night",
	"The_New_World": "world",
	"The_One_You_Adore": "adore",
	"The_Onion_Field": "onion",
	"The_Partys_Over": "pover",
	"Silver_Street": "silver_street",
	"The_UFO_Man": "ufo_man",
	"The_Ugliest_Song_In_The_World": "ugly",
	"The_Word_I_Was_Looking_For": "word",
	"Thing": "thing",
	"Thought_for_the_Day": "thought",
	"Time": "time",
	"Tombé_dans_les_pommes": "tombe",
	"Tough_Priest": "tough",
	"Tread_Water": "Tread_Water",
	"Truck_Of_Fear": "truck",
	"True_Stories": "_true",
	"Tugboat_Captain": "capt",
	"Turtle_Bait": "bait",
	"Turtlebait": "bait",
	"Two_Dragons": "wilson_two_dragons",
	"Vienna_Song": "vienna",
	"Vodka_Girls": "vodka",
	"Waiting_For_Sumo": "sumo",
	"Walk_With_The_Devil": "walk",
	"Water": "h2o",
	"We_Love_You": "weluv",
	"Whaddya?": "whad",
	"Whats_The_Matter_Boy?": "boy",
	"When_Eno_Sings": "enos",
	"Whitfield_Sarah_&_The_Birchfield_Road_Affair": "sarah",
	"Who_Loves_You_Now?": "who",
	"Wildlife": "wildlife",
	"Zombie_Love": "zombie",
};

/*
	THE BIG IDEA
	given an input string that contains {{XX}} lookup identifiers, perform
	direct variable lookup and/or song/performer lookup mappings

	{{Pat Fish}} and {{pat}} should both expand

 	dumb-case scenario:
	loop thrugh all map* objects and string match in `str`.
	if there's a hit, then perform the expansion.
 */
export const AutoLink = (str?: string) => {
	
}

export const AutoLinkSong = (str?: string) => {
  if (!str?.length) return;
	const lookup = str.replace("'", '').replace(/\./g, '').replace(',', '').replace(/\'/g, '').replace(/ /g, '_');
	const found = mapSongs[lookup];
	if (!found) return lookup?.replace(/_/g, ' ');
	return expand(found);
}

export const AutoLinkPlayer = (str?: string) => {
  if (!str?.length) return;
	const pattern = /\[\[person:(.*?)\]\]/;
	const match = str.match(pattern);
	if (match) {
		const lookup = match[1]?.replace("'", '').replace('.', '');
		const found = lookup && mapPerformers[lookup];
		if (!found) return lookup?.replace(/_/g, ' ');
		return expand(found);
	}
	return AutoLinkAct(str);	// maybe it is an Act?
}

export const AutoLinkAct = (str?: string) => {
  if (!str?.length) return;
	const pattern = /\[\[act:(.*?)\]\]/;
	const match = str.match(pattern);
	if (match) {
		const lookup = match[1]?.replace("'", '')?.replace('.', '');
		const found = lookup && mapActs[lookup];
		if (!found) return lookup?.replace(/_/g, ' ');
		return expand(found);
	}
	const lookup = str.replace("'", '').replace(/\./g, '').replace(',', '').replace(/\'/g, '').replace(/ /g, '_');
	const found = mapActs[lookup];
	if (!found) return str?.replace(/_/g, ' ');
	return expand(found);
}

export const expand = (str?: string, treatAsHTML: boolean = false) => {
	const doIt = (str?: string) => {
		let expanded = true;
		const tryExpand = (str?: string) => {
			if (str) {
				if (str[0] === '(' || parseInt(str, 10) > 0) {
					// leave numbers along
					expanded = false;
					return str;
				}
				try {
					return eval(str);
				} catch (e) {
					expanded = false;
				}
			}
			return str;
		}

		const expansion = tryExpand(str);

		if (treatAsHTML) {
			// if expansion worked, then just return the expansion.
			// otherwise, assume we're passing back something that's already HTML
			return (expanded) ? expansion : <span dangerouslySetInnerHTML= {{ __html: expansion }} />;
		} else {
			return (expanded) ? expansion : str;
		}
	}
	return doIt(str?.trim());
}

export const	people = [
	{ lookup: "anita_allbright", name:"Anita Allbright" },
	{ lookup: "astor", href: "peter_astor.html", name: "Peter Astor" },
	{ lookup: "at", href: "alice_thompson.html", name: "Alice Thompson" },
	{ lookup: "barker", href: "david_barker.html", name: "David E. Barker" },
	{ lookup: "beirne", href: "pat_beirne.html", name: "Pat Beirne" },
	{ lookup: "blair", name: "Blair MacDonald" },
	{ lookup: "botty", href: "ian_botterill.html", name: "Ian Botterill" },
	{ lookup: "botty_bman", href: "ian_botterill.html", name: "B-Man" },
	{ lookup: "brent", name: "Brent Bambury" },
	{ lookup: "burrell", href: "tim_burrell.html", name: "Tim Burrell" },
	{ lookup: "butch", name: "The Butcher" },
	{ lookup: "terry", name: "Terry Walpole", act: true },
	{ lookup: "tom_hall", href: "/tomhall", name: "Tom Hall", act: true },
	{ lookup: "colin", href: "colin.html", name: "Colin Harris", images: "/images/egdebut;;David Whittemore;;;;1994-06-01;;Colin, being abused by Karel$$" },
	{ lookup: "curt", href: "curtis_johnson.html", name: "Curtis E. Johnson" },
	{ lookup: "curt_eman", href: "curtis_johnson.html", name: "E-Man" },
	{ lookup: "damm", href: "von_dammerung.html", name: "Von Dämmerung" },
	{ lookup: "deirdre", name: "Deirdre O'Donoghue" },
	{ lookup: "del", href: "david_whittemore.html", name: "David Whittemore" },
	{ lookup: "dj", href: "david_j.html", name: "David J." },
	{ lookup: "dooj", href: "dooj_wilkinson.html", name: "Dooj Wilkinson" },
	{ lookup: "erol", name: "Erol Suleyman" },
	{ lookup: "felce", name: "Dave Felce" },
	{ lookup: "felix", href: "felix_ray.html", name: "Felix Ray" },
	{ lookup: "gab", href: "gabriel_turner.html", name: "Gabriel Turner" },
	{ lookup: "garofalo", href: "steve_garofalo.html", name: "Steve Garofalo" },
	{ lookup: "gerard", name: "Gerard Langley" },
	{ lookup: "gould", href: 'greenwood_goulding.html', name: "Greenwood Goulding" },
	{ lookup: "green", href: "alex_green.html", name: "Alex Green" },
	{ lookup: "hask", href: "kevin_haskins.html", name: "Kevin Haskins" },
	{ lookup: "hend", href: "dave_henderson.html", name: "Dave Henderson" },
	{ lookup: "hook", name: "Paul Hookham" },
	{ lookup: "iain", href: "iain_ohiggins.html", name: "Iain O'Higgins" },
	{ lookup: "indge", href: "alastair_indge.html", name: "Alastair Indge" },
	{ lookup: "is", href: 'ian_sturgess.html', name: "Ian Sturgess" },
	{ lookup: "joby", href: 'joby_palmer.html', name: "Joby Palmer" },
	{ lookup: "joe", href: 'joe_foster.html', name:"Joe Foster" },
	{ lookup: "tony", href: 'tony_foster.html', name:"Tony Foster" },
	{ lookup: "joe_woolley", name: "Joe Woolley", act: true },
	{ lookup: "joea", href: "joe_allen.html", name: "Joe Allen" },
	{ lookup: "joel_harries", href: "joel_harries.html", name: "Joel Harries" },
	{ lookup: "john_silver", name: "John Silver" },
	{ lookup: "jonny_mattock", href: "jonny_mattock.html", name: "Jonny Mattock" },
	{ lookup: "jules", href: "julian_poole.html", name: "Julian Poole" },
	{ lookup: "karel", href: "von_dammerung.html", name: 'Karel Von Dämmerung' },
	{ lookup: "otto", href: "von_dammerung.html", name: 'Otto Von Dämmerung' },
	{ lookup: "emil", href: "von_dammerung.html", name: 'Emil Von Dämmerung' },
	{ lookup: "kathie", href: "kathie_mcginty.html", name: "Kathie McGinty" },
	{ lookup: "kathy", href: "kathy_schaer.html", name: "Kathy Schaer" },
	{ lookup: "kathy_misery", href: "kathy_schaer.html", name: "Misery Wilson" },
	{ lookup: "kevin", name: "Kevin Komoda" },
	{ lookup: "kizzy", href: "kizzy_ocallaghan.html", name: "Kizzy O'Callaghan" },
	{ lookup: "larry", href: "laurence_okeefe.html", name: "Laurence O'Keefe" },
	{ lookup: "lb", href: "david_barker.html", name: "Lionel Brando" },
	{ lookup: "lix", href: "alex_lee.html", name: "Alex Lee" },
	{ lookup: "martin_k_daley", name: "Martin K Daley" },
	{ lookup: "mark_hadley", href: "marc_hadley.html", name: "Mark Hadley" },
	{ lookup: "ll", href: "marc_hadley.html", name: "Louis Leroi" },
	{ lookup: "lohan", name: "Richard Lohan" },
	{ lookup: "mark_refoy", href: "mark_refoy.html", name: "Mark Refoy" },
	{ lookup: "max", href: "max_eider.html", name: "Max Eider" },
	{ lookup: "max_read", name: "Max Read" },
	{ lookup: "mercer", href: "https://www.mickmercer.com", name: "Mick Mercer" },
	{ lookup: "mick", name: "Mick Packwood" },
	{ lookup: "mike_novakovic", name: "Mike Novakovic" },
	{ lookup: "mitch", href: "mitch_jenkins.html", name: "Mitch Jenkins" },
	{ lookup: "emerson_hunt", href: "emerson_hunt.html", name: "Emerson Hunt" },
	{ lookup: "morgan", href: "dave_morgan.html", name: "Dave Morgan" },
	{ lookup: "nick", href: "nick_burson.html", name: "Nick Burson" },
	{ lookup: "owen", href: "owen_jones.html", name: "Owen Jones" },
	{ lookup: "pat", href: "https://patfish.com", name: "Pat Fish" },
	//{ lookup: "pat_fish: person_pat,
	//{ lookup: "duo: <>{pat}, {max}</>
	//{ lookup: "solo: pat;
	//{ lookup: "davidj: dj;
	{ lookup: "pat_headstone", href: "https://patfish.com", name: "Wilson Headstone" },
	{ lookup: "paul", href: "paul_mulreany.html", name: "Paul Mulreany" },
	{ lookup: "pete", href: "peter_crouch.html", name: "Peter Crouch" },
	{ lookup: "rev", href: "martin_stebbing.html", name: "Martin Stebbing", aka: "Rev. Botus Whiteblood Fleming" },
	{ lookup: "richard", href: "richard_formby.html", name: "Richard Formby" },
	{ lookup: "rivers", href: "john_rivers.html", name: "John A. Rivers" },
	{ lookup: "rodney", href: "rodney_allen.html", name: "Rodney Allen" },
	{ lookup: "rolo", href: "rolo_mcginty.html", name: "Rolo McGinty" },
	{ lookup: "russ", href: "russell_cooper.html", name: "Russell Cooper" },
	{ lookup: "russ_agent", href: "russell_cooper.html", name: "Agent Wilson" },
	{ lookup: "simon", href: "simon_taylor.html", name: "Simon Taylor" },
	{ lookup: "simon_mawby", name: "Simon Mawby" },
	{ lookup: "sm", name: "Steve Musgrove" },
	{ lookup: "sonic", href: "sonic_boom.html", name: "Sonic Boom" },
	{ lookup: "steve", href: "steve_valentine.html", name: "Steve Valentine" },
	{ lookup: "steve_beswick", href: "steve_beswick.html", name: "Steve Beswick" },
	{ lookup: "steve_gordon", href: "steve_gordon.html", name: "Steve Gordon" },
	{ lookup: "steve_gordon_gman", href: "steve_gordon.html", name: "G-Man" },
	{ lookup: "stevenew", href: "steve_new.html", name: "Steve New" },
	{ lookup: "lee_brooks", href: "lee_brooks.html", name: "Lee Brooks" },
	{ lookup: "pat_kenneally", href: "pat_kenneally.html", name: "Pat Kenneally" },
	{ lookup: "nick_bandy", href: "nick_bandy.html", name: "Nick Bandy" },
	{ lookup: "sumishta", href: "sumishta_brahm.html", name: "Sumishta Brahm" },
	{ lookup: "sumo_botty", href: "ian_botterill.html", name: "Mister B" },
	{ lookup: "sumo_kathie", href: "kathie_mcginty.html", name: "Kathie M" },
	{ lookup: "sumo_kathy", href: "kathy_schaer.html", name: "Special K" },
	{ lookup: "sumo_pat", href: "https://patfish.com", name: "Headstone" },
	{ lookup: "sumo_russ", href: "russell_cooper.html", name: "Agent Russell Cooper" },
	{ lookup: "tim_harries", href: "tim_harries.html", name: "Tim Harries" },
	{ lookup: "undertakers", name: "The Undertakers", act: true },
	{ lookup: "wilson", href: "https://wilsondub.com", name: "Wilson", act: true },
	{ lookup: "wolfi", href: "wolfgang_tschegg.html", name: "Wolfgang Tschegg" },

//
//	producers/engineers/soundmen/other
//
	{ lookup: "proctor", name: "Steve Proctor" },
	{ lookup: "howy", href: "http://www.studiowizard.com/ht.html", name: "Howard Turner" },
	{ lookup: "momus", href: "http://www.demon.co.uk/momus/", name: "Momus", act: true },
	//{ lookup: "_4AD", href: "http://www.evo.org/eyesore.html", name: "4AD" },
	{ lookup: "coonce", name: "Cole Coonce" },
	{ lookup: "vu", href: "http://www.rocknroll.net/loureed/", name: "Velvet Underground", act: true },
	{ lookup: "richman", href: "http://www.base.com/jonathan/jonathan.html", name: "Jonathan Richman", act: true },
	{ lookup: "dronesclub", href: "https://thedronesclub.co.uk/", name: "The Drones Club", act: true },
	{ lookup: "space", href: "http://www.spiritualized.com/", name: "Spacemen 3", act: true },
	{ lookup: "aero", name: "The Blue Aeroplanes", act: true },
	{ lookup: "haus", href: "http://www.partium.com/~andrewb/bauhaus/", name: "Bauhaus", act: true },
	{ lookup: "tractors", href: "http://www.geocities.com/Nashville/Stage/8818/favorite.htm", name: "Stranger Tractors", act: true },
	{ lookup: "poi", href: "http://www.poidogpondering.com/", name: "Poi Dog Pondering", act: true },
	{ lookup: "bwatch", href: "http://www.theblackwatchmusic.com", name: "The Black Watch", act: true },
	{ lookup: "purelove", href: "http://ourworld.compuserve.com/homepages/RobertFliegel/purelove.htm", name: "Purelove", act: true },
	{ lookup: "eg", href: "/project/black_eg", name: "The Black Eg", act: true },
	{ lookup: "vergift", href: "https://adjective.com/vergiftung/site", name: "Vergiftung", act: true },
	{ lookup: "cave", name: "Nick Cave", act: true },
	{ lookup: "cvb", name: "Camper Van Beethoven", act: true },
	{ lookup: "mbv", name: "My Bloody Valentine", act: true },
	{ lookup: "tvamp", name: "Transvision Vamp", act: true },
	{ lookup: "swynn", name: "Steve Wynn", act: true },
	{ lookup: "bangles", name: "The Bangles", act: true },
	{ lookup: "cale", href: "http://john-cale.com", name: "John Cale", act: true },
	{ lookup: "braind", name: "Braindead Soundmachine", act: true },
	{ lookup: "eno", name: "Brian Eno", act: true },
	{ lookup: "weather", name: "Weather Prophets", act: true },
	{ lookup: "hitch", name: "Robyn Hitchcock", act: true },
	{ lookup: "perfect", name: "The Perfect Disaster", act: true },
	{ lookup: "spect", name: "Spectrum", act: true },
	{ lookup: "belly", name: "Belly", act: true },
	{ lookup: "tops", name: "The Woodentops", act: true },
	{ lookup: "rocket", name: "Love And Rockets", act: true },
	{ lookup: "scream", name: "Primal Scream", act: true },
	{ lookup: "strange", name: "Strangelove", act: true },
	{ lookup: "levit", name: "Levitation", act: true },
	{ lookup: "kmfdm", name: "KMFDM", act: true },
	{ lookup: "mildew", name: "Downey Mildew", act: true },
	{ lookup: "star", name: "Big Star", act: true },
//
//	artwork
//
	{ lookup: "dave_coverly", href: "https://www.speedbump.com/", name: "Dave Coverly" },
	{ lookup: "lucien", name: "Lucien Borderline" },
	{ lookup: "bd", name: "Ben Davis" },
	{ lookup: "novak", name: "Alex Novak" },
	{ lookup: "loony", name: "Pascal Legras" },
//
//	jbc-list people
//
]

export const fans = [
	{ lookup: "killer", name: "Joe Beaulieu" },
	{ lookup: "nancy", name: "Nancy Everson" },
	{ lookup: "woj", name: "The Woj" },
	{ lookup: "matt", name: "Matt Cockerill" },
	{ lookup: "rob", name: "Robert Jacob" },
	{ lookup: "ed", name: "Ed Carter" },
	{ lookup: "coop", name: "John Cooper" },
	{ lookup: "frang", name: "Robert Frangooles" },
	{ lookup: "syd", href: "http://www.sydmeats.co.uk", name: "Sydney Meats" },
	{ lookup: "davison", name: "John Michael Davison" },
	{ lookup: "camf", name: "Chris Camfield" },
	{ lookup: "jdavies", name: "Jim Davies" },
	{ lookup: "knight", name: "Knight Berman" },
	{ lookup: "jimmy", href: "https://twitter.com/RealJamesDuval", name: "James Duval" },
];
