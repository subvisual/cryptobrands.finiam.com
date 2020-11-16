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
  eleventyConfig.addPassthroughCopy("src/static");

  return {
    dir: {
      input: "src/",
      data: "_data",
      includes: "_includes",
      output: "_output",
    },
  };
};
