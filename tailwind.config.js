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
      },
    },
    colors: {
      'custom-gray': '#2D2A30',
      'custom-green': '#409B57',
      'custom-blue': '#2068AC',
      'custom-greentwo': '#1F9BA3',
      'custom-violet': '#656BE2',
      'custom-white': '#FFFFFF',
      'custom-grey': '#bg-gray-100',
      'custom-hover': '#3E8FDB'
    },
  },
  plugins: [],
  
};
