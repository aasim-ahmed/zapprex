// Zapprex — components/HowItWorks.jsx

import { motion } from 'framer-motion'
import { fadeUp, viewportCenter } from '../hooks/useScrollAnimation'
import { steps } from '../data/howItWorks.jsx'

function StepCard({ step, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex flex-col items-center text-center w-full"    >
      {/* Glow ring behind icon */}
      <div
        className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: step.accent,
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: `0 0 40px 0 ${step.accent}`,
        }}
      >
        {step.icon && <step.icon />}

        {/* Step number */}
        <div
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white"
          style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)' }}
        >
          {index + 1}
        </div>
      </div>

      <h3 className="text-white font-display font-bold text-base mb-2 tracking-tight">
        {step.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">
        {step.desc}
      </p>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-16 lg:pb-20"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="text-center mb-16"
      >
        <motion.p
          variants={fadeUp}
          custom={0}
          className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: '#818cf8' }}
        >
          The Process
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-5xl font-display font-black tracking-tight"
          style={{ letterSpacing: '-0.025em' }}
        >
          <span className="text-white">How We </span>
          <span className="gradient-text">Make It Happen</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mt-4"
        >
          A clear, repeatable process that delivers exceptional results — every time.
        </motion.p>
      </motion.div>

      {/* Steps */}
      <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-10 sm:gap-0 lg:gap-8">        {steps.map((step, i) => (
        <div
          key={step.number}
          className="flex flex-col items-center w-full sm:flex-col sm:flex-1 gap-4 sm:gap-0"
        >
          {/* Step card */}
          <StepCard step={step} index={i} />

          {/* Mobile vertical connector */}
          {i < steps.length - 1 && (
            <div className="sm:hidden flex items-center justify-center w-full mt-2 flex-shrink-0">                <div className="w-px h-8 bg-gradient-to-b from-indigo-500/50 to-cyan-500/30" />
            </div>
          )}
        </div>
      ))}
      </div>
    </section>
  )
}