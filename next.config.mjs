/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thinkmediasolutions.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
