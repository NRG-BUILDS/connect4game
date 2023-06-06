/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sharp: ['0 10px 2px'],
      },
      fontFamily:  {
        header: ['Audiowide']
      }
    },
  },
  plugins: [],
}

