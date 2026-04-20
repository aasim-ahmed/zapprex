// Zapprex — data/howItWorks.js

export const steps = [
  {
    number: 1,
    title: 'Idea Discussion',
    desc: 'We start by understanding your vision, target audience, and business objectives.',
    accent: 'rgba(99,102,241,0.25)',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" width="32" height="32">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Planning & Design',
    desc: 'Our team crafts wireframes and pixel-perfect UIs tailored to your user journey.',
    accent: 'rgba(34,211,238,0.2)',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" width="32" height="32">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Development',
    desc: 'We write clean, scalable code using modern stacks to bring the designs to life.',
    accent: 'rgba(139,92,246,0.25)',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" width="32" height="32">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Launch & Support',
    desc: 'We deploy your product to production and provide ongoing iterations and scaling support.',
    accent: 'rgba(16,185,129,0.2)',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" width="32" height="32">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      </svg>
    ),
  },
]