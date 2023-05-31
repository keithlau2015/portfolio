// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
}