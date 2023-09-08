import Link from 'next/link';

const LetterHeader = (props: { title: string | React.ReactNode, subhead?: string | React.ReactNode }) =>
<>
	<p />
	<center>
		<b className="text-2xl">{props.title}</b>
		{(props?.subhead) && <><br />{props.subhead}</>}
	</center>
	<p />
	<hr />
	<p />
</>

export default LetterHeader;
