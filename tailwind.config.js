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
        // Base + brand palette (butterfly/orange/teal theme)
        background: '#0B1020', // Deep midnight for page background
        surface: '#ffffff', // Keep light surfaces for content sections
        textPrimary: '#111827',
        textSecondary: '#6b7280',
        electric: '#2D89FF', // Primary Blue accents for links / view more
        teal: '#26A69A', // Teal accent
        cta: '#F9A825', // Butterfly gold — CTA & primary accent
        accent: '#F9A825',
        highlight: '#F9A825',
        charcoal: '#0A0E1A',
        midnight: '#0B1020',
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
        'glow-blue': '0 0 48px 0 rgba(45, 137, 255, 0.22)',
        'glow-gold': '0 0 48px 0 rgba(249, 168, 37, 0.22)',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(90deg, #2D89FF 0%, #26A69A 100%)',
        'brand-gradient': 'linear-gradient(90deg, #2D89FF 0%, #F9A825 100%)',
        'hero-gold': 'linear-gradient(90deg, #F9A825 0%, #26A69A 100%)',
      },
    },
  },
  plugins: [],
};

