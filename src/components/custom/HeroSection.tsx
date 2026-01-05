"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Heavy Machinery Fleet",
    link: "#",
    thumbnail: "/images/hero/shoroka_fleet_range_1767557174607.png",
  },
  {
    title: "Mining Operations",
    link: "#",
    thumbnail: "/images/hero/shoroka_excavator_mining_1767557124791.png",
  },
  {
    title: "Strategic Logistics",
    link: "#",
    thumbnail: "/images/hero/shoroka_logistics_truck_1767557139023.png",
  },
  {
    title: "Urban Construction",
    link: "#",
    thumbnail: "/images/hero/shoroka_construction_site_1767557156152.png",
  },
  {
    title: "Safety First",
    link: "#",
    thumbnail: "/images/hero/shoroka_safety_inspection_1767557199341.png",
  },
  {
    title: "Limpopo Roots",
    link: "#",
    thumbnail:
      "/images/hero/shoroka_limpopo_landscape_mining_1767557221010.png",
  },
  {
    title: "Empowering Youth",
    link: "#",
    thumbnail: "/images/hero/shoroka_empowerment_meeting_1767557240429.png",
  },
  {
    title: "Heavy Load Transport",
    link: "#",
    thumbnail: "/images/hero/shoroka_heavy_load_transport_1767557259079.png",
  },
  // Repeating for the grid effect (needs 15 for 3 rows)
  {
    title: "Precision Engineering",
    link: "#",
    thumbnail: "/images/hero/shoroka_fleet_range_1767557174607.png",
  },
  {
    title: "Sons of the Soil",
    link: "#",
    thumbnail: "/images/hero/shoroka_excavator_mining_1767557124791.png",
  },
  {
    title: "Legacy Building",
    link: "#",
    thumbnail: "/images/hero/shoroka_construction_site_1767557156152.png",
  },
  {
    title: "Operational Excellence",
    link: "#",
    thumbnail: "/images/hero/shoroka_logistics_truck_1767557139023.png",
  },
  {
    title: "Resilient Infrastructure",
    link: "#",
    thumbnail: "/images/hero/shoroka_heavy_load_transport_1767557259079.png",
  },
  {
    title: "Limpopo Growth",
    link: "#",
    thumbnail:
      "/images/hero/shoroka_limpopo_landscape_mining_1767557221010.png",
  },
  {
    title: "Future of Mining",
    link: "#",
    thumbnail: "/images/hero/shoroka_excavator_mining_1767557124791.png",
  },
];

export function HeroSection() {
  return (
    <HeroParallax
      products={products}
      title={
        <>
          Shoroka <br />{" "}
          <span className="text-shoroka-gold italic font-serif">Creations</span>
        </>
      }
      description={
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground">
            Forging digital legacies from the soil up. We blend tactical
            precision with premium aesthetics to create experiences that command
            authority.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              className="px-8 py-3 bg-shoroka-gold text-shoroka-purple font-bold rounded-full hover:scale-105 transition-transform"
            >
              EXPLORE OUR FLEET
            </button>
            <button
              type="button"
              className="px-8 py-3 border border-foreground/20 bg-foreground/5 backdrop-blur-md text-foreground font-bold rounded-full hover:bg-foreground/10 transition-colors"
            >
              OUR MISSION
            </button>
          </div>
        </div>
      }
      logo={
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 md:w-80 md:h-80 relative"
        >
          <Image
            src="/images/hero/logo.png"
            alt="Shoroka Logo"
            fill
            className="object-contain"
          />
        </motion.div>
      }
    />
  );
}
