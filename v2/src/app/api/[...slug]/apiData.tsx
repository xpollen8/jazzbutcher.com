"use server"

import moment from 'moment';
import * as XLSX from 'xlsx';

import { personName } from '@/lib/defines';
import { removeHTML } from '@/components/GenericWeb';
import { localDate, returnResults, type HashedType, type CommentType } from '@/lib/utils';

import gigsongsStatic from '@/../public/data/gigsongs.json';
import gigmediasStatic from '@/../public/data/gigmedias.json';
import mediasStatic from '@/../public/data/medias.json';
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
	/*
	if (cache[url]) {
		//console.log("CACHE HIT", url);
		return cache[url];
	}
	*/
	return await fetch(url, fetchOptions(url))
		.then(e => e.json())
		.then(e => {
			if (e?.error) throw(e);
			cache[url] = JSON.parse(deHTDBifyText(JSON.stringify(e)));
			return cache[url];
		})
		.catch((e) => {
			return { results: [], error: e?.error?.code };
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

// @ts-ignore
const makeOptions = (args: HashedType, type?: string) => ({ all: args?.all, filter: args?.filter, ...args[type] });

const filterObjectByAttribute = (obj: HashedType, field?: string, value?: string, exact?: boolean) => {
	if (!field || !value) return true;
	if (exact) {
		return obj[field]?.toLowerCase() === value?.toLowerCase();
	}

	//return obj[field]?.toLowerCase()?.includes(value?.toLowerCase());
	const lc = value?.toLowerCase();
	const lclen = lc.length;
	let body = obj[field]?.toLowerCase();
	let idx = body?.indexOf(lc);
	let match = false;
	let len = body?.length;
	// custom search logic
	// ensure that the full search term is contained in the target
	// AND is surrounded by whitespace/punctiuation.  wheee.
	const pattern = /[a-z]/i;
	while (!match && idx > 0 && len) {
		match = !pattern.test(body[idx - 1]) && !pattern.test(body[idx + lclen]);
		if (!match) { // hump along
			body = body.substr(idx + lclen);
			len = body.length;
			idx = body.indexOf(lc);
		}
	}
	return match;
}

const findRecent = (object: any, fields: string[] , options?: HashedType ) => {
	const { exact = false, value = 6, units = 'months', filter = {} } = options || {};
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
		return filterObjectByAttribute(r, filter?.field, filter?.value, filter?.exact);
		if (!filter?.field || !filter?.value) return true;
		if (filter.exact) {
			return r[filter.field]?.toLowerCase() === filter.value?.toLowerCase();
		}
		return r[filter.field]?.toLowerCase()?.includes(filter.value?.toLowerCase());
	});
	//console.log("findRecent", { fields, value, units, exact }, options, filter);
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
	return returnResults(arr1?.map((gs: any) => {
		const found = arr2?.find((g: any) => g[field] === gs[field]);
		if (found) {
			return { ...gs, ...found }
		}
	})?.filter((gs: any) => gs && gs[field]));
}

const returnFilteredPath = async (path: string, attribute?: string, value?: string,  exact?: boolean, func?: any) => {
	const { results } = await apiData(path);
	return returnResults(results?.filter((r: HashedType) => {
		if (func) { return func(r, value, exact) };
		return filterObjectByAttribute(r, attribute, value, exact)
	}));
}

const matchesPerformerField = (type: string, candidate: HashedType, value: string, exact: boolean) => {
	const { category, performer, aka = '' } = candidate || {};
	if (!performer && !aka) return false;
	const [ x1, v ] = performer?.replace('[[', '')?.replace(']]', '')?.replace(/_/g, ' ')?.split(':');
	const [ x2, a ] = aka?.replace('[[', '')?.replace(']]', '')?.replace(/_/g, ' ')?.split(':');
	const vl = v?.toLowerCase() || '';
	const al = a?.toLowerCase() || '';
	const valuel = value?.toLowerCase();
	return category === type && (exact ? (vl === valuel || al === valuel) : (vl?.includes(valuel) || al?.includes(valuel)));
}

// @ts-ignore
const apiData = async (path: string, args?: any, formData?: any): Promise<HashedType> => {
	if (typeof args === 'string') {
		// decode any encoded JSON object being passed in as args
		args = decodeURIComponent(args);
		// if args is now an object, parse out
		if (args?.startsWith('{')) { args = JSON.parse(args); }
	}
	//console.log("apiData", { path, args, formData });

	if (formData) {
		// POST
		switch (path) {
			case 'gigsong_edit': {
				return await doPostToDataServer(path, formData, args);
			}
			default:
				return await doPostToDataServer(path, formData, args);
		}
	} else {
		switch (path) {
			/*
				live db lookups
			 */
			case 'release_video_by_project':
			case 'live_video_by_project':
			case 'presses_for_admin':
			case 'recent_feedback':
			case 'feedbacks':
			case 'feedback_delete': {
				return await apiDataFromDataServer(path, args);
			}
			case 'feedback_by_page': {
				const { results } = await apiDataFromDataServer('feedback', args);
				return returnResults(results?.map((r: CommentType) => ({
						...r,
						who: censorEmail(r?.who),
					}
				)));
			}

			/*
				static file lookups
			 */
			case 'FMA.xls': { return await apiXLSFromStaticServer(path); }
			case 'gigs': { return gigsStatic; }
			case 'gigmedias': { return gigmediasStatic; }
			case 'gigsongs': { return gigsongsStatic; }
			case 'gigtexts': { return gigtextsStatic; }
			case 'lyrics': { return lyricsStatic; }
			case 'performances': { return performancesStatic; }
			case 'presses': { return pressesStatic; }
			case 'releases': { return releasesStatic; }

			/*
				simple filtered lookups
			 */
			case 'conspirator': {
				const releases = await apiData('releases_by_performer', args);
				const performer = await apiData('gigs_by_musician', args);
				const support = await apiData('gigs_by_act', args);
				const pictures = await returnFilteredPath('gigmedias', 'type', 'pix', true, (candidate: HashedType, value: string, exact: boolean) => {
					return candidate?.image_caption?.toLowerCase()?.includes(args?.toLowerCase());
				});

				return {
					releases: joinOn('lookup', releases?.results, releasesStatic.results),
					performer,
					support,
					pictures,
				};
			}
			case 'songs_by_datetime': {
				return await returnFilteredPath('gigsongs', 'datetime', args, false);
			}
			case 'presses_by_release': {
				return await returnFilteredPath('presses', 'album', args, true);
			}
			case 'recent_releases': {
				return findRecent(releasesStatic, ['dtadded','dtreleased','datetime'], args?.releases);
			}
			case 'recent_press': {
				return findRecent(pressesStatic, ['dtadded','dtpublished','datetime'], args?.press);
			}
			case 'recent_gigmedia': {
				return findRecent(gigmediasStatic, ['credit_date','added','datetime'], args?.gigmedia);
			}

			/*
				more complex lookups
			 */
			case 'audio_by_project': {
				const gigs = gigsStatic?.results?.filter((g: HashedType) => g?.extra?.includes(args));
				return joinOn("datetime", gigs || [], gigsongsStatic?.results?.filter((gs: HashedType) => gs?.mediaurl?.length) || []);
			}
			case 'release_audio_by_project': {
				// "select * from performance where ? and category='release' and media IS NOT NULL group by lookup, song order by lookup, ordinal
				return returnResults(performancesStatic?.results
					?.filter((p: HashedType) => p?.project === args && p?.category === 'release' && p?.media?.length)
					?.sort((a: HashedType, b: HashedType) => a?.lookup?.localeCompare(b?.lookup) || a?.ordinal - b?.ordinal));
			}
			case 'audio': {
				// select * from media where type='audio' order by project, collection, ordinal
				return returnResults(mediasStatic?.results
					?.filter((m: HashedType) => m?.type === 'audio')
					?.sort((a: HashedType, b: HashedType) => a?.project?.localeCompare(b?.project) || a?.collection?.localeCompare(b?.collection) || a?.ordinal - b?.ordinal));
			}
			case 'video': {
				// select * from media where type='video' order by project, collection, ordinal
				return returnResults(mediasStatic?.results
					?.filter((m: HashedType) => m?.type === 'video')
					?.sort((a: HashedType, b: HashedType) => a?.project?.localeCompare(b?.project) || a?.collection?.localeCompare(b?.collection) || a?.ordinal - b?.ordinal));
			}
			case 'gig_by_datetime': {
				const datetime = args?.replace(/%20/g, ' ')?.replace(/ 00:00:00/, '');
				const gigs = gigsStatic?.results?.find((g: HashedType) => g?.datetime === datetime);
				const played = gigsongsStatic?.results?.filter((g: HashedType) => g?.datetime === datetime)
					/* already cleaned in db
					?.map((gs: HashedType) => {
						// clean up data
						const unexpand = (p?: string) => p?.split(' ')?.map((p: any) => {
							if (p?.startsWith('${') && p?.endsWith('}')) {
								const val = p?.substr(2, p?.length - 3); // ick
								return personName(val);
							} else {
								return p;
							}
						})?.join(' ');
						const performers = unexpand(gs?.performers);
						const author = unexpand(gs?.author);
						return {
							...gs,
							performers,
							author,
						}
					});
				*/
				const media = gigmediasStatic?.results?.filter((g: HashedType) => g?.datetime === datetime);
				const text = gigtextsStatic?.results?.filter((g: HashedType) => g?.datetime === datetime);
				const players = performancesStatic?.results?.filter((g: HashedType) => g?.datetime === datetime);
				const press = pressesStatic?.results?.filter((g: HashedType) => g?.dtgig === datetime);
				// assumes gigs are already sorted by date by API
				const indexOfGig = gigsStatic?.results?.map((g: HashedType, index: number) => ({ index, ...g }))?.find((g: HashedType) => g.gig_id === gigs?.gig_id)?.index || -1;
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
			}
			case 'press_by_href': {
				return await returnFilteredPath('presses', 'url', args, true, (candidate: HashedType, value: string, exact: boolean) => {
					const vl = value?.toLowerCase();
					const cl = candidate?.url?.toLowerCase();
					return cl === `/press/${vl}` || cl === `/press/${vl}.html`;
				});
			}
			case 'on_this_day': {
				const today = new Date().toISOString()?.substr(4, 6);
				return returnResults(gigsStatic?.results?.filter((r: HashedType) => r.datetime?.substr(4, 6) === today));
			}
			case 'unreleased_audio': {
				// "select * from media where type='audio' and length(lookup) = 0 and collection like '%session%' order by project, collection, ordinal"
				return returnResults(mediasStatic?.results?.filter((m: HashedType) => {
					return m?.type === 'audio' && !m?.lookup?.length && m?.collection?.toLowerCase()?.includes('session');
				})?.sort((a: HashedType, b: HashedType) => a?.project?.localeCompare(b?.project) || a?.collection?.localeCompare(b?.collection) || a?.ordinal - b?.ordinal));
			}
			case 'recent_gigsongs_media': {
				const gigsong_media =  await apiData('gigsongs_media', args);
				const { results } = await findRecent(gigsong_media, ['added','datetime'], args?.gigsong_media);
				return joinOn('datetime', results || [], gigsStatic?.results || []);
			}
			case 'recent_updates': {
				const press = await apiData('recent_press', args);
				const gigsong_media = await apiData('recent_gigsongs_media', args);
				const gigmedia = await apiData('recent_gigmedia', args);
				const releases = await apiData('recent_releases', args);
				const feedback = await apiData('recent_feedback', args);
				return {
					press,
					gigmedia,
					gigsong_media,
					feedback,
					releases
				}
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
					credit: (g?.mediacredit?.length) ? removeHTML(g?.mediacredit) : '-UNKNOWN-',
					credit_date: g?.added,
				})));
			}
			case 'press_contributions': {
				const presses = await apiData('presses');
				return returnResults(presses?.results?.filter((g: any) => {
						// get rid of "fake" "X Gig Review" entries
						if (!g?.body?.length && !g?.images?.length && !g?.thumb?.length && !g?.audio?.length) return false;
						return true;
					})?.filter((g: any) => args?.all || (g?.credit?.length || g?.publication?.length))?.map((g: any) => {
						const credit = removeHTML(g?.credit);
						const publication = removeHTML(g?.publication);
						if (credit && publication) {
							/*
								we have both, so return both
							 */
							return [
								{	// to make findable by Author
									...g,
									credit: credit,
								},
								{	// to make findable by Publication
									...g,
									credit: publication,
								},
							];
						} else {
							return {	// else return what we do have, or UNKNOWN
								...g,
								credit: credit || publication || '-UNKNOWN-',
							};
						}
					})?.flat()
				);
			}
			case 'gigtext_contributions': {
				const gigtexts = await apiData('gigtexts');
				return returnResults(gigtexts?.results?.filter((r: any) => {
					return (!['bootlegger','recording','soundman'].includes(r.type));
				})?.filter((g: any) => args?.all ||
					(g?.credit?.length && g?.credit_date?.length))?.map((g: any) => ({
					...g,
					credit: (g?.credit?.length) ? removeHTML(g?.credit) : '-UNKNOWN-',
				})));
			}
			case 'gigmedia_contributions': {
				const gigmedias = await apiData('gigmedias');
				return returnResults(gigmedias?.results?.filter((g: any) => args?.all || (g?.credit?.length && g?.credit_date?.length))?.map((g: any) => ({
					...g,
					credit: (g?.credit?.length) ? removeHTML(g?.credit) : '-UNKNOWN-',
				})));
			}
			case 'contributions': {
				const gigmedia = await apiData('gigmedia_contributions', args);
				const gigsong = await apiData('gigsong_contributions', args);
				const gigtext = await apiData('gigtext_contributions', args);
				const press = await apiData('press_contributions', args);
				const inpress = await returnFilteredPath('presses', 'body', args?.filter?.value, false);
				return {
					gigmedia: findRecent(gigmedia, ['credit_date'], makeOptions(args, 'gigmedia')),
					gigsong: findRecent(gigsong, ['added'], makeOptions(args, 'gigsong')),
					gigtext: findRecent(gigtext, ['credit_date'], makeOptions(args, 'gigtext')),
					press: findRecent(press, ['dtadded'], makeOptions(args, 'press')),
					inpress,
				}
			}
			case 'releases_by_performer': {
				const useArgs = args?.replace(/%22/g, '')?.replace(/%20/g, ' ');
				return  await returnFilteredPath('performances', 'performer', useArgs, true, (candidate: HashedType, value: string, exact: boolean) => matchesPerformerField('release', candidate, value, exact));
			}
			case 'releases_by_song': {
				//select distinct(lookup), media, version from performance where ? and category="release"'
				const useArgs = args?.replace(/%22/g, '')?.replace(/%20/g, ' ');
				return joinOn('lookup', [... new Set(performancesStatic?.results?.filter(value => (value?.category === 'release' && value?.song === useArgs))?.map(value => value?.lookup))]?.map(lookup => ({ lookup })), releasesStatic?.results);
			}
			case 'live_performances_by_song': {
				// 'select * from gigsong gs, gig g where gs.datetime=g.datetime and song="{{value}}"' },
				const useArgs = args?.replace(/%22/g, '')?.replace(/%20/g, ' ');
				const { results } = await returnFilteredPath('gigsongs', 'song', useArgs, true);
				return joinOn('datetime', results || [], gigsStatic?.results || []);
			}
			case 'released_recordings_by_song': {
				// select * from performance where song="{{value}}" and media IS NOT NULL
				const useArgs = args?.replace(/%22/g, '')?.replace(/%20/g, ' ');
				const { results } = await returnFilteredPath('performances', 'song', useArgs, true);
				return returnResults(results?.filter((r: HashedType) => r?.media?.length));
			}
			case 'lyric_by_href': {
				const releases = await apiData('releases', args);
				const matchOn = args + '.html';
				const lyrics = await returnFilteredPath('lyrics', 'href', matchOn, true);
				const title = lyrics?.results[0]?.title;
				const live = await apiData('live_performances_by_song', title);
				const unreleased = returnResults(performancesStatic?.results?.filter((g: HashedType) => g?.name === title && g?.lookup && g?.media));
				const released_recordings = await apiData('released_recordings_by_song', title);
				const foundon = await apiData('releases_by_song', title);
				const releaseAudio = releases?.results?.filter((r: any) => r?.audio?.includes(title));
				const releaseVideo = releases?.results?.filter((r: any) => r?.video?.includes(title));
				return {
					lyrics,
					live,
					released_recordings,
					releaseAudio,
					releaseVideo,
					unreleased,
					foundon,
				}
			}
			case 'songs_by_release': {
				//select *, song as title from performance where lookup = "{{value}}" and length(performer) = 0 order by type, ordinal
				const X = await returnFilteredPath('performances', 'lookup', args, true);
				const results = X?.results?.map((r: HashedType) => ({...r, title: r?.song }));
				const data = returnResults(results?.filter((r: HashedType) => !r?.performer?.length)?.sort((a: HashedType, b: HashedType) => a?.type?.localeCompare(b?.type) || a?.ordinal - b?.ordinal));
				//'select * from performance where lookup="{{value}}" and length(performer) > 0'
				const crdata = returnResults(results?.filter((r: HashedType) => r?.performer?.length > 0)?.sort((a: HashedType, b: HashedType) => a?.type?.localeCompare(b?.type) || a?.ordinal - b?.ordinal));
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
							credits[cr.performer].album_credits += ', ' + cr?.instruments;
						} else {
							credits[cr.performer].album_credits = cr?.instruments;
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
			case 'gigs_by_act': {
				let useArgs = args?.replace(/%22/g, '')?.replace(/%20/g, ' ');
				let exact = false;
				if (useArgs?.includes('"')) {
					exact = true;
					useArgs = useArgs.replace(/"/g, '');
				}
				const { results } = await returnFilteredPath('performances', 'performer', useArgs, exact, (candidate: HashedType, value: string, exact: boolean) => matchesPerformerField('with', candidate, value, exact));
				//console.log("ACTS", results);
				return joinOn('datetime', results || [], gigsStatic?.results || []);
			}
			case 'gigs_by_musician': {
				let useArgs = args?.replace(/%22/g, '')?.replace(/%20/g, ' ');
				let exact = false;
				if (useArgs?.includes('"')) {
					exact = true;
					useArgs = useArgs.replace(/"/g, '');
				}
				const { results } = await returnFilteredPath('performances', 'performer', useArgs, exact, (candidate: HashedType, value: string, exact: boolean) => matchesPerformerField('event', candidate, value, exact));
				return joinOn('datetime', results || [], gigsStatic?.results || []);
			}
			case 'gigs_by_song': {
				let useArgs = args?.replace(/%22/g, '');
				let exact = false;
				if (useArgs?.includes('"')) {
					exact = true;
					useArgs = useArgs.replace(/"/g, '');
				}
				const { results } = await returnFilteredPath('gigsongs', 'song', useArgs, exact);
				return joinOn('datetime', results || [], gigsStatic?.results || []);
			}
		}
	}
	return {
		noun: path,
		results: [],
		numResults: 0,
	}
}

export default apiData;
