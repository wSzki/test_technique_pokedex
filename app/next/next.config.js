/** @type {import('next').NextConfig} */
const path = require('node:path');

const nextConfig = {
	 webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@/components': path.join(__dirname, 'src/components'),
			'@/settings': path.join(__dirname, 'src/settings'),
			'@/context': path.join(__dirname, 'src/context'),
			 '@/lib': path.join(__dirname, 'src/lib'),
			'@/graphQL': path.join(__dirname, 'src/graphQL'),
		};
		return config;
	 },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
