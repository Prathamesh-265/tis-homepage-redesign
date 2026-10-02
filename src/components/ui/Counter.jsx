import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function Counter({ to, suffix = '' }) {
  const el = useRef(null)
  useLayoutEffect(() => {
    const node = el.current
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const state = { v: 0 }
    const tween = gsap.to(state, {
      v: to, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: node, start: 'top 90%', once: true },
      onUpdate: () => { node.textContent = Math.round(state.v) + suffix },
    })
    node.textContent = '0' + suffix
    return () => { tween.scrollTrigger?.kill(); tween.kill(); node.textContent = to + suffix }
  }, [to, suffix])
  return <span ref={el}>{to + suffix}</span>
}
