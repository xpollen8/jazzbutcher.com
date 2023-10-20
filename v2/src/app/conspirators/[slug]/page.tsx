"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { people, expand, mapPerformers, AutoLinkPlayer } from '@/lib/defines';
import { imageThumb, imageFull, parseCaptionsSourcesEtc} from '@/lib/utils';
import { Credit } from '@/components/GenericWeb';
import useGigs from '@/lib/useGigs';
import { GigSearchResults } from '@/components/GigSearch';

//import useConspirator from '@/lib/useConspirator';

const PersonGallery = (props: { str?: string }) => {
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
}

const Player = ({ person }: { person: string }) => {
	const { data, isLoading, error } = useGigs({ type: 'performer', query: person?.replace(/ /g, '_') });
	return (<>
		{(isLoading) ?
			<>Loading..</>
			: !!(data?.results?.length) && <GigSearchResults results={data} banner={() => <Tag>As a Performer</Tag> } />
		}
	</>)
}

const Act = ({ person }: { person: string }) => {
	const { data, isLoading, error } = useGigs({ type: 'alsowith', query: person?.replace(/ /g, '_') });
	return (<>
		{(isLoading) ?
			<>Loading..</>
			: !!(data?.results?.length) && <GigSearchResults results={data} banner={() => <Tag>Also On The Bill</Tag> } />
		}
	</>)
}

const Conspirator = ({ params }: { params?: any }) => {
	const person = people.find(({ href, name }) => href === `${params?.slug}.html` || name === unescape(params?.slug));
	/*
	const { data, isLoading, error } = useConspirator(name);

	const conspirator = data?.results[0];

	/*
	return (<><Suspense fallback=<>Loading...</> >
		{(!isLoading && !isX) && (() => {
			return (<>
				<Header section="conspirator" title={conspirator?.name} />
				<Tag>{song?.title}</Tag>
				{tabs.filter(t => t.lookup(song))?.map((t: any, key: number) => t?.func(song, key))}
			</>)
		})()}
		<Footer />
	</Suspense></>)
	*/
	return <>
		<Header section="conspirators" title={person?.name} />
		<main>
			<Tag>{person?.name}</Tag>
			This is a work in progress..
			<PersonGallery str={person?.images} />
			{(person?.name) && <Player person={person.name} />}
			{(person?.name) && <Act person={person.name} />}
		</main>
		<Footer />
	</>;
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
