import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Netlify's Next.js image runtime returns 500s on /_next/image for this
  // project (confirmed via curl against the deployed site — the raw file
  // under /uploads/ serves fine, only the on-demand resize endpoint fails).
  // Skip server-side resizing entirely so next/image just renders the
  // original files directly; images are already served pre-sized.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
