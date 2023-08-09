/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
			return [
				{
					source: '/audio/:path*',
					destination: `https://jazzbutcher.com/audio/:path*`,
					permanent: false,
				},
				{
					source: '/images/:path*',
					destination: `https://jazzbutcher.com/images/:path*`,
					permanent: false,
				},
				{
					source: '/api/:path*',
					destination: `${process.env.JBC_DATA_SERVER}/api/:path*`,
					permanent: false,
				},
			]
	},
	images: {
			remotePatterns: [
				{
					protocol: 'https',
					hostname: 's3.amazonaws.com',
					port: '',
					pathname: '**',
				},
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
