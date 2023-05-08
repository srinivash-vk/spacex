/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: { max: '640px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        wiggle: 'wiggle 4s ease-in-out infinite',
        raise:'bounce 2s linear ',
        anime:'spin 1s linear '
,        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        raise:{
          // transform: rotate(360deg);
          // '0%,50%':{transform:'rotate(360deg)'},
          '0%,30%':{transform:'translateY(30rem)'},
          '40%':{transform:'translateY(40rem)'},
          '100%':{transform:'translateY(100%)'},
          // '100%':{transform:' rotate(0deg)'},
        },
        anime:{
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '80%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}