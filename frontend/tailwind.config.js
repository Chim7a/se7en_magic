/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#52336F",
        secondary: "#5D2F87",
        accent: "#E8EEF2",
        customGray: "#66635B",
      },
    },
  },
  fontFamily: {
    chivo: ["Maven Pro", "system-ui"],
  },
  plugins: [],
};
