/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayish: "#e2e2e2",
        mostlyblack: "#222",
        blackish: "#343a40",
      },
    },
  },
  plugins: [],
};
