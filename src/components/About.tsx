import Image from "next/image";
import Reveal from "./Reveal";
import { languages, profile } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-border bg-surface/60 px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem]">
            <Image
              src={profile.photoUrl}
              alt={`${profile.name} portrait`}
              fill
              sizes="(min-width: 768px) 24vw, 80vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
              About
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Precision editing, told with a human touch.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 max-w-2xl text-muted">{profile.mobility}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:max-w-md">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <p className="font-display text-lg font-medium">
                    {lang.name}
                  </p>
                  <p className="text-sm text-muted">{lang.level}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
