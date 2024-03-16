/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-orange':'#FC6736',
        'sidebar-blue': '#0C2D57',
        'header-orange':'#FC6736',
        'client-brown':'#714433',
        'client-yellow':'#f7c469',
        'admin-gray':'#EFECEC'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

