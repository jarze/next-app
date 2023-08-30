const config = require('./.apollo.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		apiUrl: config.apiUrl,
	},
};

module.exports = nextConfig;
