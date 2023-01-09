/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'instagram': {
          '50': '#FFDC80',
          '100': '#FCAF45',
          '200': '#F77737',
          '300': '#F56040',
          '400': '#FD1D1D',
          '500': '#E1306C',
          '600': '#C13584',
          '700': '#833AB4',
          '800': '#5B51D8',
          '900': '#405DE6'
        },
      },
    },
  },
  plugins: [],
}
