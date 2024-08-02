/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#8750f7',
        'primary-2': '#9b8dff',
        'primary-3':  '#814cec',
        'secondary': '#2a1454',
        'secondary-2': '#0F0715',
      }
    },
  },
  plugins: [],
}

