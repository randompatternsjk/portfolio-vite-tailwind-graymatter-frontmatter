const typography = require('@tailwindcss/typography');
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: [
    './index.html', './src/**/*.{js,jsx,ts,tsx,mdx}', // Ensure MDX files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography, // Typography plugin
    lineClamp,  // Line-clamp plugin
  ],
};