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
