"use client"

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { people, expand, mapPerformers, AutoLinkPlayer } from '@/lib/defines';
import { type HashedType, imageThumb, imageFull, parseCaptionsSourcesEtc} from '@/lib/utils';
import { Credit } from '@/components/GenericWeb';
import useGigs from '@/lib/useGigs';
import { GigSearchResults } from '@/components/GigSearch';
import { notFound } from 'next/navigation';
import Loading from '@/components/Loading';

import useConspirator from '@/lib/useConspirator';

const Pictures = (results?: HashedType) => {
	return results && <></>;
	/*
	const images = parseCaptionsSourcesEtc(props?.str);
	return images?.map((img: any, key: number) => {
		const [ src, credit, crediturl, creditdate, caption ] = img;
		const useSrc = imageThumb(src);
		return <div key={key} className="listItem w-64">
			<Link href={imageFull(src)}><Image src={imageThumb(src)} width={250} height={250} alt='image' /></Link>
			{(caption) && <span>{caption}</span>}
			<br />
			{(credit) && <Credit g={credit} u={crediturl} d={creditdate} />}
		</div>
	})
	*/
}

const Player = (results?: HashedType) => results && <GigSearchResults results={results} banner={(results: HashedType) => (results) && <Tag>Played in the band</Tag> } />

const Act = (results?: HashedType) => results && <GigSearchResults results={results} banner={(results: HashedType) => (results) && <Tag>Shared the bill</Tag> } />

const Conspirator = ({ params }: { params?: any }) => {
	const conspirator: any = people.find(({ href, name }) => href === params?.slug || name === unescape(params?.slug));
	const name = conspirator && conspirator.name || '';
	const { data, isLoading, error } = useConspirator(name);
	const { performer, support, pictures } = data || {};

	if (!params || !params?.slug || !name.length) return notFound();

	return <>
		<Header section="conspirators" title={name} />
		<main>
			<Tag>{name}</Tag>
			This is a work in progress..
			<Loading isLoading={isLoading} >
				<Player results={performer?.results} />
				<Act results={support?.results} />
				<Pictures results={pictures?.result} />
			</Loading>
		</main>
		<Footer />
	</>
}

export default Conspirator;

/*
Agent Cooper
Agent Wilson
Aggi Demetri
Alan Moore
Alastair Indge
Alex Green
Alex Lee
Alice Thompson
Ani Cordero
Anita Allbright
B-Man
Blair MacDonald
Bolly
Brent Bambury
Buffalo Shame
Charlie Baldonado
Curtis E. Johnson
Dave Henderson
Dave Morgan
David E. Barker
David J.
David Whittemore
Deirdre O'Donoghue
Derek Tomkins
Dooj Wilkinson
E-Man
Emil Von D&auml;mmerung
Erich Hubner
Erol Suleyman
Felix Ray
Francisco Cabeza
G-Man
Gabriel Turner
Garrick Simmons
Greenwood Goulding
Greg Gilmore
Howard Turner
Iain O'Higgins
Ian Botterill
Ian Sturgess
Joby Palmer
Joe Allen
Joe Skyward
Joe Woolley
Joel Harries
John A. Rivers
Jonny Mattock
Julian Poole
Karel Von D&auml;mmerung
Kathie McGinty
Kathy Schaer
Kevin Haskins
Kevin Komoda
Kizzy O'Callaghan
Laurence O'Keefe
Lee Brooks
Les Sanders
Lionel Brando
MC Bott
Malcolm Rivett-Carnac
Marc Hadley
Mark Brown
Mark Refoy
Martin. K. Daley
Martin K. Daley
Martin Stebbing
Max Eider
Max Read
Max Reed
Mick Mercer
Misery Wilson
Mitch Jenkins
Mr. Crush
Nick Bandy
Nick Burson
Otto Von D&auml;mmerung
Owen Jones
Pascal Legras
Pat Beirne
Pat Fish
Pat Kenneally
Paul Hookham
Paul Mulreany
Paul Taylor
Peter Astor
Peter Crouch
Richard Formby
Richard Lohan
Rolo McGinty
Russell Cooper
Simon Taylor
Sonic Boom
Steve Beswick
Steve Garofalo
Steve Musgrove
Steve New
Steve Valentine
Sumishta Brahm
The Antichrist
The Conspiracy
The Undead
Tim Burrell
Tim Harries
Tony Harris
Tractor
Wilson Headstone
*/
