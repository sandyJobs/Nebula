import React from 'react'
import { motion } from 'framer-motion'
import StatCounter from '../components/StatCounter'
import { Clock, Bot, Globe2, Ghost, Rocket, TrendingUp, GraduationCap, Eye } from 'lucide-react'

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
          {[
            { title: 'Fast Turnaround', Icon: Clock, color: 'icon-coral' },
            { title: 'AI-Enhanced Workflows', Icon: Bot, color: 'icon-teal' },
            { title: 'Global Expertise', Icon: Globe2, color: 'icon-blue' },
            { title: 'Invisible Support', Icon: Ghost, color: 'icon-purple' },
          ].map((it, idx) => (
            <motion.div key={it.title} className="card card-gradient card-glow"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
              <div className={`icon-badge ${it.color} breathing`}>
                <it.Icon size={20} />
              </div>
              <div className="mt-3 font-semibold text-textPrimary">{it.title}</div>
              <div className="mt-2 text-textSecondary">High-quality delivery with streamlined, AI-assisted processes.</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="card">
            <div className="icon-badge icon-lime"><Rocket size={18} /></div>
            <StatCounter value={30} suffix="%" description="Increase in new leads in just 6 weeks of launch – B2C business" />
          </div>
          <div className="card">
            <div className="icon-badge icon-coral"><TrendingUp size={18} /></div>
            <StatCounter value={408} suffix="%" description="Increase in conversion since launch – B2B service business" />
          </div>
          <div className="card">
            <div className="icon-badge icon-blue"><GraduationCap size={18} /></div>
            <StatCounter value={4} suffix="x" description="Greater user engagement on the day of launch – Education industry" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


