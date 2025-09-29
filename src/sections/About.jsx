import { motion } from 'framer-motion'
import StatCounter from '../components/StatCounter'
import { Clock, Bot, Globe2, Ghost, Rocket, TrendingUp, GraduationCap } from 'lucide-react'
import media from '../assets/media'

const About = () => {
  return (
    <section id="about" className="bg-surface py-20 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-0 opacity-20 hidden md:block">
        <video className="w-full h-full object-cover" src={media.statsVideo} autoPlay muted loop playsInline preload="metadata" />
        <div className="absolute inset-0 bg-white/60" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          About Snapshot
        </motion.h2>
        <motion.p className="mt-4 text-gray-800 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
          Nebula Studio Collective is a distributed team of elite specialists — blending creativity, tech, and AI-powered workflows. We work behind the scenes so your business shines upfront.
        </motion.p>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="relative rounded-2xl overflow-hidden shadow card-glow">
              <img src={media.about.image} alt="About Nebula Studio" className="w-full h-[320px] object-cover md:h-[500px]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20" />
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {[{ title: 'Fast Turnaround', Icon: Clock, color: 'icon-coral' }, { title: 'AI-Enhanced Workflows', Icon: Bot, color: 'icon-teal' }, { title: 'Global Expertise', Icon: Globe2, color: 'icon-blue' }, { title: 'Invisible Support', Icon: Ghost, color: 'icon-purple' }].map((it, idx) => (
                <motion.div key={it.title} className="card card-gradient card-glow"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
                  <div className={`icon-badge ${it.color} breathing`}>
                    <it.Icon size={20} />
                  </div>
                  <div className="mt-3 font-semibold text-textPrimary">{it.title}</div>
                  <div className="mt-2 text-gray-800">High-quality delivery with streamlined, AI-assisted processes.</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="card">
            <div className="icon-badge icon-lime"><Rocket size={18} /></div>
            <StatCounter value={30} suffix="%" className='text-gray-800' descriptionClassName='text-gray-800' description="Increase in new leads in just 6 weeks of launch – B2C business" />
          </div>
          <div className="card">
            <div className="icon-badge icon-coral"><TrendingUp size={18} /></div>
            <StatCounter value={408} suffix="%" descriptionClassName='text-gray-800' description="Increase in conversion since launch – B2B service business" />
          </div>
          <div className="card">
            <div className="icon-badge icon-blue"><GraduationCap size={18} /></div>
            <StatCounter value={4} suffix="x" descriptionClassName='text-gray-800' description="Greater user engagement on the day of launch – Education industry" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


