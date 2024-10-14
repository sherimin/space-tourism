/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
