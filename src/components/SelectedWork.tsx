import Reveal from "./Reveal";
import WorkCard from "./WorkCard";
import { workCategories } from "@/lib/data";

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
          Selected Work
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Stories, cut and paced with intent.
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-6 max-w-xl text-muted">
          A look at the kinds of edits I build day to day. Real project reels
          and case studies are on the way — for now, here&apos;s the range of
          work behind these categories.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {workCategories.map((work, index) => (
          <Reveal key={work.title} delay={0.1 + index * 0.08}>
            <WorkCard index={index} {...work} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
