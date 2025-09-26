import React from 'react'

const ParallaxTiltCard = ({ children, maxRotate = 8, glare = true }) => {
  const ref = React.useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (0.5 - py) * maxRotate
    const rotY = (px - 0.5) * maxRotate
    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
    if (glare) {
      const gradientX = px * 100
      const gradientY = py * 100
      el.style.setProperty('--glare-x', `${gradientX}%`)
      el.style.setProperty('--glare-y', `${gradientY}%`)
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} style={{ transformStyle: 'preserve-3d' }}>
      <div
        ref={ref}
        style={{
          transform: 'perspective(800px)',
          transition: 'transform 180ms ease',
          position: 'relative',
        }}
        className="tilt-card"
      >
        {children}
        {glare && (
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(300px 200px at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.18), transparent 60%)',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default ParallaxTiltCard


