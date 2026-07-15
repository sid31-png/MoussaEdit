"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

type WorkCardProps = {
  index: number;
  title: string;
  description: string;
  tag: string;
};

export default function WorkCard({ index, title, description, tag }: WorkCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 250,
    damping: 25,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const palettes = [
    "from-accent/25 via-accent/5 to-transparent",
    "from-accent-pop/25 via-accent-pop/5 to-transparent",
    "from-accent/20 via-accent-pop/10 to-transparent",
    "from-accent-pop/20 via-accent/10 to-transparent",
  ];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-1.5"
    >
      <div
        className={`relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-2xl bg-gradient-to-br ${palettes[index % palettes.length]}`}
      >
        <span className="absolute right-5 top-5 font-display text-6xl font-medium text-foreground/10 transition-colors duration-500 group-hover:text-accent/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="glass m-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs text-muted">
          {tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-5 py-6">
        <h3 className="font-display text-2xl font-medium tracking-tight">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </motion.div>
  );
}
