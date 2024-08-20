/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'btn-bg': '#B68C5A',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
   
}

