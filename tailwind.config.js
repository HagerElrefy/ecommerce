/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'PrimaryBlue':'#40BFFF',
        'PrimaryOrange':'#FF4858',
        'MedaimBlue':'#BCDDFE',
        'PrimaryBlack':'#373737',
        'DarkRed':'#FB7181',
        'LightBlue':'#40BFFF',
        'Blue':'#40BFFF',

      },
      spacing: {
        '75hv': '75vh',
        '40hv': '40vh'
      }
    },
  },
  plugins: [],
}

