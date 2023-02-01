/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "carrot-orange": {
          DEFAULT: "#e79823",
          100: "#f3cc91",
          200: "#f1c17b",
          300: "#eeb765",
          400: "#ecad4f",
        },
        "lavender-blue": {
          DEFAULT: "#ccdaff",
          100: "#e6edff",
          200: "#d6e1ff",
          300: "#d6e1ff",
          400: "#d1deff",
        },
        "yankees-blue": {
          DEFAULT: "#1b1a40",
          100: "#8d8da0",
          200: "#5f5f79",
          300: "#494866",
          400: "#323153",
        },
        blueberry: {
          DEFAULT: "#5281e6",
          100: "#a9c0f3",
          200: "#86a7ee",
          300: "#759aeb",
          400: "#638ee9",
        },
        "brandeis-blue": {
          DEFAULT: "#0f61ed",
          100: "#87b0f6",
          200: "#5790f2",
          300: "#3f81f1",
          400: "#2771ef",
        },
      },
    },
  },
  plugins: [],
};
