/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "carrot-orange": {
          DEFAULT: "#e79823",
          50: "#fdf5e9",
          100: "#f8e0bd",
          200: "#f5d6a7",
          300: "#f1c17b",
          400: "#eeb765",
          500: "#e9a239",
          600: "#d08920",
          700: "#a26a19",
          800: "#744c12",
          900: "#452e0a",
        },
        "brandeis-blue": {
          DEFAULT: "#0f61ed",
          50: "#e7effd",
          100: "#cfdffb",
          200: "#b7d0fa",
          300: "#9fc0f8",
          400: "#5790f2",
          500: "#2771ef",
          600: "#0e57d5",
          700: "#0b44a6",
          800: "#093a8e",
          900: "#041d47",
        },
      },
    },
  },
  plugins: [],
};
