module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // or 'media' or 'class'
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
      "primaryDarkBlue": "#2B3945",
      "veryDarkBlue": "#202C37",
      "veryDarkLightkBlue": "#111517",
      "primaryDarkGrey": "#858585",
      "veryLightGrey": "#fafafa",
      "primaryWhite": "#ffffff",
    },
    backgroundColor: theme => ({
      "primaryDarkBlue": "#2B3945",
      "veryDarkBlue": "#202C37",
      "veryDarkLightkBlue": "#111517",
      "primaryDarkGrey": "#858585",
      "veryLightGrey": "#fafafa",
      "primaryWhite": "#ffffff",
    }),
    textColor:{
      "primaryDarkBlue": "#2B3945",
      "veryDarkBlue": "#202C37",
      "veryDarkLightkBlue": "#111517",
      "primaryDarkGrey": "#858585",
      "veryLightGrey": "#fafafa",
      "primaryWhite": "#ffffff",
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
