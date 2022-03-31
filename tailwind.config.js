module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "1px 1px 1px darkgrey",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
