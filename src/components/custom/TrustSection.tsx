"use client";

import { Award, TrendingUp, Users, Calendar } from "lucide-react";
import { StatDisplay } from "@/components/custom/StatDisplay";

export function TrustSection() {
    return (
        <section
            id="trust"
            className="py-24 bg-[#1a103c] relative overflow-hidden"
        >
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-foreground">
                        Rooted in <span className="text-shoroka-gold italic">Excellence</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A Level 1 foundation isn't just a status—it's the bedrock. When the
                        roots are deep, the structure we build together has no reason to
                        fear the wind.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <StatDisplay
                        value="1"
                        unit="Level"
                        label="Contributor"
                        icon={Award}
                    />
                    <StatDisplay
                        value="125"
                        unit="%"
                        label="Recognition Level"
                        icon={TrendingUp}
                    />
                    <StatDisplay
                        value="100"
                        unit="%"
                        label="Ownership"
                        icon={Users}
                    />
                    <StatDisplay
                        value="12"
                        unit="+"
                        label="Since 2012"
                        icon={Calendar}
                    />
                </div>
            </div>
        </section>
    );
}
