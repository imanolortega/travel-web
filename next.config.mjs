import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // Use serverExternalPackages (correct option for Next.js 15)
  serverExternalPackages: ['path'],
  webpack: (config) => {
    // Add Node.js polyfills for Edge runtime
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: 'path-browserify',
    }
    return config
  },
}

export default withMDX(nextConfig)
