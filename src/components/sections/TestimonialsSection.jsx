import { Quote } from 'lucide-react'
import { reviews } from '../../data/content'
import TiltCard from '../ui/TiltCard'
import useReveal from '../../hooks/useReveal'

export default function TestimonialsSection() {
  const ref = useReveal()
  return (
    <section ref={ref} id="reviews" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-10">
      <h2 data-reveal className="font-display text-3xl font-bold md:text-5xl">From the parents</h2>
      <p data-reveal className="mt-4 max-w-2xl text-lg text-muted">We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas.</p>
      <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
        {reviews.map((r, i) => (
          <TiltCard as="figure" key={r.name} data-reveal data-cursor className={`mb-5 break-inside-avoid rounded-3xl border border-line p-7 ${i % 3 === 0 ? 'bg-brand text-navy' : 'bg-surface'}`}>
            <Quote size={28} aria-hidden="true" />
            <blockquote className="mt-4 text-lg leading-relaxed">{r.text}</blockquote>
            <figcaption className="mt-5 text-sm"><strong className="block text-base">{r.name}</strong>{r.relation}</figcaption>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
