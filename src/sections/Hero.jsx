import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-surface scroll-mt-24">
      <div className="absolute inset-0 animated-gradient opacity-20" />
      <div className="absolute -top-24 -left-16 w-80 h-80 blob blob-blue float-slow" />
      <div className="absolute -bottom-12 -right-8 w-72 h-72 blob blob-teal float-slower" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/30 bg-white/70 backdrop-blur shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
          <span className="text-sm text-textSecondary">Now accepting Q4 projects</span>
        </div>
        <motion.h1
          className="font-montserrat text-h1 bg-ai-gradient bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Your Invisible Edge in Digital Execution.
        </motion.h1>
        <motion.p
          className="mt-5 text-textSecondary max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
        >
          From automation to creative media — we scale your brand silently, efficiently, and globally.
        </motion.p>
        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          <a href="#about" className="btn">Get Started</a>
          <a href="#portfolio" className="btn">See Our Work</a>
          <a href="/api/contact/start" className="btn-cta rounded-lg">Start a Project</a>
        </motion.div>
        <div className="mt-10 text-sm text-textSecondary">Trusted by founders and creators worldwide</div>
      </div>
    </section>
  )
}

export default Hero


