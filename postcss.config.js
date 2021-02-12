const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    isProd && "autoprefixer",
    "tailwindcss",
    isProd && "cssnano",
  ].filter((plugin) => !!plugin),
};
