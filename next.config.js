const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');
/** @type {import('next').NextConfig} */
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

// loads env vars
dotenvLoad()
// creates plugin
const withNextEnv = nextEnv()
const withEnv = nextEnv()
const nextConfig = {
  swcMinify: true,
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



module.exports = (phase, { nextConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD ? process.env.NODE_ENV === 'production' : null) {
    console.log('Production build')
  } if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('Development mode')
  }
  return withEnv({ nextConfig })
}