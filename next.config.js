/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/clothesapi',
        destination: 'https://localhost:7235/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
