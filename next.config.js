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
        ],
      },
}

module.exports = nextConfig
