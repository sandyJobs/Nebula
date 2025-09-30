import React from 'react'
import { motion } from 'framer-motion'

const Reveal = ({ children, delay = 0, y = 24, duration = 0.55, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0% -10% 0%' }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal


