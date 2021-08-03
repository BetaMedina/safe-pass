const withCSS = require('@zeit/next-css')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  withCSS:({
    cssModules: true  // After true than use import statement in next.js
  })
};
