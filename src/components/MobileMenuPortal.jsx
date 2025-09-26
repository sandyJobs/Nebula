import React from 'react'
import { createPortal } from 'react-dom'

const MobileMenuPortal = ({ children, top = 64 }) => {
  if (typeof document === 'undefined') return null
  return createPortal(
    <div className="fixed inset-x-0 bottom-0 z-[100] md:hidden" style={{ top }}>
      {children}
    </div>,
    document.body
  )
}

export default MobileMenuPortal


