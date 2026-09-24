/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-3a4cf9b850d54830ae03f7476af052a0.r2.dev',
        pathname: '/assets/gallery/**',
      },
    ],
  },
  experimental: {
    outputFileTracingExcludes: {
      // Vercel serves public assets separately; keep them out of gallery functions.
      '/gallery{,/**}': ['./public/assets/**/*'],
    },
  },
}

export default nextConfig
