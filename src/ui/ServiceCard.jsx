// Zapprex — ui/ServiceCard.jsx

import { motion } from 'framer-motion'
import { cardVariants, viewport } from '../hooks/useScrollAnimation'

/**
 * Premium glassmorphism service card with animated gradient border on hover.
 * Props: service { icon, label, desc, color, glow }, index
 */
export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      whileHover={{
        y: -8,
        boxShadow: `0 16px 60px 0 ${service.glow}`,
        borderColor: 'rgba(99,102,241,0.5)',
        transition: { duration: 0.22, ease: 'easeOut' },
      }}
      className="gradient-border group relative rounded-2xl overflow-hidden cursor-default"
    >
      {/* Glass background */}
      <div
        className="relative glass-card rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-300"
        style={{
          boxShadow: '0 0 0 0 transparent',
        }}
      >
        {/* Inner gradient glow (slides in on hover) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ boxShadow: `inset 0 0 60px 0 ${service.glow}` }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#818cf8',
            }}
          >
            {service.icon && <service.icon />}
          </div>

          {/* Title */}
          <h3 className="text-white font-display font-bold text-[15px] tracking-tight leading-snug">
            {service.label}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-[13px] leading-relaxed flex-1">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
