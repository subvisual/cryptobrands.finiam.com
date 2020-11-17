const lazyImagesPlugin = require("eleventy-plugin-lazyimages");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "liquid",
    "md",
    // Static Assets:
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2",
  ]);

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    transformImgPath: (src) => `./src/static/${src}`,
  });

  eleventyConfig.addPassthroughCopy({ "src/static": "." });

  return {
    dir: {
      input: "src/",
      data: "_data",
      includes: "_includes",
      output: "_output",
    },
  };
};
