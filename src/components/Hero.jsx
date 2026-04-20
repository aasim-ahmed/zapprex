// Zapprex — components/Hero.jsx

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '../hooks/useScrollAnimation'
import { STATS, SITE_EMAIL } from '../constants'
import { techStack } from '../data/techStack'
import Badge from '../ui/Badge'

/* ─── Animated mesh/orb background ─────────────────────────── */
function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Primary top glow */}
      <div
        className="absolute rounded-full float-orb"
        style={{
          top: '-200px', left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '900px',
          background: 'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0.05) 45%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'mesh-drift-1 9s ease-in-out infinite',
        }}
      />
      {/* Cyan right glow */}
      <div
        className="absolute rounded-full"
        style={{
          top: '80px', right: '-60px',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.11) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'mesh-drift-2 11s ease-in-out infinite',
        }}
      />
      {/* Violet left glow */}
      <div
        className="absolute rounded-full"
        style={{
          top: '120px', left: '-80px',
          width: '380px', height: '380px',
          background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'mesh-drift-3 13s ease-in-out infinite',
        }}
      />
      {/* Bottom subtle glow */}
      <div
        className="absolute rounded-full float-orb-alt"
        style={{
          bottom: '-80px', left: '30%',
          width: '500px', height: '300px',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  )
}

/* ─── Count-up number ───────────────────────────────────────── */
function CountUp({ target, suffix = '', decimal = false, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration, decimal])

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </span>
  )
}

/* ─── Tech stack marquee ────────────────────────────────────── */
function Marquee() {
  const doubled = [...techStack, ...techStack]
  return (
    <div className="marquee-container w-full">
      <div className="marquee-track gap-3 py-1">
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap flex-shrink-0"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: t.color }}
            />
            <span className="text-slate-300 text-xs font-medium">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Hero ──────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 pt-32 pb-40 overflow-hidden"
    >
      <MeshBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <Badge dot variant="indigo" className="mb-8">
            Now Accepting New Clients
          </Badge>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.06] mb-6"
          style={{ letterSpacing: '-0.035em' }}
        >
          <span className="text-white">We build digital products that drive </span>
          <span className="shimmer-text">real business growth.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          From MVPs to enterprise platforms — Zapprex turns ambitious ideas into scalable products that increase revenue and user engagement.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full px-4 sm:px-0 mb-20"
        >
          <motion.a
            href={`mailto:${SITE_EMAIL}`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 28px 6px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.3)',
            }}
          >
            Get a Quote
          </motion.a>
          
          <motion.a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.06)' }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center text-slate-200 hover:text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-colors duration-300"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Counter stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 lg:gap-20 w-full max-w-3xl mx-auto mb-16"
        >
          {STATS.map(({ value, suffix, label, decimal }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl sm:text-4xl font-display font-black gradient-text"
                style={{ letterSpacing: '-0.03em' }}
              >
                <CountUp target={value} suffix={suffix} decimal={decimal} />
              </div>
              <div className="text-slate-500 text-[11px] font-medium tracking-widest uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <p className="text-slate-600 text-xs font-medium tracking-widest uppercase mb-4">
            Powered by modern tech
          </p>
          <Marquee />
        </motion.div>
      </div>
    </section>
  )
}
