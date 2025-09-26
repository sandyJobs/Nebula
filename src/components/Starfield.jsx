import React from 'react'

const Starfield = ({ density = 140, speed = 0.25, className = '' }) => {
  const canvasRef = React.useRef(null)
  const rafRef = React.useRef(0)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)

    const stars = Array.from({ length: density }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1 + 0.3,
      r: Math.random() * 1.6 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        s.y += speed * s.z
        if (s.y > h + 10) { s.y = -10; s.x = Math.random() * w }
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${0.6 * s.z})`
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2)
        ctx.fill()
        if (Math.random() < 0.003) {
          ctx.fillStyle = 'rgba(77, 160, 255, 0.7)'
          ctx.fillRect(s.x, s.y, 1, 6)
        }
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener('resize', onResize) }
  }, [density, speed])

  return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%' }} />
}

export default Starfield


