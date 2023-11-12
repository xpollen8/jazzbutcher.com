import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionOptions from '@/components/SectionOptions';
//import Audio from '@/components/Audio';

const AudioPage = () => {
	return (<>
		<Header section="audio" />
		<main>
			<SectionOptions section='audio' />
			{/*<Audio />*/}
		</main>
		<Footer />
	</>)
}

export default AudioPage;
/*

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
*/
