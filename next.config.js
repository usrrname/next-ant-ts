/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  pageExtensions: ['mdx', 'md', 'tsx', 'ts'],
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  images: {
    deviceSizes: [360, 375, 414, 640, 768, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
  },
  // productionBrowserSourceMaps: true,
}

module.exports = nextConfig
