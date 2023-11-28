import useSWR from 'swr';

import { type CommentType, type NewCommentType } from '@/lib/utils';

const mapLetterURLIFeedbackLookup = (uri: string): string => {
	let ret = uri;
	[
		[ '19900214', '90Feb14' ],
		[ '19910201', '91Feb01' ],
		[ '19930830', '93Aug30' ],
		[ '19931019', '93Oct19' ],
		[ '19940413', '94Apr13' ],
		[ '19940624', '94Jun24' ],
		[ '19940913', '94Sep13' ],
	].forEach(([ current, old ]: any) => {
		ret = ret.replace(current, old);
	});
	if (ret?.match(/[0-9]$/)) return `${ret}/index.html`;
	return ret;
}

export const feedbackURI2Pathname = (pathname: string) => {
	return pathname?.replace('site', '');
}

const pathname2feedbackURI = (pathname: string) => {
	const fullpath = (uri: string) => {
		const unchanged = [
			'audio', 'fiascos', 'help', 'lyrics', 'fishy_mansions', 'letters',
			'gigs', 'links', 'mad', 'tribute', 'video', 'trivia', 'tomhall', 'press'
		];
		const isUnchanged = unchanged.find((u: string) => uri === u);
		if (unchanged.find((u: string) => uri === u)) return [ uri, '/index.html' ];
		const modified = [
			[ '', [ 'htdb', '/index.html' ] ],
			[ 'mailinglist', [ 'articles', '/index.html' ] ],
			[ 'releases', [ 'albums', '/index.html' ] ],
			[ 'conspirators', [ 'people', '/index.html' ] ],
			[ 'western_tape', [ 'albums', '/western_tape.html' ] ],
			[ 'memoriam', [ 'site', '/memoriam.html' ] ],
			[ 'letters', [ 'letters', '/index.html' ] ],
			[ 'eulogy', [ 'site', '/eulogy.html' ] ],
		];
		const [ orig, updated ] = modified.find(([ orig, updated ]: any[]) => uri === orig) || [];
		if (updated) return updated;

		if (uri?.startsWith('releases')) return [ uri.replace('releases', 'albums') ];
		if (uri?.startsWith('conspirators')) return [ uri.replace('conspirators', 'people') ];
		if (uri?.startsWith('letters')) return [ mapLetterURLIFeedbackLookup(uri) ];

		const [ section, sub1, sub2 ] = uri?.split('/') || '';
		if (section === 'gigs') {
			if (sub2) {
				return [ uri, '.html' ];
			} else if (sub1) {
				return [ uri, '/index.html' ];
			}
		}
		return [ uri, '/index.html' ];
	}
	const [ usePath, useSuffix ] = fullpath(pathname);
	return `exact/${usePath}?suffix=${useSuffix}`;
}

const usePageComments = (pathname: string) => {
	const fetcher = async (url: string) => fetch(url).then((res) => res.json());

	const { data, error, isLoading } = useSWR(`/api/feedback_by_page/${pathname2feedbackURI(pathname)}`, fetcher);

	const buildThread = (r: CommentType, all: CommentType[]) => {
		// TODO recursive/multi-depth comments
		return all?.filter((a: CommentType) => r.feedback_id === a.parent_id);
	}

	/*
		collect those items with 'parent_id' under their parent as 'children'
	 */
	const results = data?.results.map((r: CommentType, i: number, all: CommentType[]) => ({ ...r, children: buildThread(r, all) }))?.filter((r: CommentType) => !r.parent_id);

	return {
		data: { results, numResults: data?.results?.length },	// keep original total count
		isLoading,
		error,
	}
}

export const usePageCommentLike = (props: any) => {
	return {
		data: {},
		isLoading: false,
		error: {}
	}
}

export const usePageCommentReply = (props: any) => {
	return {
		data: {},
		isLoading: false,
		error: {}
	}
}

export const patchPageComment = async (props: any) => {
	return {
		data: {},
		isLoading: false,
		error: {}
	}
}

export const deletePageComment = async (props: any) => {
	return {
		data: {},
		isLoading: false,
		error: {}
	}
}

const submitPageCommentCommon = async (apiPath: string, props: any) => {
	const { pathname, ...body }: { pathname: string, body: CommentType | NewCommentType } = props;
	const fetcher = async ([ url, body ]: [ url: string, body: string ]) => {
		return await fetch(url, {
			method: 'POST',
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
			},
			...(body && { body }),
		})
		.then((res) => res.json());
	}

	return await fetcher([ `/api/${apiPath}/${pathname2feedbackURI(pathname)}`, JSON.stringify(body) ]);
}

export const submitPageCommentReply = async (props: any) => {
	return await submitPageCommentCommon('feedback_by_page_reply', props);
}

export const submitPageCommentNew = async (props: any) => {
	return await submitPageCommentCommon('feedback_by_page_new', props);
}

export default usePageComments;

