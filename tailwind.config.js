/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    // https://tailwindcss.com/docs/screens#max-width-breakpoints
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      '>2xl': { min: '1536px' },
      '>xl': { min: '1280px' },
      '>lg': { min: '1024px' },
      '>md': { min: '768px' },
      '>sm': { min: '640px' },
    },
    extend: {
      zIndex: {
        drawer: 120,
        mask: 100,
        fullscreen: 80,
        dropdown: 50,
        nav: 40,
      },
      colors: {
        primary: '#3A5BEF',
        mask: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false,
  },
};
