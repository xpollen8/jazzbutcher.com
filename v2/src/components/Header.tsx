import Link from 'next/link';

/*
#define	mkHeader(project=jbc, section, title, passthru, navType, navPrev, navNext, home)
#
#	hack alert
#	"_global_title" is used by lyricsFooter
#	to gain knowledge of what page it is on
#
#live	if (define(_global_title, ${title}))
#live	endif
	<head>
	<title>
	The Jazz Butcher Conspiracy
#live	if (defined(section))
	: ${section}
#live	endif
#live	if (defined(title))
	: ${title}
#live	endif
	</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/htdb/site/responsive-tabs.css">
#	<script src="https://hypothes.is/embed.js" async></script>
	${JBC_CSS}
	</head>
#live	if (getval(section) = Feedback)
#live	else
	${header}
#live	endif
	<div class="homeContainer">
	<div class="homeHeader">
#		<a href="/"><img alt="The Jazz Butcher" height="80" src="${jbc_images}/knife_logo_80.png"></a>
#live		if (getval(project) != jbc)
		${header_${project}} <span class="navsep"/>
#live		else
	<a href="/">The Jazz Butcher</a> <span class="navsep"/>
#live		endif

		<nobr>
#live		if (defined(section))
		${header${section}}
#live			if (defined(title))
			<span class="navsep"/>
#live			endif
#live		endif
#live		if (defined(passthru))
		${passthru}
#live		endif
#live		if (defined(title))
		<i>${title}</i>
#live		endif
#live		if (defined(home))
		<span style="margin-left: 50px;"/>${home}
#live		endif
#live	if (defined(navType))
		<span class="smalltext" style="padding: 40px;">
#live		if ((defined(navPrev)) && (getnum(${navPrev}->numResults) > 0))
				${nav${navType}(x=${navPrev}, icon=left-arrow, txt=&lt;)}
#live		endif
#live		if ((defined(navNext)) && (getnum(${navNext}->numResults) > 0))
				${nav${navType}(x=${navNext}, icon=right-arrow, txt=&gt;)}
#live		endif
		</span>
#live	endif
		</nobr>
		</div>

#live	if (getval(section) = Gigs)
#live	if (!(defined(y)))
	<div style="padding: 5px; background: #eee;">
	<form action="${jbc_search}">
		<nobr>
	Find:
		<select name="f">
			<option value="venue" ${ternary((getval(f) = venue), selected)}>venue</option>
			<option value="city" ${ternary((getval(f) = city), selected)}>city</option>
			<option value="country" ${ternary((getval(f) = country), selected)}>country</option>
			<option value="act" ${ternary((getval(f) = act), selected)}>shared the bill with JBC..</option>
			<option value="performer" ${ternary((getval(f) = performer), selected)}>this band member performed..</option>
			<option value="song" ${ternary((getval(f) = song), selected)}>played this song..</option>
		</select>
		</nobr>
		<nobr>
		Containing: <input type="text" name="q"
#live	if ((defined(q)) && !(getval(f) = extras))
			value="${q}"
#live	else
			value=""
#live	endif
		></input>
		</nobr>
		<input type="submit">
	</form>
#live	endif
	</div>
#live	endif
	</div>
#live	if ((getval(section) = Lyrics) && defined(title))
#live	if (getval(project) != jbc)
#live		if (getval(project) == eg)
	<a href="${jbc_search}?f=extras&q=eg">
	<div class="gig_eg"> ${define(_set,true)} </div>
	</a>
#live		endif
#live		if (getval(project) == sumo)
	<a href="${jbc_search}?f=extras&q=sumo">
	<div class="gig_sumo"> ${define(_set,true)} </div>
	</a>
#live		endif
#live		if (getval(project) == wilson)
	<a href="${jbc_search}?f=extras&q=wilson">
	<div class="gig_wilson"> ${define(_set,true)} </div>
	</a>
#live		endif
#live	endif
#live	if (getval(${prefix}->extra) == store)
	${tag_beg}
	In-Store
	${define(_set,true)}
	${tag_end}
#live	endif
#live	if (getval(${prefix}->extra) == session)
	${tag_beg}
	Recording Session
	${define(_set,true)}
	${tag_end}
#live	endif
#live	if (getval(${prefix}->extra) == interview)
	${tag_beg}
	<a href="${jbc_search}?f=extras&q=interview">Interview</a>
	${define(_set,true)}
	${tag_end}
#live	endif
#live	if (getval(${prefix}->extra) == duo)
	${tag_beg}
	<a href="${jbc_search}?f=extras&q=duo"><img src="/images/iconPat.gif">Pat <img src="/images/iconMax.gif"> Max Duo</a>
	${define(_set,true)}
	${tag_end}
#live	endif
#live	if (getval(${prefix}->extra) == solo)
	${tag_beg}
	<a href="${jbc_search}?f=extras&q=solo">${iconSolo} Pat Fish Solo</a>
	${define(_set,true)}
	${tag_end}
#live	endif
	${beg_tabs}
	${begTab(Lyrics)}
	${tag_beg}
	${title}
	${tag_end}
	<blockquote>
#live	else if ((getval(section) = People) && (defined(title)) && !(getval(title) = Pat Fish))
#	${tag_beg}
#	${title}
#	${tag_end}
#	${albumCredits(person=${title})}
#	${doGigPerformer(person=${title}, inline=no)}
#live	endif
*/


import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: {
		section: string
	}
}
 
export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const section = params.section
 
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: `Jazz Butcher - ${section}`,
  }
}

const headerEtc = <Link href="/etc"><b>Etc</b></Link>;
const headerReleases = <Link href="/albums"><b>Releases</b></Link>;
const headerProject = <b>Projects</b>;
const headerPreHistory = <b>Pre-JBC</b>;
const headerPeople = <Link href="/people"><b>Conspirators</b></Link>;

const headerText : { [key: string]: React.ReactNode } = {
	JBC:  <Link href="/"><b>The Jazz Butcher Conspiracy</b></Link>,
	Gigs:  <Link href="/gigs"><b>Gigs</b></Link>,
	//GigYear: (y: number) => <Link href={`/gigs/${y}`}><b>{y}</b></Link>,
	People:  headerPeople,
	Help:  <b>Help Us</b>,
	Press:  <Link href="/press"><b>Press</b></Link>,
	Lyrics:  <Link href="/lyrics"><b>Lyrics</b></Link>,
	News:  <b>News</b>,
	Audio:  <b>Audio</b>,
	Posters:  <Link href="/posters"><b>Posters</b></Link>,
	Video:  <b>Video</b>,
	Releases:  headerReleases,
	Albums:  headerReleases,
	Etc:  headerEtc,
	Articles:  <>{headerEtc} | <b>Mailing List</b></>,
	PreHistory:  <b>Pre-JBC</b>,
	Project:  <b>Projects</b>,
	MAD:  <>{headerEtc} | <b>How MAD Are You?</b></>,
	Links:  <>{headerEtc} | <b>Pat&quot;s Recommended Links</b></>,
	Letters:  <>{headerEtc} | <Link href="/letters"><b>Letters From Pat</b></Link></>,
	Nightshift:  <>{headerPreHistory} | <b>Nightshift</b></>,
	Institution:  <>{headerPreHistory} | <b>Institution</b></>,
	SonicTonix:  <>{headerPreHistory} | <b>Sonic Tonix</b></>,
	TheTonix:  <>{headerPreHistory} | <b>The Tonix</b></>,
	VaguelyFamiliar:  <>{headerProject} | <b>The Vaguely Familiar</b></>,
	Cambodia:  <>{headerProject} | <b>Cambodia</b></>,
	MrBlagdon:  <>{headerProject} | <b>Mr. Blagdon</b></>,
	Sumosonic:  <>{headerProject} | <b>Sumosonic</b></>,
	Wilson:  <>{headerProject} | <b>Wilson</b></>,
	Eg:  <>{headerProject} | <b>The Black Eg</b></>,
	Trivia:  <>{headerEtc} | <b>Trivia</b></>,
	Tribute:  <>{headerEtc} | <b>Fan Tribute Project</b></>,
	//Max:  <>{headerPeople} : ${max}</>,
	DronesClub:  <>{headerProject} | <b>The Drones Club</b></>,
	MailingList:  <>{headerEtc} | <Link href="/articles"><b>Mailing List</b></Link></>,
	Misc:  <b>Misc.</b>,
}

const MakeHeader = ({ project='jbc', section, title, passthru, navType, navPrev, navNext, home }: {
	project?: string,
	section?: string,
	title?: string,
	passthru?: string,
	navType?: string,
	navPrev?: string,
	navNext?: string,
	home?: boolean
}): React.ReactNode  => (<>
  <div className="homeContainer">
	  <div className="homeHeader">
			{(project === 'jbc') ? <><Link href="/">The Jazz Butcher</Link></> : <>Project</>}
			<span className="navsep"/>
			<span style={{ whiteSpace: 'nowrap' }}>
				{(section) && <>{headerText[section]}</>}
				{(section && title) && <>{section} <span className="navsep"/></>}
				{(passthru) && <>{passthru}</>}
				{(title) && <i>{title}</i>}
				{(home) && <><span style={{ marginLeft: '50px' }} />{home}</>}
				{(navType) && (
					<span className="smalltext" style={{ padding: '40px' }}>
						{(navPrev) && <>NAV-PREV</>}
						{(navNext) && <>NAV-NEXT</>}
					</span>
				)}
			</span>
		</div>
		{(section === 'Gigs') && <>GIG SEARCH FORM</>}
	</div>
</>)

export default MakeHeader;
