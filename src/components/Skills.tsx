"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills, tools } from "@/lib/data";

export default function Skills() {
  const marqueeItems = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="overflow-hidden border-y border-border bg-surface/60 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
            Skills &amp; Tools
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            The craft behind the cut.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.16}>
        <div className="relative mt-16 flex select-none flex-col gap-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-40" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              className="flex shrink-0 gap-4 pr-4"
            >
              {marqueeItems.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="glass flex shrink-0 items-center rounded-full px-6 py-3 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-16 max-w-6xl px-6 md:px-10">
        <Reveal delay={0.1}>
          <p className="mb-6 text-sm text-muted">Tools I edit with</p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="group inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
