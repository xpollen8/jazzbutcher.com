"use client"

import Image from 'next/image';
import Tag from '@/components/Tag';

import { Suspense } from 'react';

import { usePathname } from 'next/navigation';

import IconReply from '@/svg/IconReply';
import IconLike from '@/svg/IconLike';
import IconAddComment from '@/svg/IconAddComment';

import usePageComments from '@/lib/usePageComments';
import { type CommentType, dateDiff } from '@/lib/utils';

const Comment = ({ subject, dtcreated, who, whence, comments }: CommentType, key: number) => (
	<div key={key} className="comment">
		<div id="subject">{subject}</div>
		<div id="comments" className="annotation" dangerouslySetInnerHTML={{__html: comments }} />
		<div id="who"><> <b>{whence}</b> {!!(who?.length) && <span className="smalltext">- {who} </span>}</></div>
		<div id="date">{dateDiff(dtcreated, '')}</div>
		<div className="flex flex-wrap justify-center gap-10 pt-2">
			<IconLike style={{ width: '1.7em' }} />
			<IconReply style={{ width: '1.7em' }} />
			<IconAddComment style={{ width: '1.7em' }} />
		</div>
	</div>
)

const AddComment = ({ pathname }: { pathname: string }) => (
	<div className="comment">
		<Tag>New comments for <i>{pathname}</i></Tag>
		<p />
		<div style={{ outline: '1px solid green', width: '100%', height: '30px', background: '#eee', padding: '5px' }}>
			Subject
		</div>
		<p />
		<div style={{ outline: '1px solid green', width: '100%', height: '250px', background: '#eee', padding: '5px' }}>
			New comment form will go here
		</div>
	</div>
)

const Comments = ({ pathname, comments = [], className }: { pathname: string, comments: CommentType[], className?: string }) => (
	<div className={className}>
		<AddComment pathname={pathname} />
		{comments?.map(Comment)}
	</div>
)

export const CommentBubble = (props: any) => {
	if (0) {
		return (<span className="commentBubble flex">
			{props?.children}
			<Image src="https://v1.jazzbutcher.com/images/horn_flipped_40.png" width={50} height={50} alt="comments" className="ml-2"/>
		</span>)
	} else {
		return (
			<span className="flex commentBubble" >
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					{...props}
				>
					<g clipPath="url(#a)">
						<path
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
	}
}

const PageComments = ({ className }: { className?: string }) => {
	const pathname = usePathname();
	const { data, isLoading, error } = usePageComments(pathname);
	const comments = data?.results || [];

	return (<>
		<Suspense fallback={<>Loading...</>}>
			<details>
				<summary>
					<CommentBubble className={className} style={{ height: '25px' }}>
						<div className="text-sm text-slate-500 ml-1">{comments.length}</div>
					</CommentBubble>
				</summary>
				<Comments pathname={pathname} comments={comments} className="commentOverlay"/>
			</details>
		</Suspense>
	</>)
}

export default PageComments;
