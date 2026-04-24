// Shared Framer Motion variants — import where needed

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: i * 0.08,
    },
  }),
}

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.1,
    },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
}

// Standard viewport config
export const viewport = { once: true, amount: 0.15 }
export const viewportCenter = { once: true, amount: 0.35 }

export const heroLoadingFadeUp = {
  hidden: { opacity: 0, y: 20 }, // Reduced y offset from 40 to 20 for mobile performance
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9, // Lower duration for a snappy premium mobile feel
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.12, // Faster stagger sequence
    },
  }),
};
