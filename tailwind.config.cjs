module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        primary: '#363839',
        secondary: '#272727',
        tertiary: '#61AEC9',
        white: '#FFFFFF',
        black: '#333'
      }),
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  variants: {
    width: ['responsive', 'hover', 'focus'],
    extend: {}
  },
  plugins: []
}
