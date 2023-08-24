import Feedback from './Feedback';
import Tag from './Tag';
 
const Footer = (): React.ReactNode  =>
<details>
	<summary className="grid">
		<Tag className='headingItemClickable'>
			Comments for this page..
		</Tag>
	</summary>
	<Feedback />
</details>

export default Footer;
