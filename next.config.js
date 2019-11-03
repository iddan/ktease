const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  withFonts(),
  withCSS({
    cssLoaderOptions: {
      url: false
    }
  })
]);
