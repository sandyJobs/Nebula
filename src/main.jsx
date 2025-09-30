import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fonts.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Mode from './components/Mode.jsx'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  return (
    <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-1 origin-left z-40 bg-gradient-to-r from-electric via-teal to-cta" />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
      <BrowserRouter>
        <Mode>
          <ScrollProgress />
          <App />
        </Mode>
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>,
)
