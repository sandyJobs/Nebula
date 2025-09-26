import React, { useContext } from 'react'
import { ModeContext } from './Mode'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, themeToggle } = useContext(ModeContext)
  const isDark = !!theme
  return (
    <button onClick={themeToggle} aria-label="Toggle theme" className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow border border-electric/20 overflow-hidden">
      <motion.span
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="absolute inset-0 grid place-items-center"
      >
        {/* morphing: sun -> moon using clipPath */}
        <motion.span
          initial={false}
          animate={{
            clipPath: isDark
              ? 'circle(60% at 30% 30%)'
              : 'circle(50% at 50% 50%)',
            backgroundColor: isDark ? '#111827' : '#FBBF24',
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="w-6 h-6 rounded-full"
        />
      </motion.span>
    </button>
  )
}

export default ThemeToggle


