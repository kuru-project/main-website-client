const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

function foldLeft(...values) {
  return values.reduceRight((p, c) => c(p));
}

function withTSConfig(value) {
  return {
    ...value,
    webpack(config) {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      if (value.webpack) {
        return value.webpack(config);
      }

      return config;
    },
  };
}

module.exports = foldLeft(
  withTSConfig,
);
