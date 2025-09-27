import React from 'react'
import { motion } from 'framer-motion'
import media from '../assets/media'

const VideoShowcase = () => {
  return (
    <section id="showreel" className="bg-surface py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-montserrat text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Showreel
        </motion.h2>
        <motion.div
          className="mt-8 rounded-2xl overflow-hidden shadow-lg relative"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <video
            className="w-full h-[320px] sm:h-[420px] object-cover"
            src={media.videoShowcase.video}
            poster={media.videoShowcase.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcase


