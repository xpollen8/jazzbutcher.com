import Feedback from './Feedback';
import Tag from './Tag';
 
const Footer = (): React.ReactNode  => {
	return (<>
		<Tag>
			Visitor Feedback
		</Tag>
		<Feedback />
	</>)
}

export default Footer;
