import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const setScale = gsap.quickTo(bar.current, 'scaleX', { duration: 0.3, ease: 'power2.out' })
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScale(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1" aria-hidden="true">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-brand" />
    </div>
  )
}
