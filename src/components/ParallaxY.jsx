import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxY = ({ children, from = -20, to = 20, start = '0px', end = '100vh', className = '' }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: [start, end] })
  const y = useTransform(scrollYProgress, [0, 1], [from, to])
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

export default ParallaxY


