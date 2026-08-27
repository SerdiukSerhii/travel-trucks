import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'campers-api.goit.study' }],
  },
};

export default nextConfig;
