/** @type {import('next').NextConfig} */
const nextConfig = {
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
