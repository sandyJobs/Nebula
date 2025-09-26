import React from 'react'

const HeroTechMesh = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 480 360" className="svg-fluid ai-illustration-float" aria-hidden="true">
        <defs>
          <linearGradient id="gradA" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2D89FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="rgba(45,137,255,0.25)" />
            <stop offset="100%" stopColor="rgba(45,137,255,0)" />
          </radialGradient>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(6,182,212,0.35)" />
          </pattern>
        </defs>

        <rect width="480" height="360" fill="url(#glow)" />

        <g opacity="0.2">
          <rect x="24" y="24" width="432" height="312" rx="18" fill="url(#dots)" />
        </g>

        <g stroke="url(#gradA)" strokeWidth="1.2" fill="none" opacity="0.9">
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d={`M20 ${40 + i * 28} C 140 ${10 + i * 26}, 340 ${70 + i * 22}, 460 ${30 + i * 30}`} />
          ))}
        </g>

        <g>
          <rect x="120" y="90" width="240" height="160" rx="16" fill="#ffffff" stroke="rgba(17,24,39,0.08)" />
          <rect x="132" y="110" width="96" height="14" rx="7" fill="#e2e8f0" />
          <rect x="132" y="136" width="72" height="8" rx="4" fill="#e5e7eb" />
          <rect x="132" y="154" width="72" height="8" rx="4" fill="#e5e7eb" />
          <rect x="132" y="172" width="72" height="8" rx="4" fill="#e5e7eb" />
          <rect x="240" y="120" width="100" height="100" rx="12" fill="url(#gradA)" opacity="0.9" />
          <circle cx="290" cy="170" r="24" fill="rgba(255,180,0,0.85)" />
          <rect x="132" y="200" width="76" height="12" rx="6" fill="#06b6d4" opacity="0.35" />
        </g>
      </svg>
    </div>
  )
}

export default HeroTechMesh


