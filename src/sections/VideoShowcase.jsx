import { motion } from 'framer-motion'
import media from '../assets/media'

const VideoShowcase = () => {
  return (
    <section id="showreel" className="bg-surface py-56 md:py-64 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="font-headline text-h2 text-textPrimary text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Showreel
        </motion.h2>
        <motion.div
          className="mt-10 rounded-2xl overflow-hidden shadow-lg relative"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <video
            className="w-full h-[320px] sm:h-[420px] object-cover"
            src='https://cdn.pixabay.com/video/2019/07/20/25380-350507864_large.mp4'
            poster={media.videoShowcase.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          {/* Blue-to-teal overlay to unify with brand; also add subtle gold edge */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,18,32,0.55) 0%, rgba(13,18,32,0.35) 40%, rgba(13,18,32,0.15) 100%), linear-gradient(90deg, rgba(45,137,255,0.10), rgba(38,166,154,0.12))' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute bottom-4 right-4 text-electric text-sm font-semibold underline-glow cursor-pointer">View More →</div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcase


