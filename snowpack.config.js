module.exports = {
  mount: {
    _output: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
    [
      "@snowpack/plugin-webpack",
      {
        extendConfig: (config) => ({
          ...config,
          optimization: {
            ...config.optimization,

            runtimeChunk: false,
            splitChunks: {
              chunks: "async",
            },
          },
        }),
      },
    ],
  ],
  devOptions: {
    open: "none",
    hmrDelay: 300
  },
};
