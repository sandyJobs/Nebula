import React from 'react'

const Magnetic = ({ children, strength = 18 }) => {
  const ref = React.useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${relX / strength}px, ${relY / strength}px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <span onPointerMove={onMove} onPointerLeave={onLeave} style={{ display: 'inline-block' }}>
      <span ref={ref} style={{ display: 'inline-block', transition: 'transform 120ms ease' }}>
        {children}
      </span>
    </span>
  )
}

export default Magnetic


