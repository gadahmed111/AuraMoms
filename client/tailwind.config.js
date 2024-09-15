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
        PinkyColor: "#f4c2c2",
        LightGreenColor: "#c6e6e3",
        HeavyPinkColor: "#d58aa6",
        lightGrayColor: "#d1d1d1",
        DarkPurpleColor: "#5c4675",       
        DarkPinkyColor: "#8a5454",       
        DarkLightGreenColor: "#3a5755",  
        DarkHeavyPinkColor: "#743f55",   
        DarkLightGrayColor: "#3a3a3a",    
      },
    },
  },
  plugins: [],
};
