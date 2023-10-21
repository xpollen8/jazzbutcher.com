import Link from 'next/link';
import Tag from '@/components/Tag';

const LetterHeader = (props: { title: string | React.ReactElement, subhead?: string | React.ReactElement, aux?: string | React.ReactElement }) =>
<>
	<Tag>
	{props.title}
	</Tag>
	<blockquote>
	   {(props?.subhead) && <>{props.subhead}</>}
		     {(props?.aux) && <><br />{props.aux}</>}
	</blockquote>
	<hr />
	{/*
	<p />
	<center>
		<b className="text-2xl">{props.title}</b>
		{(props?.subhead) && <><br />{props.subhead}</>}
		{(props?.aux) && <><br />{props.aux}</>}
	</center>
	<p />
	<hr />
	*/}
	<p />
</>

export default LetterHeader;
