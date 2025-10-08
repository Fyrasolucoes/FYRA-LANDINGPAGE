/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
    colors: {
      fyrablue: {
        300: '#76DBFF',
        500: '#3CB6FF',
        600: '#1E90FF',
        700: '#136AE6',
        800: '#0E4ECF'
      }
    }
  },
  },
  plugins: [],
};
