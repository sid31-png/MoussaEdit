"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { profile } from "@/lib/data";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl md:h-[560px] md:w-[560px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-accent-pop/20 blur-3xl" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.35fr_0.9fr] md:gap-8 md:px-10"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ y: textY }}
          className="order-2 md:order-1"
        >
          <motion.p
            variants={item}
            className="mb-5 flex items-center gap-2 text-sm text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.location} — {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[15vw] font-medium leading-[0.92] tracking-tight sm:text-[10vw] md:text-[6.2vw] lg:text-[88px] xl:text-[104px]"
          >
            Moussa
            <br />
            <span className="italic text-accent">Mouatez</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-lg text-muted md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group relative overflow-hidden rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-6px_var(--accent)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">View my work</span>
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-7 py-3.5 text-sm font-medium transition-colors hover:text-accent"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: photoY }}
          className="order-1 mx-auto w-full max-w-[280px] md:order-2 md:max-w-none"
        >
          <div className="glass group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}, ${profile.role}`}
                fill
                priority
                sizes="(min-width: 768px) 32vw, 70vw"
                className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-border"
        />
      </motion.div>
    </section>
  );
}
