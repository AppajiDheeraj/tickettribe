import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👇 explicitly disable Turbopack
  // keep runtime value `false` but assert the type to satisfy TypeScript
  turbopack: false as unknown as any,

  // 👇 optional webpack hook (ok to keep)
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
