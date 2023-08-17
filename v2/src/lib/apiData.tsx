import { RecordType } from './macros';

/*
	TODO
	we can automatically build up complex searchable
	structures right here.
	see how "gig" is attached to "performer" and "gigsong"
	search results.
	no reason this cannot be extended to press, etc.
 */
const apiDataFromHTDBServer = async (path: string) => {
	return await fetch(`https://jazzbutcher.com/htdb/${path}`,
		{
			mode: 'no-cors'
		})	// next.config routes "v1" to JBC_HTDB_SERVER
		.then(e => e.json())
		.catch((e) => {
			console.log("ERR", e);
			return { error: `search by ${path} failed` };
		});
}

const apiDataFromDataServer = async (path: string) => {
	return await fetch(`/api/v2/${path}`)	// next.config routes "v2" to JBC_DATA_SERVER
		.then(e => e.json())
		.catch((e) => {
			console.log("ERR", e);
			return { error: `search by ${path} failed` };
		});
}

const apiData = async (path: string) => {
	switch (path) {
		case 'gigs':
		case 'presses':
			return await apiDataFromDataServer(path);
		case 'performances': {
			const performances =  await apiDataFromDataServer(path);
			const gigs = await apiDataFromDataServer('gigs');
			// add gig data to performance records
			const results = performances?.results?.map((performance: RecordType) => {
				const gig = gigs?.results.find((gig: RecordType) => gig?.datetime === performance?.datetime);
				return { ...performance, gig }
			});
			return { ...performances, results }
		}
		case 'gigsongs': {
			const songs = await apiDataFromDataServer(path);
			const gigs = await apiDataFromDataServer('gigs');
			// add gig data to song records
			const results = songs?.results?.map((song: RecordType) => {
				const gig = gigs?.results.find((gig: RecordType) => gig?.datetime === song?.datetime);
				return { ...song, gig }
			});
			return { ...songs, results }
		}
		case 'releases':
			return await apiDataFromHTDBServer('db_albums/data.json');
	}
}

export default apiData;
