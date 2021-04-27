module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phone': '480px',
      // => @media (min-width: 480px) { ... }
      'tablet': '730px',
      // => @media (min-width: 730px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      
    },
    color: {
      "darkBlue": "hsl(209, 23%, 22%)",
      "veryDarkBlue": "hsl(207, 26%, 17%)",
      "darkGrey": "hsl(0, 0%, 52%)",
      "veryLightGrey": "hsl(0, 0%, 98%)",
      "white": "hsl(0, 0%, 100%)",
    },
    backgroundColor: (theme) => ({
      "darkBlue": "hsl(209, 23%, 22%)",
      "veryDarkBlue": "hsl(207, 26%, 17%)",
      "darkGrey": "hsl(0, 0%, 52%)",
      "veryLightGrey": "hsl(0, 0%, 98%)",
      "white": "hsl(0, 0%, 100%)",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
