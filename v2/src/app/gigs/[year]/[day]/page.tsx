"use client"

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import './styles.css';
import EmbedMedia from '@/components/EmbedMedia';

import { AutoLinkPlayer, AutoLinkAct } from '@/lib/defines';
import { parseProject, parseHourAMPM, parseDayOrdinal, parseMonthName, datesEqual, gigPage2Datetime } from '@/lib/macros';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { Credit, ParsedCaption, removeHTML, RenderHTML } from '@/components/GenericWeb';
import useGig from '@/lib/useGig';

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
			<Image src={thumb} width={width / 1.5} height={height / 1.5} alt={alt} className="max-w-md" />
		</Link>
		<ParsedCaption {...data} credit_date={useDate} />
	</div>)
}

const GigText = ({ data }: any) => {
	return (<>
		<RenderHTML className="listItem" body={data?.body}>
			<Credit g={data?.credit} u={data?.credit_url} d={data?.credit_date} />
		</RenderHTML>
	</>)
}

const Iterator = ({ data, func, className }: any) => (
	<>
		{(data && data?.length) && (
			<div className={className} >
				{data.map((d: any, key: number) => <div key={key}>{func({ data: d })}</div> )}
			</div>
		)}
	</>
)

const GigTicket = (data: any, key: number) => <GigMedia {...data} />

const GigTickets = (data: any) => <><Iterator data={data} func={GigTicket} className="flex flex-row flex-wrap gap-5 justify-center" /></>

const GigSetlist = (data: any, key: number) => <GigMedia {...data} />

const GigSetlists = (data: any) => <><Iterator data={data} func={GigSetlist} className="flex flex-row flex-wrap gap-5 justify-center" /></>

const GigPoster = (data: any, key: number) => <GigMedia {...data} />

const GigPosters = (data: any) => <><Iterator data={data} func={GigPoster} className="flex flex-row flex-wrap gap-5 justify-center" /></>

const GigPhoto = (data: any, key: number) => <GigMedia {...data} />

const GigPhotos = (data: any) => <><Tag>Photos</Tag><Iterator data={data} func={GigPhoto} className="flex flex-row flex-wrap gap-5 justify-center" /></>

const GigNote = (data: any, key: number) => <GigText {...data} />

const GigNotes = (data: any) => <><Iterator data={data} func={GigNote} /></>

const GigSelfReview = (data: any, key: number) => <GigText {...data} />

const GigSelfReviews = (data: any) => <><Iterator data={data} func={GigSelfReview} /></>

const GigPlay = ({ data }: any) => {
	return (
		<div style={{ marginLeft: '10px' }}>
			{/*console.log("Play", data)*/}
			{/*data?.song} {data?.author*/}
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
			{/*console.log("Wit", data)*/}
			{AutoLinkAct(data?.performer)}
		</div>
	)
}
const GigWith = (data: any) => <><Tag>Also On The Bill</Tag><Iterator data={data} func={GigWit} /></>

const GigPlayer = ({ data }: any) => {
	return (
		<span style={{ whiteSpace: 'nowrap' }}>
			{AutoLinkPlayer(data?.performer)}
			{(data?.instruments?.length) && <>{' '}<span className="smalltext">({data?.instruments?.split(',').join(', ')})</span></>}
		</span>
	)
}
const GigPlayers = (data: any) => (
	<>
			<Tag>Performers</Tag>
		<div className="g_who">
			<Iterator data={data} func={GigPlayer} className="flex flex-wrap space-x-5" />
		</div>
	</>
)

const GigReview = ({ data }: any) => {
	return (<>
		<RenderHTML className="listItem" body={data?.body} >
			<Credit g={removeHTML(data?.credit)} u={data?.credit_url} d={data?.credit_date} />
		</RenderHTML>
	</>)
}
const GigReviews = (data: any) => <><Iterator data={data} func={GigReview} /></>

const GigDetails = ({ gig }: any) => {
	if (!gig) return;
	const extra = gig?.extra;
	return (<>
		{GigPlayers(extra?.players_JBC)}
		{GigWith(extra?.players_with)}
	</>)
}

const GigMap = ({ data }: any) => {
	return (<>
	</>)
}

const ExtraNav = ({ datetime, gig }: { datetime: string, gig: any }) => {
	return <>
		- NAV -
	</>
}

const Nav = ({ year, datetime, gig }: { year: number, datetime: string, gig: any }) => {
	const hasHour = !(datetime.includes('00:00:00'));
	const project = parseProject(gig?.extra);

	const display = `${parseMonthName(datetime)} ${parseDayOrdinal(datetime)} ${(hasHour) ? parseHourAMPM(datetime) : ''}`;

	return <Header project={project} section='gigs' title={ [ `${year};;/gigs/${year}`, display ] } extraNav=<ExtraNav datetime={datetime} gig={gig} /> />
}

const Content = ({ gig }: { gig: any }) => {
	// extra.played (gigsongs table)
	const extra:any = {
		played: gig?.played
	}

	// extra.media_* (gigmedia table)
	gig?.media?.forEach((t: any) => {
		const nameIt = `media_${t.type}`;
		switch (t.type) {
			case 'pix':
			case 'poster':
			case 'setlist':
			case 'ticket':
				if (!extra[nameIt]) extra[nameIt] = [];
				extra[nameIt].push(t);
				break;
			default:
				if (!extra['media_other']) extra['media_other'] = [];
				extra['media_other'].push(t);
		}
	})

	// extra.players_* (performance table)
	gig?.players?.forEach((t: any) => {
		switch (t.category) {
			case 'event':
				if (!extra['players_JBC']) extra['players_JBC'] = [];
				extra['players_JBC'].push(t);
			break;
			case 'with':
				if (!extra['players_with']) extra['players_with'] = [];
				extra['players_with'].push(t);
			break;
			default:
				// ignore 'event'
		}
	})

	// extra.press_* (press table)
	gig?.press?.forEach((t: any) => {
		const nameIt = `press_${t.type}`;
		switch (t.type) {
			case 'gig':
			case 'album':
			case 'interview':
			case 'kit':
			case 'pat':
			case 'retrospective':
				if (!extra[nameIt]) extra[nameIt] = [];
				extra[nameIt].push(t);
				break;
			default:
				if (!extra['press_other']) extra['press_other'] = [];
				extra['press_other'].push(t);
		}
	})

	// extra.text_* (gigtext table)
	gig?.text?.forEach((t: any) => {
		const nameIt = `text_${t.type}`;
		switch (t.type) {
			case 'bootlegger':
			case 'notes':
			case 'recording':
			case 'review':
			case 'selfreview':
			case 'soundman':
				if (!extra[nameIt]) extra[nameIt] = [];
				extra[nameIt].push(t);
			break;
			default:
				if (!extra['text_other']) extra['text_other'] = [];
				extra['text_other'].push(t);
		}
	})

	const extras = [
		//{ label: 'Details', func: (GigDetails },
		{ label: 'Photos', lookup: 'media_pix', func: GigPhotos },
		{ label: 'Posters', lookup: 'media_poster', func: GigPosters },
		{ label: 'Tickets', lookup: 'media_ticket', func: GigTickets },
		{ label: 'Setlists', lookup: 'media_setlist', func: GigSetlists },
		{ label: 'Played', lookup: 'played', func: GigPlayed },
		//{ label: 'Players', lookup: 'players_JBC', func: GigPlayers },
		//{ label: 'With', lookup: 'players_with', func: GigWith },
		{ label: 'Notes', lookup: 'text_notes', func: GigNotes },
		{ label: "Pat's Review", lookup: 'text_selfreview', func: GigSelfReviews },
		{ label: 'Reviews', lookup: 'text_review', func: GigReviews },
	]

	return <div className={`(isLoading) ? 'blur-sm' : '' w-full`}>
		<Tag>Live Performance -
		{gig?.type} {gig?.venue} {gig?.city} {gig?.country}
		</Tag>
		<Tabs.Root className="TabsRoot mx-2" defaultValue="details">
			<Tabs.List className="TabsList" aria-label="Available gig details">
				<Tabs.Trigger key='details' className="TabsTrigger" value='details'>
					Details
				</Tabs.Trigger>
				{extras?.map(({ label, lookup }: any, key: number) => {
					if (extra[lookup]?.length) {
						return (
							<Tabs.Trigger key={key} className="TabsTrigger" value={`tab${key}`}>
								{label}
							</Tabs.Trigger>
						)
					}
				})}
			</Tabs.List>
			<Tabs.Content key='details' className="TabsContent -mx-4" value='details'>
				<div className="bg-slate-100"><GigDetails gig={gig} /></div>
			</Tabs.Content>
			{extras?.map(({ label, lookup, func }: any, key: number) =>
				<Tabs.Content key={key} className="TabsContent -mx-4" value={`tab${key}`}>
					<div className="bg-slate-100">{func(extra[lookup])}</div>
				</Tabs.Content>
			)}
		</Tabs.Root>
	</div>
}

const GigProfile = (props: any) => {
	const year = props?.params?.year;
	const day = props?.params?.day;
	const datetime = gigPage2Datetime(`/${year}/${day}.html`);
	const { data, isLoading, error } = useGig(datetime)
	const gig = data?.results[0];

	return <>
		<Suspense fallback={<>Loading...</>}>
			{(!isLoading && gig) && (<>
				<Nav year={year} datetime={datetime} gig={gig} />
				<Content gig={gig} />
			</>)}
		</Suspense>
		<Footer />
	</>
}

export default GigProfile;
