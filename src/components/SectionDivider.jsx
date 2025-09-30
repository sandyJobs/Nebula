import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SectionDivider = ({ flip = false, className = '', animated = true }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 8])
  const d1 = 'M0,96 C240,160 480,0 720,64 C960,128 1200,64 1440,96 L1440,120 L0,120 Z'
  const d2 = 'M0,106 C260,140 480,10 720,54 C960,98 1200,84 1440,96 L1440,120 L0,120 Z'
  const d = useTransform(scrollYProgress, [0, 1], [d1, d2])
  return (
    <div ref={ref} className={`relative h-14 overflow-hidden ${className}`} aria-hidden>
      <motion.svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute inset-0 w-full h-full ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
        style={animated ? { y } : undefined}
      >
        <motion.path d={animated ? d : d1} fill="url(#grad)" opacity="0.25" />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFB400" />
            <stop offset="100%" stopColor="#FFB400" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export default SectionDivider


