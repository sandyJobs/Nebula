import React from 'react'

export const DashboardPlaceholder = ({ className = '' }) => (
  <svg viewBox="0 0 480 300" className={`svg-fluid ${className}`} aria-hidden="true">
    <defs>
      <linearGradient id="p1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#2D89FF" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect width="480" height="300" rx="16" fill="#fff" />
    <rect x="16" y="16" width="448" height="36" rx="10" fill="#eef2f7" />
    <rect x="16" y="68" width="212" height="80" rx="12" fill="url(#p1)" opacity="0.9" />
    <rect x="244" y="68" width="220" height="80" rx="12" fill="#eef2f7" />
    <rect x="16" y="160" width="448" height="40" rx="8" fill="#f3f4f6" />
    <rect x="16" y="206" width="140" height="78" rx="10" fill="#f3f4f6" />
    <rect x="164" y="206" width="140" height="78" rx="10" fill="#f3f4f6" />
    <rect x="312" y="206" width="152" height="78" rx="10" fill="#f3f4f6" />
  </svg>
)

export const AppCardPlaceholder = ({ className = '' }) => (
  <svg viewBox="0 0 420 280" className={`svg-fluid ${className}`} aria-hidden="true">
    <defs>
      <linearGradient id="p2" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#FFB400" />
        <stop offset="100%" stopColor="#2D89FF" />
      </linearGradient>
    </defs>
    <rect width="420" height="280" rx="20" fill="#fff" />
    <rect x="24" y="24" width="372" height="60" rx="12" fill="url(#p2)" opacity="0.9" />
    <rect x="24" y="96" width="372" height="160" rx="14" fill="#f3f4f6" />
    <rect x="40" y="112" width="120" height="16" rx="8" fill="#e5e7eb" />
    <rect x="40" y="136" width="200" height="10" rx="5" fill="#e5e7eb" />
    <rect x="40" y="154" width="180" height="10" rx="5" fill="#e5e7eb" />
  </svg>
)

export const CampaignPlaceholder = ({ className = '' }) => (
  <svg viewBox="0 0 460 260" className={`svg-fluid ${className}`} aria-hidden="true">
    <defs>
      <linearGradient id="p3" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect width="460" height="260" rx="16" fill="#fff" />
    <rect x="20" y="20" width="420" height="60" rx="12" fill="#f3f4f6" />
    <rect x="20" y="88" width="200" height="140" rx="12" fill="url(#p3)" opacity="0.9" />
    <rect x="228" y="88" width="212" height="28" rx="8" fill="#eef2f7" />
    <rect x="228" y="122" width="212" height="24" rx="8" fill="#eef2f7" />
    <rect x="228" y="152" width="212" height="24" rx="8" fill="#eef2f7" />
    <rect x="228" y="182" width="180" height="24" rx="8" fill="#eef2f7" />
  </svg>
)

export default { DashboardPlaceholder, AppCardPlaceholder, CampaignPlaceholder }


