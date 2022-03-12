/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["imdb-api.com","m.media-amazon.com"],
  },
}

module.exports = nextConfig
