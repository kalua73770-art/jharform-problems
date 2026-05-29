import type { NextConfig } from "next";

// Note: Security headers and cache headers should be configured at deployment level
// (Vercel, Netlify, nginx, etc.) because we're using static export (output: 'export')
// which doesn't support Next.js headers config.
// 
// Recommended headers to add at your host:
// X-Content-Type-Options: nosniff
// X-Frame-Options: SAMEORIGIN
// X-XSS-Protection: 1; mode=block
// Referrer-Policy: strict-origin-when-cross-origin
// Permissions-Policy: camera=(), microphone=(), geolocation=()
// Cache-Control: public, max-age=3600, must-revalidate (for HTML)
// Cache-Control: public, max-age=86400, stale-while-revalidate=604800 (for /problems/*)

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;