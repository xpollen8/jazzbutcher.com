"use client"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { people } from '@/lib/defines';
import { ts2URI } from '@/lib/utils';
import { GigSearchResults } from '@/components/GigSearch';
import { notFound } from 'next/navigation';
import Loading from '@/components/Loading';
import PhotoSet from '@/components/PhotoSet';
import Contributions from '@/components/Contributions';
import useConspirator from '@/lib/useConspirator';

const Pictures = ({ pictures, name }: any) => {
	if (!pictures?.numResults) return;
	return <>
		<Tag>Photos tagged with &quot;{name}&quot;</Tag>
    <PhotoSet photos={pictures?.results?.map((p: any) => {
      return {
        ...p,
				caption: p?.image_caption,
        alt: p?.datetime?.substr(0, 10),
        href: ts2URI(p?.datetime),
        src: p?.image
      }
      })
    } />
	</>
}

const Player = ({ results }: any) => (!!results?.numResults) && <GigSearchResults results={results} banner={(results: any) => <Tag>Played in the band</Tag> } />

const Act = ({ results }: any) => (!!results?.numResults) && <GigSearchResults results={results} banner={(results: any) => <Tag>Shared the bill</Tag> } />

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
				<Player results={performer} />
				<Act results={support} />
				<Pictures pictures={pictures} name={name} />
				<Contributions label={`Website contributions by ${name}`} options={{
					all: true,
					filter: { field: 'credit', value: name },
				}} />
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
