import React from 'react'
import { motion } from 'framer-motion'
import ParallaxTiltCard from '../components/ParallaxTiltCard'

const steps = ['Discovery', 'Match with Specialist', 'Delivery', 'Ongoing Support']

const Process = () => {
  return (
    <section id="process" className="bg-surface py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          How We Work
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <ParallaxTiltCard key={s}>
              <motion.div className="card card-gradient card-glow relative text-center"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
                <div className="text-textPrimary font-semibold">{s}</div>
                <div className="mt-2 text-textSecondary">Clear, transparent stages with glowing connectors.</div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-electric to-teal animate-pulse" />
                )}
              </motion.div>
            </ParallaxTiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process


