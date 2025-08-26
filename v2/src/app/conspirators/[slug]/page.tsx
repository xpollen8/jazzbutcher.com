"use client"

import FeaturedItem from '@/components/FeaturedItem';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { person, AutoLinkSong } from '@/lib/defines';
import { type HashedType, ts2URI, truncAt, pluralize } from '@/lib/utils';
import { GigSearchResults } from '@/components/GigSearch';
import { notFound } from 'next/navigation';
import { removeHTML } from '@/components/GenericWeb';
import Loading from '@/components/Loading';
import PhotoSet from '@/components/PhotoSet';
import Contributions from '@/components/Contributions';
import useConspirator from '@/lib/useConspirator';
import useRelease from '@/lib/useRelease';

const AlbumAppearance = ({ lookup, object }: any) => {
	const { data, isLoading, error } = useRelease(lookup);
	const album = data?.results[0];
	if (!album) return;
	return <FeaturedItem
		image={truncAt(';;', album?.thumb || '')}
		title=<><b>{album?.title}</b> ({removeHTML(album?.dtreleased)})</>
		>
		<div>
			{(!!object?.instruments?.length) && <div><b>Role</b>: {object?.instruments?.join(', ')}</div>}
			{Object?.keys(object?.songs)?.map((s: string, key: number) => {
				return <div key="key">
					<b>{AutoLinkSong(s)}</b> - {object?.songs[s]?.join(', ')}
				</div>
			})}
		</div>
	</FeaturedItem>
}

const Releases = ({ releases, name }: any) => {
	if (!releases?.numResults) return;
	const albums: HashedType = {};
	releases?.results?.forEach((a: any) => {
		const { project='jbc', lookup, song, instruments } = a;
		if (!albums[lookup]) albums[lookup] = { instruments: [], songs: {} };
		if (song) {
			song?.split('$$')?.forEach((s: string) => {
				if (!albums[lookup].songs[s]) albums[lookup].songs[s] = [];
				albums[lookup].songs[s].push(instruments);
			});
		} else {
			albums[lookup].instruments.push(instruments);
		}
	});

	const count = Object?.keys(albums)?.length;
	return (!!count) && <details>
		<summary className="tagClickable">{pluralize(count, 'album credit', name)}</summary>
		{Object?.keys(albums)?.map((a: string, key: number) => <div className="listItem" key={key}><AlbumAppearance lookup={a} object={albums[a]} /></div>)}
	</details>
}

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
	const conspirator = person(unescape(params?.slug));
	const name = conspirator && conspirator.name || '';
	const { data, isLoading, error } = useConspirator(name);
	const { releases, performer, support, pictures } = data || {};

	if (!params || !params?.slug || !name.length) return notFound();

	return <>
		<Header section="conspirators" title={name} />
		<main>
			{/*<Tag>{name}</Tag>
			This is a work in progress.. */}
			<Loading isLoading={isLoading} >
				<Releases releases={releases} name={name} />
				<Pictures pictures={pictures} name={name} />
				<Player results={performer} />
				<Act results={support} />
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
