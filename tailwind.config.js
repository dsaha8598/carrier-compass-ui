/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in all subfolders of src
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
