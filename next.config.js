/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'photos.google.com', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
