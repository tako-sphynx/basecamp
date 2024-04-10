/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [],
  purge: {
    enabled: true,
    content: ["./src/**/*.vue", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightGray: "#F2F3F7",
        darkGray: "#1D2D35",
        black600: "#657178",
        purple: "#585EE3",
      },
      fontFamily: {
        bpg: ["bpg", "sans-serif"],
        regular: ["NotoRegular", "sans-serif"],
        medium: ["NotoMedium", "sans-serif"],
        semibold: ["NotoSemiBold", "sans-serif"],
      },
      width: {
        976: "976px",
      },
      spacing: {
        530: "530px",
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
};

