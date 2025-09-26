import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from '../sections/Footer'
import { Outlet } from 'react-router-dom'
import GlobalMagnet from './GlobalMagnet'

const Layout = () => {
  useEffect(() => {
    const handle = (e) => {
      const x = e.clientX + 'px'
      const y = e.clientY + 'px'
      document.documentElement.style.setProperty('--cursor-x', x)
      document.documentElement.style.setProperty('--cursor-y', y)
    }
    window.addEventListener('pointermove', handle)
    return () => window.removeEventListener('pointermove', handle)
  }, [])

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <div className="spotlight" aria-hidden="true" />
      <GlobalMagnet />
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur shadow">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout


