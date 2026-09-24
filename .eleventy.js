const pluginRss = require("@11ty/eleventy-plugin-rss");
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("readableDate", function (dateObj) {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(dateObj);
  });

  return {
    pathPrefix,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
