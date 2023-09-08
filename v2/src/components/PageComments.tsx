"use client"

import { Suspense } from 'react';

import { usePathname } from 'next/navigation';

import usePageComments, { CommentType } from '@/lib/usePageComments';
import Tag from '@/components/Tag';

const Comment = ({ subject, dtcreated, who, whence, comments }: CommentType, key: number) => (
	<div key={key}>
		<label>Subject</label>{subject} info={<> {whence} - {who} </>}
		<div className="annotation">{comments}</div>
		<div dangerouslySetInnerHTML={{__html: comments }} />
	</div>
)

const Comments = ({ comments = [] }: { comments: CommentType[] }) => <>{comments?.map(Comment)}</>

const PageComments = () => {
	const pathname = usePathname();
	const { data, isLoading, error } = usePageComments(pathname);
	const comments = data?.results || [];

	return (<>
		<Suspense fallback={<>Loading...</>}>
			<details open={comments.length < 20}>
				<summary className="grid">
					<Tag className='tagClickable'>
						{comments.length} comments for this page
					</Tag>
				</summary>
				<Comments comments={comments} />
			</details>
		</Suspense>
	</>)

//	/*
//		<Page link="/feedback">
//			{/*<AddComment />*/}
//			<Comments feedback={feedback} />
//		</Page>
//	)
//	*/
}

export default PageComments;
