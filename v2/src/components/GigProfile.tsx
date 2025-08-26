"use client"

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import EmbedMedia from '@/components/EmbedMedia';
import PhotoSet from '@/components/PhotoSet';
import TheGigPlayer, { GigPlayerHeader, GigPlayerFooter } from '@/components/GigPlayer';

import { AutoLinkPlayer, AutoLinkAct } from '@/lib/defines';
import { type HashedType, parseYear, parseDomain, parseProject, parseHourAMPM, parseDayOrdinal, parseMonthName, datesEqual, gigPage2Datetime, ts2URI, dateDiff, startSeconds, htmlString } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tag from '@/components/Tag';
import { Attribution, Source, Credit, ParsedCaption, removeHTML, RenderHTML } from '@/components/GenericWeb';
import useGig from '@/lib/useGig';
import PressCards from '@/components/PressCards';
import { PrevArrow, NextArrow } from '@/components/Arrows';
import Loading from '@/components/Loading';

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
			const parts = str.split('.');
			const ext = parts.pop();
			const base = parts.join('.');
			return { server: 'https://v1.jazzbutcher.com', base, ext };
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
	const useCredit = removeHTML(data?.credit);
	const useURL = (useCredit) ? `/contributions/${useCredit}` : data?.credit_url;
	return (<>
		<RenderHTML className="listItem" body={data?.body}>
			<Credit g={useCredit} u={useURL} d={data?.credit_date} />
		</RenderHTML>
	</>)
}

const Iterator = ({ data, func, className }: any) => {
	return (data && data?.length) &&
		<div className={className} >
			{data.map((d: any, key: number) => <div key={key}>{func({ data: d })}</div> )}
		</div>
}

const GigPicType = (data: any) => {
	const photosets: HashedType = {};
	data.forEach((d: any) => {
		const { image, image_caption } = d;
		const credit = d?.credit;
		const credit_date = d?.credit_date;
		const credit_url = d?.credit_url;
		const useCredit = (credit?.length) ? credit : 'Un-credited';
		if (!photosets[useCredit]) {
			photosets[useCredit] = { credit: removeHTML(credit), credit_date, credit_url, photos: [] }
		}
		photosets[useCredit].photos.push({ src: image, alt: removeHTML(image_caption) });
	});
	return Object.keys(photosets).map((ps: any, key: number) => {
		const useURL = (photosets[ps]?.credit) ? `/contributions/${photosets[ps]?.credit}` : photosets[ps]?.credit_url;
		const title = (photosets[ps]?.credit) ? <>Photoset by <Attribution g={photosets[ps]?.credit} u={useURL} d={photosets[ps]?.credit_date} /></> : ps;
		return <PhotoSet key={key} title={title} photos={photosets[ps]?.photos}/>
	})
}

const GigTicket = (data: any, key: number) => <GigMedia {...data} />

const GigTickets = (data: any) => <div className="listItem"><Iterator data={data} func={GigTicket} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></div>

const GigSetlist = (data: any, key: number) => <GigMedia {...data} />

const GigSetlists = (data: any) => <div className="listItem"><Iterator data={data} func={GigSetlist} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></div>

const GigCassette = (data: any, key: number) => <GigMedia {...data} />

const GigCassettes = (data: any) => <div className="listItem"><Iterator data={data} func={GigCassette} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></div>

const GigPoster = (data: any, key: number) => <GigMedia {...data} />

const GigPosters = (data: any) => <div className="listItem"><Iterator data={data} func={GigPoster} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></div>

const GigPhotos = (data: any) => GigPicType(data);

const GigImage = (data: any, key: number) => <GigMedia {...data} />

const GigImages = (data: any) => <div className="listItem"><Iterator data={data} func={GigImage} className="flex flex-row flex-wrap gap-5 justify-center p-3" /></div>

const GigNote = (data: any, key: number) => <GigText {...data} />

const GigNotes = (data: any) => <div className="listItem"><Iterator data={data} func={GigNote} /></div>

const GigSelfReview = (data: any, key: number) => <GigText {...data} />

const GigSelfReviews = (data: any) => <div className="listItem"><Iterator data={data} func={GigSelfReview} /></div>

const GigPlay = ({ data }: any) => {
	// hack alert.  if the comment field holds 'Source:',
	// then we assume this is an attibution of where the
	// setlist came from.  so remove it out of the object
	// and handle by itself.
	const [ X, source ] = data?.comment?.split('Source:') || [];
	const newData = JSON.parse(JSON.stringify(data));
	if (source) delete newData.comment;
	return (
		<div>
			<EmbedMedia data={{...newData, autolink: true }} />
			{(source) && <Source u={source} />}
		</div>
	)
}

const parseAnnotation = (a:any = '') => {
	if (typeof(a) === 'string') {
		const lines = a?.split('$$');
		return lines?.map(l => {
			const [ start, comment, link ] = l?.split(';;');
			return (start && comment) ? { start: startSeconds(start), comment, link } : null;
		})?.filter(x => x);
	}
}

const GigPlayed = (data: any) => {
	/*
		determine if this is a GigPlayer dataset
			* if there is a song w/ordinal '0', AND that entry has media
	 */
	const playlists: any[] = [];
	// "Entire Shows"
	data?.filter((d:any) => (d?.mediaurl?.includes('.mp3') || d?.mediaurl?.includes('.mp4')) && d.ordinal === 0)?.forEach((d:any) => {
		const { type, setnum, ordinal, song, comment, mediaurl, mediaurlcredit } = d;
		// add if in playlist format (start is set)
		const inSet = data?.filter((d:any) => d.start);
		if (inSet?.length) {
			playlists.push({
				src: mediaurl,
				tracks: inSet?.map((i:any) => ({
					title: i.song,
					start: startSeconds(i.start),
					version: i.comment,
					annotation: i?.annotation ? parseAnnotation(i?.annotation) : (i?.performers ? [ { comment: i.performers }] : null ),
				})),
				...d	// data needed for old format
			});
		} else {
			playlists.push(d);
		}
	});
	// non gigplayer format
	data?.filter((d:any) => d.ordinal)?.forEach((d:any) => {
		const { setnum, ordinal, song, comment, mediaurl, mediaurlcredit } = d;
		// add if in playlist format (start is set)
		const inSet = data?.filter((d:any) => d.setnum === setnum && d.ordinal !== 0 && d.start);
		playlists.push(d);
	});

	let set = '';
	let type = '';
	const updateSet = (newSet: string) => set=newSet;
	return <Iterator className="listItem" data={playlists?.length ? playlists : data} func={(({ data }: any) => {
		// @ts-ignore
		if (data?.tracks?.length) return <TheGigPlayer {...data} header=<GigPlayerHeader artist={data?.comment} venue={data?.song} /> footer=<GigPlayerFooter credit={data?.mediacredit} crediturl={data?.mediacrediturl} source={data?.mediaurl} added={data?.added} /> />
		// else fallthrough to single song format
		let banner;
		if (data.type !== type || data.setnum !== set) {
			type = data.type;
			set = data.setnum;
			banner = <Tag>{type} {set}</Tag>;
		}
		return <>{banner}<GigPlay data={data}/></>
	})}/>
}

const GigWit = ({ data }: any) => {
	return (
		<div>
			{AutoLinkAct(data?.performer)}
		</div>
	)
}
const GigWith = (data: any) => <div className="listItem"><Iterator data={data} func={GigWit} /></div>

const GigPlayer = ({ data }: any) => data?.performer && doIt(AutoLinkPlayer(data.performer), (data?.instruments?.length) ? data?.instruments?.split(',').join(', ') : '');

const GigPlayers = (data: any) => (
	<div className="listItem" style={{ border: '1px solid', background: '#eeffee' }}>
			<Iterator data={data} func={GigPlayer} className="flex flex-wrap gap-1" />
	</div>
)

const GigReview = ({ data }: any) => {
	const useCredit = removeHTML(data?.credit);
	const useURL = (useCredit) ? `/contributions/${useCredit}` : data?.credit_url;
	return (<>
		<RenderHTML className="listItem" body={data?.body} >
			<Credit g={useCredit} u={useURL} d={data?.credit_date} />
		</RenderHTML>
	</>)
}
const GigReviews = (data: any) => <div className="listItem"><Iterator data={data} func={GigReview} /></div>

const GigPresses = (data: any) => <PressCards items={...data} />

const doIt = (label: any, val: any) => <span className="break-keep outline outline-1 outline-cyan-500 m-1"> <b>{label}</b> {val} </span>;

const GigDetails = ({ gig, joins }: any) => {
	if (!gig) return;
	const showType = gig?.extra?.includes('interview') ? 'Interview' : 'Live Performance';
	return (<>
		<Tag>
		<b>{showType}</b> - {htmlString(gig?.venue)} - {htmlString(gig?.city)} {gig?.country}
		</Tag>
		<blockquote className="listItem" style={{ border: '1px solid', background: '#eeffee' }}>
			<div className="flex flex-wrap gap-1">
				{(gig?.datetime) && doIt('Date', dateDiff(gig.datetime, ''))}
				{(gig?.ticketweb) && doIt('Tickets', <Link href={gig.ticketweb}>{parseDomain(gig.ticketweb)}</Link>)}
				{doIt('Venue', <Link href={`/gigs?f=venue&q="${encodeURIComponent(gig.venue)}"`}>{gig.venue}</Link>)}
				{(gig?.eventweb) && doIt('Venue Website', <Link href={gig.eventweb}>{parseDomain(gig.eventweb)}</Link>)}
				{(gig?.city) && doIt('Location', <>
					{htmlString(gig?.address)}{' '}
					{(gig?.city && <Link href={`/gigs?f=city&q="${encodeURIComponent(gig.city)}"`}>{htmlString(gig?.city)}</Link>)}{' '}
					{(gig?.state && <Link href={`/gigs?f=state&q="${encodeURIComponent(gig.state)}"`}>{htmlString(gig?.state)}</Link>)}{' '}
					{gig?.country ?? ''} {gig?.postalcode ?? ''}
				</>)}
				{(gig?.phone) && doIt('Telephone', gig.phone)}
				{(gig?.cost) && doIt('Admission', gig.cost)}
			</div>
		</blockquote>
	</>)
}

const GigMap = ({ data }: any) => {
	return (<>
	</>)
}

const ExtraNav = ({ gig }: { gig: any }) => {
	if (gig?.prev && gig?.next) {
		const prev = gig?.prev[0]?.datetime;
		const next = gig?.next[0]?.datetime;
		const prevGig = <Link href={ts2URI(prev)}><PrevArrow className="arrows" /></Link>;
		const nextGig = <Link href={ts2URI(next)}><NextArrow className="arrows" /></Link>;
		return <> {prevGig} gig {nextGig} </>
	}
}

const Nav = ({ year, datetime, gig }: { year: number, datetime: string, gig: any }) => {
	const hasHour = !(datetime.includes('00:00:00'));
	const project = gig && parseProject(gig?.extra);

	const display = `${parseMonthName(datetime)} ${parseDayOrdinal(datetime)} ${(hasHour) ? parseHourAMPM(datetime) : ''}`;

	return <Header project={project} section='gigs' title={ [ `${year};;/gigs/${year}`, display ] } extraNav=<ExtraNav gig={gig} /> />
}

const Content = ({ gig }: { gig: any }) => {
	// joins.played (gigsongs table)
	const joins:any = {
		played: gig?.played
	}

	const justPix = gig?.media?.filter((t: any) => t.type === 'pix');
	const photoSets = justPix?.reduce((acc: any, a: any) => {
		const key = a?.credit;
		return { ...acc, [key]: (acc[key] || 0) + 1};
	}, {});

	/*
		any photoset w/fewer than X items per credit
		will get combined in the UI
	 */
	const smallLimit = 5;
	const largePhotoSets = Object?.keys(photoSets)?.filter((f: string) => photoSets[f] > smallLimit)?.map((f: string) => f);
	// joins.media_* (gigmedia table)
	gig?.media?.forEach((t: any) => {
		const nameIt = `media_${t.type}`;
		switch (t.type) {
			/*
			case 'cassette':
			case 'poster':
			case 'setlist':
			case 'ticket':
			*/
			case 'pix':
				if (largePhotoSets?.includes(t.credit)) {
					if (!joins[nameIt]) joins[nameIt] = [];
					joins[nameIt].push(t);
				}
				break;
		}
	})
	/*
		collect all but 'pix' into a catch-all 'media_combined' bucket.
		this will yield a more compact UI layout
	 */
	gig?.media?.forEach((t: any) => {
		const nameIt = `media_combined`;
		if (largePhotoSets?.includes(t.credit)  && t.type === 'pix') return;
		if (!joins[nameIt]) joins[nameIt] = [];
		joins[nameIt].push(t);
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
					t?.instruments?.split(',').forEach((i: any) => {
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
				//const nameIt = `press_${tt}`;
				const nameIt = `press_gig`;
				switch (tt) {
					case 'preshow':
					case 'gig':
					case 'album':
					case 'interview':
					case 'kit':
					case 'pat':
					case 'retrospective':
						if (!joins[nameIt]) joins[nameIt] = [];
						if (!joins[nameIt]?.find((f: any) => f.url === t.url)) {
							joins[nameIt].push(t);
						}
						break;
					default:
						if (!joins['press_other']) joins['press_other'] = [];
						if (!joins[nameIt]?.find((f: any) => f.url === t.url)) {
							joins['press_other'].push(t);
						}
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
		{ label: 'Images', lookup: 'media_combined', func: GigImages },
		{ label: 'Posters', lookup: 'media_poster', func: GigPosters },
		{ label: 'Also On The Bill', lookup: 'players_with', func: GigWith },
		{ label: 'Cassettes', lookup: 'media_cassette', func: GigCassettes },
		{ label: 'Tickets', lookup: 'media_ticket', func: GigTickets },
		{ lookup: 'media_pix', func: GigPhotos },
		{ label: 'Setlists', lookup: 'media_setlist', func: GigSetlists },
		{ label: 'Played', lookup: 'played', func: GigPlayed },
		{ label: "Pat Says", lookup: 'text_selfreview', func: GigSelfReviews },
		{ label: 'Fan Reviews', lookup: 'text_review', func: GigReviews },
		{ lookup: 'press_gig', func: GigPresses },
	]

	return <>
		<GigDetails gig={gig} joins={joins} />
		{extras?.map(({ label, lookup, func }: any, key: number) => <div key={key}>
			{!!(joins[lookup]?.length) && <>{(label) && <Tag>{label}</Tag>}{func(joins[lookup])}</>}
		</div>)}
	</>
}

const GigProfile = (props: any) => {
	let datetime = props?.params?.datetime && props.params.datetime.replace(/%20/g, ' ').replace(/%3A/g, ':');
	const year = props?.params?.year || parseYear(datetime);
	const pday = props?.params?.day;
	if (datetime) {
		if (datetime.length === 10) {
			datetime = datetime + ' 00:00:00';
		}
	} else {
		datetime = gigPage2Datetime(`/${year}/${pday}.html`);
	}
	const { data, isLoading, error } = useGig(datetime)
	const gig = data;

	if (!isLoading && !gig?.gig_id) return notFound();

	return <>
		<Nav year={year} datetime={datetime} gig={gig} />
		<Loading isLoading={isLoading} >
			<main>
				<Content gig={gig} />
			</main>
		</Loading>
		<Footer />
	</>
}

export default GigProfile;
