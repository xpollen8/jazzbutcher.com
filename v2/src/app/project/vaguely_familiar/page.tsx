import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmbedMedia from '@/components/EmbedMedia';
import LetterHeader from '@/components/LetterHeader';
import { expand } from '@/lib/defines';
import { linkInternal } from '@/lib/macros';
import { Credit } from '@/components/GenericWeb';

const tracks = [
		{ title: "A Matter Of Time",
			mediaurl: "/audio/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_AMatterOfTime.mp3",
			comment: "A 13FG number",
		},
		{ title: "Bombed",
			mediaurl: "/audio/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_Bombed.mp3",
			comment: "by Richard, which was featured on the Autumn 93 jbc European tour",
		},
		{ title: "Pedby's Grace",
			mediaurl: "/audio/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_PedbysGrace.mp3",
			comment: "by me and Sumishta",
		},
		{ title: "Colour Waltz",
			mediaurl: "/audio/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_ColourWaltz.mp3",
			comment: "by me and  Richard",
		},
		{ title: "Elwood",
			mediaurl: "/audio/TheVaguelyFamiliar/199107_TheVaguelyFamiliar_Elwood.mp3",
			comment: "by Sumishta and me",
		},
];

const VaguelyFamiliar = () => {
	return (<>
		<Header section="vaguely_familiar" />
			<main>
			<LetterHeader
				title="The Vaguely Familiar (1991)"
				subhead=<>
					Demo tracks from the July 1991 {expand('pat')}, {expand('richard')}, and {expand('sumishta')} collaboration
					</>
				/>
			<div className="listItem">
			<div className="flex flex-wrap justify-center gap-3">
			<Image src="https://jazzbutcher.com/images/199107/199107_VaguelyFamiliar_Master1.jpg" width={500} height={500} alt={'master tape 1'} />
			<Image src="https://jazzbutcher.com/images/199107/199107_VaguelyFamiliar_Master2.jpg" width={500} height={500} alt={'master tape 2'} />
			</div>
			<Credit g='Richard Formby' d='2021-12-10' />
			</div>
			<blockquote className="annotation">
				The Vaguely Familiar was a July 1991 project, put together at Richard
				Formby&apos;s Woodhouse Studio in Leeds. The line-up was myself, Richard and
				Sumishta Brahm (13 Frightened Girls).
				<p />
				Basically, I did the drum programming, bass and large electric guitars (note
				how I &quot;invented&quot; Slowdive on Pedby&apos;s Grace), Richard did the mad ethnic
				instruments and a bit of bass and guitar, Sumishta sang, played the lap
				steel guitar and did a bit of electric 12-string. Any glockenspiels are
				probably down to me.
				<p />
				Richard and I went on to try and rub the project up into a finished album
				with a big session at Woodhouse in November 92 (during which Richard also
				got into glockenspiel action, as I recall), but although we committed a
				further ten or so backing tracks (including the truly awesome &quot;My Milkfloat&quot;
				featuring a casio playing &quot;My Desert&quot; to itself under a barrage of early
				sixties electric milkfloat noises, which Richard insisted sounded just like
				Jimi Hendrix), we never finished them off. I still have the instrumental
				roughs at home. Richard and I often talked of finishing it all off, but
				neither of us likes the phone very much and it never got done.
				<p />
				I have spotted bits     
				and pieces from some of those aborted tracks showing up on Richard&apos;s Triumph 2000 LP.
				<p />
				According to my cassette, we recorded five numbers:
			</blockquote>
				{tracks.map(({ title, mediaurl, comment }: { title: string, mediaurl: string, comment: string }, key: number) =>
					<EmbedMedia key={key} data={{ mediaurl, title, }} >
						<p className="annotation"> {comment} </p>
					</EmbedMedia>)}
			</main>
		<Footer />
	</>)
}

export default VaguelyFamiliar;
