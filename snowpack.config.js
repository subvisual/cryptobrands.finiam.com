module.exports = {
  mount: {
    _output: "/",
    static: "/",
    "src/assets": "/assets",
  },

  plugins: [
    "@snowpack/plugin-postcss",

    [
      "@snowpack/plugin-run-script",
      { cmd: "eleventy", watch: "$1 --watch --silent" },
    ],
  ],

  devOptions: {
    open: "none",
    hmrDelay: 500,
  },

  packageOptions: {
    external: ["fonts"],
  },

  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
  },
};
