/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#101219",
        "navigation" : "#1C1E29",
        "violet" : "#1C1E29"
      }
    },
  },
  plugins: [],
}

