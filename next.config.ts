import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "x8ki-letl-twmt.n7.xano.io",
      },
    ],
  },
};

export default nextConfig;
