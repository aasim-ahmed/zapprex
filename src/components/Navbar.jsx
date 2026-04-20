// Zapprex — components/Navbar.jsx

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import { NAV_LINKS, SITE_EMAIL } from '../constants'
import logo from '../assets/logo.png'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const { visible, scrolled } = useNavbarScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLink = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' })
    else scrollTo(href)
  }

  return (
    <motion.nav
      initial={{ y: -64 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: scrolled
          ? 'rgba(3, 7, 18, 0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLink(e, '#')}
          className="flex items-center select-none"
        >
          <img
            src={logo}
            alt="Zapprex Technologies"
            style={{
              height: '30px',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen',
            }}
          />
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLink(e, link.href)}
              className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.a
            href={`mailto:${SITE_EMAIL}`}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px 4px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.3)',
            }}
          >
            Get a Quote →
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                mobileOpen
                  ? i === 0 ? { rotate: 45, y: 9 }
                    : i === 1 ? { opacity: 0 }
                      : { rotate: -45, y: -9 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.22 }}
              className="block w-5 h-px bg-white origin-center"
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(3,7,18,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className="text-slate-300 hover:text-white text-base font-medium py-1.5 border-b border-white/[0.05] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-2 flex items-center justify-center text-white text-sm font-semibold py-3 rounded-full"
                style={{ background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)' }}
              >
                Get a Quote →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
