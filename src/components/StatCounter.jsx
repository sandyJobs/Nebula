import React from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'

const formatInteger = (n) => Math.round(n).toLocaleString()

const StatCounter = ({ value = 0, suffix = '', description = '', duration = 2.4, className = '' }) => {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0% -20% 0%' })
  const hasAnimatedRef = React.useRef(false)

  const count = useMotionValue(0)
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplay(formatInteger(latest))
    })
    return unsubscribe
  }, [count])

  React.useEffect(() => {
    if (!inView || hasAnimatedRef.current) return
    hasAnimatedRef.current = true
    const controls = animate(count, value, { duration, ease: 'easeOut' })
    return () => controls?.stop()
  }, [inView, count, value, duration])

  // Optional: show "+" for small positive percentages like +30%
  const prefix = suffix === '%' && value > 0 && value <= 100 ? '+' : ''

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <div className="font-montserrat font-bold text-4xl sm:text-5xl text-textPrimary">
        <span>{prefix}{display}</span>
        {suffix ? <span className="ml-0.5 align-baseline text-textPrimary">{suffix}</span> : null}
      </div>
      {description ? (
        <div className="mt-2 text-textSecondary max-w-sm mx-auto">
          {description}
        </div>
      ) : null}
    </motion.div>
  )
}

export default StatCounter


