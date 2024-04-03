/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'nezuko': "url('./src/images/bgNezuko.png)",
      },
    },
    fontFamily: {
      'body':['trialRooftop']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

