/** @type {import('tailwindcss').Config} */

const { colors } = require("@mui/material");
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      customgreen: "#64ffda",
      customsky: "#ccd6f6",
      customblue: "#0a192f",
      customnormal: "#8892b0",
      customfond: "#112240",
      white: "#fff",
      whitee: "#f3f4f5",
      black: "#000000",
      skyblue: "#5ADAE8",
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      },
      backgroundImage: {
        'booki': "url('/booki.png')",
        'service': "url('/service.png')",

      },
    },
  },
  plugins: [],

  fontFamily: {
    spartan: ["aktiv-grotesk, sans-serif"],
    open: ["Open Sans", "sans-serif"],
    poppins: ["Poppins", "sans-serif"],
  },
});
