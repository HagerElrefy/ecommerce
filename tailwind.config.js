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
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
        },
        navDown: {
          '0%': { height: '0' ,display:'none' },
          '100%': { height: 'var(--menu-height, 200px)' ,display:'block' },
        },
        navUp: {
          '0%': { height: 'var(--menu-height, 200px)' ,display:'block' },
          '100%': { height: '0' ,display:'none' },
        },
      },
      animation: {
        wiggle: 'wiggle .5s',
        navDown: 'navDown .5s ease forwards',
        navUp: 'navUp .5s ease forwards',
        }
    },
  },
  plugins: [],
}

