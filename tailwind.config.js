module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.liquid", "./src/**/*.ts"],
  },
  theme: {
    fontSize: {
      tiny: '0.8rem',
      base: '1rem',
    },
    maxWidth: {
      'xl': '1280px',
    },
    colors: {
      purple: {
        dark:'#09001A',
      },
      white: '#FFFFFF',
      green: '#5EF38B',
      gray: {
        default: '#757575',
        lighter: '#E1E1E1',
        lightest: '#FCFCFC',
      }
    },
    extend: {
      gap: {
      '5': '1.4rem',
      }
    }
  }
};
