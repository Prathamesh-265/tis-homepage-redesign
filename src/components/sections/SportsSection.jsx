import { sports } from '../../data/content'
import Marquee from '../ui/Marquee'

const row = (items) => items.map((s) => (
  <span key={s} className="mx-2 rounded-full border border-line bg-surface px-6 py-3 font-display text-xl font-bold md:text-3xl">{s}</span>
))

export default function SportsSection() {
  return (
    <section id="sports" className="scroll-mt-20 overflow-hidden bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-display text-3xl font-bold md:text-5xl">Sports? It’s not just a facility. At Tulas it’s the foundation!</h2>
        <p className="mt-4 max-w-xl text-lg text-muted">16+ sports curated to bring joy and discipline to your life.</p>
      </div>
      <div className="mt-12 space-y-4">
        <Marquee speed={40}>{row(sports.slice(0, 8))}</Marquee>
        <Marquee speed={45} reverse>{row(sports.slice(8))}</Marquee>
      </div>
      <ul className="sr-only">{sports.map((s) => <li key={s}>{s}</li>)}</ul>
    </section>
  )
}
