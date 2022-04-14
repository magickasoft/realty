/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 60,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['cdn.pixabay.com', 'media.istockphoto.com'],
  },
  env: {
    baseURL: "http://localhost:3000/api/",
    smtp: {
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'magickasoft@gmail.com',
        pass: 'magickasoft1583210910',
      },
      secure: true,
    },
    receivers: "es.shmakov@gmail.com",
  },
}

module.exports = nextConfig
