import { motion } from 'framer-motion'
import { fadeUp, viewportCenter } from '../hooks/useScrollAnimation'
import { services } from '../data/services.jsx'
import ServiceCard from '../ui/ServiceCard'
import { SITE_EMAIL } from '../constants'

export default function Services() {
  return (
    <section id="services" className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-32 lg:pb-40">

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="text-center mb-14"
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: '#818cf8' }}
        >
          What We Build
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-5"
          style={{ letterSpacing: '-0.025em' }}
        >
          <span className="text-white">Solutions That Drive </span>
          <span className="gradient-text">Real Business Growth</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          We help startups and businesses build scalable, high-performance digital products — from idea to launch and beyond.
        </motion.p>
      </motion.div>

      {/* Differentiation Line */}
      <p style={{
        textAlign: 'center',
        color: '#6366f1',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.04em',
        marginBottom: '2.5rem',
        fontStyle: 'italic'
      }}>
        "Built for startups and businesses that want to scale fast."
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {services.map((s, i) => (
          <ServiceCard key={s.label} service={s} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          marginTop: '4rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <p style={{ color: '#94A3B8', fontSize: '15px' }}>
          Have a project in mind?
        </p>
        
        <a
          href={`mailto:${SITE_EMAIL}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
            color: 'white',
            fontWeight: 700,
            fontSize: '15px',
            padding: '12px 32px',
            borderRadius: '999px',
            boxShadow: '0 0 0 1px rgba(99,102,241,0.3)',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s'
          }}
        >
          Let's Build It →
        </a>
      </motion.div>
    </section>
  )
}
