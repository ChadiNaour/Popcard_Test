/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBrown': '#4E3131',
        'lightBrown' : '#FFEDDA',
      },
    },
  },
  plugins: [],
}