/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#151518",
          card: "#1E1E21",
          element: "#27272A"
        }
      }
    },
  },
  plugins: [],
}
