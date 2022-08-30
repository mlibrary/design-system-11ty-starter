module.exports = function(eleventyConfig) {

  // The addWatchTarget config method allows you to manually add a file for Eleventy to watch.
  eleventyConfig.addWatchTarget("./src/sass");


  // The Pass Through feature tells Eleventy to copy things to our output folder
  // Eleventy passes through our compiled CSS to the public directory. 
  eleventyConfig.addPassthroughCopy("./src/css");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};