import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Aurora App Launch', desc: 'Scaled app visibility via automation and design.' },
  { title: 'Echo Voice Campaign', desc: 'Produced 100+ voiceovers for a global brand.' },
  { title: 'Atlas AI Dashboard', desc: 'Delivered a custom data automation workflow.' },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-surface py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          Portfolio
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={it.title} className="card card-gradient sheen card-glow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
              <div className="text-textPrimary font-semibold">{it.title}</div>
              <div className="mt-2 text-textSecondary">{it.desc}</div>
              <div className="mt-4 text-electric underline-glow inline-block cursor-pointer">View More →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio


