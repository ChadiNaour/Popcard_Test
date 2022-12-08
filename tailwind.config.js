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
      fontFamily: {
        'Puplic_Sans': ['Puplic_Sans'],
        'Steradian_md': ['Steradian_md'],
        'Steradian_rg': ['Steradian_rg'],
      },
    },
  },
  plugins: [],
}