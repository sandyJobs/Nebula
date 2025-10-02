
import { motion } from 'framer-motion'
import Magnetic from '../components/Magnetic'

const CTA = () => {
  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--rx', x + 'px')
    e.currentTarget.style.setProperty('--ry', y + 'px')
  }
  return (
    <section id="cta" className="relative bg-surface py-24 scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute -top-10 left-1/3 w-64 h-64 blob blob-orange" animate={{ y: [0, -14, 0], opacity: [0.25, 0.35, 0.25] }} transition={{ duration: 14, repeat: Infinity }} />
        <motion.div className="absolute -bottom-6 right-1/4 w-56 h-56 blob blob-blue" animate={{ y: [0, -10, 0], opacity: [0.22, 0.32, 0.22] }} transition={{ duration: 16, repeat: Infinity }} />
        <div className="absolute inset-0 tech-grid opacity-20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          className="inline-block w-full max-w-3xl px-10 py-12 rounded-2xl shadow-glow-blue bg-white/90 backdrop-blur card-gradient flow-border flow-animate tilt-hover"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/30 bg-white/80 backdrop-blur shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.04 }}
            aria-label="Free strategy call badge"
          >
            <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
            <span className="text-sm text-gray-800">Free strategy call</span>
          </motion.div>
          <motion.h3
            className="font-headline text-2xl text-textPrimary"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          >
            Ready to scale your brand with invisible efficiency?
          </motion.h3>
          <motion.p
            className="mt-2 text-gray-800 font-subtext"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
          >
            Get a free 15‑minute consult. No pressure, clear next steps.
          </motion.p>
          <motion.div
            className="py-4 flex flex-col md:flex-row items-center justify-center gap-4 ripple blob-hover"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.18 }}
            onMouseMove={handleRipple}
          >
            <Magnetic>
              <a href="/api/contact/start" aria-label="Book a strategy call" className="btn-premium btn-pulse">Book a Call</a>
            </Magnetic>
            <Magnetic>
              <a href="#services" aria-label="View our capabilities" className="btn-outline p-3 rounded-md w-full md:w-auto">View Capabilities</a>
            </Magnetic>
          </motion.div>
          <div className="mt-3 text-sm text-gray-700">No spam. 24h response time.</div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA


