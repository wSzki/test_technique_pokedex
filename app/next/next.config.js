/** @type {import('next').NextConfig} */
const nextConfig = {
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
		 styledComponents: true
	 }
}

module.exports = nextConfig

