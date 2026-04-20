import { motion } from 'framer-motion'
import { fadeUp, viewportCenter } from '../hooks/useScrollAnimation'
import { portfolio } from '../data/portfolio.js'

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-32 pb-32 lg:pb-40">
      
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportCenter}
        className="text-center mb-14"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: '#818cf8' }}
        >
          Our Work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-5"
          style={{ letterSpacing: '-0.025em' }}
        >
          <span className="text-white">Case </span>
          <span className="gradient-text">Studies</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Explore a selection of our recent projects showcasing our expertise in design, engineering, and product strategy.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {portfolio.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.22, ease: 'easeOut' } }}
            className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
            style={{
              background: 'rgba(6,13,31,0.6)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(18px)',
            }}
          >
            {/* Visual Header Placeholder */}
            <div 
              className="w-full h-48 sm:h-56 relative overflow-hidden flex items-center justify-center border-b border-white/[0.05]"
              style={{ background: project.image }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: `radial-gradient(circle at center, ${project.accent}20 0%, transparent 70%)` }}
              />
              <span className="text-white/30 text-sm font-semibold tracking-wide uppercase">Project Preview</span>
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 flex-1">
              <h3 className="text-white font-display font-bold text-lg mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.desc}
              </p>
              
              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-md text-slate-300"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <div 
                className="mt-auto px-4 py-2.5 rounded-xl flex items-center gap-2"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#818cf8', boxShadow: '0 0 8px #818cf8' }} />
                <span className="text-slate-200 text-sm font-bold tracking-tight">
                  {project.outcome}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
