module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'dining': "url('/src/NUdining.jpg')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
    }
  }
