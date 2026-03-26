/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: "#ff8c00",
          50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74",
          400: "#fb923c", 500: "#f97316", 600: "#ff8c00", 700: "#ff8c00",
          800: "#ff8c00", 900: "#ff8c00",
        },
        ST: "#1D4ED8",
        DS: "#7E22CE",
        FS: "#15803D",
      },
      boxShadow: {
        brand: "0 10px 25px -10px rgba(37,99,235,0.35)",
      },
    },
  },
};

