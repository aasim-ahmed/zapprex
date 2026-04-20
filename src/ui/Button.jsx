import { motion } from 'framer-motion'

/**
 * Button — gradient CTA with glow hover + loading state
 *
 * Props:
 *   children, onClick, type, disabled, loading, variant ('primary' | 'outline'), className
 */
export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  variant = 'primary',
  className = '',
  href,
  ...rest
}) {
  const Tag = href ? motion.a : motion.button

  const base = `
    relative inline-flex items-center justify-center gap-2
    text-sm font-semibold px-7 py-3 rounded-full
    whitespace-nowrap overflow-hidden transition-opacity
    select-none
  `

  const variants = {
    primary: {
      style: {
        background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
        boxShadow: '0 0 0 1px rgba(99,102,241,0.3)',
      },
      className: 'text-white',
    },
    outline: {
      style: {
        background: 'transparent',
        border: '1px solid rgba(99,102,241,0.35)',
      },
      className: 'text-indigo-300',
    },
  }

  const chosen = variants[variant] || variants.primary
  const isDisabled = disabled || loading

  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      disabled={isDisabled}
      whileHover={!isDisabled ? {
        scale: 1.05,
        boxShadow: '0 0 28px 6px rgba(99,102,241,0.45)',
      } : {}}
      whileTap={!isDisabled ? { scale: 0.96 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`${base} ${chosen.className} ${className}`}
      style={{
        ...chosen.style,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.7 : 1,
      }}
      {...rest}
    >
      {/* Sheen overlay */}
      <span
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.13) 0%, transparent 60%)' }}
      />

      {/* Content */}
      {loading ? (
        <>
          <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path  className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span className="relative z-10">Submitting...</span>
        </>
      ) : (
        <span className="relative z-10">{children}</span>
      )}
    </Tag>
  )
}
