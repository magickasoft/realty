/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

const defaultConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 60,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['cdn.pixabay.com', 'media.istockphoto.com', 'novostroiki-54.ru'],
  },
};

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  return {
    ...defaultConfig,
    env: {
      gaMeasurementId: 'G-CZ2JMN4FYD',
      baseURL: (() => {
        if (isProd) return 'https://novostroiki-54.ru/api/';
        return 'http://localhost:3000/api/';
      })(),
      smtp: {
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'magickasoft@gmail.com',
          pass: 'magickasoft1583210910',
        },
        secure: true,
      },
      receivers: "es.shmakov@gmail.com, vsenovostroiki123@gmail.com",
    },
  }
};
