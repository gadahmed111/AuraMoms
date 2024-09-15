/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Playpen Sans"', "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
        PlayWrite: ["Playwrite CU", "cursive"],
        Mate: ["Mate", "serif"],
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
        PurpleColor: "#c3b1e1",
        PinkyColor: "#f4c2c2",
        LightGreenColor: "#c6e6e3",
        HeavyPinkColor: "#d58aa6",
        lightGrayColor: "#d1d1d1",
      },
    },
  },
  plugins: [],
};
