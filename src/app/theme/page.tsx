"use client";

import {
  AlertTriangle,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Globe,
  Heart,
  Info,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Sprout,
  Target,
  Tractor,
  TreePine,
  TrendingUp,
  User,
  Wheat,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { GrainOverlay } from "@/components/custom/GrainOverlay";
import { ModeToggle } from "@/components/custom/ModeToggle";
import { ShorokaButton } from "@/components/custom/ShorokaButton";
import { ShorokaCard } from "@/components/custom/ShorokaCard";
import { StatDisplay } from "@/components/custom/StatDisplay";
import { VisualSectionHeader } from "@/components/custom/VisualSectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ThemePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 noise-underlay">
      <GrainOverlay />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-border backdrop-blur-xl bg-background/80">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="h-12 w-12 rounded-full bg-primary shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold tracking-tight">
                SHOROKA
              </span>
              <span className="font-sans text-xs uppercase tracking-widest text-accent">
                Creations
              </span>
            </div>
          </Link>
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto space-y-32 py-24 px-6 md:px-12 lg:px-24">
        {/* 01: Colors Section */}
        <section>
          <VisualSectionHeader
            number="01 / Visual Identity"
            title="The Fertile Foundation Palette"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                name: "Deep Earth",
                hex: "#0A0A0C",
                class: "bg-[#0A0A0C] text-white",
              },
              {
                name: "Royal Purple",
                hex: "#33206E",
                class: "bg-[#33206E] text-white",
              },
              {
                name: "Shoroka Gold",
                hex: "#C7A963",
                class: "bg-[#C7A963] text-black",
              },
              {
                name: "Polished Seed",
                hex: "#FFFFFF",
                class: "bg-[#FFFFFF] text-black border-2 border-black/10",
              },
              {
                name: "Industrial Slate",
                hex: "#1C1C1E",
                class: "bg-[#1C1C1E] text-white",
              },
            ].map((color) => (
              <div
                key={color.name}
                className="group relative overflow-hidden h-48 rounded-xl border border-border transition-all hover:border-accent hover:scale-105"
              >
                <div
                  className={`h-full w-full ${color.class} flex items-end p-6`}
                >
                  <div className="space-y-1">
                    <p className="font-sans font-bold uppercase tracking-wider">
                      {color.name}
                    </p>
                    <p className="font-mono text-xs opacity-70">{color.hex}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02: Typography */}
        <section>
          <VisualSectionHeader
            number="02 / Typography"
            title="The Balance: Serif & Sans"
          />
          <div className="space-y-8 rounded-xl border border-border p-12 bg-card">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Display: Cormorant Garamond
              </p>
              <p className="font-display text-6xl font-bold">
                First Class Experience
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Body: Inter
              </p>
              <p className="font-sans text-lg">
                Modern precision meets agricultural heritage. Sons of the soil,
                building the future.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Technical: JetBrains Mono
              </p>
              <p className="font-mono text-sm">
                SITE-A01 | 28.3456°S, 24.7612°E | FLEET: 12 UNITS
              </p>
            </div>
          </div>
        </section>

        {/* 03: Buttons */}
        <section>
          <VisualSectionHeader
            number="03 / Interactive Actions"
            title="Button System"
          />
          <div className="flex flex-wrap gap-6 items-center rounded-xl border border-border p-12 bg-card">
            <ShorokaButton variant="default">Primary Action</ShorokaButton>
            <ShorokaButton variant="secondary">Secondary Action</ShorokaButton>
            <ShorokaButton variant="outline">Outline Style</ShorokaButton>
            <ShorokaButton variant="ghost">Ghost Button</ShorokaButton>
            <ShorokaButton variant="gold">Premium Gold</ShorokaButton>
          </div>
        </section>

        {/* 04: Form Components */}
        <section>
          <VisualSectionHeader
            number="04 / Form Elements"
            title="Input & Form Components"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Example */}
            <div className="rounded-xl border border-border p-8 bg-card space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold">
                  Contact Form
                </h3>
                <p className="text-sm text-muted-foreground">
                  Example form with various input types
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+27 12 345 6789" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="construction">
                        Agricultural Construction
                      </SelectItem>
                      <SelectItem value="machinery">Heavy Machinery</SelectItem>
                      <SelectItem value="consulting">
                        Consulting Services
                      </SelectItem>
                      <SelectItem value="other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                </div>

                <ShorokaButton className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </ShorokaButton>
              </div>
            </div>

            {/* Input States */}
            <div className="rounded-xl border border-border p-8 bg-card space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold">
                  Input States
                </h3>
                <p className="text-sm text-muted-foreground">
                  Various input configurations
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Input</Label>
                  <Input placeholder="Type something..." />
                </div>

                <div className="space-y-2">
                  <Label>Disabled Input</Label>
                  <Input placeholder="Cannot edit" disabled />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="with-icon">Input with Description</Label>
                  <Input
                    id="with-icon"
                    placeholder="Email address"
                    type="email"
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll never share your email
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Read-only Input</Label>
                  <Input value="Preset value" readOnly />
                </div>

                <div className="space-y-2">
                  <Label>Textarea</Label>
                  <Textarea
                    placeholder="Enter detailed information..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05: Dialogs */}
        <section>
          <VisualSectionHeader
            number="05 / Dialog System"
            title="Modals & Dialogs"
          />
          <div className="flex flex-wrap gap-6 items-center rounded-xl border border-border p-12 bg-card">
            {/* Simple Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <ShorokaButton>
                  <Info className="mr-2 h-5 w-5" />
                  Information Dialog
                </ShorokaButton>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl font-bold">
                    Project Information
                  </DialogTitle>
                  <DialogDescription>
                    Learn more about our agricultural construction services and
                    capabilities.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-4 p-4 border-2 border-border bg-muted/10">
                    <MapPin className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-bold uppercase text-xs opacity-50">
                        LOCATION
                      </p>
                      <p className="font-bold">
                        Limpopo Province, South Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 border-2 border-border bg-muted/10">
                    <Building className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-bold uppercase text-xs opacity-50">
                        PROJECT SCALE
                      </p>
                      <p className="font-bold">24 Active Construction Sites</p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <ShorokaButton variant="outline">Close</ShorokaButton>
                  <ShorokaButton variant="gold">Contact Us</ShorokaButton>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Form Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <ShorokaButton variant="outline">
                  <User className="mr-2 h-5 w-5" />
                  Form Dialog
                </ShorokaButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl font-bold">
                    Request Quote
                  </DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="dialog-name">Full Name</Label>
                    <Input id="dialog-name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dialog-company">Company</Label>
                    <Input id="dialog-company" placeholder="Company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dialog-service">Service Required</Label>
                    <Select>
                      <SelectTrigger id="dialog-service">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">
                          Construction
                        </SelectItem>
                        <SelectItem value="equipment">
                          Equipment Rental
                        </SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <ShorokaButton className="w-full sm:w-auto">
                    Submit Request
                  </ShorokaButton>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Warning Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <ShorokaButton variant="secondary">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Warning Dialog
                </ShorokaButton>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl font-bold flex items-center gap-2">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                    Important Notice
                  </DialogTitle>
                  <DialogDescription>
                    This action requires confirmation before proceeding.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="p-4 border-2 border-destructive/20 bg-destructive/5">
                    <p className="text-sm leading-relaxed">
                      You are about to modify critical project settings. This
                      action cannot be undone and may affect ongoing operations.
                      Please confirm that you want to proceed.
                    </p>
                  </div>
                </div>
                <DialogFooter className="gap-2">
                  <ShorokaButton variant="outline">Cancel</ShorokaButton>
                  <ShorokaButton variant="default">
                    Confirm Action
                  </ShorokaButton>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* 06: Toast Notifications */}
        <section>
          <VisualSectionHeader
            number="06 / Notifications"
            title="Toast System"
          />
          <div className="flex flex-wrap gap-6 items-center rounded-xl border border-border p-12 bg-card">
            <ShorokaButton
              onClick={() =>
                toast.success("Success", {
                  description: "Operation completed successfully.",
                })
              }
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Success
            </ShorokaButton>
            <ShorokaButton
              variant="outline"
              onClick={() =>
                toast.error("Error", { description: "Something went wrong." })
              }
            >
              <XCircle className="mr-2 h-5 w-5" />
              Error
            </ShorokaButton>
            <ShorokaButton
              variant="secondary"
              onClick={() =>
                toast.warning("Warning", {
                  description: "Please review this action.",
                })
              }
            >
              <AlertTriangle className="mr-2 h-5 w-5" />
              Warning
            </ShorokaButton>
            <ShorokaButton
              variant="ghost"
              onClick={() =>
                toast.info("Info", { description: "New update available." })
              }
            >
              <Info className="mr-2 h-5 w-5" />
              Info
            </ShorokaButton>
          </div>
        </section>

        {/* 07: Cards & Stats */}
        <section>
          <VisualSectionHeader
            number="07 / Content Components"
            title="Cards & Statistics"
          />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ShorokaCard
              title="Agricultural Excellence"
              description="Building sustainable infrastructure with first-class precision. Every seed planted with purpose, every foundation laid with vision."
              idTag="COMP-001"
              badge={<Badge className="font-bold uppercase">Active</Badge>}
              footer={
                <ShorokaButton variant="ghost" className="px-0">
                  Learn More →
                </ShorokaButton>
              }
            />

            <div className="grid grid-cols-2 gap-6">
              <StatDisplay
                label="Projects Active"
                value="24"
                unit="SITES"
                icon={Tractor}
              />
              <StatDisplay
                label="Global Reach"
                value="12"
                unit="COUNTRIES"
                icon={Globe}
              />
              <StatDisplay
                label="Success Rate"
                value="99.8"
                unit="%"
                icon={CheckCircle}
              />
              <StatDisplay
                label="Years Experience"
                value="15"
                unit="YRS"
                icon={Calendar}
              />
            </div>
          </div>
        </section>

        {/* 08: Icons Library */}
        <section>
          <VisualSectionHeader
            number="08 / Iconography"
            title="Lucide Icon System"
          />
          <div className="rounded-xl border border-border p-8 bg-card">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
              {[
                { icon: Sprout, name: "Sprout" },
                { icon: Wheat, name: "Wheat" },
                { icon: TreePine, name: "TreePine" },
                { icon: Tractor, name: "Tractor" },
                { icon: Globe, name: "Globe" },
                { icon: Calendar, name: "Calendar" },
                { icon: TrendingUp, name: "TrendingUp" },
                { icon: CheckCircle, name: "CheckCircle" },
                { icon: XCircle, name: "XCircle" },
                { icon: AlertTriangle, name: "AlertTriangle" },
                { icon: Info, name: "Info" },
                { icon: Mail, name: "Mail" },
                { icon: User, name: "User" },
                { icon: Phone, name: "Phone" },
                { icon: MapPin, name: "MapPin" },
                { icon: Building, name: "Building" },
                { icon: Briefcase, name: "Briefcase" },
                { icon: Heart, name: "Heart" },
                { icon: Shield, name: "Shield" },
                { icon: Sparkles, name: "Sparkles" },
              ].map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-transparent hover:border-accent hover:bg-accent/5 transition-all group cursor-pointer"
                >
                  <Icon className="h-6 w-6 group-hover:text-accent transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09: Badges */}
        <section>
          <VisualSectionHeader
            number="09 / Labels & Badges"
            title="Badge Components"
          />
          <div className="flex flex-wrap gap-6 items-center rounded-xl border border-border p-12 bg-card">
            <Badge className="font-bold uppercase">Default</Badge>
            <Badge variant="secondary" className="font-bold uppercase">
              Secondary
            </Badge>
            <Badge variant="outline" className="font-bold uppercase">
              Outline
            </Badge>
            <Badge variant="destructive" className="font-bold uppercase">
              Destructive
            </Badge>
            <Badge className="font-bold uppercase bg-accent text-accent-foreground">
              Custom Gold
            </Badge>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 text-center space-y-6 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.5em] opacity-40">
            Shoroka Creations © 2026
          </p>
          <div className="space-y-2">
            <p className="font-display text-4xl font-black italic uppercase tracking-tighter">
              The Fertile Foundation
            </p>
            <div className="h-1 w-24 bg-accent mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Target className="h-5 w-5 text-accent/30" />
            <Sprout className="h-5 w-5 text-accent/30" />
            <Wheat className="h-5 w-5 text-accent/30" />
            <Heart className="h-5 w-5 text-accent/30" />
            <Shield className="h-5 w-5 text-accent/30" />
          </div>
        </div>
        {/* Background decorative text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[15vw] font-display font-black italic uppercase text-accent/5 whitespace-nowrap pointer-events-none">
          SONS OF THE SOIL
        </div>
      </footer>
    </div>
  );
}
