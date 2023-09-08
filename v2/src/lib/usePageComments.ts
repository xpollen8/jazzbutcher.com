import useSWR from 'swr';

const mapLetterURLIFeedbackLookup = (uri: string) => {
let ret = uri;
	[
		[ '19900214', '90Feb14' ],
		[ '19910201', '91Feb01' ],
		[ '19930830', '93Aug30' ],
		[ '19931019', '93Oct19' ],
		[ '19940413', '94Apr13' ],
		[ '19940624', '94Jun24' ],
		[ '19940913', '94Sep13' ],
	].forEach(([ current, old ]: string[]) => {
		ret = ret.replace(current, old);
	});
	if (!ret.match(/.html/)) {
		if (ret[ret.length - 1].match(/[0-9]/)) {
			return `${ret}/index.html`;
		}
		return `${ret}.html`;
	}
	return ret;
}

const pathname2feedbackURI = (pathname: string) => {
	const fullpath = (uri: string) => {
		if (uri === '/') return '/htdb/index.html';
		if (uri === '/memoriam') return '/site/memoriam.html';
		if (uri === '/letters') return '/letters/index.html';
		if (uri.startsWith('/letters')) return mapLetterURLIFeedbackLookup(uri);
		if (uri === '/eulogy') return '/site/eulogy.html';
		//if (uri === '/mad') return '/mad/index.html';
		//if (uri === '/gigs') return '/gigs/index.html';
		if (uri.startsWith('/releases')) return uri.replace('/releases', '/albums');
		if (uri.startsWith('/conspirators')) return uri.replace('/conspirators', '/people');
		//if (!uri.endsWith('.html')) return uri + '/index.html'
		//return uri + 'index.html';
		/*
		if (uri.endsWith('/')) return uri + 'index.html';
		if (!uri.endsWith('.html')) return uri + '.html'
		*/
		//return uri;
	}
	const usePath = (fullpath(pathname) ?? pathname + '/index.html').substr(1);
	const ret = `exact/${usePath}`;
	return ret;
}

type Comment = {
	subject: string
	dtcreated?: string
	who: string
	whence: string
	comments: string
}

const cleanContact = (str: string) => str && str.replace(/\[remove\].*/, '@...');

const cleanValue = (v: string) => v.replace(/&#34;/g, "'").replace(/&#39;/g, "'").replace(/&#41;/g, ")").replace(/&#36;/g, "$").replace(/@/g, '[remove]').replace(/YourTown,/, '').replace(/USofA/, '').replace(/you\(at\)company.com/, '').replace(/\n/g, '<br/>');

const filterComments = (res: Comment[]) => res.map((c: Comment) => ({
	...c,
	who: cleanContact(c?.who),
	comments: cleanValue(c?.comments),
}));

const usePageComments = (pathname: string) => {
	const fetcher = async (url: any) => {
		return fetch(url)
			.then((res) => res.json())
			.then(res => ({ ...res, results: filterComments(res?.results) }))
		}

	const { data, error, isLoading } = useSWR(`/api/feedback/${pathname2feedbackURI(pathname)}`, fetcher);

	return {
		data,
		isLoading,
		error,
	}
}

export default usePageComments;
