const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: 'var(--color-white)',
      pink: {
        50: 'var(--color-pink-50)',
        100: 'var(--color-pink-100)',
      },
      cyan: {
        100: 'var(--color-cyan-100)',
        200: 'var(--color-cyan-200)',
      },
      gray: {
        100: 'var(--color-gray-100)',
      },
    },
    fontFamily: {
      heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      body: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'xs': '1rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.67rem'
    },
    screens: {
      'sm': '600px',
      'md': '900px',
      'xl': '1440px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
