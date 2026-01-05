"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center p-4"
    >
      <nav className="flex items-center justify-between w-full max-w-6xl px-6 py-3 bg-background/40 backdrop-blur-md border border-foreground/10 rounded-full shadow-2xl transition-colors duration-500">
        <div className="flex items-center gap-2">
          <Link href="/" className="relative flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-shoroka-gold/30 group-hover:border-shoroka-gold transition-colors">
              <Image
                src="/images/hero/logo.png"
                alt="Shoroka Creations Logo"
                fill
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
              />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">
              Shoroka{" "}
              <span className="text-shoroka-gold italic">Creations</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground/70 hover:text-shoroka-gold transition-colors tracking-widest uppercase"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <button
            type="button"
            className="hidden sm:block px-6 py-2 text-xs font-bold tracking-widest uppercase bg-shoroka-gold text-shoroka-purple rounded-full hover:scale-105 transition-transform"
          >
            Get Started
          </button>
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <title>Menu</title>
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
