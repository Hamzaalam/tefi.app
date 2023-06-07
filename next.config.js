// const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// `next-pwa` config should be passed here
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack5: true,

  // pwa: {
  //   disable: process.env.NODE_ENV === 'development',
  //   dest: 'public',
  //   runtimeCaching,
  // },
  env: {
    SERVER_END_POINT: process.env.SERVER_END_POINT,
    DGRAPH_API_KEY: process.env.DGRAPH_API_KEY,
    DGRAPH_API_URL: process.env.DGRAPH_API_URL,
    ADDRESS: process.env.ADDRESS,
    FILTER_POST_UST: process.env.FILTER_POST_UST,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      // exclude: [
      //   './packages/',
      //   './utils/useAccounts.ts'
      // ]
    });
    return config;
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

// delete nextConfig.pwa;

module.exports = process.env.NODE_ENV === 'production' ? withPWA(nextConfig) : nextConfig;
