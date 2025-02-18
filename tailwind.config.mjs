/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#EAE2B7',
        'background': '#01151f',
        'primary': '#FCBF49',
        'secondary': '#e9c46a',
        'accent': '#F77F00',
       },       
    },
  },
  plugins: [],
};
