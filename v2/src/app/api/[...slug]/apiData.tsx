"use server"

import moment from 'moment';
import * as XLSX from 'xlsx';

import { localDate } from '@/lib/utils';
import { returnResults, type HashedType, type RecordType, type CommentType } from '@/lib/utils';

import gigsongsStatic from '@/../public/data/gigsongs.json';
import gigmediasStatic from '@/../public/data/gigmedias.json';
//import mediasStatic from '@/../public/data/medias.json';
import gigtextsStatic from '@/../public/data/gigtexts.json';
import performancesStatic from '@/../public/data/performances.json';
import gigsStatic from '@/../public/data/gigs.json';
import pressesStatic from '@/../public/data/presses.json';
import lyricsStatic from '@/../public/data/lyrics.json';
import releasesStatic from '@/../public/data/releases.json';

const cache: HashedType = {};

const censorEmail = (str?: string) => {
	if (!str) return;
	const [ addr, fqdn ] = str?.split('@');
	if (!fqdn) return str;
	const parts = fqdn?.split('.');
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
	if (url?.includes('feedback') || url?.includes('gigsong_edit')) {
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

const doFetchFileXLS = async (url: string) => {
	if (cache[url]) {
		//console.log("CACHE HIT", url);
		return cache[url];
	}
	const response = await fetch(url);
	const arrayBuffer = await response.arrayBuffer();
	const data = new Uint8Array(arrayBuffer);
	const workbook = XLSX.read(data, { type: 'array' });

	// Initialize result object to store sheets
	const result = {};

	// Process each worksheet
	workbook.SheetNames.forEach(sheetName => {
		const worksheet = workbook.Sheets[sheetName];
		
		// Convert worksheet to JSON with headers as attributes
		// @ts-ignore
		const jsonData = XLSX.utils.sheet_to_json(worksheet, {
				header: 1,          // Use first row as headers
		});
		
		// Extract headers from first row
		const headers = jsonData.shift();
		// @ts-ignore
		result[sheetName] = [];
		jsonData.forEach((r: any) => {
			const row = {};
			// @ts-ignore
			headers.forEach((h: any, i: number) => {
				// @ts-ignore
				row[h] = r[i];
			});
			// @ts-ignore
			if (row?.ID?.length) {
				// @ts-ignore
				result[sheetName].push(row);
			}
		});
	});
	cache[url] = result;
	return cache[url];
}

const doPostToDataServer = async (path: string, body: any, args?: string) => {
	const url = (!args) ? `${process.env.JBC_DATA_SERVER}/api/${path}` : `${process.env.JBC_DATA_SERVER}/api/${path}/${args || ''}`;
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

const apiXLSFromStaticServer = async (path: string) => await doFetchFileXLS(`${process.env.JBC_HTDB_SERVER}/static/${path}`);

const apiDataFromHTDBServer = async (path: string) => await doFetch(`${process.env.JBC_HTDB_SERVER}/htdb/${path}`);

const apiDataFromDataServer = async (path: string, args?: string) => {
	if (!args) {
		return await doFetch(`${process.env.JBC_DATA_SERVER}/api/${path}`);
	}
	return await doFetch(`${process.env.JBC_DATA_SERVER}/api/${path}/${args || ''}`);
}

const forceDT = (dt?: string): string => {
	if (!dt) return '';
	const [ useDT ] = dt.split(' ');
	if (!useDT) return '';
	return new Date(Date.parse(useDT?.replace(/-00/g, '-01'))).toISOString().substr(0, 10);
}

const makeOptions = (args: HashedType, type?: string) => ({ all: args?.all, filter: args?.filter, ...args[type] });

const findRecent = (noun: string, object: any, fields: string[] , options?: HashedType ) => {
	const { value = 6, units = 'months', filter = {} } = options || {};
	const findValue = (obj: HashedType, fields: string[]) => {
		const useField = fields?.find((f: string) => (f && obj[f]?.length)) || fields[0];
		const useVal = useField && forceDT(obj[useField]?.trim());
		return [ useVal, useField ];
	}
	const sortValues = (b: any, a: any) => {
		const [ valB, fieldB ] = findValue(b, fields);
		const [ valA, fieldA ] = findValue(a, fields);
		return ('' + valA || '').localeCompare(valB || '')
	}
	const filterValues = ((r: HashedType) => {
		if (!filter?.field || !filter?.value) return true;
		return r[filter.field]?.toLowerCase()?.includes(filter.value?.toLowerCase());
	});
	//console.log("findRecent", { noun, fields, value, units }, options, filter);
	if (options?.limit) {
		if (options?.filter) {
			return returnResults(object?.results?.filter(filterValues)?.sort(sortValues)?.slice(0, options.limit));
		} else {
			return returnResults(object?.results?.sort(sortValues)?.slice(0, options.limit));
		}
	}
	if (options?.all) {
		if (options?.filter) {
			return returnResults(object?.results?.filter(filterValues)?.sort(sortValues));
		} else {
			return returnResults(object?.results?.sort(sortValues));
		}
	}

	return returnResults(object?.results?.filter(filterValues)?.filter((r: any) => {
		const [ useVal, useField ] = findValue(r, fields) || [];
		return useVal && moment(useVal).isAfter(moment().subtract(value, units));
	})?.sort(sortValues));
}

const joinOn = (field: string, arr1: Array<HashedType>, arr2: Array<HashedType>) => {
	return returnResults(arr1.map((gs: any) => ({ ...gs, ...arr2.find((g: any) => g[field] === gs[field]) || {} })));
}

// @ts-ignore
const apiData = async (path: string, args?: any, formData?: any): Promise<HashedType> => {
	if (typeof args === 'string') {
		// decode any encoded JSON object being passed in as args
		args = decodeURI(args);
		// if args is now an object, parse out
		if (args?.startsWith('{')) { args = JSON.parse(args); }
	}
	//console.log("apiData", { path, args, formData });

	if (formData) {
		// POST
		switch (path) {
			case 'gigsong_edit':
				return await doPostToDataServer(path, formData, args);
				break;
			default:
				return await doPostToDataServer(path, formData, args);
		}
	} else {
		switch (path) {
			case 'FMA.xls':
				return await apiXLSFromStaticServer(path);
				break;
			case 'lyrics':
				return lyricsStatic;
				break;
			case 'presses':
				return pressesStatic;
				break;
			case 'gigs':
				return gigsStatic;
				break;
			case 'performances':
				return performancesStatic;
				break;
			case 'gigtexts':
				return gigtextsStatic;
				break;
			case 'gigmedias': {
				return gigmediasStatic;
			}
			case 'gig_by_datetime':
				const datetime = args?.replace(/%20/g, ' ')?.replace(/ 00:00:00/, '');
				const gigs = gigsStatic?.results?.find((g: RecordType) => g?.datetime === datetime);
				const played = gigsongsStatic?.results?.filter((g: RecordType) => g?.datetime === datetime);
				const media = gigmediasStatic?.results?.filter((g: RecordType) => g?.datetime === datetime);
				const text = gigtextsStatic?.results?.filter((g: RecordType) => g?.datetime === datetime);
				const players = performancesStatic?.results?.filter((g: RecordType) => g?.datetime === datetime);
				const press = pressesStatic?.results?.filter((g: RecordType) => g?.dtgig === datetime);
				// assumes gigs are already sorted by date by API
				const indexOfGig = gigsStatic?.results?.map((g: RecordType, index: number) => ({ index, ...g }))?.find((g: RecordType) => g.gig_id === gigs?.gig_id)?.index || -1;
				const next = [ indexOfGig > -1 ? gigsStatic?.results[indexOfGig + 1] : {} ];
				const prev = [ indexOfGig > -1 ? gigsStatic?.results[indexOfGig - 1] : {} ];
				return {
					...gigs,
					played,
					media,
					text,
					players,
					press,
					prev,
					next,
				}
				break;
			case 'audio':
			case 'unreleased_audio':
			case 'release_audio_by_project':
			case 'audio_by_project':
			case 'release_video_by_project':
			case 'live_video_by_project':
			case 'video':
			case 'credits_by_release':
			case 'presses_by_release':
			case 'press_by_href':
			case 'presses_for_admin':
			case 'songs_by_datetime':
			case 'recent_feedback':
			case 'feedback_delete':
				return await apiDataFromDataServer(path, args);
			case 'feedbacks':
			case 'feedback_by_page': {
				const data = await apiDataFromDataServer('feedback', args);
				data.results = data.results?.map((r: CommentType) => {
					return {
						...r,
						who: censorEmail(r?.who),
					}
				});
				return data;
			}
			case 'on_this_day': {
				const { results } = await apiData('gigs', args);
				const today = new Date().toISOString()?.substr(4, 6);
				return returnResults(results?.filter((r: RecordType) => r.datetime?.substr(4, 6) === today));
			}
			case 'recent_releases': {
				return findRecent(path, releasesStatic, ['dtadded','dtreleased','datetime'], args?.releases);
			}
			case 'recent_press': {
				return findRecent(path, pressesStatic, ['dtadded','dtpublished','datetime'], args?.press);
			}
			case 'recent_gigmedia': {
				const gigmedias = await apiData('gigmedias');
				return findRecent(path, gigmedias, ['credit_date','added','datetime'], args?.gigmedia);
			}
			case 'recent_gigsongs_media': {
				const gigsong_media =  await apiData('gigsongs_media', args);
				const { results } = await findRecent(path, gigsong_media, ['added','datetime'], args?.gigsong_media);
				return joinOn('datetime', results || [], gigsStatic?.results || []);
			}
			case 'recent_updates': {
				const press = await apiData('recent_press', args);
				const gigsong_media = await apiData('recent_gigsongs_media', args);
				const gigmedia = await apiData('recent_gigmedia', args);
				const releases = await apiData('recent_releases', args);
				const feedback = await apiDataFromDataServer('recent_feedback', args);
				return {
					press,
					gigmedia,
					gigsong_media,
					feedback,
					releases
				}
			}
			case 'gigsongs': {
				return gigsongsStatic;
			}
			case 'gigsongs_media': {
				const { results } = await apiData('gigsongs');
				return returnResults(results?.filter((g: any) => g?.mediaurl?.match(/.mp3$/)));
			}
			case 'gigs_with_audio': {
				const { results } = await apiData('gigsongs_media');
				return joinOn('datetime', results || [], gigsStatic?.results || []);
			}
			case 'gigsong_contributions': {
				const gigsongs = await apiData('gigsongs');
				return returnResults(gigsongs?.results?.filter((g: any) => args?.all || (g?.mediacredit?.length && g?.added?.length))?.map((g: any) => ({
					...g,
					credit: g?.mediacredit,
					credit_date: g?.added,
				})));
			}
			case 'gigtext_contributions': {
				const gigtexts = await apiData('gigtexts');
				return returnResults(gigtexts?.results?.filter((g: any) => args?.all || (g?.credit?.length && g?.credit_date?.length)));
			}
			case 'gigmedia_contributions': {
				const gigmedias = await apiData('gigmedias');
				return returnResults(gigmedias?.results?.filter((g: any) => args?.all || (g?.credit?.length && g?.credit_date?.length)));
			}
			case 'contributions': {
				const gigmedia = await apiData('gigmedia_contributions', args);
				const gigsong = await apiData('gigsong_contributions', args);
				const gigtext = await apiData('gigtext_contributions', args);
				return {
					gigmedia: findRecent(path, gigmedia, ['credit_date'], makeOptions(args, 'gigmedia')),
					gigsong: findRecent(path, gigsong, ['added'], makeOptions(args, 'gigsong')),
					gigtext: findRecent(path, gigtext, ['credit_date'], makeOptions(args, 'gigtext')),
				}
			}
			case 'lyric_by_href': {
				const releases = await apiData('releases', args);
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
				const useArgs = args?.replace(/%22/g, '')?.replace(/%20/g, '_')?.replace(/ /g, '_');
				const performances =  await apiDataFromDataServer(path, useArgs);
				/*
				const gigs = await apiDataFromDataServer('gigs');
				// join gig data to performance records
				const results = performances?.results?.map((performance: RecordType) => {
					const datetime = localDate(performance?.datetime)
					const gig = gigs?.results.find((gig: RecordType) => localDate(gig?.datetime) === datetime);
					return { ...performance, gig }
				});
				delete performances.results;
				return { ...performances, results }
				*/
				return performances;
			}
			case 'gigs_by_song': {
				const useArgs = args?.replace(/%22/g, '');
				const gigsongs = await apiDataFromDataServer(path, useArgs);
				return gigsongs;
				/*
				const gigsongs = await apiDataFromDataServer(path, args);
				const gigs = await apiDataFromDataServer('gigs', args);
				// join gig data to song records
				const results = gigsongs?.results?.map((song: RecordType) => {
					const datetime = localDate(song?.datetime)
					const gig = gigs?.results.find((gig: RecordType) => localDate(gig?.datetime) === datetime);
					return { ...song, gig }
				});
				return { ...gigsongs, results }
				*/
			}
			case 'releases':
				return releasesStatic;
				break;
			/* REPLACED
			case 'release_by_lookup': {
				const results = releasesStatic?.results?.filter((r: any) => r.lookup === args || r.href === `/albums/${args}.html`);
				return { results, numResults: results?.length };
				//if (args)
				//return await apiDataFromHTDBServer(`db_albums/data.json?lookup=${args}`);
			}
			*/
		}
	}
	return {
		noun: path,
		results: [],
		numResults: 0,
	}
}

export default apiData;
