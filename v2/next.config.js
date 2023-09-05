/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
			return [
			]
	},

	async redirects() {
			return [
				{
					source: '/letters/90Feb14/:path*',
					destination: '/letters/19900214/:path*',
					permanent: false,
				},
				{
					source: '/letters/91Feb01/:path*',
					destination: '/letters/19910201/:path*',
					permanent: false,
				},
				{
					source: '/letters/93Aug30/:path*',
					destination: '/letters/19930830/:path*',
					permanent: false,
				},
				{
					source: '/letters/93Oct19/:path*',
					destination: '/letters/19931019/:path*',
					permanent: false,
				},
				{
					source: '/letters/94Apr13/:path*',
					destination: '/letters/19940413/:path*',
					permanent: false,
				},
				{
					source: '/press/94stop_press.html',
					destination: '/letters/19940520',
					permanent: false,
				},
				{
					source: '/letters/94Jun24/:path*',
					destination: '/letters/19940624/:path*',
					permanent: false,
				},
				{
					source: '/letters/94Sep13/:path*',
					destination: '/letters/19940813/:path*',
					permanent: false,
				},
				{
					source: '/albums/:path*',
					destination: '/releases/:path*',
					permanent: false,
				},
				{
					source: '/people/:path*',
					destination: '/conspirators/:path*',
					permanent: false,
				},
				// remove ".html" from all URLs
				{
					source: '/:path*.html',
					destination: '/:path*',
					permanent: false,
				},
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
					hostname: 'adjective.com',
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
