/**
 * Badge — small labelled pill for section tags and status chips
 *
 * Props: children, variant ('indigo' | 'blue' | 'green' | 'amber'), dot, className
 */
export default function Badge({ children, variant = 'indigo', dot = false, className = '' }) {
  const styles = {
    indigo: {
      bg:     'rgba(99,102,241,0.1)',
      border: '1px solid rgba(99,102,241,0.25)',
      color:  '#a5b4fc',
      dot:    '#818cf8',
    },
    blue: {
      bg:     'rgba(59,130,246,0.1)',
      border: '1px solid rgba(59,130,246,0.25)',
      color:  '#93c5fd',
      dot:    '#60a5fa',
    },
    green: {
      bg:     'rgba(16,185,129,0.1)',
      border: '1px solid rgba(16,185,129,0.25)',
      color:  '#34d399',
      dot:    '#10b981',
    },
    amber: {
      bg:     'rgba(245,158,11,0.1)',
      border: '1px solid rgba(245,158,11,0.25)',
      color:  '#fcd34d',
      dot:    '#f59e0b',
    },
  }

  const s = styles[variant] || styles.indigo

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase ${className}`}
      style={{ background: s.bg, border: s.border, color: s.color }}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full pulse-glow inline-block flex-shrink-0"
          style={{ background: s.dot }}
        />
      )}
      {children}
    </span>
  )
}
