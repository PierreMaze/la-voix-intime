/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        numbers: [
          "'SF Mono'",
          "'Monaco'",
          "'Inconsolata'",
          "'Roboto Mono'",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
