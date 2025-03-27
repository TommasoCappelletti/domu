/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx,js,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto Mono, monospace",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
