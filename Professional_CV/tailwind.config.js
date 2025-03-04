/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

