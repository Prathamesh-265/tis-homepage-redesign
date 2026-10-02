import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navItems, school } from '../../data/content'
import { scrollToTarget } from '../../hooks/useLenis'
import AnimatedToggle from '../animation/AnimatedToggle'

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('')
  const go = (e, href) => { e.preventDefault(); setOpen(false); scrollToTarget(href) }

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 240)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section in view.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    navItems.forEach((n) => { const el = document.querySelector(n.href); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className={`fixed inset-x-0 top-1 z-50 px-3 transition-transform duration-500 md:px-6 ${hidden && !open ? '-translate-y-24' : ''}`}>
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-line bg-bg/75 px-3 py-2 backdrop-blur-xl">
        <a href="#top" onClick={(e) => go(e, 'body')} className="rounded-full bg-white p-1.5">
          <img src={school.logo} alt="Tulas International School" className="h-9 w-auto" />
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium xl:flex">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={(e) => go(e, n.href)} aria-current={active === n.href ? 'true' : undefined}
                className={`border-b-2 py-2 transition-colors hover:text-brand ${active === n.href ? 'border-brand' : 'border-transparent'}`}>{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={`tel:${school.phone}`} className="hidden items-center gap-2 text-sm font-bold lg:flex"><Phone size={16} aria-hidden="true" />{school.phoneLabel}</a>
          <AnimatedToggle dark={dark} onToggle={onToggleTheme} />
          <a href={school.applyUrl} className="hidden min-h-10 items-center rounded-full bg-brand px-5 text-sm font-bold text-navy sm:inline-flex">Apply Now</a>
          <button type="button" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="grid size-10 place-items-center rounded-full border border-line xl:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <div className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-line bg-bg/95 backdrop-blur-xl transition-all duration-500 xl:hidden ${open ? 'max-h-[28rem] opacity-100' : 'max-h-0 border-transparent opacity-0'}`}>
        <ul className="grid p-3">
          {navItems.map((n) => (
            <li key={n.href}><a href={n.href} onClick={(e) => go(e, n.href)} className="block rounded-xl px-4 py-3 text-lg font-medium hover:bg-brand/20">{n.label}</a></li>
          ))}
          <li><a href={school.applyUrl} className="mt-2 block rounded-xl bg-brand px-4 py-3 text-center text-lg font-bold text-navy">Apply Now</a></li>
        </ul>
      </div>
    </header>
  )
}
