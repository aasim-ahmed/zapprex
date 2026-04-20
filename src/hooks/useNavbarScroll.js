// Zapprex — hooks/useNavbarScroll.js

import { useState, useEffect, useRef } from 'react'

/**
 * Returns:
 *   visible   — false when user scrolls DOWN past threshold
 *   scrolled  — true once page is scrolled at all (for bg change)
 */
export function useNavbarScroll(threshold = 80) {
  const [visible,  setVisible]  = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      // Show if scrolling UP or near top; hide if scrolling DOWN
      setVisible(y < threshold || y < lastY.current)
      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { visible, scrolled }
}
