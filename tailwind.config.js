/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSans: ['Noto Sans TC', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
