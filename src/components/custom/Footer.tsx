"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background transition-colors duration-500 py-16">
            <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left: Brand */}
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <div className="w-24 h-24 relative opacity-80 hover:opacity-100 transition-opacity">
                        <Image
                            src="/images/hero/logo.png"
                            alt="Shoroka Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-xl">Shoroka Creations</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                            Sons of the soil, seed of the mind.
                        </p>
                        <p className="text-xs text-muted-foreground/60 mt-4">
                            © 2024 Shoroka Creations. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Center: Quick Links */}
                <div className="flex flex-col items-center md:items-center gap-4">
                    <h4 className="font-bold text-lg mb-2">Quick Links</h4>
                    <nav className="flex flex-col gap-3 text-muted-foreground text-center md:text-center">
                        <Link href="#hero" className="hover:text-shoroka-gold transition-colors">Home</Link>
                        <Link href="#services" className="hover:text-shoroka-gold transition-colors">Services</Link>
                        <Link href="#trust" className="hover:text-shoroka-gold transition-colors">Why Shoroka</Link>
                        <Link href="#about" className="hover:text-shoroka-gold transition-colors">About Us</Link>
                        <Link href="#contact" className="hover:text-shoroka-gold transition-colors">Contact</Link>
                    </nav>
                </div>

                {/* Right: Contact */}
                <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
                    <h4 className="font-bold text-lg mb-2">Contact Us</h4>
                    <div className="flex flex-col gap-3 text-muted-foreground text-sm items-center md:items-end">
                        <a href="tel:0610835652" className="hover:text-shoroka-gold transition-colors block">
                            +27 61 083 5652
                        </a>
                        <a href="mailto:info@shoroka.co.za" className="hover:text-shoroka-gold transition-colors block">
                            info@shoroka.co.za
                        </a>
                        <div className="max-w-[200px]">
                            <p>20219 Greenside, Shongoane 1 Village, Limpopo</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
