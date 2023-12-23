"use client"

import { useState } from 'react';
import Image from 'next/image';
import Tag from '@/components/Tag';

import { Suspense } from 'react';

import { usePathname } from 'next/navigation';

import IconReply from '@/svg/IconReply';
import IconLike from '@/svg/IconLike';
import IconAddComment from '@/svg/IconAddComment';

import usePageComments, { patchPageComment, deletePageComment, usePageCommentLike, usePageCommentReply, } from '@/lib/usePageComments';
import { type CommentType, dateDiff } from '@/lib/utils';

const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});

const getSessionId = () => {
	try {
		return localStorage.getItem('session') || localStorage.setItem('session', uuidv4()) || uuidv4();
	} catch(e) {
		return uuidv4();
	}
}

const	CommentLike = (props: any) => {
	return;
	const { onClick } = props;
	const { data, isLoading, error } = usePageCommentLike(props);
	return <IconLike className="pointable" style={{ width: '1.7em' }} onClick={onClick} />
}

const	CommentReply = (props: any) => {
	const { replying, onClick } = props;
	const { data, isLoading, error } = usePageCommentReply(props);
	return (!replying) && <IconReply className="pointable" style={{ width: '1.7em' }} onClick={onClick} />
}

const	ToggleCommentForm = (props: any) => {
	const { text, toggleCommentForm, showForm } = props;
	return <Tag>
		<div onClick={() => toggleCommentForm(true)}>
			<center>
			{text}{' '}
			{(!showForm) && <>
				<span className="pointable text-blue-600 bg-white p-1">[ + ]</span>
				{/*<IconAddComment style={{ width: '1.7em' }} />*/}
			</>}
			</center>
		</div>
	</Tag>
}

const DeleteComment = (props: any) => {
	//console.log("DeleteComment", props, getSessionId());
	const { mutate, feedback_id } = props;
	const [ deleting, setDeleting ] = useState(false);
	const [ editing, setEditing ] = useState(false);
	const [ confirm, setConfirm ] = useState(false);
	if (props?.session !== getSessionId()) return;
	return <>
		{(!editing && deleting) && <span className="pointable text-blue-600 bg-white p-1" onClick={async () => {
			setConfirm(!confirm);
			//await deletePageComment(feedback_id);

			const updated = await fetch(`/api/feedback_delete/${feedback_id}`, {
				cache: "no-cache",
				method: 'GET',
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			.then((res) => res.json());

			mutate(true, // which cache keys are updated
				undefined, // update cache data to `undefined`
					{ revalidate: false } // do not revalidate
				);

			setDeleting(!deleting);
			setEditing(false);
		}}>[ Really Delete? ]</span>}
		{(!editing && !deleting && !props.has_children) && <span className="pointable text-red-600 bg-white p-1" onClick={() => {
			setEditing(false);
			setDeleting(!deleting)
		}}>[ Delete ]</span>}
		{(editing) && <><CommentForm mutate={mutate} commentData={{...props}} editing={true} toggleCommentForm={setEditing} /></>}
		{/* (!editing) && <span className="pointable text-green-600 bg-white p-1" onClick={() => {
			setEditing(!editing)
		}}>[ Edit ]</span> */}
	</>
}

const Comment = (props: CommentType & any, key: number) => {
	const { mutate, editing=false, session, feedback_id, subject, dtcreated, who, whence, comments, toggleCommentForm, children, uri, showForm } = props;
	const [ replying, setReplying ] = useState(false);

	return (
		<div key={key} className="comment">
			<div id="subject">{subject} {(session === getSessionId()) && <DeleteComment mutate={mutate} {...props} />}</div>
			<div id="comments" className="annotation" dangerouslySetInnerHTML={{__html: comments }} />
			<div id="who"><b>{whence}</b> </div> {!!(who?.length) && <div id="email" className="smalltext">{who} </div>}
			<div id="date">{dateDiff(dtcreated, '')}</div>
			<div className="flex flex-wrap justify-center gap-10 pt-2">
				<CommentLike {...props} onClick={() => {
					alert(`like "${subject}"`);
				}}/>
				<CommentReply replying={replying} {...props} onClick={() => {
					toggleCommentForm(false);
					setReplying(!replying);
				}}/>
				{(replying) && <div className="w-full"><CommentForm mutate={mutate} commentData={{...props}} toggleCommentForm={setReplying} /></div>}
			</div>
			{(!!children?.length) && <div className="bg-green-400 pb-10">
				<Tag>Replies to &quot;{subject}&quot;..</Tag>
				<Comments mutate={mutate} commentData={{ uri, comments: children }} showForm={showForm} toggleCommentForm={toggleCommentForm} />
			</div>}
		</div>
	)
}

import { pathname2feedbackURI } from '@/lib/usePageComments';

const CommentForm = ({ mutate, commentData, editing=false, toggleCommentForm }: any) => {
	const { feedback_id, subject: inSubject, uri, comments: inComments, who: inWho, whence: inWhence } = commentData;
	const [ subject, setSubject ] = useState((!editing && feedback_id) ? `RE: ${inSubject}` : inSubject);
	const [ comments, setComments ] = useState(editing ? inComments : '');
	const [ who, setWho ] = useState(editing ? inWho : '');
	const [ whence, setWhence ] = useState(editing ? inWhence : '');
	const label = (uri?.length > 0) ? `Composing a new comment for "${uri}"` : `Composing a new comment`;
	const action = (editing) ? `Editing your post` : ((feedback_id) ? `Replying to "${inSubject}"` : label);

	return <div className="text-left drop-shadow-2xl listItem">
		<form
			onSubmit={async (ev: any) => {
				ev.preventDefault();

				if (!subject?.length) {
					alert('Subject: required');
					return;
				}

				if (!comments?.length) {
					alert('Your Comments: required');
					return;
				}

				const body = JSON.stringify({
					session: getSessionId(),
					feedback_id,
					uri,
					who,
					whence,
					subject,
					comments,
				});

				const updated = await fetch(`/api/${feedback_id ? 'feedback_by_page_reply' : 'feedback_by_page_new'}/${pathname2feedbackURI(uri)}`, {
					cache: "no-cache",
					method: 'POST',
					headers: {
						accept: "application/json",
						"Content-Type": "application/json",
					},
					body
				})
				.then((res) => res.json());

				toggleCommentForm(false);
				mutate(true, // which cache keys are updated
				  undefined, // update cache data to `undefined`
					  { revalidate: false } // do not revalidate
					);
			}}
			>
			<Tag>
				<span onClick={() => toggleCommentForm(false)}>
					<center>
					{action}{' '}
					<span className="pointable text-red-600 bg-white p-1">[ Dismiss ]</span>
					</center>
				</span>
			</Tag>
			<div className="listItem">
				<label>
				Name/Location (anonymous is fine)
				</label>
				<input type="text" value={whence}
					placeholder="Name/Location"
					style={{ outline: '1px solid green', width: '100%', height: '35px', background: '#eee', padding: '5px' }}
					onChange={(ev: any) => {
						ev.preventDefault();
						setWhence(ev?.target?.value);
					}}
				/>
				<label>
				Email (will not be published in the clear)
				</label>
				<input type="text" value={who}
					placeholder="Email"
					style={{ outline: '1px solid green', width: '100%', height: '35px', background: '#eee', padding: '5px' }}
					onChange={(ev: any) => {
						ev.preventDefault();
						setWho(ev?.target?.value);
					}}
				/>
				<label>
				Subject
				</label>
				<input type="text" value={subject}
					placeholder="Subject"
					style={{ outline: '1px solid green', width: '100%', height: '35px', background: '#eee', padding: '5px' }}
					onChange={(ev: any) => {
						ev.preventDefault();
						setSubject(ev?.target?.value);
					}}
				/>
				<label>
				Your Comments
				</label>
				<textarea value={comments}
					placeholder="Your words here"
					style={{ outline: '1px solid green', width: '100%', height: '200px', background: '#eee', padding: '5px' }}
					onChange={(ev: any) => {
						ev.preventDefault();
						setComments(ev?.target?.value);
					}}
				/>
			</div>
			<button type="submit" className="comment_submit">Submit</button>
		</form>
	</div>
}

const Comments = (props: { mutate: any, commentData: any, className?: string, toggleCommentForm: any, showForm: boolean }) => {
	const { mutate, commentData, className, toggleCommentForm, showForm } = props;
	const { uri, comments = [] } = commentData;
	return comments?.map((c: CommentType, key: number) => <Comment mutate={mutate} {...c } key={key} toggleCommentForm={toggleCommentForm} showForm={showForm} />)
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
	const uri = usePathname();
	const { data, isLoading, error, mutate } = usePageComments(uri);
	const comments = data?.results || [];
	const [ showForm, toggleCommentForm ] = useState(comments.length > 0 ? false : true);
	const label = (uri?.length > 0) ? `Comments for "${uri}"` : 'Comments';

	return (<>
		<Suspense fallback={<>Loading...</>}>
			<details id="commentBubble">
				<summary>
					<CommentBubble className="commentBubble">
						<div className="text-sm text-slate-500 ml-1">{data?.numResults}</div>
					</CommentBubble>
				</summary>
				<div className="commentOverlay">
					{(showForm) && <CommentForm mutate={mutate} commentData={{ uri }} toggleCommentForm={toggleCommentForm} />}
					<ToggleCommentForm text={label} showForm={showForm} toggleCommentForm={toggleCommentForm} />
					<Comments mutate={mutate} commentData={{ uri, comments }} showForm={showForm} toggleCommentForm={toggleCommentForm} />
				</div>
			</details>
		</Suspense>
	</>)
}

export default PageComments;
