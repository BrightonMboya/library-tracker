/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        grey: "#F1F2F6",
        blue: "#1B4F98",
      },
      backgroundImage: {
        hero: "url('/public/hero.png')",
      },
    },
  },
  plugins: [],
};
