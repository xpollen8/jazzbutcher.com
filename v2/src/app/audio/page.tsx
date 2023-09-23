"use client"

import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import useMedias from '@/lib/useMedias';
import useAudioLive from '@/lib/useAudioLive';
import { parseCredit } from '@/lib/macros';

const AudioSection = ({ title, project, data }: any) => {
	return (<div className={`gig_${project}`}>
		<h1>{title}</h1>
		{data?.map((d: any, key: number) => {
			const { credit=d.mediacredit, crediturl=d.mediacrediturl, creditdate, creditcaption } = parseCredit(d?.credit || '');
			//if (d.credit) console.log("CR", { cr: d.credit, credit, crediturl, creditdate, creditcaption });
			//if (title === 'Live Shows') console.log("DATA", d);
			//if (title === 'Live Shows' && !d.mediaurl) console.log("DATA", d);
			return <EmbedMedia key={key}
				data={{
					datetime: d.datetime,
					venue: d.venue,
					city: d.city,
					mediaurl: d.mp3 || d.mediaurl,
					title: d.name || d.song || 'XXXXXXX',
					author: d.collection,
					comment: d.comment,
					mediacredit: credit,
					mediacrediturl: crediturl,
					mediacreditdate: creditdate,
					children: creditcaption
				}} />;
		})}
	</div>)
}

const Audio = () => {
	const { data, isLoading, error } = useMedias('audio');
	const { data: dataLive, isLoading: isLoadingLive, error: errorLive } = useAudioLive();
	//console.log("DATA", dataLive?.results);

	return (<>
		<Header section="audio" />
		<main>
		<h1>This is a W.I.P. - still need to tack the right info onto stuff in the database for this to work programmatically</h1>
		<EmbedMedia data={{
			mediaurl: "https://soundcloud.com/user-871949376/the-paine-full-podcast-with-pat-fish",
			title: "The Paine Full Podcast... with Pat Fish",
			datetime: "2018" }}
		>
		In this second episode, Andrew unearths an interview with musician, Pat Fish of The Jazz Butcher.
		<p />
		Dating from 2018 and recorded at 'Fishy Mansions' in Northampton... Pat talks about academic life in Oxford, his friendship with Rolo McGinty, The Sonic Tonix, The Jazz Butcher's first album, 'In Bath Of Bacon', life on the road and the recording of 'Cult Of The Basement'.
		</EmbedMedia>
		<Suspense fallback=<>Loading...</>>
			{(!isLoading) && <>
				<AudioSection title="Black Eg" project="eg" data={data.filter((d: any) => d.project === 'eg')} />
				<AudioSection title="Sumosonic" project="sumo" data={data.filter((d: any) => d.project === 'sumo')} />
				<AudioSection title="Wilson" project="wilson" data={data.filter((d: any) => d.project === 'wilson')} />
				<AudioSection title="Vaguely Familiar" project="vaguely" data={data.filter((d: any) => d.project === 'vaguely')} />
				<AudioSection title="Cambodia" project="cambodia" data={data.filter((d: any) => d.project === 'cambodia')} />
				<AudioSection title="Interviews" project="jbc" data={data.filter((d: any) =>
					(d.project === 'jbc' || d.project.length === 0) && (d.subtype === 'interview' || d.name === 'The Interview'))} />
				<AudioSection title="Jazz Butcher" project="jbc" data={data.filter((d: any) =>
					(d.project === 'jbc' || d.project.length === 0) && (!d.name.startsWith('The Entire') && d.name !== 'The Interview' && d.subtype !== 'interview'))} />
			</>}
		</Suspense>
		<Suspense fallback=<>Loading...</>>
			{(!isLoadingLive) && <AudioSection title="Live Shows" project="jbc" data={dataLive.results} />}
		</Suspense>
		<pre>
		expose the contents of:
		https://s3.amazonaws.com/assets.jazzbutcher.com/audio/flac/
		</pre>
		</main>
		<Footer />
	</>)
}

export default Audio;
/*

#define	gsExtra[1989-11-28_00:00:00]
		From Pat's "West Coast '89" compilation cassette (2nd generation), courtesy Andrew Brooksbank.
#define	gsExtra[1989-12-09_00:00:00]
		${gsExtra[1989-11-28_00:00:00]}
#define	gsExtra[1989-12-10_00:00:00]
		${gsExtra[1989-11-28_00:00:00]}
#define	gsExtra[1992-09-15_00:00:00]
		<a href="${jbc_gigs}/1992/Sep15.html"><img src="/images/19920915/19920915_blackeg_cover_250.jpg"></a>
		<a href="${jbc_gigs}/1992/Sep15.html"><img src="/images/19920915/19920915_blackeg_inside_250.jpg"></a>
#define	gsExtra[1993-08-20_00:00:00]
		<a href="${jbc_gigs}/1993/Aug20.html"><img src="/images/19930820/19930820_blackeg_cover_250.jpg"></a>
#define	gsExtra[1994-06-01_00:00:00]
		<a href="${jbc_gigs}/1994/Jun1.html"><img src="/images/19940601/19940601_del_egdebut_250.jpg"></a>
		<p>
		Black Eg's Live Debut!
#define	gsExtra[1985-04-23_00:00:00]
		"I can see you if I take off my glasses" - ${max}
#define	gsExtra[1986-12-02_00:00:00]
		Soldiering on, one week after the exit of ${max}.
#define	gsExtra[1988-08-07_22:00:00]
		Excerpted and pitch-corrected from
		${linkExternal(https://www.mixcloud.com/creationrecords/doing-it-for-the-kids-all-dayer-1988, Creation Records all-day recording)}
#define	gsExtra[1988-05-02_00:00:00]
		Pulled from file originally uploaded to youtube.
#define	gsExtra[1989-11-17_00:00:00]
#define	gsExtra[1992-04-25_16:00:00]
		In-store performance.
#define	gsExtra[1991-07-00_00:00:00]
		"The Vaguely Familiar": ${pat}/${richard}/${sumishta}
#define	gsExtra[1991-08-00_00:00:00]
		"Cambodia": ${pat}/${coonce}
#define	gsExtra[1992-04-26_12:00:00]
		A Butcher acoustic performance of the ${cale} tune.
#define	gsExtra[1992-04-26_20:00:00]
		The "1 mile per hour Art Misery tour".
#define	gsExtra[1992-05-01_00:00:00]
#define	gsExtra[1992-05-09_00:00:00]
#define	gsExtra[1992-05-16_12:00:00]
		In-store performance.
#define	gsExtra[1993-12-23_00:00:00]
		Christmas gig. Pat is joined by David J.
#define	gsExtra[1997-09-16_00:00:00]
		1st practice prior to Bob & Anne Frangooles' wedding in Seattle, Washington. Pat + Max, Joe Skyward (bass), Greg Gilmore (drums).
#define	gsExtra[1997-09-17_00:00:00]
		2nd practice prior to Bob & Anne Frangooles' wedding in Seattle, Washington. Pat + Max, Joe Skyward (bass), Greg Gilmore (drums)
#define	gsExtra[1997-09-19_00:00:00]
		Recorded and mastered from the live mix DAT.
		Pat + Max, Joe Skyward (bass), Greg Gilmore (drums)
#define	gsExtra[1997-09-22_00:00:00]
		Rough mixes of a flawless night out for Pat and Max. Recorded to 8-channel digital.
#define	gsExtra[1999-09-13_00:00:00]
		Rough mixes of a practice session recorded by ${linkExternal(http://www.sonicvistastudios.com/, Henry Sarmiento)}
		at <a href="http://www.syklopps.com">Sy Klopps Studios</a> in San Francisco.
#define	gsExtra[2013-06-17_00:00:00]
		${linkPDF(title=PDF suitable for CD, pdf=/images/20130617/20130617_JBC_Manhattan_CakeShop.pdf)}
		${g_credit(g=Lito Vales, u=https://www.flickr.com/photos/uncletoe/)}
#define	gsExtra[2014-11-12_18:00:00]
		From interview session with Julio Ruiz.
#define	gsExtra[2015-12-12_10:00:00]
		Re-EQd by ${del} from this Jazz Butcher Quartert ${linkExternal(https://www.youtube.com/watch?v=UQoGjendwtw, Youtube entry)}
#define	gsExtra[1990-11-24_16:00:00]
		From ${deirdre}'s SNAP program on KCRW, Santa Monica, CA.
		Recorded by ${rev}.  Pat and Alex duets with lots of chatter.
#define	gsExtra[1989-11-19_16:00:00]
		During ${linkInternal(${jbc_press}/milwaukee89.html", The Milwaukee Interview)} Pat muses on being compared to Robyn Hitchcock,
		and talks about David J.

#define	doGigAudio(type=, prefix)
#live	if (define(pDT, XXX))
#live	endif
#live	loop(gi, 1, ${${prefix}->numResults})
#live	if (define(cDT, ${${prefix}[${gi}]->datetime}))
#live	endif
#live	if (define(gigMatch, no))
#live	endif
#live	if (defined(type))
#live		if (getval(${prefix}[${gi}]->extra) == ${type})
#live			if (define(gigMatch, yes))
#live			endif
#live		endif
#live	else
#live		if ((getval(${prefix}[${gi}]->extra) == eg) || (getval(${prefix}[${gi}]->extra) == wilson) || (getval(${prefix}[${gi}]->extra) == sumo) || (getval(${prefix}[${gi}]->extra) == interview))
#live		else
#live			if (define(gigMatch, yes))
#live			endif
#live		endif
#live	endif
#live	if (getval(gigMatch) = yes)
#live	if (define(currentYear, ${substr(0, 4, ${cDT})}))
#live	endif
#live	if (getval(cDT) != ${pDT})
#live	if (getval(currentYear) != ${previousYear})
	${tag_beg}
	${currentYear}
	${tag_end}
#live	endif
#live	if (define(previousYear, ${currentYear}))
#live	endif
	<div class="listenItem">
		<span class="li-date">
#live	if (defined(${prefix}[${gi}]->gigsong_id))
		<a href="${jbc_gigs}/${ts2URI(${cDT})}">${substr(0, 10, ${cDT})}</a>
#live	else
		<b>${substr(0, 10, ${cDT})}</b>
#live	endif
		</span>
		<span class="li-location">
		<span class="li-venue">
		${${prefix}[${gi}]->venue}
		</span>
#live	if (defined(${prefix}[${gi}]->city))
		<span class="li-city">
		, ${${prefix}[${gi}]->city}
		</span>
#live	endif
#live	if (defined(${prefix}[${gi}]->country))
		<span class="li-country">
		, ${${prefix}[${gi}]->country}
		</span>
#live	endif
		</span>
#live	if (defined(${prefix}[${gi}]->blurb))
		<span class="li-blurb">
		<br/>(<i>${${prefix}[${gi}]->blurb}</i>)
		</span>
#live	endif
	<blockquote class="li-media">
#live	endif
	${linkAudio(title=${literalizeCommas(${${prefix}[${gi}]->song})}, mp3=${${prefix}[${gi}]->mediaurl}, author=${${prefix}[${gi}]->author}, comment=${literalizeCommas(${${prefix}[${gi}]->comment})})}
#live	if (getval(cDT) != ${${prefix}[${eval(1 + ${gi})}]->datetime})
#live		if (define(gsDT, ${space2underscore(${cDT})}))
#live		endif
#live		if (defined(${prefix}[${gi}]->credit))
				<span class="li-credit">${${prefix}[${gi}]->credit}**</span>
#live		endif
#live		if (defined(gsExtra[${gsDT}]))
				<span class="li-extra">${gsExtra[${gsDT}]}</span>
#live		endif
#live		if (defined(${prefix}[${gi}]->mediacredit))
				<span class="li-mediacredit">
#live			if (defined(${prefix}[${gi}]->mediacrediturl))
					${g_credit(g=${${prefix}[${gi}]->mediacredit}, u=${${prefix}[${gi}]->mediacrediturl})}
#live			else
					${g_credit(g=${${prefix}[${gi}]->mediacredit})}
#live			endif
				</span>
#live		endif
	</blockquote>
	</div>
#live	endif
#live	if (define(pDT, ${cDT}))
#live	endif
#live	endif
#live	endloop

#define	addGig(prefix, type, url, title, dt, credit, source, summary)
${define(x, ${eval(1 + ${${prefix}->numResults})})}
${define(${prefix}->numResults, ${x})}
${define(${prefix}[${x}]->city,)}
${define(${prefix}[${x}]->country,)}
${define(${prefix}[${x}]->datetime, ${dt})}
${define(${prefix}[${x}]->mediacredit, ${credit})}
${define(${prefix}[${x}]->mediacrediturl, ${source})}
${define(${prefix}[${x}]->extra, ${type})}
${define(${prefix}[${x}]->song, The Interview)}
${define(${prefix}[${x}]->mediaurl, ${url})}
${define(${prefix}[${x}]->venue, ${title})}
${define(gsExtra[${dt}], ${summary})}

#define	index.html
	${mkHeader(section=Audio)}

	${tag_beg}
	These files are for non-commercial, personal amusement.
	${tag_end}
	${beg_tabs}

#
#	noun:gigs_with_audio
#
#live	if (sql(gs:select gs.*, g.extra, g.blurb, g.venue, g.city, g.country from gigsong gs, gig g where gs.mediaurl like '%%audio/%%' and gs.datetime = g.datetime order by gs.datetime desc, gs.type desc, gs.setnum, gs.ordinal))


	${addGig(prefix=gs, type=interview;obit,
		url=https://s3.amazonaws.com/assets.jazzbutcher.com/audio/interviews/20211007_JazzButcher_interview_stereoembers.mp3,
		title=Stereo Embers The Podcast: Pat Fish (The Jazz Butcher),
		dt=2021-10-07,
		credit=Alex Green,
		source=https://soundcloud.com/alexgreenonline/stereo-embers-the-podcast-pat-fish-the-jazz-butcher,
		summary=${literalizeCommas(
			An interview and obit, combined.
			"He loved his cat, he loved to read, he loved to drink, he loved to smoke and he loved to play music. Recorded in 2013 as the Jazz Butcher’s The Last Of The Gentleman Adventurers album hit shelves, this interview finds Fish in fine form, talking about the new record, Roddy Frame, The Blue Nile, his long-standing relationship with Eider and why it’s so hard to age in rock and roll…"
			)}
		)}

	${addGig(prefix=gs, type=interview,
		url=https://s3.amazonaws.com/assets.jazzbutcher.com/audio/interviews/201604_JazzButcher_interview_InessaB.mp3,
		title=Discovery and Uncovery with Pat Fish,
		dt=2016-04,
		credit=Inessa B,
		source=https://soundcloud.com/inessa-b/discovery-and-uncovery-with-pat-fish,
		summary=${literalizeCommas(
		Excerpted from Inessa B's soundcloud interview with Pat in 20016.
			"Having discovered The Jazz Butcher and followed their varied career over the years, an opportunity came up to connect with the man who started the journey himself, Pat Fish. I sent him questions that began with the all important naming of the group, to what Pat's reading, watching and listening to, and so much more."
			)}
		)}

	${addGig(prefix=gs, type=interview,
		url=${jbc_audio}/19860718/19860718_backgroundnoiseproductions_PatMax_interview.mp3,
		title=Background Noise Productions,
		dt=1986-07-18,
		credit=Background Noise Productions,
		source=https://happymediumproductions.weebly.com/interview-2---the-jazz-butcher.html,
		summary=${literalizeCommas(
		${pat} & ${max} in Washington, DC the night of the Jazz Butcher's show at the 9:30 Club.
		<p>
		Background Noise Productions is: John Collins, Steve Yegelwel, Andy Schoengold, Jim Black, and Jimmy Mitchell 
		${anno_beg}
		Well John, thanks for that rather strange and touching experience, which carried me back to a time when we were largely happy if permanently pissed. It says much for our dedication to our art that we sound so pleased to be drinking Heineken. But who the hell is that posh bloke Eider and where did he get that accent? Also you have made me catch a few bars of some tracks I've been assiduously avoiding for the last 30 years or so. But thanks all the same for the memory and indeed the Heineken.
		${g_credit(g=${max}, d=2017-10-01)}
		${anno_end}
		</p>
			)}
		)}

	${addGig(prefix=gs, type=interview,
		url=${jbc_audio}/20170612/20170612_C86interview.mp3,
		title=Norwich Radio/C86 Interview,
		dt=2017-06-12,
		credit=David Eastaugh,
		source=https://cultureclashradio.org,
		summary=${literalizeCommas(
		Excerpted from radio broadcast.
		Topics: The Smiths, early history, ${mer}, playing the sax, ${barker}
			)}
		)}

	${addGig(prefix=gs, type=interview,
		url=${jbc_audio}/20170320/20170320_JazzButcher_NearPerfectPitch35_Interview.mp3,
		title="Near Perfect Pitch" podcast #35,
		dt=2017-03-20,
		credit=Dara Mottahed,
		source=http://www.nearperfectpitch.com/,
		summary=${literalizeCommas(
		Excerpted from ${linkExternal(https://twitter.com/NearPerfPitch, \@NearPerfPitch)}'s podcast #35.
		Dara Mottahed and Pat (via Skype) catch up on happenings since the previous podcast.
			)}
		)}

	${addGig(prefix=gs, type=interview,
		url=${jbc_audio}/20181209/20181209_FrenchSpurs1_mixcloud_PatFishInterview.mp3,
		title="PAT FISH: EARLY DAYS TO JAZZ BUTCHER'S FIRST RELEASE 'IN BATH OF BACON'",
		dt=2018-12-09,
		credit=FrehcnSpurs1,
		source=https://www.mixcloud.com/FrenchSpurs1/,
		summary=${literalizeCommas(
#			https://www.mixcloud.com/FrenchSpurs1/retropopic-206-pat-fish-early-days-jazz-butcher-to-dan-tracey-2018-benefit/
#			https://www.mixcloud.com/FrenchSpurs1/retropopic-205-pat-fish-early-days-to-jazz-butchers-first-release-in-bath-of-bacon/
			)}
		)}


	${addGig(prefix=gs, type=interview,
		url=${jbc_audio}/19890701/19890701_JazzButcher_edit_CBC_FM_Gen0.mp3,
		title="On The Road" - CBC featurette,
		dt=1989-07-01,
		credit=Dana Mottahead (Gen0 cassette of FM broadcast),
		summary=${literalizeCommas(
		While en-route to 1989 Germany dates, ${pat} answers "Big Questions" for CBC radio
		listeners.
			)}
		)}


	${addGig(prefix=gs, type=interview,
		url=${jbc_audio}/20180703/20180703_WattFromPedroShow_OwenJones.mp3,
		title="The Watt From Pedro Show" podcast - ${owen},
		dt=2018-07-03,
		credit=Mike Watt,
		source=https://www.twfps.com/past-episodes/on-air-guest-owen-jones-from-hamburg-germany-via-skype,
		summary=${literalizeCommas(
		Excerpted from the musician-to-musician podcasts by Mike Watt (of The Minutemen)
		speaking with ${owen} (via Skype). Mostly "Shakespeare and The Bible", and
		some passing Jazz Butcher commentary.
			)}
		)}


	${addGig(prefix=gs, type=interview,
		url=${jbc_audio}/20160509/20160509_JazzButcher_NearPerfectPitch_Interview.mp3,
		title="Near Perfect Pitch" podcast #1,
		dt=2016-05-09,
		credit=Dara Mottahed,
		source=http://www.nearperfectpitch.com/,
		summary=${literalizeCommas(
		Excerpted from ${linkExternal(https://twitter.com/NearPerfPitch, \@NearPerfPitch)}'s inaugural podcast.
		Dara Mottahed and Pat (via Skype) chat about recent band history. And football.
			)}
		)}

#live	if (sort(-gs, datetime))
#live	endif
		${begTab(Live)}
			${doGigAudio(prefix=gs)}
		${endTab}
		${begTab(Interviews)}
			${doGigAudio(type=interview, prefix=gs)}
		${endTab}
		${begTab(Obits)}
			${doGigAudio(type=obit, prefix=gs)}
		${endTab}
#live	endif


	${begTab(Wilson)}
	<a href="${jbc_search}?f=extras&q=wilson"> <div class="gig_wilson"> </div> </a>
	${tag_beg}
	November, 2005 Demo
	${tag_end}
	<div class="listenItem">
		<a href="/images/wilson/200511_wilson_cd.jpg"><img src="/images/wilson/200511_wilson_cd_250.jpg"></a>
		<p>
		Recorded at ${linkExternal(http://www.premierstudios.co.uk, Premier Studio)}
		<blockquote>
		${linkAudio(title=Buffalo Sniper, url=${jbc_lyrics}/wilson_buffalo_sniper.html, mp3=/audio/Wilson_200511/01_Wilson_200511_Buffalo_Sniper.mp3)}
		${linkAudio(title=Police Chief, url=${jbc_lyrics}/wilson_police_chief.html, mp3=/audio/Wilson_200511/02_Wilson_200511_Police_Chief.mp3)}
		</blockquote>
	</div>

	${tag_beg}
	April, 2003 Demo
	${tag_end}
	<div class="listenItem">
		<a href="/images/wilson/200304_wilson_front.jpg"><img src="/images/wilson/200304_wilson_front_250.jpg"></a>
		<a href="/images/wilson/200304_wilson_back.jpg"><img src="/images/wilson/200304_wilson_back_250.jpg"></a>
		<p>
		Recorded at Notepad, NW10 by Andy Parker.
		Produced by Donald Ross Skinner.
		All tunes conceived, devised & assembled by Wilson.
		Tracks contain elements of everything.
		<blockquote>
		${linkAudio(title=Istanbul Connection, url=${jbc_lyrics}/wilson_istanbul_connection.html, mp3=/audio/Wilson_200304/01_Wilson_200304_Istanbul_Connection.mp3)}
		${linkAudio(title=Quality People, url=${jbc_lyrics}/wilson_quality_people.html, mp3=/audio/Wilson_200304/02_Wilson_200304_Quality_People.mp3)}
		</blockquote>
	</div>

	${tag_beg}
	2002 Demo
	${tag_end}
	<div class="listenItem">
		<a href="/images/wilson/2002_wilson_front.jpg"><img src="/images/wilson/2002_wilson_front_250.jpg"></a>
		<a href="/images/wilson/2002_wilson_back.jpg"><img src="/images/wilson/2002_wilson_back_250.jpg"></a>
		<p>
		Recorded by MC Bot on the Roland VS-1800 at Subsound, NN1
		during 2001 and 2002. The words to "Play It All Night Long"
		are by Warren Zevon. Everything else is original pirate material.
		Increase the peace.
		<blockquote>
		${linkAudio(title=Quality People, url=${jbc_lyrics}/wilson_quality_people.html, mp3=/audio/Wilson_2002/01_Wilson_2002_Quality_People.mp3)}
		${linkAudio(title=Istanbul Connection, url=${jbc_lyrics}/wilson_istanbul_connection.html, mp3=/audio/Wilson_2002/02_Wilson_2002_Istanbul_Connection.mp3)}
		${linkAudio(title=Hippy Shit, url=${jbc_lyrics}/wilson_hippy_shit.html, mp3=/audio/Wilson_2002/03_Wilson_2002_Hippy_Shit.mp3)}
		${linkAudio(title=Play It All Night Long, mp3=/audio/Wilson_2002/04_Wilson_2002_Play_It_All_Night_Long.mp3)}
		${linkAudio(title=Burn\, Hollywood\, Burn, url=${jbc_lyrics}/wilson_burn_hollywood_burn.html, mp3=/audio/Wilson_2002/05_Wilson_2002_Burn_Hollywood_Burn.mp3)}
		${linkAudio(title=Dark Agenda, url=${jbc_lyrics}/wilson_dark_agenda.html, mp3=/audio/Wilson_2002/06_Wilson_2002_Dark_Agenda.mp3)}
		</blockquote>
	</div>
	${endTab}

	${begTab(Sumosonic)}
	<a href="${jbc_search}?f=extras&q=sumo"> <div class="gig_sumo"> </div> </a>
	${tag_beg}
	Come, Friendly Spacemen
	${tag_end}

	<div class="listenItem">
		<blockquote>
		<blockquote>
			This is fun. <a href="https://sumosonic.com/audio/come_friendly_spacemen.mid">Here's the midi file</a> for <i>Come, Friendly Spacemen</i>
		</blockquote>
	</div>

	${tag_beg}
	"Audio Aquatic" Demo
	${tag_end}

	<div class="listenItem">
		<a href="/images/sumo/audio_aquatic.jpg"><img src="/images/sumo/audio_aquatic_250.jpg"></a>
		<p>
		${g_credit(g=Andrew Brooksbank)}
		"Audio Aquatic" was an early working name for Sumosonic. Most tracks from
		this tape are the same as the later "Demo Cassette".
		<blockquote>
		${linkAudio(title=Come\, Friendly Spacemen, mp3=/audio/AudioAquatic/AudioAquatic_01_ComeFriendlySpacemen.mp3)}
		<blockquote>
			This is an "extended" version, with approximately 90 seconds more beat breaks.
		</blockquote>
#		${linkAudio(title=God's Green Earth, mp3=/audio/AudioAquatic/AudioAquatic_02_GodsGreenEarth.mp3)}
#		${linkAudio(title=Fern\, Schnell\, Gut, mp3=/audio/AudioAquatic/AudioAquatic_03_FernSchnellGut.mp3)}
#		${linkAudio(title=Destroy All Monsters, mp3=/audio/AudioAquatic/AudioAquatic_04_DestroyAllMonsters.mp3)}
#		${linkAudio(title=She Moved Through The Fair, mp3=/audio/AudioAquatic/AudioAquatic_05_SheMovedThroughTheFair.mp3)}
#		<blockquote>
#			Traditional Irish tune.
#			That's Mark Refoy singing on Fair. His voice is blended right in with Kathie McGinty's, the? idea being    
#			to create some strange being of uncertain gender. It's good, but I don't really want it up on the site,    
#			if you don't mind
#			Sat Jun 17 13:21:53 PDT 2017
#		</blockquote>
#		${linkAudio(title=We Are The Traffic, mp3=/audio/AudioAquatic/AudioAquatic_06_WeAreTheTraffic.mp3)}
		</blockquote>
	</div>

	${tag_beg}
	Demo Cassette
	${tag_end}

	<div class="listenItem">
		<a href="/images/sumo/sumosonic_demo_cover.jpg"><img src="/images/sumo/sumosonic_demo_cover_250.jpg"></a>
		<p>
		Unlike the Creation ${linkInternal(${jbc_albums}/sumosonic_this_is_sumo.html, "This Is Sumo")} release, Pat sings lead on all tracks.
		<blockquote>
		${linkAudio(title=Come\, Friendly Spacemen, mp3=https://sumosonic.com/audio/come_friendly_spacemen.mp3, url=${jbc_lyrics}/sumosonic_come_friendly_spacemen.html)}
		${linkAudio(title=Monks Of Kung Fu, mp3=https://sumosonic.com/audio/monks_of_kung_fu.mp3, url=${jbc_lyrics}/sumosonic_monks_of_kung_fu.html)}
		${linkAudio(title=God's Green Earth, mp3=https://sumosonic.com/audio/gods_green_earth.mp3, url=${jbc_lyrics}/sumosonic_gods_green_earth.html)}
		${linkAudio(title=Business And Work, mp3=https://sumosonic.com/audio/business_and_work.mp3, url=${jbc_lyrics}/sumosonic_business_and_work.html)}
		${linkAudio(title=Destroy All Monsters, mp3=https://sumosonic.com/audio/destroy_all_monsters.mp3, url=${jbc_lyrics}/sumosonic_destroy_all_monsters.html)}
		${linkAudio(title=Stupid, mp3=https://sumosonic.com/audio/hey_stoopid.mp3, url=${jbc_lyrics}/sumosonic_stupid.html)}
		${linkAudio(title=Everything Is Wonderful, mp3=https://sumosonic.com/audio/everything_is_wonderful.mp3, url=${jbc_lyrics}/sumosonic_everything_is_wonderful.html)}
		${linkAudio(title=Fern Schnell Gut, mp3=https://sumosonic.com/audio/fern_schnell_gut.mp3, url=${jbc_lyrics}/sumosonic_fern_schnell_gut.html)}
		${linkAudio(title=Cat's Life, mp3=https://sumosonic.com/audio/cats_life.mp3, url=${jbc_lyrics}/sumosonic_cats_life.html)}
		${linkAudio(title=My Ultimate Baby, mp3=https://sumosonic.com/audio/my_ultimate_baby.mp3, url=${jbc_lyrics}/sumosonic_my_ultimate_baby.html)}
		${linkAudio(title=We Are The Traffic, mp3=https://sumosonic.com/audio/we_are_the_traffic.mp3, url=${jbc_lyrics}/sumosonic_we_are_the_traffic.html)}
		${linkAudio(title=Sputnik, mp3=https://sumosonic.com/audio/sputnik.mp3, url=${jbc_lyrics}/sumosonic_sputnik.html)}
		</blockquote>
	</div>

	${endTab}
		${begTab(Black Eg)}
		<a href="${jbc_search}?f=extras&q=eg"> <div class="gig_eg"> </div> </a>
			${doGigAudio(type=eg, prefix=gs)}
		${endTab}
	${begTab(Etc)}

		${tag_beg}
		Uncle Andy's 2007 Christmas Album
		${tag_end}
		<div class="listenItem">
		<p>
		<img src="https://s3.amazonaws.com/assets.jazzbutcher.com/audio/various/2007_UncleAndy_ChristmasAlbum/2007_UncleAndy_ChristmasAlbum.jpg">
		</p>
		<p>
		Starting in the early 2000’s a friend of mine, Andy Clarke, started recording a Christmas Album each year to give away to friends
		and clients. They started as a bit of a joke based around his fictional alta ego “Uncle Andy” best described as a lecherous,
		fraudster, man of the cloth. Over the next few years more and more musicians became involved not just from The New Barcelona but
		from around the world, some still jokey but more and more they became serious production numbers.
		</p>
		<p>
		In 2007 the storyline for that years album was Uncle Andy’s huge charity gig, which at the end of he obviously stole all the
		takings. That year we finally asked Pat if he wanted to record one and he said he wouldn’t do a Christmas song, but he would record
		something … and oh did he do something special for us. He came round and recorded a beautiful version of Afterhours from the 3rd
		Velvet Underground album.
		</p>
		<p>
		Recorded in December 2007 at Greenway Studio by Andy Clarke 
		</p>
		<blockquote>
		${linkAudio(title=After Hours, comment=2007-12, mp3=https://s3.amazonaws.com/assets.jazzbutcher.com/audio/various/2007_UncleAndy_ChristmasAlbum/2007_UncleAndy_ChristmasAlbum_PatFish_Afterhours.mp3)}
		</blockquote>
		</p>
		${g_credit(g=Mark Cotton, d=2021-11-15)}
		</div>

		${tag_beg}
		JBC Rarities
		${tag_end}
		<div class="listenItem">
		Tracks that appeared on early compilations and singles.
		<blockquote>
		${linkAudio(title=Christmas With The Pygmies, mp3=${jbc_audio}/JazzButcher_ChristmasWithThePygmies.mp3)}
			From <b>${swingin}</b> (1985)
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=When You's A Viper, mp3=${jbc_audio}/JazzButcher_20140715_Viper2.mp3)}
			Unreleased.
			<br/>Recorded 2014-07-15
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=Affection, mp3=${jbc_audio}/JazzButcher_Affection.mp3, author=Jonathan Richman)}
			From <b>${va_shadow}</b> (1984).
			<br/>Recorded May 1983, "Cak Bag session", Sketch Studio, Northampton
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=Temptation Inside Your Heart, mp3=${jbc_audio}/JazzButcher_TemptationInsideYourHeart.mp3, author=Velvet Underground)}
			From <b>${va_spark}</b> (1984).
			<br/>Recorded from the May 1983, "Cak Bag session", Sketch Studio, Northampton
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=May I, mp3=${jbc_audio}/JazzButcher_MayI.mp3, author=Kevin Ayes)}
			From <b>${may}</b> (1987)
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=La Mer, mp3=/audio/tunes/2012_JBC_LaMer.mp3)}
			From the 2012 ${adventurers} recording session (unreleased)
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=Poor Spy, mp3=${jbc_audio}/JazzButcher_PoorSpy.mp3)}
			<br/>Recorded May 1983, "Cak Bag session", Sketch Studio, Northampton
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=Chinese Envoy, mp3=${jbc_audio}/JazzButcher_ChineseEnvoy.mp3, author=John Cale)}
			From <b>${va_seventeen_2}</b> (1983)
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=${hobbu}, mp3=${jbc_audio}/mp3/hobbu.mp3)}
			${cdr_guestpass2000}
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=Cowgirl Fever, mp3=${jbc_audio}/mp3/cowgirlfever.mp3)}
			${marnie} 12" single B-side (1984)
		</blockquote>

		<blockquote>
		<hr>
		${linkAudio(title=Vodka Girls, mp3=${jbc_audio}/mp3/vodkagirls.mp3)}
			From ${va_abus_21} (1994)
		</blockquote>
		</div>

		${tag_beg}
		<b>"${cult}" rough mixes and alt takes</b>
		${tag_end}
		<div class="listenItem">
		<blockquote>
			${linkAudio(title=Excellent!, mp3=${jbc_audio}/cult/excellent.mp3)}
#			<a href="${jbc_video}/Excellent.m4v"><b>Video clip from the Star Trek episode where the final version's intro sample originated</b></a>
			${linkAudio(title=King Tut, mp3=${jbc_audio}/cult/kingtut.mp3)}
			${linkAudio(title=Pineapple Tuesday, mp3=${jbc_audio}/cult/pineapple.mp3)}
			${linkAudio(title=Fertiliser (Yes\, Mantor), mp3=${jbc_audio}/cult/yes_mantor.mp3)}
			${linkAudio(title=Girl-Go, mp3=${jbc_audio}/cult/girl.mp3)}
			${linkAudio(title=The Onion Field, mp3=${jbc_audio}/cult/onion.mp3)}
			${linkAudio(title=Sister Death, mp3=${jbc_audio}/cult/sister.mp3)}
		<p>
		Provided by ${rev}, the session engineer.
		</blockquote>
		</div>

		${tag_beg}
		<b>Fan Tribute Discs - c. 2000</b>
		${tag_end}
		<blockquote>
			<a href="${jbc_tribute}">Downloadable high-quality MP3s</a> of Jazz Butcher songs as covered
			by the musician/fans of the <a href="${jbc_articles}">jbc mailing list</a> and elsewhere.
			All tracks with annotation by the Butcher.
		</blockquote>

		${tag_beg}
		The Vaguely Familiar
		${tag_end}
		<div class="listenItem">
		Demo tracks from the ${linkInternal(${jbc_gigs}/1991/Jul1.html, July 1991)} ${pat}, ${richard}, and ${sumishta} collaboration.
		<blockquote>
		${linkAudio(title=A Matter Of Time), mp3=${jbc_audio}/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_AMatterOfTime.mp3)}
		${linkAudio(title=Bombed, mp3=${jbc_audio}/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_Bombed.mp3)}
		${linkAudio(title=Pedby's Grace, mp3=${jbc_audio}/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_PedbysGrace.mp3)}
		${linkAudio(title=Colour Waltz, mp3=${jbc_audio}/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_ColourWaltz.mp3)}
		${linkAudio(title=Elwood, mp3=${jbc_audio}/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_Elwood.mp3)}
		</blockquote>
		</div>

		${tag_beg}
		Cambodia
		${tag_end}
		<div class="listenItem">
		Demo tracks from the ${linkInternal(${jbc_gigs}/1991/Aug1.html, August 1991)} ${pat} and ${coonce} collaboration.
		<blockquote>
		${linkAudio(title=We Are The Traffic, comment=#1, mp3=${jbc_audio}/Cambodia/199108_Cambodia_WeAreTheTraffic_No1.mp3)}
		${linkAudio(title=We Are The Traffic, comment=#2, mp3=${jbc_audio}/Cambodia/199108_Cambodia_WeAreTheTraffic_No2.mp3)}
		</blockquote>
		</div>

	${endTab}

	${end_tabs}
	${jbc_footer}
	*/
