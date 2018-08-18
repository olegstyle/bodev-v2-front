/**
 * It's just a helper for IDE
 * If it isn't working then
 * Add full path to this file in Settings -> Languages & Frameworks > Javascript -> Webpack
 */

const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.png', '.jpg', '.svg'],
    alias: {
      '~': path.resolve(__dirname, './'),
    },
  },
};
