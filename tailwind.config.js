/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#040506",
        "grey":"#505050",
        "white":"#FFFFFF",
        "light-blue":"#7DDFDD",
        "light-green":"#47BFBD",
      },
    },
  },
  plugins: [],
}

