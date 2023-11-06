import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSet from '@/components/PhotoSet';
import { ParsedCaption } from '@/components/GenericWeb';
import { nick, curt, pat, dooj } from '@/lib/defines';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const letter = [
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_1.jpg', alt: 'The envelope' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_2.jpg', alt: 'Intro' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_3.jpg', alt: 'JBC Dates You Have Missed' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_4.jpg', alt: 'The Spring 94 European Tour: 1' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_5.jpg', alt: 'The Spring 94 European Tour: 2' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_6.jpg', alt: 'The Spring 94 European Tour: 3' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_7.jpg', alt: 'The Spring 94 European Tour: 4' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_8.jpg', alt: 'The Spring 94 European Tour: 5' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_9.jpg', alt: 'The 10Mar94 GARAGE gig' },
	{ src: '/assets/images/letters_from_pat/19940413/19940413_PatFish_LetterToDavidWhittemore_10.jpg', alt: 'The 8Apr94 MEAN FIDDLER gig + Other News' },
]

const topics = [
	{ uri: "/letters/94Apr13/intro.html", text: "Introduction" },
	{ uri: "/letters/94Apr13/tour.html", text: "The Spring 94 European Tour" },
	{ uri: "/letters/94Apr13/garage.html", text: "The 10Mar94 GARAGE gig, London" },
	{ uri: "/letters/94Apr13/fiddler.html", text: `The 8Apr94 MEAN FIDDLER gig, London` },
	{ uri: "/letters/94Apr13/gigs.html", text: "JBC Dates You Have Missed" },
	{ uri: "/letters/94Apr13/news.html", text: "Other News" },
];

const Letter = () =>  {
	return ( <>
		<Header section='letters' title='13Apr94' />
		<main>
			<div className="flex flex-wrap justify-around">
				<div className="min-w-[50%]">
					{topics.map(MakeSimpleURI)}
				</div>
				<div className="m-1">
					<center>
					<Link href="https://v1.jazzbutcher.com/images/paris.jpg">
						<Image width={400} height={400} src="https://v1.jazzbutcher.com/images/paris.jpg" alt="paris group"/>
					</Link>
					<ParsedCaption
						image_caption=<>{nick}, {curt}, {pat}, {dooj} (Paris)</>
						credit_date="1994-02-17"
						credit="Lucien Borderline"
					/>
					<p />
					<Image width={353} height={105} alt="[signature]" src="https://v1.jazzbutcher.com/images/19940413/94Apr13_sig.gif" />
				</center>
			</div>
			</div>
			<PhotoSet title='The Letter' photos={letter} />
		</main>
		<Footer />
	</>)
}

export default Letter;
