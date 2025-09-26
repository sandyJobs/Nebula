import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="bg-surface py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          About Snapshot
        </motion.h2>
        <motion.p className="mt-4 text-textSecondary text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
          Nebula Studio Collective is a distributed team of elite specialists — blending creativity, tech, and AI-powered workflows. We work behind the scenes so your business shines upfront.
        </motion.p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Fast Turnaround','AI-Enhanced Workflows','Global Expertise','Invisible Support'].map((title, idx) => (
            <motion.div key={title} className="card card-gradient card-glow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
              <div className="font-semibold text-textPrimary">{title}</div>
              <div className="mt-2 text-textSecondary">High-quality delivery with streamlined, AI-assisted processes.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About


