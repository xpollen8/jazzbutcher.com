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
			return apiDataFromDataServer(path);
		case 'releases':
			return apiDataFromHTDBServer('db_albums/data.json');
	}
}

export default apiData;
