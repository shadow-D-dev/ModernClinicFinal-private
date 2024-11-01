// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
// };
//
// export default nextConfig;

import { NextConfig } from "next";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";

// Define the configuration object using NextConfig type for proper type-checking.
const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add the CaseSensitivePathsPlugin to detect case-sensitivity issues.
    config.plugins = config.plugins || [];
    config.plugins.push(new CaseSensitivePathsPlugin());

    return config;
  },
  reactStrictMode: true,
  // Add any other Next.js specific configurations here.
};

export default nextConfig;
