import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "fastly.picsum.photos" },
      { hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
