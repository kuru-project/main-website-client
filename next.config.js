const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'
const withImages = require('next-images')

function foldLeft(...values) {
  return values.reduceRight((p, c) => c(p))
}

function withTSConfig() {
  return {
    assetPrefix: isProd ? 'https://web.kuru-anime.com' : '',
    webpack(config) {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      // if (value && value.webpack) {
      //   return value.webpack(config);
      // }

      return config;
    },
  };
}

module.exports = Object.assign(
  foldLeft(withTSConfig()),
  withImages(withTSConfig())
);