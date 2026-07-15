import Reveal from "./Reveal";
import { education, experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
          Experience
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Where the reels got made.
        </h2>
      </Reveal>

      <div className="mt-16 divide-y divide-border border-y border-border">
        {experience.map((role, index) => (
          <Reveal key={role.company} delay={index * 0.1}>
            <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <div>
                <p className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                  {role.company}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {role.start} — {role.end}
                </p>
                <p className="glass mt-3 inline-flex items-center rounded-full px-3 py-1 text-xs text-accent">
                  {role.role}
                </p>
              </div>
              <ul className="space-y-3">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-16">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-accent">
            Education &amp; Certifications
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <p className="font-medium leading-snug">{item.title}</p>
                <p className="mt-2 text-sm text-muted">{item.school}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
