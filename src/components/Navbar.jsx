import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenuPortal from './MobileMenuPortal'


const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Process', id: 'process' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'cta' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [active, setActive] = useState('home')

  const toWithHash = (id) => `/#${id}`

  // Close mobile menu when route/hash changes
  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  // Scrollspy: update active link based on intersection
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const wrapRef = React.useRef(null)
  const [topOffset, setTopOffset] = useState(64)
  useEffect(() => {
    const measure = () => {
      const el = wrapRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setTopOffset(rect.bottom)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div ref={wrapRef} className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Link to={toWithHash('home')} className="font-montserrat text-xl font-bold bg-ai-gradient bg-clip-text text-transparent">
          Nebula Studio
        </Link>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-3 relative">
        {navLinks.map((link) => (
          <Link key={link.id} to={toWithHash(link.id)} className={`relative transition-colors ${active === link.id ? 'text-textPrimary' : 'text-textSecondary hover:text-textPrimary'}`}>
            {link.label}
            {active === link.id && (
              <motion.span layoutId="navActive" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-electric to-teal" />
            )}
          </Link>
        ))}
        
      </nav>

      <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-textSecondary hover:text-textPrimary transition-colors" onClick={() => setOpen((v) => !v)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <MobileMenuPortal top={topOffset}>
            <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 1, y: 0 }}
              className="bg-surface shadow border-t border-electric/10"
            >
              <div className="max-w-6xl mx-auto px-6 py-4 grid gap-3">
                {navLinks.map((link) => (
                  <Link key={link.id} to={toWithHash(link.id)} className={`py-2 transition-colors ${active === link.id ? 'text-textPrimary' : 'text-textSecondary hover:text-textPrimary'}`} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </MobileMenuPortal>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar


