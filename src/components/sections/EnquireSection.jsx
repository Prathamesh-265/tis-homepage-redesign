import { useState } from 'react'
import { classes, school, states } from '../../data/content'
import useReveal from '../../hooks/useReveal'
import Button from '../ui/Button'

const field = 'mt-1 min-h-12 w-full rounded-xl border border-line bg-bg px-4 text-base'

export default function EnquireSection() {
  const ref = useReveal()
  const [sent, setSent] = useState(false)

  return (
    <section ref={ref} id="enquire" className="scroll-mt-20 px-5 pb-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-navy p-6 text-white md:p-14 lg:grid-cols-2">
        <div data-reveal>
          <h2 className="font-display text-4xl font-extrabold md:text-6xl">Enquire Now!</h2>
          <p className="mt-4 max-w-md text-lg text-white/80">Admissions open for Class IV to XII. Talk to our admissions team about boarding and day school.</p>
          <address className="mt-8 space-y-2 not-italic text-white/85">
            <p><a href={`tel:${school.phone}`} className="text-xl font-bold text-brand">Admission Helpline {school.phoneLabel}</a></p>
            <p><a href={`mailto:${school.email}`} className="hover:text-brand">{school.email}</a></p>
            <p>{school.address}</p>
          </address>
          <Button href={school.applyUrl} className="mt-8">Apply Now</Button>
        </div>
        <form data-reveal onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="rounded-3xl bg-surface p-6 text-ink md:p-8">
          {sent ? (
            <p role="status" className="py-16 text-center font-display text-2xl font-bold">Thank you. Our admissions team will call you soon.</p>
          ) : (
            <div className="grid gap-4">
              <label className="font-medium">Parent name<input required name="name" autoComplete="name" className={field} /></label>
              <label className="font-medium">Phone number<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+ ]{10,15}" className={field} /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="font-medium">Class<select required name="class" defaultValue="" className={field}><option value="" disabled>Select Class</option>{classes.map((c) => <option key={c}>{c}</option>)}</select></label>
                <label className="font-medium">State<select required name="state" defaultValue="" className={field}><option value="" disabled>Select State</option>{states.map((s) => <option key={s}>{s}</option>)}</select></label>
              </div>
              <label className="flex items-start gap-3 text-sm text-muted"><input required type="checkbox" className="mt-1 size-5 accent-brand" />I agree to receive information regarding my submitted application from Tulas International School, Dehradun.</label>
              <Button type="submit" variant="solid">Enquire Now</Button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
