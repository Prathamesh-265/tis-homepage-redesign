import { rankings } from '../../data/content'
import useReveal from '../../hooks/useReveal'

export default function RankingsSection() {
  const ref = useReveal()
  return (
    <section ref={ref} className="bg-navy px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 data-reveal className="font-display text-3xl font-bold md:text-5xl">Ranked among the best</h2>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((r) => (
            <li key={r.place + r.text} data-reveal className="border-t border-white/20 py-8 sm:pr-8">
              <p className="font-display text-7xl font-extrabold text-brand">{r.rank}</p>
              <h3 className="mt-3 text-xl font-bold">{r.place}</h3>
              <p className="mt-2 text-white/70">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
