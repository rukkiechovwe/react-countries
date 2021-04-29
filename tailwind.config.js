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
      "darkBlue": "#2B3945",
      "veryDarkBlue": "#202C37",
      "veryDarLightkBlue": "#111517",
      "darkGrey": "#858585",
      "veryLightGrey": "#fafafa",
      "primaryWhite": "#ffffff",
    },
    backgroundColor: (theme) => ({
      "darkBlue": "#2B3945",
      "veryDarkBlue": "#202C37",
      "veryDarLightkBlue": "#111517",
      "darkGrey": "#858585",
      "veryLightGrey": "#fafafa",
      "primaryWhite": "#ffffff",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
