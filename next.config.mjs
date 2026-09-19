/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      // Vercel serves these as static assets. Travel image dimensions are
      // read at build time, so originals must not enter gallery functions.
      '/gallery{,/**}': ['./public/assets/**/*'],
    },
  },
}

export default nextConfig
