/** @type {import('tailwindcss').Config} */
import { colors as defaultColors } from "tailwindcss/defaultTheme";

const colors = {
  ...defaultColors,
  ...{
    saffron: "#FF671F",
    green: "#046A38",
    "dark-green": "#2E430F",
    blue: "#06038D",
    "light-blue": "#92DDDD",
    white: "#fff",
    black: "#000",
    "light-grey": "#9EA8B2",
  },
};
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors,
    fontSize: {
      sm: "0.5rem",
      m: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};