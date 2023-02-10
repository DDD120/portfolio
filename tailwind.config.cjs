/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F6F6F6",
        black: "#222222",
        green: "#288C66",
        yellow: "#DDD12077",
      },
    },
    fontFamily: {
      scd: "S-CoreDream-4Regular",
      lsy: "LeeSeoyun",
    },
  },
  darkMode: "class",
  plugins: [],
};
