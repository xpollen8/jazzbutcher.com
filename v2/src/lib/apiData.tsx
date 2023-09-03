"use server"

import { datesEqual, Hashed, RecordType } from './macros';
import fs from 'fs';

const cache: Hashed = {};

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
const apiDataFromHTDBServer = async (path: string) => {
	if (cache[path]) {
		console.log("CACHE HIT", path);
		return cache[path];
	}
	return await fetch(`${process.env.JBC_HTDB_SERVER}/htdb/${path}`,
		{
			next: { revalidate: 300 },
			mode: 'no-cors'
		})
		.then(e => e.json())
		.then(e => { cache[path] = e; return e })
		.catch((e) => {
			console.log("ERR", e);
			return { error: `search by ${path} failed` };
		});
}

const apiDataFromDataServer = async (path: string, args?: string) => {
	if (!args) {
		if (cache[path]) {
			console.log("CACHE HIT", path);
			return cache[path];
		}
		return await fetch(`${process.env.JBC_DATA_SERVER}/api/${path}`,
			{
				next: { revalidate: 300 }
			})
			.then(e => e.json())
			.then(e => { cache[path] = e; return e })
			.catch((e) => {
				console.log("ERR", e);
				return { error: `search by ${path} failed` };
			});
	}
	//console.log("FETCHING", { path, args }, `${process.env.JBC_DATA_SERVER}/api/${path}/${args || ''}`);
	return await fetch(`${process.env.JBC_DATA_SERVER}/api/${path}/${args || ''}`,
		{
			next: { revalidate: 300 }
		})
		.then(e => e.json())
		.catch((e) => {
			console.log("ERR", e);
			return { error: `search by ${path} failed` };
		});
}

const apiData = async (path: string, args?: string) => {
	//console.log("apiData", { path, args });

	switch (path) {
		case 'gigs':
		case 'presses':
		case 'gigmedias':
		case 'gigtexts':
		case 'feedbacks':
		case 'gig_by_datetime':
		case 'feedback':
		case 'songs_by_release':
		case 'lyric':
			//console.log("apiData", { path, args });
			return await apiDataFromDataServer(path, args);
		case 'performances': {
			const performances =  await apiDataFromDataServer(path, args);
			const gigs = await apiDataFromDataServer('gigs');
			// join gig data to performance records
			const results = performances?.results?.map((performance: RecordType) => {
				const gig = gigs?.results.find((gig: RecordType) => gig?.datetime === performance?.datetime);
				return { ...performance, gig }
			});
			return { ...performances, results }
		}
		case 'gigsongs': {
			const gigsongs = await apiDataFromDataServer(path, args);
			const gigs = await apiDataFromDataServer('gigs', args);
			// join gig data to song records
			const results = gigsongs?.results?.map((song: RecordType) => {
				const gig = gigs?.results.find((gig: RecordType) => gig?.datetime === song?.datetime);
				return { ...song, gig }
			});
			return { ...gigsongs, results }
		}
		case 'releases':
			return await apiDataFromHTDBServer('db_albums/data.json');
	}
}

export default apiData;
