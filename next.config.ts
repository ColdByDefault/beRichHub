import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "https://github.com/shadcn.png"
      }
    ]
  }
};

export default nextConfig;