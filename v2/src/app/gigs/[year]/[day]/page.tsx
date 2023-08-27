"use client"

import useSWR from 'swr';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import './styles.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
//import * as Gig from '@/components/GigProfile';

import { parseHourAMPM, parseDayOrdinal, parseMonthName, datesEqual, gigPage2Datetime } from '@/lib/macros';
import apiData from '@/lib/apiData';

const useGig = (datetime: string) => {
	// TODO have fetchGig add .prevGig & .nextGig to object
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(`https://data.jazzbutcher.com/api/gig_by_datetime/${datetime}`, fetcher);
	return {
		gig: data,
		error,
		isLoading,
	}
}

const Iterator = (data: any, func: any) => {
	if (!(data && data.length)) return <></>;
	return (<div className="bg-slate-300">
		<ol>
		{data.map((d: any, key: number) => {
			return (<li key={key}>{func({ data: d })}</li>)
		})}
		</ol>
	</div>)
}

const GigTicket = ({ data }: any) => {
	return (
		<div>
			{/*console.log("Ticket", data)*/}
		</div>
	)
}
const GigTickets = (data: any) => <> {Iterator(data, GigTicket)} </>

const GigSetlist = ({ data }: any) => {
	return (
		<div>
			{/*console.log("Setlist", data)*/}
		</div>
	)
}
const GigSetlists = (data: any) => <> {Iterator(data, GigSetlist)} </>

const GigPoster = ({ data }: any) => GigPhoto({ data });
/*{
	return (
		<div>
			{console.log("Poster", data)}
			{data?.image}
		</div>
	)
}*/
const GigPosters = (data: any) => <> {Iterator(data, GigPoster)} </>

const Caption = (caption?: string) => caption &&  <><br/><div className="caption">{caption}</div></>

const removeHTML = (str?: string) => {
	const deParagraphed = str
		?.replace(/<p>/ig, '<br/>') // <p> => <br/>
		?.replace(/<p([^>]+)>/ig, '<br/>')  // <p.....> => <br/>
		?.replace(/<\/p>/ig, '<br/>') // </p> => <br/>
		?.trim();
	/* need to leave <br/ tags intact
	const unlinked = deParagraphed
		?.replace(/(<([^>]+)>)/ig, '')?.trim();
	*/
	return deParagraphed;
}

const renderHTML = (str?: string) => str && <div dangerouslySetInnerHTML={{ __html: str }} />

const parseCaption = (str?: string) => removeHTML(str);

const parsePhotoData = (str: string) => {
	if (!str) return {};
	const [ image, raw_caption ] = str.split(';;');
	//console.log("parsePhotoData", { image, raw_caption });
	const [ orig, base, ext ] = image?.match(/([^.]+)\.([^.]+)?$/) || [];
	//console.log("parsePhotoData", { image, raw_caption, orig, base, ext });
	if (!base) return {};
	const caption = parseCaption(raw_caption);

	return { base, image, ext, caption, server: image.includes('http') ? '' : 'https://jazzbutcher.com' }
}

const GigPhoto = ({ data }: any) => {
	const { base, image, ext, server, caption } = parsePhotoData(data?.image);
	if (!image) return <></>;

	const alt = caption || 'Gig Photo';
	//console.log("GOT", { base, image, ext, server, caption });
	return (<>
		<span className="image">
			<Link href={`${server}${image}`}>
				<Image src={`${server}${base}_500.${ext}`} width={500} height={500} alt={alt} />
			</Link>
		</span>
		{Caption(caption)}
	</>)
}
const GigPhotos = (data: any) => <> {Iterator(data, GigPhoto)} </>

const GigNote = ({ data }: any) => renderHTML(data?.body);
/*
{
	return (
		<div>
			{console.log("Note", data)}
			{data?.body}
		</div>
	)
}
*/
const GigNotes = (data: any) => <>{Iterator(data, GigNote)}</>

const GigPlay = ({ data }: any) => {
	return (
		<div>
			{/*console.log("Play", data)*/}
			{data?.song}
		</div>
	)
}
const GigPlayed = (data: any) => <> {Iterator(data, GigPlay)} </>

const GigWit = ({ data }: any) => {
	return (
		<div>
			{/*console.log("Wit", data)*/}
		</div>
	)
}
const GigWith = (data: any) => <> {Iterator(data, GigWith)} </>

const GigPlayer = ({ data }: any) => {
	return (
		<div>
			{/*console.log("Player", data)*/}
			{data?.performer}
		</div>
	)
}
const GigPlayers = (data: any) => <> {Iterator(data, GigPlayer)} </>

const GigReview = ({ data }: any) => renderHTML(data?.body);
/*
{
	return (
		<div>
			{console.log("Review", data)}
			{data?.body}
		</div>
	)
}
*/
const GigReviews = (data: any) => <> {Iterator(data, GigReview)} </>

const GigDetails = (data: any) => {
	return (<>
		Details
	</>)
}

const GigMap = (data: any) => {
	return (<>
	</>)
}

const ExtraNav = ({ datetime }: { datetime: string }) => {
	const { gig, isLoading, error } = useGig(datetime)
	if (isLoading) return <></>;
	return <>
		- NAV -
	</>
}

const Nav = ({ year, datetime }: { year: number, datetime: string }) => {
	const hasHour = !(datetime.includes('00:00:00'));

	const title = <span>
		<Link href={`/gigs/${year}`}>{year}</Link> | {parseMonthName(datetime)} {parseDayOrdinal(datetime)} {hasHour && parseHourAMPM(datetime)}
	</span>

	return <Header section='gigs' title={title} extraNav=<ExtraNav datetime={datetime} /> />
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

	// clean up detail object
	//delete details['played'];
	//delete details['media'];
	//delete details['text'];
	//delete details['players'];
	//delete details['press'];

	const extras = [
		{ label: 'Players', lookup: 'players_JBC'  },
		{ label: 'With', lookup: 'players_with'  },
		{ label: 'Photos', lookup: 'media_pix'  },
		{ label: 'Posters', lookup: 'media_poster'  },
		{ label: 'Setlists', lookup: 'media_setlist'  },
		{ label: 'Tickets', lookup: 'media_ticket'  },
		{ label: 'Notes', lookup: 'text_notes'  },
		{ label: 'Reviews', lookup: 'text_review'  },
		{ label: 'Played', lookup: 'played'  },
	]

	return <div className={`(isLoading) ? 'blur-sm' : '' w-full`}>
		<GigDetails gig={gig} />
		<Tabs.Root className="TabsRoot" defaultValue="tab0">
			<Tabs.List className="TabsList" aria-label="Available gig details">
				{extras.map(({ label, lookup, func }: any, key: number) => {
					if (extra[lookup]?.length) {
						return (
							<Tabs.Trigger key={key} className="TabsTrigger" value={`tab${key}`}>
								{label}
							</Tabs.Trigger>
						)
					}
				})}
			</Tabs.List>
			{extras.map(({ label, lookup, func }: any, key: number) => (
					<Tabs.Content key={key} className="TabsContent bg-slate-400" value={`tab${key}`}>
						{eval(`Gig${label}`)(extra[lookup])}
					</Tabs.Content>
					)
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
		<Content datetime={datetime} />
		<Footer />
	</>
}

export default GigProfile;
