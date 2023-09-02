/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.akamai.steamstatic.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.akamai.steamstatic.com',
          },
        ],
      },
}

module.exports = nextConfig
