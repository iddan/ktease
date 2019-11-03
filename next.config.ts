import { listConditions } from "./conditions.service";

const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withImages(
    withCSS({
      cssLoaderOptions: {
        url: false
      }
    })
  )
);

module.exports.exportPathMap = () => {
  const conditions = listConditions();
  /** @todo sub pages */
  const pages = conditions.reduce(
    (pages, name) => ({
      ...pages,
      [`/conditions/${encodeURIComponent(name)}`]: {
        page: "/conditions/[name]",
        query: { name: encodeURIComponent(name) }
      }
    }),
    { "/": { page: "/" } }
  );

  // combine the map of post pages with the home
  return pages;
};
