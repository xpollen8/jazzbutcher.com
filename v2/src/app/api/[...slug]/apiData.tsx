"use server"

import moment from 'moment';

import { localDate } from '@/lib/utils';
import { type HashedType, type RecordType, type CommentType } from '@/lib/utils';

import gigsStatic from '@/../public/data/gigs.json';
import pressesStatic from '@/../public/data/presses.json';
import lyricsStatic from '@/../public/data/lyrics.json';
import releasesStatic from '@/../public/data/releases.json';

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

const deHTDBifyText = (v?: string) => v?.replace(/&#34;/g, "'").replace(/&#39;/g, "'").replace(/&#41;/g, ")").replace(/&#36;/g, "$").replace(/YourTown,/, '').replace(/USofA/, '').replace(/\n/g, '<p />').replace(/\\t/g, ' ').replace(/&#92;/g, '').replace(/&#61;/g, '=').replace(/&#35;/g, '@').replace(/\[at\]/g, '@').replace(/-remove-/g, '').replace(/\[remove\]/g, '@').replace(/&amp;/g, '&').replace(/&eacute;/g, 'é').replace(/&oacute;/g, 'ó').replace(/&ntilde;/g, 'ñ').replace(/&auml;/g, 'ä').replace(/&Delta;/g, 'Δ').replace(/&Sigma;/g, 'Σ').replace(/â€ž/g, '&quot;').replace(/â€œ/g, '&quot;').replace(/â€“/g, '-').replace(/â€™/g, "'") .replace(/â€/g, '&quot;')|| '';

const fetchOptions = (url: string) => {
	const options: HashedType = {
		mode: 'no-cors'
	};
	if (url?.includes('feedback')) {
		options['cache'] = 'no-cache';	// DO NOT CACHE FEEDBACK
	} else {
		options['next'] = { revalidate: 300 };
	}
	//console.log("OPT", url, options);
	return options;
}

const doFetch = async (url: string) => {
	//console.log("FETCH", url);
	/*
	if (cache[url]) {
		//console.log("CACHE HIT", url);
		return cache[url];
	}
	*/
	return await fetch(url, fetchOptions(url))
		.then(e => e.json())
		.then(e => {
			cache[url] = JSON.parse(deHTDBifyText(JSON.stringify(e)));
			return cache[url];
		})
		.catch((e) => {
			console.log("ERR", url, e);
			return { results: [], error: e?.cause?.code };
		});
}

const doPostToDataServer = async (path: string, body: any, args?: string) => {
	const url = (!args) ? `${process.env.JBC_DATA_SERVER}/api/${path}` : `${process.env.JBC_DATA_SERVER}/api/${path}/${args || ''}`;
	console.log("doPostToDataServer", { path, body, url });
	/*
	if (cache[url]) {
		//console.log("CACHE HIT", url);
		return cache[url];
	}
	*/
	return await fetch(url,
		{
			method: 'POST',
			...fetchOptions(url),
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
			},
			...(body && { body: JSON.stringify(body) }),
		}
		)
		.then(e => e.json())
		/*
		.then(async e => {
			const ret: HashedType = await apiData('feedback_by_page', `exact/${body.uri}`);
			console.log("RET", { args: body.uri, ret });
			return ret;
		})
		*/
		.catch((e) => {
			console.log("ERR", e);
			return { error: `POST to ${url} failed` };
		});
}

const apiDataFromHTDBServer = async (path: string) => await doFetch(`${process.env.JBC_HTDB_SERVER}/htdb/${path}`);

const apiDataFromDataServer = async (path: string, args?: string) => {
	if (!args) {
		return await doFetch(`${process.env.JBC_DATA_SERVER}/api/${path}`);
	}
	return await doFetch(`${process.env.JBC_DATA_SERVER}/api/${path}/${args || ''}`);
}

// @ts-ignore
const apiData = async (path: string, args?: string, formData?: any) => {
	//console.log("apiData", { path, args, formData });

	if (formData) {
		// POST
		return await doPostToDataServer(path, formData, args);
	} else {
		switch (path) {
			case 'lyrics':
				return lyricsStatic;
				break;
			case 'presses':
				return pressesStatic;
				break;
			case 'gigs':
				return gigsStatic;
				break;
			case 'gig_by_datetime':
			case 'gigmedias':
			case 'gigtexts':
			case 'gigsongs':
			case 'performances':
			case 'audio':
			case 'unreleased_audio':
			case 'gigs_with_audio':
			case 'release_audio_by_project':
			case 'audio_by_project':
			case 'release_video_by_project':
			case 'live_video_by_project':
			case 'video':
			case 'medias':
			case 'credits_by_release':
			case 'presses_by_release':
			case 'press_by_href':
			case 'presses_for_admin':
			case 'songs_by_datetime':
			case 'recent_press':
			case 'recent_media':
			case 'on_this_day':
			case 'recent_feedback':
			case 'feedback_delete':
				return await apiDataFromDataServer(path, args);
			case 'feedbacks':
			case 'feedback_by_page':
				const data = await apiDataFromDataServer('feedback', args);
				data.results = data?.results.map((r: CommentType) => ({
					...r,
					who: censorEmail(r?.who),
				}));
				return data;
			case 'recent_releases': {
				const releases = await apiDataFromHTDBServer('db_albums/data.json');
				// @ts-ignore
				releases.results = releases?.results?.filter((r: any) => r?.dtadded && moment(r.dtadded).isAfter(moment().subtract(6, 'months'))).sort((a: any, b: any) => moment(b.dtadded) - moment(a.dtadded));
				//console.log("RELEASE", releases.results);
				releases.numResults = releases?.results?.length;
				return releases;
			}
			case 'recent_updates': {
				const press = await apiDataFromDataServer('recent_press', args);
				const media = await apiDataFromDataServer('recent_media', args);
				const feedback = await apiDataFromDataServer('recent_feedback', args);
				const releases: HashedType = await apiData('recent_releases', args);
				return {
					press,
					media,
					feedback,
					releases
				}
			}
			case 'lyric_by_href': {
				const releases = await apiDataFromHTDBServer('db_albums/data.json');
				const lyrics = await apiDataFromDataServer('lyric_by_href', args);
				const title = lyrics?.results[0]?.title;
				const song = encodeURIComponent(title);
				const medias = await apiDataFromDataServer('media_by_song', song);
				const live = await apiDataFromDataServer('live_performances_by_song', song);
				const performances = await apiDataFromDataServer('performances_by_song', song);
				const foundList = await apiDataFromDataServer('releases_by_song', song);
				const releaseAudio = releases?.results?.filter((r: any) => r?.audio?.includes(title));
				const releaseVideo = releases?.results?.filter((r: any) => r?.video?.includes(title));
				return {
					lyrics,
					live,
					performances,
					releaseAudio,
					releaseVideo,
					medias,
					foundon: foundList?.results?.map(({ lookup, media }: any) => ({ ...releases?.results?.find((r: any) => lookup === r.lookup), mediaurl: media })),
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
				return releasesStatic;
				//return await apiDataFromHTDBServer('db_albums/data.json');
				break;
			case 'release_by_lookup': {
				const results = releasesStatic?.results?.filter((r: any) => r.lookup === args || r.href === `/albums/${args}.html`);
				return { results };
				//if (args)
				//return await apiDataFromHTDBServer(`db_albums/data.json?lookup=${args}`);
			}
		}
	}
}

export default apiData;
