import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParallaxTiltCard from '../components/ParallaxTiltCard'
import { motion as m } from 'framer-motion'
import { DashboardPlaceholder, AppCardPlaceholder, CampaignPlaceholder } from '../components/illustrations/PortfolioPlaceholders'

const items = [
  { title: 'Aurora App Launch', desc: 'Scaled app visibility via automation and design.', Art: AppCardPlaceholder },
  { title: 'Echo Voice Campaign', desc: 'Produced 100+ voiceovers for a global brand.', Art: CampaignPlaceholder },
  { title: 'Atlas AI Dashboard', desc: 'Delivered a custom data automation workflow.', Art: DashboardPlaceholder },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-surface py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          Portfolio
        </motion.h2>
        <div className="mt-10 masonry masonry-3">
          {items.map((it, idx) => (
            <ParallaxTiltCard key={it.title}>
              <motion.div className="relative masonry-item card card-gradient sheen card-glow overflow-hidden group ripple flow-border flow-animate"
                whileHover={{ y: -4, scale: 1.01 }}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
                <div className="text-textPrimary font-semibold">{it.title}</div>
                <div className="mt-2 text-textSecondary">{it.desc}</div>
                <div className="mt-4">
                  <it.Art />
                </div>
                <div className="mt-4 text-electric underline-glow inline-block cursor-pointer">View More →</div>
                <m.div
                  initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 }}
                  whileHover={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', opacity: 1 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="absolute inset-0 bg-gradient-to-br from-electric/10 via-teal/10 to-cta/20 grid place-items-center"
                >
                  <span className="px-3 py-1.5 rounded-full bg-white/80 text-textPrimary font-semibold shadow">View Project</span>
                </m.div>
              </motion.div>
            </ParallaxTiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio


