"use server"

import { localDate } from '@/lib/macros';
import { type HashedType, type RecordType, type CommentType } from '@/lib/macros';

const cache: HashedType = {};

const censorEmail = (str: string) => {
	const [ addr, fqdn ] = str.split('@');
	if (!fqdn) return str;
	const parts = fqdn.split('.');
	const top = parts.pop();
	const domain = parts.join('.');
	const blank = new Array(domain.length + Math.floor(Math.random() * 4)).join( '.' );
	return addr + '@' + blank + '.' + top;
}

const deHTDBifyText = (v?: string) => v?.replace(/&#34;/g, "'").replace(/&#39;/g, "'").replace(/&#41;/g, ")").replace(/&#36;/g, "$").replace(/YourTown,/, '').replace(/USofA/, '').replace(/you\(at\)company.com/, '').replace(/\n/g, '<p />').replace(/\\t/g, ' ').replace(/&#92;/g, '').replace(/&#61;/g, '=').replace(/&#35;/g, '@').replace(/\[at\]/g, '@').replace(/\[remove\]/g, '@') || '';

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
		.then(e => {
			cache[url] = JSON.parse(deHTDBifyText(JSON.stringify(e)));
			return cache[url];
		})
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
		case 'gig_by_datetime':
		case 'gigmedias':
		case 'gigs':
		case 'gigtexts':
		case 'gigsongs':
		case 'performances':
		case 'gigs_with_audio':
		case 'release_audio_by_project':
		case 'audio_by_project':
		case 'presses':
		case 'medias':
		case 'credits_by_release':
		case 'presses_by_release':
		case 'press_by_href':
		case 'presses_for_admin':
		case 'lyrics':
		case 'songs_by_datetime':
			return await apiDataFromDataServer(path, args);
		case 'feedbacks':
		case 'feedback_by_page':
			const data = await apiDataFromDataServer('feedback', args);
			data.results = data?.results.map((r: CommentType) => ({
				...r,
				who: censorEmail(r?.who),
			}));
			return data;
		case 'lyric_by_href': {
			const releases = await apiDataFromHTDBServer('db_albums/data.json');
			const lyrics = await apiDataFromDataServer('lyric_by_href', args);
			const song = lyrics?.results[0]?.title;
			const foundList = await apiDataFromDataServer('releases_by_song', encodeURIComponent(song));
			return {
				lyrics,
				foundon: foundList?.results?.map(({ lookup, media }: any) => ({ ...releases?.results?.find((r: any) => lookup === r.lookup), media })),
			}
		}
		case 'songs_by_release': {
			const data = await apiDataFromDataServer(path, args);
			const crdata = await apiDataFromDataServer('credits_by_release', args);
			/*
				detect distinct songs
				and collect song:instrument credits per person
			 */
			const songs: any[] = [];
			const credits: any = {};
			crdata?.results?.filter((song: any) => song?.song && song?.song !== 'NULL')?.forEach((song: any) => {
				if (!songs.includes(song.song)) songs.push(song.song);
				if (song.performer) {
					if (!credits[song.performer]) {
						credits[song.performer] = { song_credits: {} }
					}
					if (!credits[song.performer].song_credits[song.song]) {
						credits[song.performer].song_credits[song.song] = [];
					}
					credits[song.performer].song_credits[song.song].push(song.instruments);
				}
			});
			crdata?.results?.filter((song: any) => (!song?.song || song?.song === 'NULL'))?.forEach((cr: any) => {
				if (!credits[cr.performer]) {
					credits[cr.performer] = { album_credits: cr.instruments, song_credits: {} };
				} else {
					// multiple rows of album-wide credits for this person.
					// concatentate the strings
					if (credits[cr.performer].album_credits) {
						credits[cr.performer].album_credits += ', ' + cr.instruments;
					} else {
						credits[cr.performer].album_credits = cr.instruments;
					}
				}
			})
			return {
				...data,
				numResults: songs.length,
				results: songs,
				credits,
				songs: data,
			}
		}
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
		case 'release_by_lookup': {
			if (args)
			return await apiDataFromHTDBServer(`db_albums/data.json?lookup=${args}`);
		}
	}
}

export default apiData;
