import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function Preloader({ onDone }) {
  const root = useRef(null)

  useEffect(() => {
    const element = root.current
    if (!element) return undefined

    const finish = () => {
      onDone?.()
      element.setAttribute('aria-hidden', 'true')
      element.style.pointerEvents = 'none'
    }

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish()
      return undefined
    }

    const context = gsap.context(() => {
      gsap.timeline({ onComplete: finish })
        .to('.preloader-mark', { scale: 1.08, duration: 0.45, ease: 'power2.out' })
        .to(element, { autoAlpha: 0, duration: 0.55, ease: 'power2.inOut' })
    }, element)

    return () => context.revert()
  }, [onDone])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] grid place-items-center bg-navy text-white"
      role="status"
      aria-label="Loading Tulas International School"
    >
      <div className="preloader-mark text-center">
        <p className="font-display text-4xl font-extrabold tracking-tight">TIS</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-white/70">Loading</p>
      </div>
    </div>
  )
}
