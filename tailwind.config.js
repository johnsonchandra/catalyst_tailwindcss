/* eslint-disable global-require */

const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./apps/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Martel Sans', 'sans-serif'],
      body: ['Martel Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        112: '28rem',
        96: '24rem',
        80: '20rem',
        7: '1.875rem',
      },
      fontSize: {
        '4xs': '0.625rem',
        '3xs': '0.6875rem',
        '2xs': '0.75rem',
        xs: '0.8125rem',
      },
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        rose: colors.rose,
        'warm-gray': colors.warmGray,
        'light-blue': colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
