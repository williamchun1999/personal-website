/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#040506",
        grey: "#505050",
        white: "#FFFFFF",
        "light-blue": "#7DDFDD",
        "light-green": "#47BFBD",
      },
      animation: {
        slide: "slide 5s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
      },
      brightness: {
        25: '.25',
      }
    },
  },
  plugins: [],
};
