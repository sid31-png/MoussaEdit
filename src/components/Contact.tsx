import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="mx-auto max-w-[90rem] px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Let&apos;s work
          <br />
          <span className="italic text-accent">together.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 font-display text-2xl font-medium tracking-tight transition-colors hover:text-accent sm:text-3xl"
          >
            {profile.email}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
              ↗
            </span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="text-lg text-muted transition-colors hover:text-foreground"
          >
            {profile.phone}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.26}>
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {profile.name}. Based in {profile.location}.
          </p>
          <a
            href={profile.cvUrl}
            download
            className="glass rounded-full px-4 py-2 transition-colors hover:text-accent"
          >
            Download Résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
}
