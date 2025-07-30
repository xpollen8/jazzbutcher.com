import useSWR from 'swr';
import { read, utils } from 'xlsx';

const useFishyMansionsArchives = () => {
	const fetcher = (url: string) => fetch(url)
		.then((response) => response.arrayBuffer())
		.then((arrayBuffer) => {
			const data = new Uint8Array(arrayBuffer);
			const wb = read(data);
			// Initialize result object to store sheets
			const result = {};
    
			// Process each worksheet
			wb.SheetNames.forEach(sheetName => {
        const worksheet = wb.Sheets[sheetName];
        
        // Convert worksheet to JSON with headers as attributes
				// @ts-ignore
        const jsonData = utils.sheet_to_json(worksheet, {
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
			return result;
		})

	const { data, isLoading, error } = useSWR(`FMA.xls`, fetcher);

	return {
		isLoading: false,
		data: {
			error: false,
			results: [ data ]
		}
	}
}

export default useFishyMansionsArchives;
