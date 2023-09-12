import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MakeSimpleURI from '@/components/MakeSimpleURI';

const options = [
	{ uri: '/admin/edit/press', text: 'Edit Press' },
	{ uri: '/admin/edit/conspirator', text: 'Edit Conspirator' },
	{ uri: '/admin/edit/gig', text: 'Edit Gig' },
	{ uri: '/admin/edit/release', text: 'Edit Release' },
	{ uri: '/admin/edit/performance', text: 'Edit Performance' },
	{ uri: '/admin/edit/song', text: 'Edit Song' },
	{ uri: '/admin/edit/defines', text: 'Edit Global Defines' },
]

const Admin = () => {
	return (
		<>
			<Header section='admin' />
			(WIP)
			{options.map(MakeSimpleURI)}
			<Footer />
		</>
	)
}

export default Admin;
