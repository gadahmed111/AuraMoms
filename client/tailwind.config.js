/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode with class strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Playpen Sans"', "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
      },
      colors: {
        // Dark mode colors
        DarkBackground: "#0f172a", 
        DarkText: "#e5e5e5", 
        DarkAccent: "#262626",
        GreenColorInDarkMood: "#b4b9a1",
        DarkLink: "#b3b3b3", 

        // Light mode colors
        LightBackground: "#ffffff", 
        LightText: "#000000", 
        LightAccent: "#f0f0f0", 
        LightLink: "#1d72b8", 

        // colors
        cardLightBg: "#ffffff", 
        cardDarkBg: "#374151", 
        CardBlue:"#7f95eb"
      },
    },
  },
  plugins: [],
};
