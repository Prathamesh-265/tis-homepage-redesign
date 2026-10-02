import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function ScrollText({ text, className = '' }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.scroll-text-word', {
          yPercent: 100,
          opacity: 0,
          duration: 0.6,
          stagger: 0.025,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current, start: 'top 82%', once: true },
        })
      })
    }, root)
    return () => context.revert()
  }, [])

  return (
    <p ref={root} className={className}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          <span className="scroll-text-word inline-block">{word}</span>
        </span>
      ))}
    </p>
  )
}
