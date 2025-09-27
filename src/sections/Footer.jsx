import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import media from '../assets/media'

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#f3f4f6] py-12 mt-12 relative overflow-hidden">
      <div className="absolute inset-x-0 -top-24 h-48" style={{
        background: 'linear-gradient(135deg, rgba(45,137,255,0.12), rgba(6,182,212,0.12))'
      }} />
      <div className="footer-watermark" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-textSecondary">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <div className="font-montserrat text-textPrimary font-semibold">Nebula Studio</div>
          <div className="text-sm mt-1">Invisible excellence, delivered.</div>
        </motion.div>
        <motion.nav className="grid grid-cols-2 gap-2 text-sm" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
          <a className="underline-glow" href="#home">Home</a>
          <a className="underline-glow" href="#services">Services</a>
          <a className="underline-glow" href="#portfolio">Portfolio</a>
          <a className="underline-glow" href="#about">About</a>
          <a className="underline-glow" href="#cta">Contact</a>
        </motion.nav>
        <motion.div className="text-sm flex items-start gap-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
          <a className="underline-glow inline-flex items-center gap-2" href="#"><Linkedin size={16}/> LinkedIn</a>
          <a className="underline-glow inline-flex items-center gap-2" href="#"><Twitter size={16}/> Twitter</a>
          <a className="underline-glow inline-flex items-center gap-2" href="#"><Github size={16}/> GitHub</a>
        </motion.div>
      </div>
      <div className="text-center text-xs text-textSecondary mt-6">© {new Date().getFullYear()} Nebula Studio Collective.</div>
    </footer>
  )
}

export default Footer


