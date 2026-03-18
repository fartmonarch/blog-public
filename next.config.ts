import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  typescript: { ignoreBuildErrors: true },
  experimental: { scrollRestoration: false },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { svgo: true } }]
    })
    return config
  },
  async redirects() {
    return [
      { source: '/zh', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true }
    ]
  }
}

export default nextConfig