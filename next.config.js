/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  cssModules: true,
  webpack: (config, options) => {
    config.node = {
      fs: "empty",
    };
    config.module.rules.push({
      use: [
        options.defaultLoaders.babel,
        {
          loader: "url-loader?limit=100000",
        },
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
}

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
