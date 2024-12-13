require('dotenv').config();
const fs = require("fs-extra");
const handlebars = require("@11ty/eleventy-plugin-handlebars");
const fetch = require("node-fetch");



module.exports = function(eleventyConfig) {
  // Add Handlebars plugin
  eleventyConfig.addPlugin(handlebars);

  eleventyConfig.addHandlebarsHelper("processContent", function(content) {
    return processContent(content);
  });

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy({"public/images": "images"});
  eleventyConfig.addPassthroughCopy({"public/css": "css"});
  eleventyConfig.addPassthroughCopy({"public/videos": "videos"});
  eleventyConfig.addPassthroughCopy({"public/js": "js"});

  eleventyConfig.addWatchTarget("public/css");

  eleventyConfig.on("eleventy.before", async () => {
    try {
      console.log("Deleting 'dist' folder...");
      await fs.remove("dist");
      console.log("'dist' folder deleted successfully!");
    } catch (err) {
      console.error("Error deleting 'dist' folder:", err);
    }
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = fs.readFileSync('dist/404.html');

        bs.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      }
    }
  });
  
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats: ["hbs", "md"],
    htmlTemplateEngine: "hbs",
    markdownTemplateEngine: "hbs"
  };
};