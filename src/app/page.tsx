import { HeroSection } from "@/components/custom/HeroSection";
import { MissionSection } from "@/components/custom/MissionSection";
import { TrustSection } from "@/components/custom/TrustSection";
import { ServicesSection } from "@/components/custom/ServicesSection";
import { AboutSection } from "@/components/custom/AboutSection";
import { ContactSection } from "@/components/custom/ContactSection";
import { Footer } from "@/components/custom/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-shoroka-gold selection:text-shoroka-purple">
      <HeroSection />
      <MissionSection />
      <TrustSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
