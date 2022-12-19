/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   swcMinify: true,
   experimental: {
      images: {
         unoptimized: true,
      },
      styledComponents: true
   },
   images: {
      domains: ['volde.ozanuzer.com']
   },
   env: {
      API_URL: 'https://volde.ozanuzer.com/api'
   },
}

module.exports = nextConfig
