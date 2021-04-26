module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phone': '450px',
      // => @media (min-width: 640px) { ... }
      'mid': '900px',
    },
    color:{
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBlue: "hsl(207, 26%, 17%)",
      darkGrey: "hsl(0, 0%, 52%)",
      veryLightGrey: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    backgroundColor: (theme) => ({
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBlue: "hsl(207, 26%, 17%)",
      darkGrey: "hsl(0, 0%, 52%)",
      veryLightGrey: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
