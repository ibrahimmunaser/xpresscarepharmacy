/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/location',
        destination: '/contact',
        permanent: true, // 308/301
      },
    ];
  },
}

module.exports = nextConfig
