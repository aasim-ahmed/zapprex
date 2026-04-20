// Zapprex — components/TrustElements.jsx

import { motion } from 'framer-motion'
import { fadeUp, viewportCenter } from '../hooks/useScrollAnimation'

const trustBadges = [
  { icon: '⚡️', label: 'Fast Delivery' },
  { icon: '🏗️', label: 'Scalable Architecture' },
  { icon: '✨', label: 'Clean Code' },
  { icon: '🤝', label: 'Ongoing Support' },
]

export default function TrustElements() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10"
      >
        {trustBadges.map((badge, i) => (
          <motion.div
            key={badge.label}
            custom={i}
            variants={fadeUp}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span className="text-xl">{badge.icon}</span>
            <span className="text-slate-300 text-sm font-semibold tracking-wide">{badge.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
