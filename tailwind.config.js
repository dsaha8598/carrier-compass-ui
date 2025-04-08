/** @type {import('tailwindcss').Config} */
module.exports = {

  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
    },
  },
  content: [
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

