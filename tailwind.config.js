/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFB6C1",
          DEFAULT: "#FF69B4",
          dark: "#C71585",
        },
        dark: {
          light: "#1E1E1E",
          DEFAULT: "#121212",
          dark: "#0C0C0C",
        },
        light: {
          light: "#F0F0F0",
          DEFAULT: "#F5F5F5",
          dark: "#FAFAFA",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
