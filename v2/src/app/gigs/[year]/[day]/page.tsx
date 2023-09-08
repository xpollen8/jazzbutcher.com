"use client"

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import './styles.css';

//import { mapActs, mapPerformers } from '@/lib/defines';
import { parseHourAMPM, parseDayOrdinal, parseMonthName, datesEqual, gigPage2Datetime } from '@/lib/macros';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { Credit, ParsedCaption, removeHTML, RenderHTML } from '@/components/GenericWeb';
import useGig from '@/components/useGig';

const Player = (str?: string) => {
  if (!str?.length) return;
	const pattern = /\[\[person:(.*?)\]\]/;
	const match = str.match(pattern);
	if (match) {
		const lookup = match[1].replace("'", '');
		return lookup?.replace(/_/g, ' ');
		/*
		const found = mapPerformers[lookup];
		if (!found) return lookup;
		return mapPerformers[lookup];
		*/
	}
	return str;
}

const Act = (str?: string) => {
  if (!str?.length) return;
	const pattern = /\[\[act:(.*?)\]\]/;
	const match = str.match(pattern);
	if (match) {
		const lookup = match[1].replace("'", '');
		return lookup?.replace(/_/g, ' ');
		/*
		const found = mapAct[lookup];
		if (!found) return lookup;
		return mapPerformers[lookup];
		*/
	}
	return str;
}

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

	return (<div className="image drop-shadow-md" style={{ width: width / 1.45 }}>
		<Link href={`${image}`}>
			<Image src={thumb} width={width / 1.5} height={height / 1.5} alt={alt} className="max-w-md" />
		</Link>
		<div className="credits">
			<ParsedCaption {...data} />
		</div>
	</div>)
}

const GigText = ({ data }: any) => {
	return (<>
		<RenderHTML body={data?.body} />
		<Credit g={removeHTML(data?.credit)} u={data?.credit_url} d={data?.credit_date} />
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

const GigPlay = ({ data }: any) => {
	return (
		<div>
			{/*console.log("Play", data)*/}
			{data?.song}
		</div>
	)
}
const GigPlayed = (data: any) => <><Iterator data={data} func={GigPlay} /></>

const GigWit = ({ data }: any) => {
	return (
		<div>
			{/*console.log("Wit", data)*/}
			{Act(data?.performer)}
		</div>
	)
}
const GigWith = (data: any) => <><Iterator data={data} func={GigWit} /></>

const GigPlayer = ({ data }: any) => {
	return (
		<span style={{ whiteSpace: 'nowrap' }}>
			{Player(data?.performer)}
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
		<RenderHTML body={data?.body} />
		<Credit g={removeHTML(data?.credit)} u={data?.credit_url} d={data?.credit_date} />
	</>)
}
const GigReviews = (data: any) => <><Iterator data={data} func={GigReview} /></>

const GigDetails = ({ data, extra }: any) => {
	return (<>
		{GigPlayers(extra?.players_JBC)}
		{GigWith(extra?.players_with)}
	</>)
}

const GigMap = ({ data }: any) => {
	return (<>
	</>)
}

const ExtraNav = ({ datetime }: { datetime: string }) => {
	const { gig, isLoading, error } = useGig(datetime)
	return <>
		- NAV -
	</>
}

const Nav = ({ year, datetime }: { year: number, datetime: string }) => {
	const hasHour = !(datetime.includes('00:00:00'));

	const display = `${parseMonthName(datetime)} ${parseDayOrdinal(datetime)} ${(hasHour) ? parseHourAMPM(datetime) : ''}`;

	return <Header section='gigs' title={ [ `${year};;/gigs/${year}`, display ] } extraNav=<ExtraNav datetime={datetime} /> />
}

const Content = ({ datetime }: { datetime: string }) => {
	const { gig, isLoading, error } = useGig(datetime)

	const details = gig?.results[0];	// assumes only one gig per datetime!

	// extra.played (gigsongs table)
	const extra:any = {
		played: details?.played
	}

	// extra.media_* (gigmedia table)
	details?.media?.forEach((t: any) => {
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
	details?.players?.forEach((t: any) => {
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
	details?.press?.forEach((t: any) => {
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
	details?.text?.forEach((t: any) => {
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
		{ label: 'Reviews', lookup: 'text_review', func: GigReviews },
	]

	return <div className={`(isLoading) ? 'blur-sm' : '' w-full`}>
		<Tag>Live Performance</Tag>
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
				<div className="bg-slate-100"><GigDetails data={gig} extra={extra} /></div>
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

	return <>
		<Nav year={year} datetime={datetime} />
		<Suspense fallback={<>Loading...</>}>
			<Content datetime={datetime} />
		</Suspense>
		<Footer />
	</>
}

export default GigProfile;
