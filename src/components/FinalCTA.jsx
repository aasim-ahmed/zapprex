// Zapprex — components/FinalCTA.jsx

import { motion } from 'framer-motion'
import { fadeUp, viewportCenter } from '../hooks/useScrollAnimation'
import { SITE_EMAIL } from '../constants'

export default function FinalCTA() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 lg:pt-12 pb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl p-10 sm:p-16 flex flex-col items-center text-center"
        style={{
          background: 'rgba(6,13,31,0.6)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Glow Effects */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 60%)' }}
        />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 
            className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight mb-8 max-w-2xl"
            style={{ letterSpacing: '-0.025em' }}
          >
            Let's turn your idea into a powerful digital product.
          </h2>
          
          <motion.a
            href={`mailto:${SITE_EMAIL}`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 28px 6px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 text-white text-[15px] font-bold px-8 py-4 rounded-full transition-all"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.3)',
            }}
          >
            Start Your Project &rarr;
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
