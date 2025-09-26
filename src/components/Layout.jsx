import React from 'react'
import Navbar from './Navbar'
import Footer from '../sections/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <header className="sticky top-0 z-10 bg-surface/80 backdrop-blur shadow">
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


