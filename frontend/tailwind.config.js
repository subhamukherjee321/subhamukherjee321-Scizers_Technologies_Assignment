/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        header: "url('/bg-header.svg')",
        "mobile-header": "url('/mobile-bg-header.svg')",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        oswald: ["var(--font-oswald)"],
      },
      colors: {
        primary: "#17ABFF",
        secondary: "#00357B",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "h1, h2, h3, h4, h5, h6": { fontFamily: theme("fontFamily.oswald") },
      });
    },
  ],
};
