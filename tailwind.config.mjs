/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        melon: '#F4C2B8',
        'melon-dark': '#D4856F',
        salvia: '#A8B5A0',
        'salvia-dark': '#6C806B',
        lino: '#E8E4D9',
        perla: '#E1E3E2',
        arena: '#DABF9C',
        'arena-dark': '#B8935A',
        'blue-mist': '#BAC9CB',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

