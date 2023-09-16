"use server"

import { localDate, censorEmail, deHTDBifyText, HashedType, CommentType, RecordType } from './macros';

const cache: HashedType = {};

/*
import gigs from '@/../public/data/gigs.json';
import presses from '@/../public/data/presses.json';
import gigmedias from '@/../public/data/gigmedias.json';
import gigtexts from '@/../public/data/gigtexts.json';
import feedbacks from '@/../public/data/feedbacks.json';
import performances from '@/../public/data/performances.json';
import gigsongs from '@/../public/data/gigsongs.json';
import releases from '@/../public/data/releases.json';

cache['gigs'] = gigs;
cache['presses'] = presses;
cache['gigmedias'] = gigmedias;
cache['gigtexts'] = gigtexts;
cache['feedbacks'] = feedbacks;
cache['performances'] = performances;
cache['gigsongs'] = gigsongs;
cache['releases'] = releases;
*/

/*
	TODO
	we can automatically build up complex searchable
	structures right here.
	see how "gig" is attached to "performer" and "gigsong"
	search results.
	no reason this cannot be extended to press, etc.
 */
const doFetch = async (url: string) => {
	//console.log("FETCH", url);
	if (cache[url]) {
		//console.log("CACHE HIT", url);
		return cache[url];
	}
	return await fetch(url,
		{
			next: { revalidate: 300 },
			mode: 'no-cors'
		})
		.then(e => e.json())
		.then(e => { cache[url] = e; return e })
		.catch((e) => {
			console.log("ERR", e);
			return { error: `search by ${url} failed` };
		});
}

const apiDataFromHTDBServer = async (path: string) => await doFetch(`${process.env.JBC_HTDB_SERVER}/htdb/${path}`);

const apiDataFromDataServer = async (path: string, args?: string) => {
	if (!args) {
		return await doFetch(`${process.env.JBC_DATA_SERVER}/api/${path}`);
	}
	return await doFetch(`${process.env.JBC_DATA_SERVER}/api/${path}/${args || ''}`);
}

const filterComments = (res: CommentType[]) => res?.map((c: CommentType) => ({
	...c,
	subject: deHTDBifyText(c?.subject),
	who: censorEmail(c?.who),
	comments: deHTDBifyText(c?.comments),
}));

const apiData = async (path: string, args?: string) => {
	//console.log("apiData", { path, args });

	switch (path) {
		case 'feedbacks':
		case 'feedback_by_page':
		case 'gig_by_datetime':
		case 'gigmedias':
		case 'gigs':
		case 'gigtexts':
		case 'gigsongs':
		case 'performances':
		case 'gigs_with_audio':
		case 'presses':
		case 'medias':
		case 'credits_by_release':
		case 'lyrics':
		case 'lyric_by_href':
		case 'songs_by_datetime':
			return await apiDataFromDataServer(path, args);
		case 'songs_by_release': {
			const data = await apiDataFromDataServer(path, args);
			const crdata = await apiDataFromDataServer('credits_by_release', args);
			/*
				detect distinct songs
				and collect song:instrument credits per person
			 */
			const songs: any[] = [];
			const credits: any = {};
			crdata?.results.forEach((cr: any) => {
				if (!credits[cr.performer]) credits[cr.performer] = { album_credits: cr.instruments, song_credits: {} };
			})
			data?.results.forEach((song: any) => {
				if (!songs.includes(song.title)) songs.push(song.title);
				if (song.performer) {
					if (!credits[song.performer]) {
						credits[song.performer] = { song_credits: {} }
					}
					if (!credits[song.performer].song_credits[song.title]) {
						credits[song.performer].song_credits[song.title] = [];
					}
					credits[song.performer].song_credits[song.title].push(song.instruments);
				}
			});
			return {
				...data,
				numResults: songs.length,
				results: songs,
				credits,
			}
		}
		case 'feedback':
			// clean up server-side
			const data = await apiDataFromDataServer(path, args);
			data.results = filterComments(data.results);
			return data;
		case 'gigs_by_musician': {
			const performances =  await apiDataFromDataServer(path, args);
			const gigs = await apiDataFromDataServer('gigs');
			// join gig data to performance records
			const results = performances?.results?.map((performance: RecordType) => {
				const datetime = localDate(performance?.datetime)
				const gig = gigs?.results.find((gig: RecordType) => localDate(gig?.datetime) === datetime);
				return { ...performance, gig }
			});
			return { ...performances, results }
		}
		case 'gigs_by_song': {
			const gigsongs = await apiDataFromDataServer(path, args);
			const gigs = await apiDataFromDataServer('gigs', args);
			// join gig data to song records
			const results = gigsongs?.results?.map((song: RecordType) => {
				const datetime = localDate(song?.datetime)
				const gig = gigs?.results.find((gig: RecordType) => localDate(gig?.datetime) === datetime);
				return { ...song, gig }
			});
			return { ...gigsongs, results }
		}
		case 'releases':
			return await apiDataFromHTDBServer('db_albums/data.json');
	}
}

export default apiData;
