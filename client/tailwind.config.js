/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Playpen Sans"', "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
      },
      colors: {
        DarkColor: "#09090b",
      },
    },
  },
  plugins: [],
};
