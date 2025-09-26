import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Magnetic from '../components/Magnetic'
import Starfield from '../components/Starfield'
import TextScramble from '../components/TextScramble'
import HeroTechMesh from '../components/illustrations/HeroTechMesh'

const Hero = () => {
  const headline = 'Your Invisible Edge in Digital Execution.'
  const container = {
    hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.055 } },
  }
  const letter = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 420, damping: 22 } },
  }
  const controls = useAnimation()
  const h1Ref = useRef(null)
  const isInView = useInView(h1Ref, { margin: '-30% 0% -30% 0%' })

  useEffect(() => {
    let cancelled = false
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
    const loop = async () => {
      while (!cancelled) {
        if (!isInView) { await sleep(200); continue }
        await controls.start('visible')
        await sleep(900)
        await controls.start('hidden')
        await sleep(300)
      }
    }
    loop()
    return () => { cancelled = true }
  }, [controls, isInView])
  return (
    <section id="home" className="relative overflow-hidden bg-surface scroll-mt-24">
      <div className="absolute inset-0 animated-gradient opacity-20" />
      {/* extra subtle floating blobs */}
      <motion.div
        className="absolute top-1/3 left-10 w-40 h-40 blob blob-orange"
        animate={{ y: [0, -10, 0], x: [0, 6, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-24 -left-16 w-80 h-80 blob blob-blue"
        animate={{ y: [0, -16, 0], x: [0, 8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-12 -right-8 w-72 h-72 blob blob-teal"
        animate={{ y: [0, -12, 0], x: [0, -6, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Starfield className="w-full h-full" density={160} speed={0.3} />
      </div>
      {/* tech mesh illustration: mobile-visible and behind text */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] h-[200px] opacity-30 sm:w-[320px] sm:h-[230px] md:top-20 md:w-[420px] md:h-[300px] lg:left-auto lg:right-0 lg:translate-x-0 lg:top-24 lg:w-[520px] lg:h-[360px]">
          <HeroTechMesh />
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/30 bg-white/70 backdrop-blur shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
          <span className="text-sm text-textSecondary">Now accepting Q4 projects</span>
        </div>
        <motion.h1
          className="font-montserrat text-h1 bg-ai-gradient bg-clip-text text-transparent"
          variants={container}
          initial="hidden"
          animate={controls}
          ref={h1Ref}
        >
          {headline.split('').map((ch, i) => (
            <motion.span key={i} variants={letter} style={{ display: 'inline-block' }}>
              <TextScramble text={ch === ' ' ? '\u00A0' : ch} duration={420} />
            </motion.span>
          ))}
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
         <div className="flex flex-col gap-5">

          <div className="space-x-2">
          <a href="#about" className="btn tilt-hover">Get Started</a>
          <a href="#portfolio" className="btn tilt-hover">See Our Work</a>
          </div>

          <Magnetic>
            <a href="/api/contact/start" className="btn-cta rounded-lg shimmer-button btn-pulse p-3 ">Start a Project</a>
          </Magnetic>
         </div>

          
        </motion.div>
        <div className="mt-10 text-sm text-textSecondary">Trusted by founders and creators worldwide</div>
      </div>
    </section>
  )
}

export default Hero


