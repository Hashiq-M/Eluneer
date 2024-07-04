/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#00202E",
        text: "#FCF8E8",
        bar: "#FFFCDF",
      },
    },
  },
  plugins: [],
};
