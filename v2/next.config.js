/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
			remotePatterns: [
				{
					protocol: 'https',
					hostname: 'jazzbutcher.com',
					port: '',
					pathname: '**',
				},
			],
		},
}

module.exports = nextConfig
