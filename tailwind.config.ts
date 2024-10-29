/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Aapki `app` directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Aapki `pages` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Aapki `components` directory
  ],
  theme: {
    extend: {
      fontFamily: {
        lusitana: ["Lusitana", "serif"], // Is line ko add karein
      },
    },
  },
  plugins: [],
};
