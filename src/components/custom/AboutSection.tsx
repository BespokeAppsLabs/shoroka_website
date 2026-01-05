"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
                            Building an <span className="text-shoroka-gold italic">Inheritance</span>
                        </h2>
                        <blockquote className="border-l-4 border-shoroka-gold pl-6 py-2 italic text-xl md:text-2xl text-muted-foreground">
                            "A good man leaves an inheritance—but a great one builds it into
                            an empire. We are expanding the legacy of the bushveld for our
                            children's children."
                        </blockquote>
                        <p className="text-lg leading-relaxed">
                            Founded in 2012 in the heart of Shongoane 1 Village, Shoroka
                            Creations has grown from a local enterprise to a regional powerhouse
                            operating across Limpopo and Gauteng. We combine deep local roots
                            with world-class operational standards.
                        </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-2xl shadow-lg space-y-6">
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-shoroka-gold">ESTABLISHED</h3>
                            <p className="text-2xl font-display">2012</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-shoroka-gold">ORIGIN</h3>
                            <p className="text-2xl font-display">Shongoane 1 Village, Limpopo</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg text-shoroka-gold">FOOTPRINT</h3>
                            <p className="text-2xl font-display">Limpopo & Gauteng</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
