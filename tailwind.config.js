/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        unica: ['Unica One', 'sans-serif'],
      },
      colors: {
        blue: {
          500: '#3AB8EB',
        },
        orange: {
          500: '#F9784B',
        },
        yellow: {
          500: '#FDBF0F',
        },
        gray: {
          600: '#676767',
          800: '#3d3c3c',
        }
      }
    },
  },
  plugins: [],
}

