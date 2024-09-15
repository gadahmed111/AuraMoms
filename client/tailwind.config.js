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
        DarkBackground: "#09090b",  
        DarkText: "#e5e5e5",
        DarkAccent: "#262626",
        DarkLink: "#b3b3b3",
        LightBackground: "#ffffff",
        LightText: "#000000",
        LightAccent: "#f0f0f0",
        LIghtLink: "#1d72b8",
      },
    },
  },
  plugins: [],
};
