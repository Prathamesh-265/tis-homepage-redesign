import { useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function TiltCard({ as: Component = 'div', children, className = '', ...props }) {
  const card = useRef(null)

  const onMove = (event) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = card.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    gsap.to(card.current, { rotateY: x * 6, rotateX: y * -6, transformPerspective: 700, duration: 0.35, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(card.current, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out' })
  }

  return (
    <Component
      ref={card}
      className={`transform-gpu ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </Component>
  )
}
