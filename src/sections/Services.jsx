import React from 'react'
import { motion } from 'framer-motion'
import ParallaxTiltCard from '../components/ParallaxTiltCard'
import ParallaxY from '../components/ParallaxY'
import { Cpu, Mic, Headphones, PenLine, Wrench, Palette } from 'lucide-react'
import media from '../assets/media'

const services = [
  { label: 'AI Automation Systems', icon: Cpu, color: 'icon-blue', image: media.services.aiAutomation },
  { label: 'Voiceover and Media Production', icon: Mic, color: 'icon-coral', image: media.services.voiceover },
  { label: 'Virtual Assistance and Operations', icon: Headphones, color: 'icon-teal', image: media.services.virtualAssist },
  { label: 'Content Creation and Copywriting', icon: PenLine, color: 'icon-purple', image: media.services.contentWriting },
  { label: 'Tech and Development Support', icon: Wrench, color: 'icon-lime', image: media.services.devSupport },
  { label: 'Branding and Creative Design', icon: Palette, color: 'icon-coral', image: media.services.brandingDesign },
]

const Services = () => {
  return (
    <section id="services" className="bg-surface py-56 md:py-64 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="font-headline text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          What We Do
        </motion.h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {services.map((s, idx) => (
            <ParallaxY key={s.label} from={6} to={-6} className="float-slower">
              <ParallaxTiltCard>
                <motion.div
                  className="relative overflow-hidden rounded-xl group"
                  whileHover={{ y: -4, scale: 1.01 }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * idx }}
                >
                  <img src={s.image} alt={s.label} className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <div className={`icon-badge ${s.color} breathing bg-white/90 text-inherit mb-3`}>{React.createElement(s.icon, { size: 20 })}</div>
                    <div className="font-semibold text-lg drop-shadow">{s.label}</div>
                    <div className="text-sm text-white font-bold">Efficient, high-quality delivery powered by AI and global specialists.</div>
                  </div>
                </motion.div>
              </ParallaxTiltCard>
            </ParallaxY>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


