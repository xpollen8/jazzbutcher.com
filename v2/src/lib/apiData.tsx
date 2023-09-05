"use server"

import { localDate, HashedType, RecordType } from './macros';

const cache: HashedType = {};

/* doesn't seem to work
[ 'gigs', 'presses', 'gigmedias', 'gigtexts', 'feedbacks', 'performances', 'gigsongs', 'releases' ]
	.forEach(async (e: string) => {
		if (!cache[e]) {
			console.log("FETCH", e);
			cache[e] = require(`/public/data/${e}.json`);
		}
	});
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
	if (cache[url]) {
		console.log("CACHE HIT", url);
		return cache[url];
	}
	return await fetch(url,
		{
			next: { revalidate: 300 },
			mode: 'no-cors'
		})
		.then(e => e.json())
		.then(e => { cache[url] = e; console.log("CACHE", url); return e })
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

const apiData = async (path: string, args?: string) => {
	//console.log("apiData", { path, args });

	switch (path) {
		case 'feedback':
		case 'feedbacks':
		case 'feedback_by_page':
		case 'gig_by_datetime':
		case 'gigmedias':
		case 'gigs':
		case 'gigtexts':
		case 'gigsongs':
		case 'performances':
		case 'presses':
		case 'songs_by_release':
		case 'lyrics':
		case 'lyric_by_href':
			return await apiDataFromDataServer(path, args);
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
