/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101011",
        background: {
          light: "#fff",
          dark: "#f5f4f1",
          card: "#2a2a2a",
        },
        text: {
          default: "#898989",
          card: "#898989",
        },
      },
      fontFamily: {
        sans: ["Mona Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
