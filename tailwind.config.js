/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-container": "#23252C",
        "body-card": "#1A1B21",
        "text-1": "#F3BF99",
        "text-2": "#F5F5F5",
        "text-3": "#DCDCDC",
        "text-button": "#374151",
        "bg-button": "#5093E2",
        "bg-footer": "#161619",
        "icon-footer": "#918E9B",
      },

      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
