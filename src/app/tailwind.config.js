// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/style/**/*.{css,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        magenta: "#d8097e",
      },
    },
  },
  plugins: [],
};
