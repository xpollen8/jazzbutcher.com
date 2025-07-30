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
        const jsonData = utils.sheet_to_json(worksheet, {
            header: 1,          // Use first row as headers
        });
        
        // Extract headers from first row
        const headers = jsonData.shift();
				result[sheetName] = [];
				jsonData.forEach((r: any) => {
					const row = {};
					headers.forEach((h: any, i: number) => {
						row[h] = r[i];
					});
					if (row?.ID?.length) {
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
