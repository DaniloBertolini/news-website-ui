/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verdigris': '#28afb0',
        'midnightGreen': '#164E63'
      },
      dropShadow: {
        'button': '0px 3px 3px gray'
      }
    },
  },
  plugins: [],
}

