import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'


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
    if (open) setOpen(false)
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to={toWithHash('home')} className="font-montserrat text-xl font-bold bg-ai-gradient bg-clip-text text-transparent">
        Nebula Studio
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link key={link.id} to={toWithHash(link.id)} className={`transition-colors ${active === link.id ? 'text-textPrimary' : 'text-textSecondary hover:text-textPrimary'}`}>
            {link.label}
          </Link>
        ))}
      </nav>

      <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-textSecondary hover:text-textPrimary transition-colors" onClick={() => setOpen((v) => !v)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur shadow md:hidden">
          <div className="max-w-6xl mx-auto px-6 py-4 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.id} to={toWithHash(link.id)} className={`py-2 transition-colors ${active === link.id ? 'text-textPrimary' : 'text-textSecondary hover:text-textPrimary'}`}>
                {link.label}
              </Link>
            ))}
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar


