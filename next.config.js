const withPlugins = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');
/** @type {import('next').NextConfig} */
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

// loads env vars
dotenvLoad()
// creates plugins
const withEnv = nextEnv()
const withMDX = require('@next/mdx')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const globalConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        path: false
      }
    }
    return config;
  },
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
  swcMinify: true,
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  pageExtensions: ['mdx', 'md', 'tsx', 'ts'],
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  images: {
    domains: ["randomuser.me", "mocky.io", "fonts.cdnfonts.com"],
    deviceSizes: [360, 375, 414, 640, 768, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/jpg'],
  },
  productionBrowserSourceMaps: true,
}

module.exports = (phase, { globalConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD ? process.env.NODE_ENV === 'production' : null) {
    console.log('Production build')
  } if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('Development mode')
  }
  const nextConfig = withPlugins([
    [withMDX, {
      extension: /\.mdx?$/,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
      },
    }],
    [withBundleAnalyzer],
    [withEnv],
    globalConfig
  ])
  return { nextConfig }
}