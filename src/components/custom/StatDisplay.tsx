"use client";

import type { LucideIcon } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface StatDisplayProps {
  label: string;
  value: string;
  unit: string;
  icon: LucideIcon;
}

export function StatDisplay({
  label,
  value,
  unit,
  icon: Icon,
}: StatDisplayProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = parseFloat(value);
  const hasDecimal = value.includes(".");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent hover:bg-accent/5"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="mb-3 h-8 w-8 text-accent transition-transform group-hover:scale-110" />
      <div className="mb-1 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-foreground">
          {isInView ? displayValue.toFixed(hasDecimal ? 1 : 0) : "0"}
        </span>
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent opacity-70">
          {unit}
        </span>
      </div>
      <p className="font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </motion.div>
  );
}
