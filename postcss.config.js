const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    isProd && "autoprefixer",
    "tailwindcss",
    [
      "postcss-font-magician",
      {
        hosted: ["./public/fonts"],
      },
    ],
    isProd && "cssnano",
  ].filter((plugin) => !!plugin),
};
