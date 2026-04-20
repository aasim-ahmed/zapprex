// Zapprex — components/Pricing.jsx

import { motion } from 'framer-motion'
import { fadeUp, cardVariants, viewportCenter, viewport } from '../hooks/useScrollAnimation'
import { SITE_EMAIL } from '../constants'

const plans = [
  {
    name: 'Launch',
    desc: 'Perfect for startups and founders launching their first digital product or MVP.',
    features: [
      'Custom Web or Mobile App',
      'Responsive & SEO Ready',
      'Delivered in 7–14 days',
      'Free post-launch support (30 days)',
      'Performance optimized',
      'Clean, documented code'
    ],
    cta: 'Get Free Consultation',
    trustSignal: 'Trusted by early-stage startups & indie founders',
    highlight: false,
    glow: 'rgba(99,102,241,0.15)',
  },
  {
    name: 'Scale',
    desc: 'For growing businesses ready to optimize, expand, and perform at the next level.',
    features: [
      'Full-Stack Web or Mobile Solution',
      'API & Third-party Integrations',
      'Advanced UI/UX Design',
      'Built for scalability',
      'Free post-launch support (60 days)',
      'Priority communication',
      'Performance & SEO optimized'
    ],
    cta: 'Discuss Your Project',
    trustSignal: 'Built with modern, scalable tech stack',
    highlight: true,
    glow: 'rgba(99,102,241,0.5)',
  },
  {
    name: 'Enterprise',
    desc: 'End-to-end custom solutions built for serious scale and long-term success.',
    features: [
      'Dedicated development team',
      'Custom SaaS / MVP development',
      'Long-term support & maintenance',
      'Priority delivery',
      'Advanced security & compliance',
      'Custom integrations & APIs',
      'Scalable cloud infrastructure',
      'Direct founder access'
    ],
    cta: 'Book a Call',
    trustSignal: 'Partnered with serious teams building for the long run',
    highlight: false,
    glow: 'rgba(99,102,241,0.15)',
  }
];

function CheckIcon() {
  return (
    <svg className="flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" width="15" height="15">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function PricingCard({ plan, index }) {
  const isScale = plan.name === 'Scale';

  return (
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      className={`relative flex flex-col rounded-2xl overflow-hidden ${isScale ? 'z-10' : ''}`}
      style={{
        background: plan.highlight
          ? 'linear-gradient(160deg, rgba(99,102,241,0.14) 0%, rgba(59,130,246,0.08) 100%)'
          : 'rgba(6,13,31,0.6)',
        border: plan.highlight
          ? '1px solid rgba(99,102,241,0.45)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: plan.highlight ? `0 0 80px 0 ${plan.glow}` : 'none',
        backdropFilter: 'blur(18px)',
        transform: isScale ? 'scale(1.03)' : 'none',
      }}
    >
      <div className={`flex flex-col flex-1 p-7 gap-5`}>
        {/* Name + price */}
        <div>
          {isScale && (
            <div style={{
              background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
              color: 'white',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '4px 14px',
              borderRadius: '999px',
              display: 'inline-block',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>Most Popular</div>
          )}
          <p className="text-white font-display font-bold text-lg mb-3">{plan.name}</p>
          <div className="mb-1.5 flex flex-col items-start gap-1">
            {plan.name === 'Launch' && (
              <div className="flex flex-col items-start w-full">
                <span className="text-white font-bold text-sm tracking-wide">Starting from</span>
                <span className="text-4xl font-display font-black gradient-text tracking-tight mt-1 mb-1" style={{ letterSpacing: '-0.03em' }}>$999</span>
                <span className="text-slate-400 text-xs">based on project scope</span>
              </div>
            )}
            {plan.name === 'Scale' && (
              <div className="flex flex-col items-start w-full">
                <span className="text-3xl font-display font-black text-white tracking-tight mb-1 mt-1" style={{ letterSpacing: '-0.03em' }}>Custom Pricing</span>
                <span className="text-slate-400 text-xs">scoped to your requirements</span>
              </div>
            )}
            {plan.name === 'Enterprise' && (
              <div className="flex flex-col items-start w-full">
                <span className="text-3xl font-display font-black text-white tracking-tight mb-1 mt-1" style={{ letterSpacing: '-0.03em' }}>Custom</span>
                <span className="text-slate-400 text-xs">Let's build something great together</span>
              </div>
            )}
          </div>
          <p className="text-slate-400 text-[13px]">{plan.desc}</p>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((f, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-slate-300 text-[13px]">
              <CheckIcon />
              {f}
            </li>
          ))}
        </ul>

        {/* Divider & Trust Signal */}
        <div className="pt-4 mt-2 border-t border-white/5 text-center">
          <p className="text-slate-400 text-xs">{plan.trustSignal}</p>
        </div>

        {/* CTA */}
        <a
          href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent(plan.name + ' Plan Inquiry')}`}
          className="mt-2 flex items-center justify-center text-sm font-semibold py-3.5 rounded-full transition-all duration-200"
          style={
            plan.highlight
              ? {
                  background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
                  color: '#fff',
                  boxShadow: '0 0 0 1px rgba(99,102,241,0.3)',
                }
              : {
                  background: 'rgba(255,255,255,0.06)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255,255,255,0.1)',
                }
          }
        >
          {plan.cta}
        </a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-32 lg:pb-40">

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.p
          variants={fadeUp} custom={0}
          className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: '#818cf8' }}
        >
          Pricing
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={1}
          className="text-3xl sm:text-5xl font-display font-black tracking-tight mb-5"
          style={{ letterSpacing: '-0.025em' }}
        >
          <span className="text-white">Flexible Solutions </span>
          <span className="gradient-text">for Every Business</span>
        </motion.h2>
        <motion.p
          variants={fadeUp} custom={2}
          className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-8"
        >
          We don't sell packages — we build partnerships. Every project is scoped to your exact needs and goals.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8 items-stretch pt-2 lg:pt-4">
        {plans.map((plan, i) => (
          <PricingCard key={plan.name} plan={plan} index={i} />
        ))}
      </div>

      {/* Secondary CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        variants={fadeUp}
        className="text-center mx-auto"
        style={{
          marginTop: '48px',
          padding: '32px',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <p style={{ color: 'white', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>
          Not sure which plan is right for you?
        </p>
        <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '20px' }}>
          Tell us about your project and we'll recommend the best approach — no commitment required.
        </p>
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="inline-flex py-3 px-8 rounded-full border border-indigo-500 text-white font-medium text-sm transition-all duration-300 hover:border-transparent"
          style={{
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1, #3b82f6)'
            e.currentTarget.style.borderColor = 'transparent'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = '#6366f1'
          }}
        >
          Let's Discuss Your Project &rarr;
        </a>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        variants={fadeUp}
        style={{ color: '#475569', fontSize: '12px', marginTop: '24px', textAlign: 'center' }}
      >
        Innovative Solutions · Scalable Impact · Future-Ready Technology
      </motion.p>
    </section>
  )
}
