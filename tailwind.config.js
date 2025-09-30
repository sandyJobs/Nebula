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
        background: '#F5F5F5',
        surface: '#ffffff',
        textPrimary: '#111827',
        textSecondary: '#6b7280',
        // Brand-aligned palette
        electric: '#2D89FF', // Primary Blue
        teal: '#06b6d4',
        cta: '#FFB400', // Butterfly gold — CTA & accent
        accent: '#FFB400', // Use gold as the primary accent
        highlight: '#FFB400',
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
        'glow-gold': '0 0 48px 0 rgba(255, 180, 0, 0.22)',
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(90deg, #2D89FF 0%, #06b6d4 100%)',
        'brand-gradient': 'linear-gradient(90deg, #2D89FF 0%, #FFB400 100%)',
      },
    },
  },
  plugins: [],
};

