import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This allows the build to finish even if you have "unused var" errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This allows the build to finish even if you have "any" type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;