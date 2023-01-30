/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#F6F6F6",
      black: "#222222",
      green: "#288C66",
      yellow: "#DDD120",
    },
  },
  darkMode: "class",
  plugins: [],
};
