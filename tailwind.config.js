module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          450: '#8F9AAB',
          550: '#333',
          750: '#25262A',
          850: '#131212',
          950: '#151519'
        },
        purple: {
          250 : '#635b7b'
        }
      }
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    },
  },
  plugins: [],
}
