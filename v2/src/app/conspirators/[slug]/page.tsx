"use client"

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Tag from '@/components/Tag';
import { isKnownMusician, AutoLinkSong } from '@/lib/defines';
import { type HashedType, ts2URI, truncAt, pluralize } from '@/lib/utils';
import { GigSearchResults } from '@/components/GigSearch';
import { notFound } from 'next/navigation';
import { summaryBodySearch, removeHTML } from '@/components/GenericWeb';
import Loading from '@/components/Loading';
import PhotoSet from '@/components/PhotoSet';
import Contributions from '@/components/Contributions';
import useConspirator from '@/lib/useConspirator';
import ReleaseCards from '@/components/ReleaseCards';

const AlbumAppearance = ({ lookup, object }: any) => {
	const roles = object?.instruments?.join(', ');
	return <div>
		{(!!roles?.length) && <div><b>Role</b>: {roles}</div>}
		{Object?.keys(object?.songs)?.map((s: string, key: number) => {
			return <div key="key">
				<b>{AutoLinkSong(s)}</b> - {object?.songs[s]?.join(', ')}
			</div>
		})}
	</div>
}

const Releases = ({ releases, name }: any) => {
	if (!releases?.numResults) return;
	const albums: HashedType = {};

	releases?.results?.forEach((a: any) => {
		const { project='jbc', lookup, song, instruments, href, thumb, title, dtreleased } = a;
		if (!albums[lookup]) albums[lookup] = { ...a, instruments: [], songs: {}, href, thumb, title, dtreleased };
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
	return <ReleaseCards preventAutoExpand={(count > 4)} items={Object.keys(albums)?.map((a: any) => ({ ...albums[a], summary: <AlbumAppearance lookup={a?.lookup} object={albums[a]} /> }))} />
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

const AKA = ({ aliases }: any) => (!!aliases?.length) && (<><Tag>Also Known As</Tag><div className="listItem">{aliases?.map((alias: string, key: number) => <span key={key} className="break-keep outline outline-1 outline-cyan-500 m-1"> <b>AKA</b> <Link href={`/conspirators/${alias}`}>{alias}</Link> </span>)}</div></>);

const Conspirator = ({ params }: { params?: any }) => {
	const conspirator = decodeURIComponent(params?.slug);
	const known = isKnownMusician(conspirator);
	const name = known && known.name || '';
	const { data, isLoading, error } = useConspirator(name);
	const { releases, performer, support, pictures } = data || {};

	if (!params || !params?.slug || !name.length) return notFound();

	return <>
		<Header section="conspirators" title={name} />
		<main>
			{/*<Tag>{name}</Tag>
			This is a work in progress.. */}
			<Loading isLoading={isLoading} >
				<AKA aliases={known?.aliases?.filter((a: string) => a !== conspirator)} />
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
