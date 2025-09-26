import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#f3f4f6] py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-textSecondary">
        <div>
          <div className="font-montserrat text-textPrimary font-semibold">Nebula Studio</div>
          <div className="text-sm mt-1">Invisible excellence, delivered.</div>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          <a className="underline-glow" href="#home">Home</a>
          <a className="underline-glow" href="#services">Services</a>
          <a className="underline-glow" href="#portfolio">Portfolio</a>
          <a className="underline-glow" href="#about">About</a>
          <a className="underline-glow" href="#cta">Contact</a>
        </nav>
        <div className="text-sm flex items-start gap-4">
          <a className="underline-glow inline-flex items-center gap-2" href="#"><Linkedin size={16}/> LinkedIn</a>
          <a className="underline-glow inline-flex items-center gap-2" href="#"><Twitter size={16}/> Twitter</a>
          <a className="underline-glow inline-flex items-center gap-2" href="#"><Github size={16}/> GitHub</a>
        </div>
      </div>
      <div className="text-center text-xs text-textSecondary mt-6">© {new Date().getFullYear()} Nebula Studio Collective.</div>
    </footer>
  )
}

export default Footer


