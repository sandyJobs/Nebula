
import { motion } from 'framer-motion'
import ParallaxTiltCard from '../components/ParallaxTiltCard'
import { motion as m } from 'framer-motion'
import media from '../assets/media'

const items = media.portfolio

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-surface py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          Portfolio
        </motion.h2>
        <div className="mt-10 masonry masonry-3 flex flex-col md:flex-row ">
          {items.map((it, idx) => (
            <ParallaxTiltCard key={it.title}>
              <motion.div
                className="relative masonry-item overflow-hidden rounded-xl group ripple"
                whileHover={{ y: -4, scale: 1.005 }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 * idx }}
              >
                <img src={it.banner} alt={it.title} className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <div className="font-semibold text-lg drop-shadow">{it.title}</div>
                  <div className="text-sm text-white/90">{it.desc}</div>
                  <div className="mt-3 inline-flex items-center gap-2 text-electric underline-glow cursor-pointer">View More →</div>
                </div>
                <m.video
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  src={it.demoVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                />
              </motion.div>
            </ParallaxTiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio


