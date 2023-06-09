/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./dist/script/**/*.js"],
  theme: {
    extend: {
      colors: {
        accent: "#FD636b",
        primary: "#0c1117",
        secondary: "#FD636b",
      },
      screens: {
        "2xl": "1439px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        xl: "6rem",
      },
    },
  },
  plugins: [],
};

