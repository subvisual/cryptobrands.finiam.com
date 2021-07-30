const withOptimizedImages = require("next-optimized-images");
const withPreact = require("next-plugin-preact");

module.exports = withPreact(
  withOptimizedImages({
    target: "experimental-serverless-trace",

    experimental: { optimizeCss: true },

    images: {
      domains: ["cdn.sanity.io"],
    },

    async headers() {
      return [
        {
          source: "/",
          headers: [
            {
              key: "Cache-Control",
              value: "max-age=1800",
            },
          ],
        },
      ];
    },
  }),
);
