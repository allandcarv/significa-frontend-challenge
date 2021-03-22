const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  };
return config;
};
