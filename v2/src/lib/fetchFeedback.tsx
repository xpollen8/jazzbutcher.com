"use server"

import apiData from '@/lib/apiData';

const pathname2feedbackURI = (pathname: string) => {
	const fullpath = (uri: string) => {
		if (uri === '/') return '/htdb/index.html';
		if (uri === '/memoriam') return '/site/memoriam.html';
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
	const ret = `/exact/${usePath}`;
	//console.log("pathname2feedbackURI", { pathname, usePath, ret });
	return ret;
}

const fetchFeedback = async (uri: string) => {
	const feedback = await apiData('feedback', pathname2feedbackURI(uri));

	return feedback?.results;
}

export default fetchFeedback;
