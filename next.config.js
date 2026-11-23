/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable fast local and serverless execution
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      {
        source: '/outreach',
        destination: '/outreach.html',
      },
      {
        source: '/dispatcher',
        destination: '/outreach.html',
      },
    ];
  },
};

module.exports = nextConfig;

