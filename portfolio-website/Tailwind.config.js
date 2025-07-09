/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Gamja Flower"', "cursive"],
        subheader: ['"Neucha"', "cursive"],
        paragraph: ['"Playpen Sans"', "sans-serif"],
      },
      colors: {
        "fox-orange": "#FF9F5B",
        "fox-purple": "#6B5B95",
        "fox-teal": "#4DB6AC",
        "soft-beige": "#F9F6F0",
        "warm-gray": "#7D7D7D",
        "fox-peach": "#FFB07C",
        /* If you need pink */
        "fox-pink": "#FFB3C1",
        /* Optional colors */
        "fox-red": "#FF6B6B",
        "fox-sky": "#A0D8E6",
        "soft-blue": "#A0C4FF",
        "soft-green": "#B2E4B2",
        "soft-yellow": "#FFF5BA",
        "fox-rose": "#F4C2C2",
        "fox-lavender": "#E6E6FA",
        "fox-mint": "#B2F2BB",
        "fox-sand": "#F5F5DC",
        "fox-pearl": "#EAEAEA",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "foxtech"],
  },
};
// This configuration file sets up Tailwind CSS with custom colors, fonts, and DaisyUI themes.
// It includes a content array to specify where Tailwind should look for class names, extends the theme with custom colors and fonts, and integrates DaisyUI for additional UI components and themes.
// The custom colors include a warm orange, a soft purple, a calming teal, a soft beige, and a warm gray, along with an optional pink color.    

