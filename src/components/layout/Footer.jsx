import { footerLinks, school } from "../../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy px-5 py-14 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img
            src={school.logo}
            alt="Tulas International School"
            className="h-14 w-auto rounded-xl bg-white p-2"
          />
          <p className="mt-5 max-w-sm text-white/75">{school.address}</p>
        </div>
        <div className="space-y-2 text-white/85">
          <h2 className="mb-3 font-display text-xl font-bold text-brand">
            Contact
          </h2>
          <p>
            <a href={`tel:${school.phone}`} className="hover:text-brand">
              Admission Helpline {school.phoneLabel}
            </a>
          </p>
          <p>
            Landline{" "}
            {school.landlines.map((l, i) => (
              <span key={l}>
                {i > 0 && ", "}
                <a href={`tel:${l}`} className="hover:text-brand">
                  {l}
                </a>
              </span>
            ))}
          </p>
          <p>
            <a href={`mailto:${school.email}`} className="hover:text-brand">
              {school.email}
            </a>
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-display text-xl font-bold text-brand">
            Quick Links
          </h2>
          <ul className="grid grid-cols-2 gap-2 text-white/85">
            {footerLinks.map((l) => (
              <li key={l}>
                <a href="https://tis.edu.in" className="hover:text-brand">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-sm text-white/60">
        Copyright © 2026 Tulas International School, Dehradun | All Rights
        Reserved. Redesign concept for assessment.
      </p>
    </footer>
  );
}
