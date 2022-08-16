/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        laravel: {
          "50": "#ff5f52",
          "100": "#ff5548",
          "200": "#ff4b3e",
          "300": "#ff4134",
          "400": "#ff372a",
          "500": "#ff2d20",
          "600": "#f52316",
          "700": "#eb190c",
          "800": "#e10f02",
          "900": "#d70500"
        }
      },
    },
  },
  plugins: [],
}
