const config = require('./.apollo.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	env: {
		apiUrl: config.apiUrl,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${config.apiUrl}/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
