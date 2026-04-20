// Zapprex — components/Footer.jsx

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_NAME, SITE_EMAIL, SOCIAL_LINKS } from '../constants'
import { EMAIL_REGEX } from '../constants'
import logo from '../assets/logo.png'

const FOOTER_LINKS = {
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Cloud & DevOps', href: '#services' },
    { label: 'AI Integration', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: `mailto:${SITE_EMAIL}` },
  ],
}

const TWITTER_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const LINKEDIN_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const GITHUB_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)
const INSTAGRAM_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)
const ICONS = { Twitter: TWITTER_SVG, LinkedIn: LINKEDIN_SVG, GitHub: GITHUB_SVG, Instagram: INSTAGRAM_SVG }

function SocialIcon({ href, label, icon }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        background: isHovered ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isHovered ? '#818cf8' : '#64748B',
        transition: 'color 0.2s, background 0.2s',
        cursor: 'pointer'
      }}
    >
      {icon}
    </a>
  )
}

/* ─── Newsletter mini-form ────────────────────────────────── */
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!EMAIL_REGEX.test(email.trim())) { setError(true); return }
    setDone(true)
    console.log('📩 Newsletter signup:', email.trim())
  }

  return (
    <div>
      <p className="text-white text-xs font-bold tracking-widest uppercase mb-3">Newsletter</p>
      <p className="text-slate-500 text-[13px] mb-4 leading-relaxed">
        Startup insights and product updates — straight to your inbox.
      </p>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.form
            key="nf"
            onSubmit={submit}
            className="flex gap-2"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(false) }}
              placeholder="contact@zapprex.com"
              className="flex-1 text-xs text-white placeholder-slate-600 px-3 py-2 rounded-lg outline-none"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${error ? 'rgba(244,63,94,0.5)' : 'rgba(255,255,255,0.1)'}`,
              }}
            />  
            <button
              type="submit"
              className="text-xs font-semibold text-white px-3 py-2 rounded-lg whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}
            >
              Subscribe
            </button>
          </motion.form>
        ) : (
          <motion.p
            key="ok"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400 text-xs font-medium"
          >
            ✅ You're subscribed!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 w-full"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">

        {/* 4-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-3">
              <img
                src={logo}
                alt="Zapprex Technologies"
                style={{
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'screen',
                }}
              />
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed max-w-[190px] mb-3">
              Turning ambitious ideas into powerful digital products.
            </p>
            <a href={`mailto:${SITE_EMAIL}`} className="text-white text-[13px] font-medium hover:text-indigo-400 transition-colors mb-5 inline-block">
              {SITE_EMAIL}
            </a>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <SocialIcon
                  key={s.label}
                  href={s.href}
                  label={s.label}
                  icon={ICONS[s.label]}
                />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">{group}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-200 text-[13px] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <NewsletterForm />
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-slate-600 text-xs">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with passion for ambitious founders.
          </p>
        </div>
      </div>
    </footer>
  )
}
