
import { motion } from 'framer-motion'
import Magnetic from '../components/Magnetic'

const CTA = () => {
  return (
    <section id="cta" className="relative bg-surface py-20 scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute -top-10 left-1/3 w-64 h-64 blob blob-orange" animate={{ y: [0, -14, 0], opacity: [0.25, 0.35, 0.25] }} transition={{ duration: 14, repeat: Infinity }} />
        <motion.div className="absolute -bottom-6 right-1/4 w-56 h-56 blob blob-blue" animate={{ y: [0, -10, 0], opacity: [0.22, 0.32, 0.22] }} transition={{ duration: 16, repeat: Infinity }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          className="inline-block px-8 py-10 rounded-2xl shadow-glow-blue bg-white/90 backdrop-blur card-gradient"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-montserrat text-2xl text-textPrimary">Ready to scale your brand with invisible efficiency?</h3>
          <p className="mt-2 text-textSecondary">Get a free 15‑minute consult. No pressure, clear next steps.</p>
          <Magnetic>
            <a href="/api/contact/start" className="btn-cta shimmer-button btn-pulse mt-6 inline-block rounded-lg p-1">Book a Call</a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA


