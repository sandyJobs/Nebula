import React from 'react'

const AvatarOrbit = ({ items = [], radius = 120, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}>
      <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 60px rgba(45,137,255,0.25) inset' }} />
      <div className="absolute inset-0 orbit-rotate">
      {items.map((src, i) => {
        const angle = (i / items.length) * Math.PI * 2
        const x = Math.cos(angle) * radius + radius + 20
        const y = Math.sin(angle) * radius + radius + 20
        return (
          <img
            key={i}
            src={src}
            className="absolute w-10 h-10 rounded-full object-cover shadow avatar-ring"
            style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
          />
        )
      })}
      </div>
    </div>
  )
}

export default AvatarOrbit


