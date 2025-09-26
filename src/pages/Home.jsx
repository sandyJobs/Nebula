import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import CTA from '../sections/CTA'
import { useLocation } from 'react-router-dom'

const scrollToHash = (hash) => {
  if (!hash) return
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Home = () => {
  const location = useLocation()

  React.useEffect(() => {
    if (location.hash) {
      // Allow the page to paint before scrolling
      const t = setTimeout(() => scrollToHash(location.hash), 0)
      return () => clearTimeout(t)
    }
  }, [location.hash])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </motion.div>
  )
}

export default Home


