/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Keep dark mode working
  theme: {
    extend: {
      colors: {
        background: '#f9fafb',
        surface: '#ffffff',
        textPrimary: '#111827',
        textSecondary: '#6b7280',
        electric: '#3b82f6',
        teal: '#06b6d4',
        cta: '#fb923c',
        highlight: '#84cc16',
        purpleGlow: 'rgba(168, 85, 247, 0.15)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '56px' }],
        h2: ['36px', { lineHeight: '44px' }],
        body: ['18px', { lineHeight: '28px' }],
        cta: ['20px', { lineHeight: '28px' }],
      },
      boxShadow: {
        'glow-purple': '0 0 40px 0 rgba(168, 85, 247, 0.15)',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
};

