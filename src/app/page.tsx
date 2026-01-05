import Image from "next/image";
import { CTASection } from "@/components/custom/CTASection";
import { FeatureGrid } from "@/components/custom/FeatureGrid";
import { HeroSection } from "@/components/custom/HeroSection";
import { MissionSection } from "@/components/custom/MissionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-shoroka-gold selection:text-shoroka-purple">
      <HeroSection />
      <MissionSection />
      <FeatureGrid />
      <CTASection />

      <footer className="w-full border-t border-border bg-background transition-colors duration-500 py-16 flex flex-col items-center gap-6 text-center">
        <div className="w-16 h-16 relative opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src="/images/hero/logo.png"
            alt="Shoroka Logo"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 Shoroka Creations. All rights reserved. <br />
          <span className="text-xs opacity-50">
            Sons of the soil, seed of the mind.
          </span>
        </p>
      </footer>
    </main>
  );
}
