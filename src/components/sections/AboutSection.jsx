import { gallery, stats } from '../../data/content'
import useReveal from '../../hooks/useReveal'
import Counter from '../ui/Counter'
import ScrollText from '../ui/ScrollText'

export default function AboutSection() {
  const ref = useReveal()
  return (
    <section ref={ref} id="about" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-10 md:py-32">
      <h2 data-reveal className="font-display text-xl font-bold text-brand md:text-2xl">Boarding and Day School Excellence</h2>
      <ScrollText
        className="mt-6 max-w-5xl font-display text-3xl font-bold leading-tight md:text-6xl"
        text="Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities."
      />
      <div className="mt-10 grid gap-6 text-lg text-muted md:grid-cols-2">
        <p data-reveal>We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.</p>
        <p data-reveal>Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.</p>
      </div>

      <dl className="mt-16 grid grid-cols-2 border-y border-line lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} data-reveal className="border-l border-line p-6 first:border-l-0 max-lg:odd:border-l-0 max-lg:[&:nth-child(n+3)]:border-t">
            <dd className="font-display text-5xl font-extrabold md:text-6xl"><Counter to={s.to} suffix={s.suffix} /></dd>
            <dt className="mt-2 text-sm font-medium text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>

      <div id="life" className="mt-24 scroll-mt-24">
        <h3 data-reveal className="max-w-3xl font-display text-2xl font-bold md:text-4xl">At Tulas, we always ask, “What’s the secret to making school awesome?”</h3>
        <p data-reveal className="mt-4 max-w-2xl text-lg text-muted">It’s all about making learning feel like an adventure, where curiosity leads, creativity thrives, and every day brings something new to discover. There, we cracked it!</p>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {gallery.map((src, i) => (
            <div key={src} data-reveal data-cursor className={`group overflow-hidden rounded-3xl ${i % 2 ? 'md:mt-10' : ''} ${i === 4 ? 'max-md:col-span-2' : ''}`}>
              <img src={src} alt="Student life at TIS" loading="lazy" className="aspect-[3/4] size-full object-cover transition-transform duration-700 group-hover:scale-110 max-md:aspect-[4/3]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
