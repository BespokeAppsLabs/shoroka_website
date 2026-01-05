"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background Image Placeholder - using a gradient/pattern for now to avoid external image deps issues if any, 
          but ideally this is a high-res bushveld image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 bg-background"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2580&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-background/60" />
      </motion.div>

      <div className="relative z-10 p-8 text-center">
        <motion.div style={{ opacity }} className="max-w-4xl">
          <h2 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
            "The soil is our <span className="text-shoroka-gold">history</span>.
            The code is our <span className="text-shoroka-gold">future</span>."
          </h2>
          <div className="mt-8 h-1 w-24 mx-auto bg-shoroka-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
