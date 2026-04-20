// Zapprex — components/Testimonials.jsx

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportCenter } from '../hooks/useScrollAnimation'
import { testimonials } from '../data/testimonials'

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-[13px]">★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="glass-card rounded-2xl p-7 flex flex-col gap-5 h-full">
      {/* Stars */}
      <Stars count={t.rating} />

      {/* Quote */}
      <p className="text-slate-300 text-[15px] leading-relaxed flex-1">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
        <div
          className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{t.name}</div>
          <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-32 lg:pb-40">

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="text-center mb-14"
      >
        <motion.p
          variants={fadeUp} custom={0}
          className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: '#818cf8' }}
        >
          Client Love
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1}
          className="text-3xl sm:text-5xl font-display font-black tracking-tight"
          style={{ letterSpacing: '-0.025em' }}
        >
          <span className="text-white">Trusted By </span>
          <span className="gradient-text">Ambitious Founders</span>
        </motion.h2>
      </motion.div>

      {/* Desktop: 3 cards */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-5 lg:gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(99,102,241,0.2)', transition: { duration: 0.22 } }}
          >
            <TestimonialCard t={t} />
          </motion.div>
        ))}
      </div>

      {/* Mobile: single card carousel */}
      <div className="sm:hidden relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestimonialCard t={testimonials[active]} />
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? '24px' : '6px',
                height: '6px',
                background: i === active ? '#6366f1' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
