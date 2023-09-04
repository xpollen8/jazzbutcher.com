/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
			return [
			]
	},

	async redirects() {
			return [
				{
					source: '/albums/:path*',
					destination: '/releases/:path*',
					permanent: false,
				},
				{
					source: '/albums',
					destination: '/releases',
					permanent: false,
				},
				{
					source: '/people',
					destination: '/conspirators',
					permanent: false,
				},
				// remove ".html" from all URLs
				{
					source: '/:path*.html',
					destination: '/:path*',
					permanent: false,
				},
				/*
				{
					source: '/audio/:path*',
					destination: 'https://jazzbutcher.com/audio/:path*',
					permanent: false,
				},
				{
					source: '/images/:path*',
					destination: 'https://jazzbutcher.com/images/:path*',
					permanent: false,
				},
				*/
				{
					source: '/api/v2/:path*',
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
		experimental: {
			serverActions: true,
		},
}

module.exports = nextConfig
