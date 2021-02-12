const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  target: "experimental-serverless-trace",

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
});
