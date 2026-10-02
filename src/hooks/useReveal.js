import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

// Staggers every [data-reveal] child of the returned ref into view (0.5s each).
export default function useReveal() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-reveal]', {
          y: 28, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}
