"use client"

import { useState } from 'react';
import Image from 'next/image';
import Tag from '@/components/Tag';

import { Suspense } from 'react';

import { usePathname } from 'next/navigation';

import IconReply from '@/svg/IconReply';
import IconLike from '@/svg/IconLike';
import IconAddComment from '@/svg/IconAddComment';

import usePageComments, { usePageCommentLike, usePageCommentReply, submitPageCommentNew } from '@/lib/usePageComments';
import { type CommentType, dateDiff } from '@/lib/utils';

const	CommentLike = (props: any) => {
	const { onClick } = props;
	const { data, isLoading, error } = usePageCommentLike(props);
	return <IconLike style={{ width: '1.7em' }} onClick={onClick} />
}

const	CommentReply = (props: any) => {
	const { replying, onClick } = props;
	const { data, isLoading, error } = usePageCommentReply(props);
	return (!replying) && <IconReply style={{ width: '1.7em' }} onClick={onClick} />
}

const	ShowNewCommentForm = (props: any) => {
	const { text, toggleCommentForm, showForm } = props;
	return <Tag>
		<div onClick={() => toggleCommentForm(true)}>
			{text} {(!showForm) && <>
				[<span className="text-blue-600">Add your own</span>]
				{/*<IconAddComment style={{ width: '1.7em' }} />*/}
			</>}
		</div>
	</Tag>
}

const Comment = (props: CommentType & any, key: number) => {
	const { feedback_id, subject, dtcreated, who, whence, comments, toggleCommentForm } = props;
	const [ replying, setReplying ] = useState(false);
	return (
		<div key={key} className="comment">
			<div id="subject">{subject}</div>
			<div id="comments" className="annotation" dangerouslySetInnerHTML={{__html: comments }} />
			<div id="who"><> <b>{whence}</b> {!!(who?.length) && <span className="smalltext">- {who} </span>}</></div>
			<div id="date">{dateDiff(dtcreated, '')}</div>
			<div className="flex flex-wrap justify-center gap-10 pt-2">
				<CommentLike {...props} onClick={() => {
					alert(`like "${subject}"`);
				}}/>
				<CommentReply replying={replying} {...props} onClick={() => {
					toggleCommentForm(false);
					setReplying(!replying);
				}}/>
				{(replying) && <div className="w-full"><NewCommentForm {...props} toggleCommentForm={setReplying} /></div>}
			</div>
		</div>
	)
}

const NewCommentForm = (props: { feedback_id?: number, subject?: string, pathname: string, toggleCommentForm: any }) => {
	const { feedback_id, subject: inSubject, pathname, toggleCommentForm } = props;
	const [ subject, setSubject ] = useState((feedback_id) ? `RE: ${inSubject}` : '');
	const [ comments, setComments ] = useState('');
	const action = (feedback_id) ? `Replying to "${inSubject}"` : `Composing a message for "${pathname}"`;
	return <>
		<form
			onSubmit={(ev: any) => {
				ev.preventDefault();
				submitPageCommentNew({
					feedback_id,
					pathname,
					payload: {
						subject,
						comments
					}
				})
			}}
			>
			<Tag>
				<span onClick={() => toggleCommentForm(false)}>
					{action} [ DISMISS ]
				</span>
			</Tag>
			<div className="comment">
				<input type="text" value={subject}
					placeholder="Subject"
					style={{ outline: '1px solid green', width: '100%', height: '35px', background: '#eee', padding: '5px' }}
					onChange={(ev: any) => {
						ev.preventDefault();
						setSubject(ev?.target?.value);
					}}
				/>
				<p />
				<input type="text" value={comments}
					placeholder="New comment form will go here"
					style={{ outline: '1px solid green', width: '100%', height: '250px', background: '#eee', padding: '5px' }}
					onChange={(ev: any) => {
						ev.preventDefault();
						setComments(ev?.target?.value);
					}}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	</>
}

const Comments = (props: { pathname: string, comments: CommentType[], className?: string, toggleCommentForm: any, showForm: boolean }) => {
	const { pathname, comments = [], className, toggleCommentForm, showForm } = props;
	return <div className={className}>
		<ShowNewCommentForm text={`Visitor comments for "${pathname}"`}{...props} />
		{comments?.map((c: CommentType, key: number) => <Comment key={key} {...c} toggleCommentForm={toggleCommentForm} />)}
	</div>
}

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
	const [ showForm, toggleCommentForm ] = useState(false);

	return (<>
		<Suspense fallback={<>Loading...</>}>
			<details>
				<summary>
					<CommentBubble className={className} style={{ height: '25px' }}>
						<div className="text-sm text-slate-500 ml-1">{comments.length}</div>
					</CommentBubble>
				</summary>
				<div className="commentOverlay">
				{(showForm) && <NewCommentForm pathname={pathname} toggleCommentForm={toggleCommentForm} />}
				<Comments pathname={pathname} comments={comments} showForm={showForm} toggleCommentForm={toggleCommentForm} />
				</div>
			</details>
		</Suspense>
	</>)
}

export default PageComments;
