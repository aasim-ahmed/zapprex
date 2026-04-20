// Zapprex — components/FAQ.jsx

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportCenter, viewport } from '../hooks/useScrollAnimation'
import { faqs } from '../data/faq'

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="rounded-xl overflow-hidden"
      style={{
        border: isOpen ? '1px solid rgba(99,102,241,0.35)' : '1px solid rgba(255,255,255,0.07)',
        background: isOpen ? 'rgba(99,102,241,0.06)' : 'rgba(6,13,31,0.5)',
        backdropFilter: 'blur(12px)',
        transition: 'border-color 0.25s, background 0.25s',
      }}
    >
      <button
        id={`faq-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
      >
        <span className="text-white text-sm font-semibold leading-snug pr-4">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="w-6 h-6 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0 text-lg font-light"
          style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 pb-5 pt-1 text-slate-400 text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  // Only one item open at a time
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-32 lg:pb-30">

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="text-center mb-12"
      >
        <motion.p
          variants={fadeUp} custom={0}
          className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: '#818cf8' }}
        >
          FAQ
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1}
          className="text-3xl sm:text-4xl font-display font-black tracking-tight"
          style={{ letterSpacing: '-0.025em' }}
        >
          <span className="text-white">Got </span>
          <span className="gradient-text">Questions?</span>
        </motion.h2>
        <motion.p
          variants={fadeUp} custom={2}
          className="text-slate-400 text-sm mt-4 max-w-sm mx-auto"
        >
          Everything you need to know before we start building together.
        </motion.p>
      </motion.div>

      {/* Accordion */}
      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  )
}
