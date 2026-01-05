"use client";

import { Truck, Shield, Hammer, Tractor } from "lucide-react";
import { ShorokaCard } from "@/components/custom/ShorokaCard";

const services = [
    {
        title: "Plant Hire",
        description:
            "Heavy machinery with experienced operators for mining and construction. ADTs, Excavators, Bobcats, Smooth Drum Rollers, Tractors & Trailers, Water Trucks.",
        icon: Tractor,
        idTag: "PH-01",
        image: "/images/services/plant-hire.png",
    },
    {
        title: "Logistics & Transport",
        description:
            "Strategic transport solutions for Limpopo & Gauteng corridors. Tipper Trucks (Various), Lowbeds, and specialized heavy load transport.",
        icon: Truck,
        idTag: "LOG-02",
        image: "/images/services/logistics.png",
    },
    {
        title: "Health & Safety",
        description:
            "Uncompromised safety as the commander of power. PPE Supply, Safety Training, and Safety Consulting to ensure zero-harm environments.",
        icon: Shield,
        idTag: "H&S-03",
        image: "/images/services/health-safety.png",
    },
    {
        title: "Construction",
        description:
            "Comprehensive construction and infrastructure maintenance. From general building projects to specialized industrial maintenance services.",
        icon: Hammer,
        idTag: "CON-04",
        image: "/images/services/construction.png",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
                        Our Arsenals of{" "}
                        <span className="text-shoroka-gold italic">Excellence</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We are the master-builders of industrial resilience. Our fleet is
                        the instrument; our mind is the architect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ShorokaCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            idTag={service.idTag}
                            image={service.image}
                            badge={
                                <div className="p-3 bg-shoroka-gold/10 rounded-xl w-fit text-shoroka-gold relative z-10">
                                    <service.icon className="w-8 h-8" />
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
