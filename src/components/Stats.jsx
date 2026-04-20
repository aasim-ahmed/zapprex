import { motion } from 'framer-motion'
import { fadeUp, viewportCenter } from '../hooks/useScrollAnimation'
import { STATS } from '../constants'

export default function Stats() {
  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-5 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
      >
        {STATS.map(({ value, label }, i) => (
          <motion.div
            key={label}
            custom={i}
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <span
              className="text-3xl sm:text-4xl font-black gradient-text mb-1.5"
              style={{ letterSpacing: '-0.02em' }}
            >
              {value}
            </span>
            <span className="text-slate-500 text-xs font-medium tracking-wide uppercase">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
