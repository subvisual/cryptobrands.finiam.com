const defaultTheme = require("tailwindcss/defaultTheme");
const heightScale = require("tailwindcss/defaultConfig").theme.height;

const colors = {
  purple: {
    dark: "#09001A",
    lighter: "#EEEAF5",
  },
  white: "#FFFFFF",
  green: "#5EF38B",
  gray: {
    light: "#737373",
    lighter: "#E1E1E1",
    lightest: "#FCFCFC",
  },
  red: "#E42C2C",
  transparent: "transparent",
  current: "currentColor",
  black: "black",
};

module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{js, jsx, ts, tsx, css}"],
  },
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },

    fontFamily: {
      sans: ["StudioFeixenSans"],
    },
    scale: {
      101: "1.01",
    },
    fontSize: {
      tiny: "0.8rem",
      base: "1rem",
      md: "1.4rem",
    },
    minHeight: heightScale,
    maxWidth: {
      950: "950px",
      xl: "1280px",
    },
    colors,
    stroke: colors,
    fill: colors,
    extend: {
      gap: {
        5: "1.4rem",
      },
      textOpacity: {
        80: "0.80",
      },
      backgroundOpacity: {
        95: "0.95",
      },
    },
  },

  variants: {
    extend: {
      stroke: ["hover", "group-hover"],
      fill: ["hover", "group-hover"],
    },
  },
};
