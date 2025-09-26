import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Mic, Headphones, PenLine, Wrench, Palette } from 'lucide-react'

const services = [
  { label: 'AI Automation Systems', icon: Cpu },
  { label: 'Voiceover and Media Production', icon: Mic },
  { label: 'Virtual Assistance and Operations', icon: Headphones },
  { label: 'Content Creation and Copywriting', icon: PenLine },
  { label: 'Tech and Development Support', icon: Wrench },
  { label: 'Branding and Creative Design', icon: Palette },
]

const Services = () => {
  return (
    <section id="services" className="bg-surface py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          What We Do
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.label} className="card card-gradient card-glow text-center"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
              <div className="mx-auto w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center">
                {React.createElement(s.icon, { size: 22 })}
              </div>
              <div className="mt-3 text-textPrimary font-semibold">{s.label}</div>
              <div className="mt-2 text-textSecondary">Efficient, high-quality delivery powered by AI and global specialists.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


