import Link from 'next/link';
import Tag from '@/components/Tag';

const LetterHeader = (props: { title: string | React.ReactElement, subhead?: string | React.ReactElement, aux?: string | React.ReactElement }) =>
<>
	<Tag> {props.title} </Tag>
	{(props?.subhead || props?.aux) && <div className="listItem">
	   {(props?.subhead) && <>{props.subhead}</>}
		 {(props?.aux) && <>{props.aux}</>}
	</div>}
</>

export default LetterHeader;
