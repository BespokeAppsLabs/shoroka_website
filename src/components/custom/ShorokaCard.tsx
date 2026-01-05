"use client";

import Link from "next/link";
import Image from "next/image";
import { type HTMLMotionProps, motion } from "motion/react";
import type * as React from "react";
import { cn } from "@/lib/utils";

interface ShorokaCardProps extends HTMLMotionProps<"div"> {
  title?: string;
  description?: string;
  idTag?: string;
  badge?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  image?: string;
}

export function ShorokaCard({
  title,
  description,
  idTag,
  badge,
  footer,
  children,
  image,
  className,
  ...props
}: ShorokaCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-lg transition-all",
        "hover:border-primary hover:shadow-[8px_8px_0_0_hsl(var(--primary)/0.1)]",
        className,
      )}
      whileHover={{ y: -4 }}
      {...props}
    >
      {/* Background Image & Overlay */}
      {image && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={image}
              alt={title || "Service background"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-background/80" />
        </>
      )}

      {/* Decorative Soft Glow Corner */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />

      <div className="relative z-10">
        {idTag && (
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground opacity-50">
            {idTag}
          </p>
        )}

        {title && (
          <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
            {title}
          </h3>
        )}

        {badge && <div className="mb-4">{badge}</div>}

        {description && (
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {children}

        {footer && (
          <div className="mt-6 border-t-2 border-border/30 pt-6">{footer}</div>
        )}
      </div>
    </motion.div>
  );
}
