import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import AvatarOrbit from '../components/AvatarOrbit'
import media from '../assets/media'

const testimonials = [
  { quote: 'Their turnaround is insane — delivered in 48 hours.', author: 'Alex Green', avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=128&h=128&fit=crop&auto=format&q=60' },
  { quote: 'Felt like I had a full team working invisibly for me.', author: 'Priya Kapoor', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&auto=format&q=60' },
  { quote: 'Smooth, professional, reliable — highly recommend.', author: 'Marcus Lee', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=128&h=128&fit=crop&auto=format&q=60' },
]

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase()

const Testimonials = () => {
  const trackRef = useRef(null)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let id
    const step = () => {
      el.scrollLeft += 0.5
      id = requestAnimationFrame(step)
    }
    id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="testimonials" className="bg-surface py-20 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <img src={media.hero.banner} alt="Gradient banner" className="w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
      </div>
      <div className="absolute -top-6 left-4 decor-quote">“</div>
      <div className="absolute top-14 right-10 decor-chat" />
      <div className="absolute bottom-12 left-10 decor-star" />
      <div className="absolute bottom-24 right-16 decor-star" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          Testimonials
        </motion.h2>
        <div className="mt-10 overflow-hidden">
          <div ref={trackRef} className="flex gap-4 overflow-x-auto no-scrollbar py-1" style={{ scrollBehavior: 'auto' }}>
            {[...testimonials, ...testimonials].map((t, idx) => (
              <motion.div key={idx} className="min-w-[320px] card flex items-start gap-3"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.05 * (idx % testimonials.length) }}>
                {t.avatar ? (
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover shadow avatar-ring" />
                ) : (
                  <div className="avatar flex items-center justify-center text-textPrimary font-semibold avatar-ring">
                    {getInitials(t.author)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-1 text-cta mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="#fb923c" color="#fb923c" />
                    ))}
                  </div>
                  <p className="text-textPrimary">“{t.quote}”</p>
                  <div className="mt-2 text-textSecondary inline-flex items-center gap-2">
                    <span className="underline-glow">— {t.author}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-electric/10 text-electric">Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <AvatarOrbit
            items={testimonials.map(t => t.avatar).filter(Boolean)}
            radius={110}
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials


