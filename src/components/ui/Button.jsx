import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '../../lib/gsap'

const styles = {
  primary: 'bg-brand text-navy hover:bg-white',
  ghost: 'border border-white/50 text-white hover:bg-white hover:text-navy',
  solid: 'bg-navy text-white hover:bg-brand hover:text-navy dark:bg-brand dark:text-navy dark:hover:bg-white',
}

// Pill button with a magnetic pull toward the pointer (fine pointers only).
export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const ref = useRef(null)
  const cls = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-bold transition-colors duration-300 ${styles[variant]} ${className}`
  const move = (e) => {
    if (!matchMedia('(pointer: fine)').matches) return
    const r = ref.current.getBoundingClientRect()
    gsap.to(ref.current, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.3 })
  }
  const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  const props = { ref, className: cls, onMouseMove: move, onMouseLeave: leave, ...rest }
  const inner = <>{children}<ArrowUpRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
  return href ? <a href={href} {...props}>{inner}</a> : <button {...props}>{inner}</button>
}
