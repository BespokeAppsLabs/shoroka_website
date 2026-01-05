"use client";

import { motion } from "motion/react";

interface VisualSectionHeaderProps {
  number: string;
  title: string;
}

export function VisualSectionHeader({
  number,
  title,
}: VisualSectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col gap-2">
      <motion.p
        className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-accent opacity-60"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {number}
      </motion.p>
      <motion.h2
        className="font-display text-5xl font-bold italic leading-none tracking-tight text-foreground lg:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="h-1 w-24 bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  );
}
