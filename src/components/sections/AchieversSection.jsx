import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import TiltCard from '../ui/TiltCard'
import { achievers } from '../../data/content'

export default function AchieversSection() {
  const root = useRef(null)
  const track = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const distance = () => track.current.scrollWidth - window.innerWidth + 80
        gsap.to(track.current, {
          x: () => -distance(), ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: true, invalidateOnRefresh: true },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="achievers" className="flex scroll-mt-0 flex-col justify-center overflow-hidden py-20 md:min-h-svh">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <h2 className="font-display text-3xl font-bold md:text-5xl">Influential personalities on campus</h2>
        <p className="mt-3 text-muted md:hidden">Swipe to meet them</p>
      </div>
      <ul ref={track} className="mt-10 flex w-max gap-5 px-5 max-md:max-w-full max-md:snap-x max-md:overflow-x-auto max-md:pb-4 md:px-10">
        {achievers.map((a) => (
          <TiltCard as="li" key={a.name} data-cursor className="w-64 shrink-0 snap-center md:w-72">
            <img src={a.img} alt={a.name} loading="lazy" className="aspect-[3/4] w-full rounded-3xl bg-surface object-cover object-top" />
            <h3 className="mt-4 font-display text-xl font-bold">{a.name}</h3>
            <p className="mt-1 text-sm text-muted">{a.role}</p>
          </TiltCard>
        ))}
      </ul>
    </section>
  )
}
