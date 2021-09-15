module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}', './shared/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#504689',
          '50': '#D2CEE6',
          '100': '#C2BDDE',
          '200': '#A39CCC',
          '300': '#847ABB',
          '400': '#6458AA',
          '500': '#504689',
          '600': '#3C3567',
          '700': '#292445',
          '800': '#151224',
          '900': '#010102'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
