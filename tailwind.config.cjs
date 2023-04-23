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
    animation: {
      "home-heart": "heart 1s ease-out both",
    },
    keyframes: {
      heart: {
        "0%": { transform: "translateY(10px)", opacity: 0 },
        "100%": { transform: "translateY(0px)", opacity: 1 },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
