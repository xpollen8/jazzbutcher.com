import { RecordType } from './macros';
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
		case 'performances':
			return await apiDataFromDataServer(path);
		case 'gigsongs':
			const songs = await apiDataFromDataServer(path);
			const gigs = await apiDataFromDataServer('gigs');
			// add gig data to song records
			const results = songs?.results?.map((song: RecordType) => {
				const gig = gigs?.results.find((gig: RecordType) => gig?.datetime === song?.datetime);
				return { ...song, gig }
			});
			return { ...songs, results }
		case 'releases':
			return await apiDataFromHTDBServer('db_albums/data.json');
	}
}

export default apiData;
