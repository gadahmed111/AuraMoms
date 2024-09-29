/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerColor:'#8ab2ae',
        stloginColor:'#6bd9a8',
        ndloginColor:'#7dbf8e',
        formColor:"#7dbf8e",
        cardColor:"#7dbf8e",
      },
      fontFamily: {
        poppins: ["Poppins" ,"sans-serif"],
        varela: ["Varela Round" , "sans-serif"],
      },
      container: {
        center : true,
        padding : {
          DEFAULT:"1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
          "3xl": "7rem",
        }
      }
    },
  },
  plugins: [],
}

