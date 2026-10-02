import { useEffect, useLayoutEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { gsap } from '../../lib/gsap'
import { school } from '../../data/content'
import Button from '../ui/Button'
import Marquee from '../ui/Marquee'

const HEADLINE = ['Welcome', 'to', 'Tulas', 'International', 'School', '(TIS)']

export default function HeroSection({ ready }) {
  const root = useRef(null)
  const bg = useRef(null)
  const intro = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        intro.current = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
          .from('.hero-word', { yPercent: 110, duration: 0.6, stagger: 0.07 })
          .from('.hero-fade', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')
        gsap.to(bg.current, {
          yPercent: 18, scale: 1.08, ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => { if (ready) intro.current?.play() }, [ready])

  return (
    <section ref={root} id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-navy text-white">
      <img
        ref={bg}
        src={school.heroImage}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-60"
        fetchPriority="high"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-36 md:px-10">
        <p className="hero-fade mb-4 inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-navy">CBSE co-ed boarding and day school, Dehradun</p>
        <h1 className="font-display text-[clamp(2.6rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-tight">
          {HEADLINE.map((w) => (
            <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom"><span className="hero-word inline-block">{w}</span></span>
          ))}
        </h1>
        <div className="mt-8 grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
          <p className="hero-fade max-w-xl text-lg text-white/85">
            TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.
          </p>
          <div className="hero-fade flex flex-wrap gap-3 md:justify-end">
            <Button href={school.applyUrl}>Apply Now</Button>
            <Button href="#enquire" variant="ghost">Enquire Now</Button>
          </div>
        </div>
        <a href="#about" className="hero-fade mt-10 inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand"><ArrowDown size={16} aria-hidden="true" />Scroll to explore</a>
      </div>
      <Marquee speed={25} className="relative border-y border-white/20 bg-brand py-3 text-navy">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i} className="mx-6 font-display text-2xl font-extrabold uppercase md:text-3xl">Let’s do it with Tulas ✦</span>
        ))}
      </Marquee>
    </section>
  )
}
