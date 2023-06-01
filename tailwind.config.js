/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '640px',
      // => @media (min-width: 640px) { ... }

      'monitor': '1680px',
      // => @media (min-width: 1680px) { ... }
    },

    colors: {
      blue: {
        dark: "#1E6F9F",
        light: "#4EA8DE",
      },

      purple: {
        dark: "#5E60CE",
        light: "#8284FA",
      },

      newGray: {
        100: "#F2F2F2",
        200: "#D9D9D9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1A1A1A",
        700: "#0D0D0D"
      },

      background:"#191919",

      danger: "#E25858"

    },
    extend: {
      
    },
  },
  plugins: [],
}

