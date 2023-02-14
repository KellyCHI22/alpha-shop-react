/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        NotoSans: ["Noto Sans TC", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
