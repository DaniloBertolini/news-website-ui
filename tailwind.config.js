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
        'midnightGreen': '#164E63',
        'lightBlue': '#31E8FF',
      },
      boxShadow: {
        'button': '5px 5px 1px gray',
      },
      backgroundImage: {
        'grandientColor': "linear-gradient(to right top, #e3f9ff, #dbf9ff, #d3f9ff, #cbfaff, #c2faff);",
      },
      width: {
        '328px': '328px',
        '292px': '292px'
      },
      height: {
        '175px': '175px',
      }
    },
  },
  plugins: [],
}
