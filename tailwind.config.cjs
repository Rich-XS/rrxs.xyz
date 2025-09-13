/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "'思源黑体'", "sans-serif"],
      },
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#FBBF24",
        success: "#10B981",
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '0.75rem',
      }
    },
  },
  plugins: [],
};
