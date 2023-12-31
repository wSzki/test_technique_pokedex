/** @type {import('next').NextConfig} */
const path = require('node:path');

const nextConfig = {
	 webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@/components': path.join(__dirname, './src/components'),
			'@/settings':   path.join(__dirname, './src/settings'),
			'@/context':    path.join(__dirname, './src/context'),
			'@/lib':        path.join(__dirname, './src/lib'),
			'@/graphQL':    path.join(__dirname, './src/graphQL'),
			'@/css':        path.join(__dirname, './src/css'),
		};
		return config;
	 },
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
