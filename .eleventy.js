const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  // Add the plugin
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // The addWatchTarget config method allows you to manually add a file for Eleventy to watch.
  eleventyConfig.addWatchTarget("./src/sass");

  // The Pass Through feature tells Eleventy to copy things to our output folder
  // Eleventy passes through our compiled CSS to the public directory. 
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      layouts: "_includes/layouts",
    },
  };
};