/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this pattern based on your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
