import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Attribution } from '@/components/GenericWeb';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const options = [
	{ uri: '/admin/press', text: 'Manage Press', aux: 'possible backed tool for edit form data: https://github.com/vantezzen/auto-form' },
	{ uri: '/admin/entity', text: 'Manage Entities' },
	{ uri: '/admin/conspirator', text: 'Manage Conspirators' },
	{ uri: '/admin/gig', text: 'Manage Gigs' },
	{ uri: '/admin/release', text: 'Manage Releases' },
	{ uri: '/admin/performance', text: 'Manage Performances' },
	{ uri: '/admin/song', text: 'Manage Songs' },
	{ uri: '/admin/defines', text: 'Manage Global defines' },
	{ uri: '/admin/s3', text: 'Manage AWS S3 file storage', aux: "(Need to incoprorate https://www.npmjs.com/package/react-aws-s3)"  },
]

const Admin = () => {
	return (
		<>
			<Header section='admin' />
			<blockquote>
			Nothing here yet works, but am including to show intent
			<p />
			<Attribution g="David Whittemore" d="2023-09-11" />
			</blockquote>
			{options.map(MakeSimpleURI)}
			<Footer />
		</>
	)
}

export default Admin;
