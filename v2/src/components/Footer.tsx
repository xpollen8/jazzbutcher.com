import Feedback from './Feedback';
import Tag from './Tag';
 
const Footer = (): React.ReactNode  =>
<details>
	<summary className="grid hover:outline">
		<Tag>
			Comments for this page..
		</Tag>
	</summary>
	<Feedback />
</details>

export default Footer;
