"use client"

import Image from 'next/image';

import { Suspense } from 'react';

import { usePathname } from 'next/navigation';

import usePageComments from '@/lib/usePageComments';
import { CommentType, dateDiff } from '@/lib/macros';

const Comment = ({ subject, dtcreated, who, whence, comments }: CommentType, key: number) => (
	<div key={key} className="comment">
		<div id="subject">{subject}</div>
		<div id="who">{<> {whence} - {who} </>}</div>
		<div id="date">{dateDiff(dtcreated)}</div>
		<div id="comments" className="annotation" dangerouslySetInnerHTML={{__html: comments }} />
	</div>
)

const Comments = ({ comments = [], className }: { comments: CommentType[], className?: string }) => <div className={className}>{comments?.map(Comment)}</div>

export const CommentBubble = (props: any) => {
	return (<span className="commentBubble flex">
		{props?.children}
		<Image src="https://jazzbutcher.com/images/horn_flipped_40.png" width={50} height={50} alt="comments" className="ml-2"/>
	</span>)
	/* SVG bubble version
	return (
		<span className="flex" >
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				{...props}
			>
				<g clipPath="url(#a)">
					<path
						className="commentBubble"
						fill="#fff"
						stroke="#292929"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2.5}
						d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 0h24v24H0z" />
					</clipPath>
				</defs>
			</svg>
			{props?.children}
		</span>
	)
*/
}

const PageComments = () => {
	const pathname = usePathname();
	const { data, isLoading, error } = usePageComments(pathname);
	const comments = data?.results || [];

	return (<>
		<Suspense fallback={<>Loading...</>}>
			<details>
				<summary className="grid">
					<CommentBubble style={{ width: '25px', fontSize: '.5em' }}>
						{comments.length}
					</CommentBubble>
				</summary>
				<Comments comments={comments} className="commentOverlay"/>
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
