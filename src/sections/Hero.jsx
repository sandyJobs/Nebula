import { motion } from 'framer-motion'
import { useEffect } from 'react'
// import Magnetic from '../components/Magnetic'
// import Starfield from '../components/Starfield'
import TextScramble from '../components/TextScramble'
//import HeroTechMesh from '../components/illustrations/HeroTechMesh'
// import media from '../assets/media'

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
  const wordContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.055 } },
  }
  const words = headline.split(' ')

  // simple parallax: update CSS variable based on scroll
  useEffect(() => {
    const updateParallax = () => {
      const y = (window.scrollY || 0) * -0.12
      document.documentElement.style.setProperty('--parallax-y', `${y}px`)
    }
    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    return () => window.removeEventListener('scroll', updateParallax)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden bg-midnight scroll-mt-24 min-h-screen flex items-center grain">
      {/* background video (muted, looped) with dark overlay for readability */}
      <motion.div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        animate={{ y: [0, -16, 0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <video
          className="w-full h-full object-cover parallax-y"
          src="https://cdn.pixabay.com/video/2022/10/12/134591-759723759_large.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ filter: 'saturate(1.08) sepia(0.12) hue-rotate(-8deg) brightness(1.02) contrast(1.03)' }}
        />
        <motion.div
          className="cinematic-overlay pointer-events-none"
          aria-hidden="true"
          animate={{ y: [0, -10, 0, 8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="noise-overlay pointer-events-none"
          aria-hidden="true"
          animate={{ y: [0, 8, 0, -8, 0], opacity: [0.9, 1, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform, opacity' }}
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 animated-gradient opacity-20 pointer-events-none" aria-hidden="true" />
      {/* subtle shimmer overlay to echo butterfly wing iridescence */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 60% at 20% 30%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(40% 40% at 80% 70%, rgba(124,58,237,0.10), transparent 60%)',
          mixBlendMode: 'overlay',
        }}
        animate={{ opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* extra subtle floating blobs */}
      <motion.div
        className="absolute top-1/3 left-10 w-40 h-40 blob blob-orange -z-10 pointer-events-none"
        animate={{ y: [0, -10, 0], x: [0, 6, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-24 -left-16 w-80 h-80 blob blob-blue -z-10 pointer-events-none"
        animate={{ y: [0, -16, 0], x: [0, 8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-12 -right-8 w-72 h-72 blob blob-teal -z-10 pointer-events-none"
        animate={{ y: [0, -12, 0], x: [0, -6, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-32 md:py-40 lg:py-44 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/30 bg-white/80 backdrop-blur shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
          <span className="text-sm text-gray-800">Now accepting Q4 projects</span>
        </div>
        <motion.h1
          className="font-hero tracking-[0.5px] [font-variation-settings:'wght'_800] text-[clamp(2.5rem,5vw,4.5rem) md:text-[clamp(4rem,5vw,4.5rem)] leading-[1.1] bg-hero-gold bg-clip-text text-transparent drop-shadow py-4 break-normal"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
          style={{ hyphens: 'none', WebkitHyphens: 'none', msHyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal', textWrap: 'balance' }}
        >
          {words.map((word, wi) => (
            <span key={`w-${wi}`} className="inline">
              <motion.span variants={wordContainer} className="inline-block whitespace-nowrap">
                {word.split('').map((ch, ci) => (
                  <motion.span key={`c-${wi}-${ci}`} variants={letter} style={{ display: 'inline-block' }}>
                    <TextScramble text={ch} duration={420} />
                  </motion.span>
                ))}
              </motion.span>
              {wi < words.length - 1 ? ' ' : null}
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="mt-6 md:mt-7 lg:mt-8 text-white/90 max-w-2xl mx-auto font-subtext text-[1.25rem] leading-[1.6]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.3 }}
        >
          From automation to creative media — we scale your brand silently, efficiently, and globally.
        </motion.p>
        <motion.div
          className="mt-7 flex items-center justify-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
        >
        <div className="flex flex-col gap-5">

          <div className="flex flex-col md:flex-row justify-center gap-4 ">
          <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} href="#about" className="btn-premium btn-cta">Get Started</motion.a>
          <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} href="#portfolio" className="btn-premium btn-cta">See Our Work</motion.a>
          </div>

          {/* <Magnetic>
            <a href="/api/contact/start" className="btn-premium">Start a Project</a>
          </Magnetic> */}
         </div>

          
        </motion.div>
        <div className="mt-10 text-sm text-white/90">Trusted by founders and creators worldwide</div>
      </div>
    </section>
  )
}

export default Hero