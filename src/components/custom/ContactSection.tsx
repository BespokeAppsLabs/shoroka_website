"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        requirement: "",
        location: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mailto fallback
        const subject = `New Lead: ${formData.requirement} - ${formData.name}`;
        const body = `Name/Company: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nLocation: ${formData.location}\nMessage: ${formData.message}`;

        window.location.href = `mailto:info@shoroka.co.za?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        toast.success("Opening email client...");
        setFormData({
            name: "",
            email: "",
            phone: "",
            requirement: "",
            location: "",
            message: "",
        });
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section
            id="contact"
            className="py-24 bg-background relative overflow-hidden"
        >
            {/* Background elements if needed */}
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
                                Architect Your{" "}
                                <span className="text-shoroka-gold italic">Future</span>
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Ready to build a legacy? Contact our team for specialized plant
                                hire, logistics, and construction solutions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Contact Items */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-shoroka-gold/10 rounded-lg text-shoroka-gold">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <p className="text-muted-foreground">061 083 5652</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-shoroka-gold/10 rounded-lg text-shoroka-gold">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-muted-foreground">
                                        info@shoroka.co.za
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-shoroka-gold/10 rounded-lg text-shoroka-gold">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                                    <p className="text-muted-foreground">
                                        20219 Greenside, Shongoane 1 Village,
                                        <br />
                                        Villa Nora, Limpopo, 0607
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name / Company</label>
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name or Company"
                                    className="w-full p-3 rounded-lg bg-background border border-border focus:border-shoroka-gold focus:ring-1 focus:ring-shoroka-gold transition-all outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full p-3 rounded-lg bg-background border border-border focus:border-shoroka-gold focus:ring-1 focus:ring-shoroka-gold transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="061 083 5652"
                                        className="w-full p-3 rounded-lg bg-background border border-border focus:border-shoroka-gold focus:ring-1 focus:ring-shoroka-gold transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Requirement</label>
                                    <select
                                        required
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-background border border-border focus:border-shoroka-gold focus:ring-1 focus:ring-shoroka-gold transition-all outline-none appearance-none"
                                    >
                                        <option value="" disabled>
                                            Select Requirement
                                        </option>
                                        <option value="Plant Hire">Plant Hire</option>
                                        <option value="Logistics">Logistics</option>
                                        <option value="Construction">Construction</option>
                                        <option value="Health & Safety">Health & Safety</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Location</label>
                                    <select
                                        required
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-background border border-border focus:border-shoroka-gold focus:ring-1 focus:ring-shoroka-gold transition-all outline-none appearance-none"
                                    >
                                        <option value="" disabled>
                                            Select Location
                                        </option>
                                        <option value="Limpopo">Limpopo</option>
                                        <option value="Gauteng">Gauteng</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    className="w-full p-3 rounded-lg bg-background border border-border focus:border-shoroka-gold focus:ring-1 focus:ring-shoroka-gold transition-all outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-shoroka-gold text-shoroka-purple font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>SEND MESSAGE</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
