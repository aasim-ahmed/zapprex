import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * AnimatedInput — glass-morphism email input with animated focus ring
 *
 * Props: value, onChange, error, disabled, placeholder, id
 */
export default function AnimatedInput({
  value,
  onChange,
  error,
  disabled,
  placeholder = 'Enter your email address',
  id = 'email-input',
}) {
  const [focused, setFocused] = useState(false)

  return (
    <motion.div
      className="relative flex-1"
      animate={
        error
          ? { boxShadow: '0 0 0 2.5px rgba(244,63,94,0.5)' }
          : focused
          ? { boxShadow: '0 0 0 2.5px rgba(99,102,241,0.55)' }
          : { boxShadow: '0 0 0 0px rgba(99,102,241,0)' }
      }
      transition={{ duration: 0.2 }}
      style={{ borderRadius: '9999px' }}
    >
      <motion.input
        id={id}
        type="email"
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        placeholder={placeholder}
        animate={{
          borderColor: error
            ? 'rgba(244,63,94,0.7)'
            : focused
            ? 'rgba(99,102,241,0.7)'
            : 'rgba(255,255,255,0.1)',
          backgroundColor: focused
            ? 'rgba(255,255,255,0.08)'
            : 'rgba(255,255,255,0.04)',
        }}
        transition={{ duration: 0.2 }}
        className="w-full text-white placeholder-slate-500 text-sm rounded-full px-5 py-3 outline-none backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ border: '1px solid rgba(255,255,255,0.1)' }}
      />
    </motion.div>
  )
}
