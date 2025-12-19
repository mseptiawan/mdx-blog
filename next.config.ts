// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  // Jika masih error, coba tambahkan ini untuk MDX
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
