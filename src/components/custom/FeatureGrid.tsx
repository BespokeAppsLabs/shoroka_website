"use client";

import {
  Anchor,
  Globe,
  Shield,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function FeatureGrid() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center py-24 sm:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Arsenals of <span className="text-shoroka-gold">Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our toolkit is forged from the hardest challenges. We bring a set of
            capabilities designed to dominate your sector.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-card h-full">
                  <div className="h-full min-h-[6rem] flex items-center justify-center">
                    <item.icon className="h-12 w-12 text-shoroka-gold" />
                  </div>
                </BackgroundGradient>
              }
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Tactical Resilience",
    description:
      "Built to withstand high traffic and security threats with military-grade architecture.",
    icon: Shield,
  },
  {
    title: "High Velocity",
    description:
      "Optimized for speed. Every interaction is immediate, ensuring zero friction.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description:
      "Deployed on the edge. Local roots, but accessible from anywhere on Earth.",
    icon: Globe,
  },
  {
    title: "Premium Finish",
    description:
      "Pixel-perfection is our standard. Detailed micro-interactions that scream quality and authority.",
    icon: Trophy,
  },
  {
    title: "Deep Roots",
    description:
      "Grounded in solid engineering principles. Stable, scalable, and reliable like the soil.",
    icon: Anchor,
  },
  {
    title: "Mission Focused",
    description:
      "Design that drives action. Every element serves a strategic purpose for your business.",
    icon: Target,
  },
  {
    title: "Community Legacy",
    description:
      "Sons of the soil, seed of the mind. Building for the next generations of entrepreneurs.",
    icon: Users,
  },
];
