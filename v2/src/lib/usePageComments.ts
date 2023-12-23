import useSWR from 'swr';

import { type CommentType, type NewCommentType } from '@/lib/utils';

export const feedbackURI2Pathname = (pathname: string) => {
	return pathname?.replace('site', '');
}

export const pathname2feedbackURI = (pathname: string) => {
	return `exact/${pathname}`;
}

const usePageComments = (pathname: string) => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data, error, isLoading, mutate } = useSWR(`/api/feedback_by_page/${pathname2feedbackURI(pathname)}`, fetcher);

	const buildThread = (r: CommentType, all: CommentType[]) => {
		const children = all?.filter((a: CommentType) => r.feedback_id === a.parent_id);
		children?.forEach((c: CommentType) => { c.children = buildThread(c, all); c.has_children = c?.children?.length });
		return children;
	}

	/*
		collect those items with 'parent_id' under their parent as 'children'
	 */
	const results = data?.results && data?.results?.map((r: CommentType, i: number, all: CommentType[]) => {
		const children = buildThread(r, all);
		return { ...r, children, has_children: children?.length }
	})?.filter((r: CommentType) => !r.parent_id);

	return {
		data: { results, numResults: data?.results?.length },	// keep original total count
		isLoading,
		error,
		mutate,
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

export default usePageComments;

