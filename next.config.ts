import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  // distDir: 'build', // Changes the build output directory to `build`
  reactStrictMode: false, // Disable React Strict Mode (Temporary Fix for Material-UI (@mui/core))
};

export default nextConfig;
