/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test-frames-peach.vercel.app',
      },
    ],
  },
};

export default nextConfig;
