const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: {
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
