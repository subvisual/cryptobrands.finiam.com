const withPreact = require("next-plugin-preact");

module.exports = withPreact({
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
});
