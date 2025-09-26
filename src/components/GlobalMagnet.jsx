import React from 'react'

const GlobalMagnet = ({ strength = 50, selector = 'a, button, .btn, .btn-cta, .tilt-card' }) => {
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector))
    const onMove = (e) => {
      const { clientX, clientY } = e
      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = clientX - cx
        const dy = clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const pull = Math.max(0, 1 - dist / 600)
        el.style.transform = `translate(${(dx / strength) * pull}px, ${(dy / strength) * pull}px)`
      }
    }
    const onLeave = () => {
      for (const el of elements) el.style.transform = ''
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => { window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerleave', onLeave) }
  }, [strength, selector])
  return null
}

export default GlobalMagnet


