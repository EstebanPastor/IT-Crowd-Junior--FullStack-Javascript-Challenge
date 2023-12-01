/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1E2832",
        "primary-bg": "#1E283220D",
      },
      fontFamily: {
        "primary": ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};
