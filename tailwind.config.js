const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.js', './src/components/**/*.jsx', './src/**/*.jsx', './src/pages/**/*.ts', './src/components/**/*.tsx', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: '#E8D9FF'
        },
        night: {
          DEFAULT: '#18181B'
        }
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
