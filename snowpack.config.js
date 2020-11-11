module.exports = {
  mount: {
    _output: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
    ["@snowpack/plugin-optimize", { preloadModules: true }],
  ],
  devOptions: {
    open: "none",
  },
};
