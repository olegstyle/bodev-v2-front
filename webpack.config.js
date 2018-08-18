/**
 * It's just a helper for IDE
 */

const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.resolve(__dirname, './'),
    },
  },
};
