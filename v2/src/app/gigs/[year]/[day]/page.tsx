"use client"

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';
import EmbedMedia from '@/components/EmbedMedia';

import { AutoLinkPlayer, AutoLinkAct } from '@/lib/defines';
import { parseDomain, parseProject, parseHourAMPM, parseDayOrdinal, parseMonthName, datesEqual, gigPage2Datetime, ts2URI, dateDiff } from '@/lib/macros';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { Credit, ParsedCaption, removeHTML, RenderHTML } from '@/components/GenericWeb';
import useGig from '@/lib/useGig';
import { PressSummary } from '@/components/MakeReleasePress';
import { PrevArrow, NextArrow } from '@/components/Arrows';

const parsePhoto = (str: string) => {
	if (!str) return {};

	const parseImageURL = (str: string) => {
		const regex = /^(https?:\/\/)?([^\/]+)(.*?)(\.[^.]*$|$)/;
		const match = str.match(regex);

		if (match) {
			const protocol = match[1] || 'https://';
			const server = `${protocol}${match[2]}`;
			const base = match[3];
			const ext = match[4]?.replace('.','');
			return { server, base, ext };
		} else {
			const [ base, ext ] = str.split('.');
			return { server: 'https://jazzbutcher.com', base, ext };
		}
	}

	const { server, base, ext } = parseImageURL(str.trim());

	if (!base) return {};
	const width = 500;
	const height = 500;
	const thumb = `${server}${base}_${width}.${ext}`;
	const image = `${server}${base}.${ext}`;

	return { thumb, width, height, image, ext, server }
}

const GigMedia = ({ data }: any) => {
	const { thumb, width, height, image, ext, server } = parsePhoto(data?.image);
	if (!image) return <></>;
	const caption = removeHTML(data?.image_caption?.image_caption);
	const alt = caption || `Gig ${data?.type}`;

	const useDate = (data?.credit_date === '0000-00-00 00:00:00') ? '' : data?.credit_date;
	return (<div className="image drop-shadow-md" style={{ width: width / 1.45 }}>
		<Link href={`${image}`}>
			<Image unoptimized src={thumb} width={width / 1.5} height={height / 1.5} alt={alt} className="max-w-md" />
		</Link>
		<ParsedCaption {...data} credit_date={useDate} />
	</div>)
}

const GigText = ({ data }: any) => {
	return (<>
		<RenderHTML body={data?.body}>
			<Credit g={data?.credit} u={data?.credit_url} d={data?.credit_date} />
		</RenderHTML>
	</>)
}

const Iterator = ({ data, func, className }: any) => {
	return (data && data?.length) &&
		<div className={className} >
			{data.map((d: any, key: number) => <div key={key}>{func({ data: d })}</div> )}
		</div>
}

const GigTicket = (data: any, key: number) => <GigMedia {...data} />

const GigTickets = (data: any) => <><Iterator data={data} func={GigTicket} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></>

const GigSetlist = (data: any, key: number) => <GigMedia {...data} />

const GigSetlists = (data: any) => <><Iterator data={data} func={GigSetlist} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></>

const GigPoster = (data: any, key: number) => <GigMedia {...data} />

const GigPosters = (data: any) => <><Iterator data={data} func={GigPoster} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></>

const GigPhoto = (data: any, key: number) => <GigMedia {...data} />

const GigPhotos = (data: any) => <><Iterator data={data} func={GigPhoto} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></>

const GigNote = (data: any, key: number) => <GigText {...data} />

const GigNotes = (data: any) => <><Iterator data={data} func={GigNote} /></>

const GigSelfReview = (data: any, key: number) => <GigText {...data} />

const GigSelfReviews = (data: any) => <><Iterator data={data} func={GigSelfReview} /></>

const GigPlay = ({ data }: any) => {
	return (
		<div>
			<EmbedMedia data={data} />
			{data?.comment}
		</div>
	)
}
const GigPlayed = (data: any) => {
	let set = '';
	let type = '';
	const updateSet = (newSet: string) => set=newSet;
	return <Iterator data={data} func={(({ data }: any) => {
		let banner;
		if (data.type !== type || data.setnum !== set) {
			type = data.type;
			set = data.setnum;
			banner = <Tag>{type} {set}</Tag>;
		}
		return <>{banner}<GigPlay data={data}/></>
	})} />
}

const GigWit = ({ data }: any) => {
	return (
		<div>
			{AutoLinkAct(data?.performer)}
		</div>
	)
}
const GigWith = (data: any) => <><Iterator data={data} func={GigWit} /></>

const GigPlayer = ({ data }: any) => {
	return (
		<div style={{ whiteSpace: 'nowrap', background: '#fee' }}>
			{AutoLinkPlayer(data?.performer)}
			{(data?.instruments?.length) && <>{' '}<span className="smalltext">({data?.instruments?.split(',').join(', ')})</span></>}
		</div>
	)
}
const GigPlayers = (data: any) => (
	<div className="g_who">
		<Iterator data={data} func={GigPlayer} className="flex flex-wrap gap-x-5 gap-y-1 -ml-3" />
	</div>
)

const GigReview = ({ data }: any) => {
	return (<>
		<RenderHTML className="listItem" body={data?.body} >
			<Credit g={removeHTML(data?.credit)} u={data?.credit_url} d={data?.credit_date} />
		</RenderHTML>
	</>)
}
const GigReviews = (data: any) => <><Iterator data={data} func={GigReview} /></>

const GigPress = ({ data }: any) => PressSummary(data, 1);

const GigPresses = (data: any) => <><Iterator data={data} func={GigPress} /></>

const GigDetails = ({ gig, joins }: any) => {
	if (!gig) return;
	return (<>
		<Tag>Live Performance - {gig?.type} {gig?.venue} {gig?.city} {gig?.country} </Tag>
		<blockquote className="listItem" style={{ paddingLeft: '20px' }}>
			<label>Date:</label> {dateDiff(gig?.datetime)}<br />
			{(gig.ticketweb) && <><label>Tickets:</label> <Link href={gig.ticketweb}>{parseDomain(gig.ticketweb)}</Link><br /></>}
			<label>Venue:</label> {gig.venue} {(gig.eventweb) && <Link href={gig.eventweb}>(Website)</Link>} <br />
			{(gig.city) && <><label>Location:</label> {gig?.address} {gig?.city} {gig?.country} {gig?.postalcode}<br /></>}
			{(gig.phone) && <><label>Telephone:</label> {gig.phone}<br /></>}
			{(gig.cost) && <><label>Admission:</label> {gig.cost}</>}
		</blockquote>
	</>)
}

const GigMap = ({ data }: any) => {
	return (<>
	</>)
}

const ExtraNav = ({ gig }: { gig: any }) => {
	if (gig.prev && gig.next) {
		const prev = gig?.prev[0]?.datetime;
		const next = gig?.next[0]?.datetime;
		const prevGig = <Link href={`/gigs/` + ts2URI(prev)}><PrevArrow className="arrows" style={{ marginLeft: '10px' }} /></Link>;
		const nextGig = <Link href={`/gigs/` + ts2URI(next)}><NextArrow className="arrows" style={{ marginRight: '100px' }} /></Link>;
		return <> {prevGig} gig {nextGig} </>
	}
}

const Nav = ({ year, datetime, gig }: { year: number, datetime: string, gig: any }) => {
	const hasHour = !(datetime.includes('00:00:00'));
	const project = parseProject(gig?.extra);

	const display = `${parseMonthName(datetime)} ${parseDayOrdinal(datetime)} ${(hasHour) ? parseHourAMPM(datetime) : ''}`;

	return <Header project={project} section='gigs' title={ [ `${year};;/gigs/${year}`, display ] } extraNav=<ExtraNav gig={gig} /> />
}

const Content = ({ gig }: { gig: any }) => {
	// joins.played (gigsongs table)
	const joins:any = {
		played: gig?.played
	}

	// joins.media_* (gigmedia table)
	gig?.media?.forEach((t: any) => {
		const nameIt = `media_${t.type}`;
		switch (t.type) {
			case 'pix':
			case 'poster':
			case 'setlist':
			case 'ticket':
				if (!joins[nameIt]) joins[nameIt] = [];
				joins[nameIt].push(t);
				break;
			default:
				if (!joins['media_other']) joins['media_other'] = [];
				joins['media_other'].push(t);
		}
	})

	// joins.players_* (performance table)
	gig?.players?.forEach((t: any) => {
		switch (t?.category) {
			case 'event':
				if (!joins['players_JBC']) joins['players_JBC'] = [];
				const player = joins['players_JBC'].find((a: any) => a.performer === t.performer);
				if (!player) {
					joins['players_JBC'].push(t);
				} else {
					// only add new instruments to players' object
					t.instruments.split(',').forEach((i: any) => {
						if (!player.instruments.includes(i)) {
							const inst = player.instruments.split(',');
							inst.push(i);
						}
					});
				}
			break;
			case 'with':
				if (!joins['players_with']) joins['players_with'] = [];
				joins['players_with'].push(t);
			break;
			default:
				// ignore 'event'
		}
	})

	// joins.press_* (press table)
	gig?.press?.forEach((t: any) => {
		if (t.url?.includes('/press')) {
			const types = t.type.split(',');
			types.forEach((tt: string) => {
				const nameIt = `press_${tt}`;
				switch (tt) {
					case 'gig':
					case 'album':
					case 'interview':
					case 'kit':
					case 'pat':
					case 'retrospective':
						if (!joins[nameIt]) joins[nameIt] = [];
						joins[nameIt].push(t);
						break;
					default:
						if (!joins['press_other']) joins['press_other'] = [];
						joins['press_other'].push(t);
				}
			})
		}
	})

	// joins.text_* (gigtext table)
	gig?.text?.forEach((t: any) => {
		const nameIt = `text_${t.type}`;
		switch (t.type) {
			case 'bootlegger':
			case 'notes':
			case 'recording':
			case 'review':
			case 'selfreview':
			case 'soundman':
				if (!joins[nameIt]) joins[nameIt] = [];
				joins[nameIt].push(t);
			break;
			default:
				if (!joins['text_other']) joins['text_other'] = [];
				joins['text_other'].push(t);
		}
	})

	const extras = [
		{ label: 'Players', lookup: 'players_JBC', func: GigPlayers },
		{ label: 'Notes', lookup: 'text_notes', func: GigNotes },
		{ label: 'Also On The Bill', lookup: 'players_with', func: GigWith },
		{ label: 'Posters', lookup: 'media_poster', func: GigPosters },
		{ label: 'Tickets', lookup: 'media_ticket', func: GigTickets },
		{ label: 'Photos', lookup: 'media_pix', func: GigPhotos },
		{ label: 'Setlists', lookup: 'media_setlist', func: GigSetlists },
		{ label: 'Played', lookup: 'played', func: GigPlayed },
		{ label: "Pat Says", lookup: 'text_selfreview', func: GigSelfReviews },
		{ label: 'Fan Reviews', lookup: 'text_review', func: GigReviews },
		{ label: 'Press', lookup: 'press_gig', func: GigPresses },
	]

	return <>
		<GigDetails gig={gig} joins={joins} />
		{extras?.map(({ label, lookup, func }: any, key: number) => <div key={key}>
			{!!(joins[lookup]?.length) && <><Tag>{label}</Tag><div className="listItem" style={{ paddingLeft: '20px' }}>{func(joins[lookup])}</div></>}
		</div>)}
	</>
}

const GigProfile = (props: any) => {
	const year = props?.params?.year;
	const day = props?.params?.day;
	const datetime = gigPage2Datetime(`/${year}/${day}.html`);
	const { data, isLoading, error } = useGig(datetime)
	const gig = data?.results[0];

	return <div className={(isLoading) ? 'blur-sm' : ''}>
		<Suspense fallback=<>Loading...</>>
			{(!isLoading && gig) && (<>
				<Nav year={year} datetime={datetime} gig={gig} />
				<main>
					<Content gig={gig} />
				</main>
			</>)}
		</Suspense>
		<Footer />
	</div>
}

export default GigProfile;
