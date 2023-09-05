"use server"

import apiData from '@/lib/apiData';

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
	//console.log("pathname2feedbackURI", { pathname, usePath, ret });
	return ret;
}

const fetchFeedback = async (uri: string) => {
	const feedback = await apiData('feedback', pathname2feedbackURI(uri));

	return feedback?.results;
}

export default fetchFeedback;
